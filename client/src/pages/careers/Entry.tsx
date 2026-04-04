import { useState } from "react";
import CareersLayout from "@/components/careers/CareersLayout";
import {
  careersEntrySchema,
  jobPositionOptions,
  type CareersEntryPayload,
} from "@shared/careersEntry";

type FieldErrors = Partial<Record<keyof CareersEntryPayload, string>>;

interface SubmitState {
  entryId: string;
  deliveryStatus: "sent" | "stored_only";
}

const initialForm: CareersEntryPayload = {
  name: "",
  email: "",
  phone: "",
  position: "designer",
  motivation: "",
};

export default function Entry() {
  const [form, setForm] = useState<CareersEntryPayload>(initialForm);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange =
    <Key extends keyof CareersEntryPayload>(key: Key) =>
    (
      ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
      const nextValue = ev.target.value;
      setForm((prev) => ({ ...prev, [key]: nextValue }));
      setFieldErrors((prev) => ({ ...prev, [key]: undefined }));
      setSubmitError("");
    };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setSubmitError("");

    const parsed = careersEntrySchema.safeParse(form);

    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      setFieldErrors({
        name: errors.name?.[0],
        email: errors.email?.[0],
        phone: errors.phone?.[0],
        position: errors.position?.[0],
        motivation: errors.motivation?.[0],
      });
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/careers/entry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      });

      const data = (await response.json()) as {
        ok: boolean;
        message?: string;
        entryId?: string;
        deliveryStatus?: "sent" | "stored_only";
        fieldErrors?: Record<string, string[] | undefined>;
      };

      if (!response.ok || !data.ok || !data.entryId || !data.deliveryStatus) {
        setFieldErrors({
          name: data.fieldErrors?.name?.[0],
          email: data.fieldErrors?.email?.[0],
          phone: data.fieldErrors?.phone?.[0],
          position: data.fieldErrors?.position?.[0],
          motivation: data.fieldErrors?.motivation?.[0],
        });
        setSubmitError(
          data.message ?? "送信に失敗しました。時間をおいて再度お試しください。",
        );
        return;
      }

      setSubmitState({
        entryId: data.entryId,
        deliveryStatus: data.deliveryStatus,
      });
      setForm(initialForm);
    } catch (error) {
      console.error(error);
      setSubmitError("送信に失敗しました。通信環境をご確認のうえ再度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitState) {
    return (
      <CareersLayout>
        <section className="bg-black py-32 text-center">
          <div className="container max-w-2xl">
            <p className="mb-8 font-heading-en text-xs tracking-[0.5em] text-[#d4af37]">
              THANK YOU
            </p>
            <h1 className="mb-8 text-3xl font-light">エントリーを受け付けました</h1>
            <div className="space-y-5 rounded-[1.75rem] border border-white/10 bg-white/5 px-6 py-8 text-left">
              <p className="text-sm leading-7 text-gray-300">
                受付番号: <span className="text-white">{submitState.entryId}</span>
              </p>
              <p className="text-sm leading-7 text-gray-300">
                内容を確認のうえ、3営業日以内を目安に採用担当よりご連絡します。
              </p>
              <p className="text-sm leading-7 text-gray-400">
                {submitState.deliveryStatus === "sent"
                  ? "受付完了メールを送信しました。受信ボックスをご確認ください。"
                  : "受付内容は保存されています。メール送信設定が未完了のため、自動返信は保留中です。"}
              </p>
            </div>
          </div>
        </section>
      </CareersLayout>
    );
  }

  return (
    <CareersLayout>
      <section className="bg-black py-32">
        <div className="container max-w-2xl">
          <div className="mb-16 text-center">
            <p className="mb-4 font-heading-en text-xs tracking-[0.5em] text-[#d4af37]">
              ENTRY
            </p>
            <h1 className="text-3xl font-light md:text-5xl">エントリーフォーム</h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 md:text-base">
              氏名、連絡先、希望職種、簡単な自己PR・志望動機をご入力ください。スマホでも入力しやすい1列レイアウトです。
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                氏名 <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={handleChange("name")}
                className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                aria-invalid={Boolean(fieldErrors.name)}
              />
              {fieldErrors.name ? (
                <p className="mt-2 text-sm text-red-300">{fieldErrors.name}</p>
              ) : null}
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                メールアドレス <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={handleChange("email")}
                className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                aria-invalid={Boolean(fieldErrors.email)}
              />
              {fieldErrors.email ? (
                <p className="mt-2 text-sm text-red-300">{fieldErrors.email}</p>
              ) : null}
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                電話番号 <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={handleChange("phone")}
                className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                aria-invalid={Boolean(fieldErrors.phone)}
              />
              {fieldErrors.phone ? (
                <p className="mt-2 text-sm text-red-300">{fieldErrors.phone}</p>
              ) : null}
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                希望職種 <span className="text-red-400">*</span>
              </label>
              <select
                required
                value={form.position}
                onChange={handleChange("position")}
                className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                aria-invalid={Boolean(fieldErrors.position)}
              >
                {jobPositionOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {fieldErrors.position ? (
                <p className="mt-2 text-sm text-red-300">{fieldErrors.position}</p>
              ) : null}
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                簡単な自己PR・志望動機
              </label>
              <textarea
                maxLength={200}
                value={form.motivation}
                onChange={handleChange("motivation")}
                rows={5}
                className="w-full resize-none bg-transparent border border-white/20 px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                aria-invalid={Boolean(fieldErrors.motivation)}
              />
              <div className="mt-2 flex items-center justify-between gap-4">
                {fieldErrors.motivation ? (
                  <p className="text-sm text-red-300">{fieldErrors.motivation}</p>
                ) : <span />}
                <p className="text-xs text-gray-500">{form.motivation.length}/200</p>
              </div>
            </div>

            <p className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-gray-300">
              送信後は受付完了メールをお送りします。内容を確認のうえ、3営業日以内を目安に採用担当よりご連絡します。
            </p>

            {submitError ? (
              <div className="rounded-[1.25rem] border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm leading-7 text-red-100">
                {submitError}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="tap-bounce w-full bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] py-4 text-sm font-medium tracking-[0.15em] text-black transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "送信中..." : "エントリーする"}
            </button>
          </form>
        </div>
      </section>
    </CareersLayout>
  );
}

