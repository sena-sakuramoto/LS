import "dotenv/config";
import express from "express";
import fs from "node:fs/promises";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import { nanoid } from "nanoid";
import { ZodError } from "zod";
import {
  careersEntrySchema,
  jobPositionLabelMap,
  type CareersEntryPayload,
} from "../shared/careersEntry";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const entryStorageDir = path.resolve(__dirname, "..", "artifacts", "careers-entries");
const entryStorageFile = path.join(entryStorageDir, "entries.jsonl");

type EntryDeliveryStatus = "sent" | "stored_only";

interface EntryRecord extends CareersEntryPayload {
  id: string;
  createdAt: string;
  ip: string;
  userAgent: string;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getEnv(name: string) {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

function getMailConfig() {
  const host = getEnv("SMTP_HOST");
  const port = Number(getEnv("SMTP_PORT") ?? "587");
  const user = getEnv("SMTP_USER");
  const pass = getEnv("SMTP_PASS");
  const from = getEnv("RECRUIT_FROM_EMAIL");
  const to = getEnv("RECRUIT_RECEIVER_EMAIL");

  if (!host || !from || !to) {
    return null;
  }

  return {
    host,
    port,
    secure: port === 465,
    auth: user && pass ? { user, pass } : undefined,
    from,
    to,
  };
}

async function persistEntry(record: EntryRecord) {
  await fs.mkdir(entryStorageDir, { recursive: true });
  await fs.appendFile(entryStorageFile, `${JSON.stringify(record)}\n`, "utf8");
}

function buildRecruiterMail(record: EntryRecord) {
  const positionLabel = jobPositionLabelMap[record.position];
  const motivationBlock = record.motivation
    ? record.motivation
    : "未入力";
  const safeCreatedAt = escapeHtml(record.createdAt);
  const safeName = escapeHtml(record.name);
  const safeEmail = escapeHtml(record.email);
  const safePhone = escapeHtml(record.phone);
  const safePositionLabel = escapeHtml(positionLabel);
  const safeMotivation = escapeHtml(motivationBlock);

  return {
    subject: `【採用エントリー】${record.name} / ${positionLabel}`,
    text: [
      "採用エントリーを受け付けました。",
      "",
      `受付番号: ${record.id}`,
      `受付日時: ${record.createdAt}`,
      `氏名: ${record.name}`,
      `メールアドレス: ${record.email}`,
      `電話番号: ${record.phone}`,
      `希望職種: ${positionLabel}`,
      "",
      "自己PR・志望動機:",
      motivationBlock,
      "",
      `IP: ${record.ip}`,
      `User-Agent: ${record.userAgent}`,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, 'Hiragino Sans', 'Noto Sans JP', sans-serif; line-height: 1.7; color: #1f2937;">
        <h2 style="margin: 0 0 16px;">採用エントリーを受け付けました</h2>
        <p style="margin: 0 0 16px;">受付番号: <strong>${record.id}</strong></p>
        <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
          <tbody>
            <tr><td style="padding: 8px 12px; border: 1px solid #e5e7eb;">受付日時</td><td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${safeCreatedAt}</td></tr>
            <tr><td style="padding: 8px 12px; border: 1px solid #e5e7eb;">氏名</td><td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${safeName}</td></tr>
            <tr><td style="padding: 8px 12px; border: 1px solid #e5e7eb;">メールアドレス</td><td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${safeEmail}</td></tr>
            <tr><td style="padding: 8px 12px; border: 1px solid #e5e7eb;">電話番号</td><td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${safePhone}</td></tr>
            <tr><td style="padding: 8px 12px; border: 1px solid #e5e7eb;">希望職種</td><td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${safePositionLabel}</td></tr>
          </tbody>
        </table>
        <div style="margin-top: 20px;">
          <p style="margin: 0 0 8px;"><strong>自己PR・志望動機</strong></p>
          <div style="padding: 12px 14px; border: 1px solid #e5e7eb; background: #f9fafb; white-space: pre-wrap;">${safeMotivation}</div>
        </div>
      </div>
    `,
  };
}

function buildApplicantMail(record: EntryRecord) {
  const positionLabel = jobPositionLabelMap[record.position];
  const safeName = escapeHtml(record.name);
  const safeEntryId = escapeHtml(record.id);
  const safePositionLabel = escapeHtml(positionLabel);

  return {
    subject: "【株式会社LS】エントリーを受け付けました",
    text: [
      `${record.name} 様`,
      "",
      "株式会社LS 採用サイトよりエントリーを受け付けました。",
      "内容を確認のうえ、3営業日以内を目安に採用担当よりご連絡します。",
      "",
      `受付番号: ${record.id}`,
      `希望職種: ${positionLabel}`,
      "",
      "このメールは自動送信です。",
    ].join("\n"),
    html: `
      <div style="font-family: Arial, 'Hiragino Sans', 'Noto Sans JP', sans-serif; line-height: 1.7; color: #111827;">
        <p style="margin: 0 0 12px;">${safeName} 様</p>
        <p style="margin: 0 0 12px;">株式会社LS 採用サイトよりエントリーを受け付けました。</p>
        <p style="margin: 0 0 18px;">内容を確認のうえ、3営業日以内を目安に採用担当よりご連絡します。</p>
        <div style="padding: 14px 16px; border: 1px solid #e5e7eb; background: #f9fafb; max-width: 420px;">
          <p style="margin: 0 0 8px;"><strong>受付番号</strong>: ${safeEntryId}</p>
          <p style="margin: 0;"><strong>希望職種</strong>: ${safePositionLabel}</p>
        </div>
      </div>
    `,
  };
}

async function deliverEntryMails(record: EntryRecord): Promise<EntryDeliveryStatus> {
  const config = getMailConfig();

  if (!config) {
    return "stored_only";
  }

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: config.auth,
  });

  const recruiterMail = buildRecruiterMail(record);
  const applicantMail = buildApplicantMail(record);

  await transporter.sendMail({
    from: config.from,
    to: config.to,
    replyTo: record.email,
    subject: recruiterMail.subject,
    text: recruiterMail.text,
    html: recruiterMail.html,
  });

  await transporter.sendMail({
    from: config.from,
    to: record.email,
    subject: applicantMail.subject,
    text: applicantMail.text,
    html: applicantMail.html,
  });

  return "sent";
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json({ limit: "1mb" }));

  app.post("/api/careers/entry", async (req, res) => {
    try {
      const payload = careersEntrySchema.parse(req.body);
      const record: EntryRecord = {
        ...payload,
        id: `LS-${new Date().toISOString().slice(0, 10).replace(/-/g, "")}-${nanoid(6).toUpperCase()}`,
        createdAt: new Date().toISOString(),
        ip: req.headers["x-forwarded-for"]?.toString().split(",")[0]?.trim() ?? req.socket.remoteAddress ?? "unknown",
        userAgent: req.get("user-agent") ?? "unknown",
      };

      await persistEntry(record);
      const deliveryStatus = await deliverEntryMails(record);

      res.status(201).json({
        ok: true,
        entryId: record.id,
        deliveryStatus,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          ok: false,
          message: "入力内容を確認してください。",
          fieldErrors: error.flatten().fieldErrors,
        });
        return;
      }

      console.error("Failed to process careers entry", error);
      res.status(500).json({
        ok: false,
        message: "送信に失敗しました。時間をおいて再度お試しください。",
      });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
