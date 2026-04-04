import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import CareersLayout from "@/components/careers/CareersLayout";
import Link from "@/components/careers/CareersLink";
import {
  CareersHero,
  PageCta,
  SectionHeading,
  StatStrip,
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/components/careers/CareersShared";
import type { JobOpening } from "@/components/careers/careersData";

interface JobDetailProps {
  job: JobOpening;
}

export default function JobDetailContent({ job }: JobDetailProps) {
  return (
    <CareersLayout>
      <CareersHero
        eyebrow={job.sub}
        title={job.title}
        description={job.heroDescription}
        image={job.image}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[1.25rem] border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
            <p className="text-xs tracking-[0.18em] text-gray-400">想定年収レンジ</p>
            <p className="mt-2 text-lg font-light text-white">{job.salary}</p>
          </div>
          <div className="rounded-[1.25rem] border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
            <p className="text-xs tracking-[0.18em] text-gray-400">歓迎する経験</p>
            <p className="mt-2 text-sm leading-7 text-white">{job.target}</p>
          </div>
        </div>
      </CareersHero>

      <section className="bg-black py-20 md:py-28">
        <div className="container">
          <div className="grid gap-14 md:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-10">
              <SectionHeading
                eyebrow="INTRODUCTION"
                title={`${job.title}の仕事とは`}
                description={job.intro}
              />
              <motion.p
                className="max-w-3xl text-sm leading-8 text-gray-300 md:text-base"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeInUp}
              >
                {job.marketCopy}
              </motion.p>
            </div>
            <motion.div
              className="space-y-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-7"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
            >
              <p className="font-heading-en text-xs tracking-[0.3em] text-[#d4af37]">
                QUICK LINKS
              </p>
              <Link
                href="/careers/job/"
                className="flex items-center justify-between rounded-full border border-white/10 px-5 py-3 text-sm tracking-[0.14em] text-white transition-colors hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                仕事一覧へ戻る
                <MoveRight className="h-4 w-4" />
              </Link>
              <Link
                href="/careers/benefits/"
                className="flex items-center justify-between rounded-full border border-white/10 px-5 py-3 text-sm tracking-[0.14em] text-white transition-colors hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                待遇・福利厚生を見る
                <MoveRight className="h-4 w-4" />
              </Link>
              <Link
                href="/careers/interview/"
                className="flex items-center justify-between rounded-full border border-white/10 px-5 py-3 text-sm tracking-[0.14em] text-white transition-colors hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                社員インタビューを見る
                <MoveRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <StatStrip items={job.stats} className="mt-12" />
        </div>
      </section>

      <section className="bg-gray-950 py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="FLOW OF WORK"
            title="日々の仕事を、流れで知る。"
            description="案件がどのように進み、その中でどんな役割を担うのか。仕事の流れに沿って具体的に紹介します。"
          />
          <motion.div
            className="mt-14 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {job.steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="grid gap-6 rounded-[1.75rem] border border-white/10 bg-black/40 p-6 md:grid-cols-[100px_1fr]"
                variants={fadeInUp}
              >
                <div className="flex items-start gap-4 md:block">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d4af37]/40 text-xl font-light text-[#d4af37]">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                  {index < job.steps.length - 1 ? (
                    <div className="mt-4 hidden h-16 w-px bg-gradient-to-b from-[#d4af37]/50 to-transparent md:block" />
                  ) : null}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-light">{step.title}</h3>
                  <p className="text-sm leading-8 text-gray-300 md:text-base">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-black py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="REWARDS"
            title="この仕事だから得られる、手触りのあるやりがい。"
            description="LSで働く魅力は、案件の派手さだけではなく、成果がちゃんと実感として返ってくることです。"
          />
          <motion.div
            className="mt-14 grid gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {job.appealPoints.map((point) => (
              <motion.div
                key={point}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
                variants={fadeInUp}
              >
                <p className="text-sm leading-8 text-gray-200 md:text-base">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-950 py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="SCENES"
            title="現場の空気に、実際の仕事を重ねる。"
            description="LSが向き合う空間や現場の雰囲気を、写真を通して感じてください。"
            align="center"
          />
          <motion.div
            className="mt-14 grid gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {job.sceneImages.map((image) => (
              <motion.div
                key={image.src}
                data-scroll-glow
                className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5"
                variants={fadeInUp}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="scroll-glow-image h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <PageCta
        image={job.image}
        title={`${job.title}として、次のブランド体験をつくる。`}
        description={`${job.title}の経験を、LSの案件でさらに磨きませんか。まずは募集条件と選考フローを確認し、気になればエントリーしてください。`}
        tertiaryHref="/careers/interview/"
        tertiaryLabel="社員インタビューを読む"
      />
    </CareersLayout>
  );
}
