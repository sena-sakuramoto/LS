import { z } from "zod";

export const jobPositionOptions = [
  { value: "designer", label: "設計デザイナー" },
  { value: "sales", label: "営業コンサルタント" },
  { value: "pm", label: "施工管理" },
] as const;

export const jobPositionValues = jobPositionOptions.map((option) => option.value) as [
  "designer",
  "sales",
  "pm",
];

export const careersEntrySchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "氏名を入力してください。")
    .max(80, "氏名は80文字以内で入力してください。"),
  email: z
    .string()
    .trim()
    .email("メールアドレスの形式が正しくありません。")
    .max(160, "メールアドレスが長すぎます。"),
  phone: z
    .string()
    .trim()
    .min(8, "電話番号を入力してください。")
    .max(30, "電話番号が長すぎます。"),
  position: z.enum(jobPositionValues, "希望職種を選択してください。"),
  motivation: z
    .string()
    .trim()
    .max(200, "自己PR・志望動機は200文字以内で入力してください。")
    .optional()
    .transform((value) => value ?? ""),
});

export type CareersEntryPayload = z.infer<typeof careersEntrySchema>;

export const jobPositionLabelMap = Object.fromEntries(
  jobPositionOptions.map((option) => [option.value, option.label]),
) as Record<CareersEntryPayload["position"], string>;
