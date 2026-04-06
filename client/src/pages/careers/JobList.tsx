import { motion } from "framer-motion";
import { ArrowRight, MoveRight } from "lucide-react";
import CareersLayout from "@/components/careers/CareersLayout";
import Link from "@/components/careers/CareersLink";
import {
  CareersHero,
  PageCta,
  SectionHeading,
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/components/careers/CareersShared";
import { jobOpenings } from "@/components/careers/careersData";

export default function JobList() {
  return (
    <CareersLayout>
      <CareersHero
        eyebrow="WORK"
        title={
          <>
            <span className="block md:line-keep">役割ごとに、</span>
            <span className="block md:line-keep">
              ブランドづくりの責任範囲は変わる。
            </span>
          </>
        }
        titleClassName="max-w-[12em] sm:max-w-[12.5em] md:max-w-[15.5ch] lg:max-w-[17ch]"
        description="設計、営業、施工管理。どの職種もクライアントの理想を空間として成功させるための重要なポジションです。"
        image="/interior-2.jpg"
      >
        <Link
          href="/careers/training/"
          className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm tracking-[0.18em] text-white transition-colors duration-300 hover:border-[#d4af37] hover:text-[#d4af37]"
        >
          研修・成長支援を見る
          <MoveRight className="h-4 w-4" />
        </Link>
      </CareersHero>

      <section className="bg-black py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="POSITIONS"
            title="現在募集中の3ポジション"
            description="それぞれの役割、求められる強み、仕事の魅力を一覧で確認できます。気になる職種から詳細をご覧ください。"
            align="center"
          />
          <motion.div
            className="mt-14 grid gap-8 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {jobOpenings.map((job) => (
              <motion.div key={job.id} variants={fadeInUp}>
                <Link
                  href={job.href}
                  data-scroll-glow
                  className="group block overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={job.image}
                      alt={job.title}
                      className="scroll-glow-image h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-5 p-7">
                    <div>
                      <p className="font-heading-en text-xs tracking-[0.3em] text-[#d4af37]">
                        {job.sub}
                      </p>
                      <h2 className="scroll-glow-accent title-balance mt-3 text-2xl font-light">{job.title}</h2>
                    </div>
                    <p className="copy-balance text-sm leading-7 text-gray-300">
                      {job.tagline}
                    </p>
                    <p className="copy-balance text-sm leading-7 text-gray-400">
                      {job.listingDescription}
                    </p>
                    <div className="flex items-center justify-between border-t border-white/10 pt-5 text-sm">
                      <span className="tracking-[0.12em] text-gray-400">{job.salary}</span>
                      <span className="inline-flex items-center gap-2 text-[#d4af37]">
                        詳細を見る
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-14 grid gap-6 rounded-[1.75rem] border border-white/10 bg-white/5 p-8 md:grid-cols-[1.1fr_0.9fr]"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <div className="space-y-4">
              <p className="font-heading-en text-xs tracking-[0.3em] text-[#d4af37]">
                LOOKING FOR
              </p>
              <h3 className="text-2xl font-light md:text-3xl">
                完成度だけでなく、伸びる余白も見ています。
              </h3>
              <p className="text-sm leading-7 text-gray-300 md:text-base">
                LSは経験ゼロを求めているわけではありませんが、完璧な即戦力だけを採る会社でもありません。基礎があり、これから強くなりたい人に向いた環境です。
              </p>
            </div>
            <div className="space-y-4 rounded-[1.5rem] border border-[#d4af37]/20 bg-black/40 p-6">
              <p className="text-sm leading-7 text-gray-300">
                各職種の詳細ページでは、仕事の進め方、求める経験、この仕事ならではのやりがいを具体的に紹介しています。
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/careers/benefits/"
                  className="inline-flex items-center justify-between rounded-full border border-white/15 px-5 py-3 text-sm tracking-[0.14em] text-white transition-colors duration-300 hover:border-[#d4af37] hover:text-[#d4af37]"
                >
                  待遇・福利厚生を見る
                  <MoveRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/careers/interview/"
                  className="inline-flex items-center justify-between rounded-full border border-white/15 px-5 py-3 text-sm tracking-[0.14em] text-white transition-colors duration-300 hover:border-[#d4af37] hover:text-[#d4af37]"
                >
                  社員インタビューを見る
                  <MoveRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <PageCta
        image="/luxury-3.jpg"
        title="経験を、より強いブランド体験づくりへ。"
      />
    </CareersLayout>
  );
}
