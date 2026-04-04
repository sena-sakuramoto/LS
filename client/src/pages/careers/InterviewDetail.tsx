import { motion } from "framer-motion";
import CareersLayout from "@/components/careers/CareersLayout";
import Link from "@/components/careers/CareersLink";
import {
  PageCta,
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/components/careers/CareersShared";
import type { InterviewId } from "@/components/careers/careersData";
import { interviewProfilesById } from "@/components/careers/careersData";

interface InterviewDetailProps {
  name: string;
}

export default function InterviewDetail({ name }: InterviewDetailProps) {
  const data = interviewProfilesById[name as InterviewId];

  if (!data) {
    return (
      <CareersLayout>
        <section className="bg-black py-32">
          <div className="container text-center">
            <p className="text-gray-400">インタビューが見つかりませんでした。</p>
            <Link
              href="/careers/interview/"
              className="mt-6 inline-flex rounded-full border border-[#d4af37] px-6 py-3 text-sm tracking-[0.14em] text-[#d4af37] transition-colors hover:bg-[#d4af37] hover:text-black"
            >
              一覧に戻る
            </Link>
          </div>
        </section>
      </CareersLayout>
    );
  }

  return (
    <CareersLayout>
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        <div className="container relative z-10 py-24 md:py-32">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <motion.div
              className="overflow-hidden rounded-[2rem] border border-white/10"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <img
                src={data.image}
                alt={data.displayName}
                className="aspect-[4/5] h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.p
                className="font-heading-en text-xs tracking-[0.5em] text-[#d4af37]"
                variants={fadeInUp}
              >
                INTERVIEW
              </motion.p>
              <motion.p
                className="text-sm tracking-[0.16em] text-gray-400"
                variants={fadeInUp}
              >
                {data.role} / {data.year}
              </motion.p>
              <motion.h1
                className="text-4xl font-light leading-tight md:text-6xl"
                variants={fadeInUp}
              >
                {data.displayName}
              </motion.h1>
              <motion.p
                className="text-xl leading-8 text-gray-100 md:text-2xl"
                variants={fadeInUp}
              >
                {data.catchCopy}
              </motion.p>
              <motion.p
                className="max-w-2xl text-sm leading-8 text-gray-300 md:text-base"
                variants={fadeInUp}
              >
                {data.lead}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 py-20 md:py-28">
        <div className="container max-w-5xl">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {data.qa.map((item, index) => (
              <motion.div key={item.q} variants={fadeInUp}>
                <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-6 md:p-8">
                  <p className="font-heading-en text-xs tracking-[0.25em] text-[#d4af37]">
                    Q{index + 1}
                  </p>
                  <h2 className="mt-4 text-2xl font-light leading-9">{item.q}</h2>
                  <p className="mt-5 border-l border-[#d4af37]/30 pl-5 text-sm leading-8 text-gray-300 md:text-base">
                    {item.a}
                  </p>
                </div>

                {index === 2 ? (
                  <motion.div
                    className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/40"
                    variants={fadeInUp}
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={data.sceneImage}
                        alt={data.sceneCaption}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm leading-7 text-gray-300">{data.sceneCaption}</p>
                    </div>
                  </motion.div>
                ) : null}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <Link
              href="/careers/interview/"
              className="inline-flex rounded-full border border-[#d4af37] px-8 py-4 text-sm tracking-[0.16em] text-[#d4af37] transition-colors hover:bg-[#d4af37] hover:text-black"
            >
              一覧に戻る
            </Link>
          </motion.div>
        </div>
      </section>

      <PageCta
        image={data.sceneImage}
        title={`${data.role}として、次のキャリアを設計する。`}
      />
    </CareersLayout>
  );
}
