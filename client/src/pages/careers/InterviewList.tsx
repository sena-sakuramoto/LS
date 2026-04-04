import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
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
import { interviewProfiles } from "@/components/careers/careersData";

export default function InterviewList() {
  return (
    <CareersLayout>
      <CareersHero
        eyebrow="INTERVIEW"
        title="働く人の言葉に、その会社の温度が出る。"
        description="設計、営業、施工管理。現場で何を見て、何に手応えを感じているのか。メンバーの言葉からLSの輪郭を見てください。"
        image="/IMG_6301.JPG"
      >
        <Link
          href="/careers/job/"
          className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm tracking-[0.18em] text-white transition-colors duration-300 hover:border-[#d4af37] hover:text-[#d4af37]"
        >
          募集ポジションを見る
          <MoveRight className="h-4 w-4" />
        </Link>
      </CareersHero>

      <section className="bg-black py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="PEOPLE"
            title="役割ごとに見える景色は違う。"
            description="メンバーごとの役割や価値観に触れながら、LSで働く日々のリアルを知ってください。"
            align="center"
          />
          <motion.div
            className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {interviewProfiles.map((profile) => (
              <motion.div key={profile.id} variants={fadeInUp}>
                <Link
                  href={`/careers/interview/${profile.id}/`}
                  data-scroll-glow
                  className="group block overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={profile.image}
                      alt={profile.displayName}
                      className="scroll-glow-image h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="scroll-glow-overlay absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-100 transition-colors duration-700 group-hover:from-black/85" />
                    <div className="absolute inset-x-0 bottom-0 space-y-3 p-6">
                      <p className="font-heading-en text-xs tracking-[0.3em] text-[#d4af37]">
                        {profile.role}
                      </p>
                      <h2 className="title-balance text-3xl font-light">{profile.displayName}</h2>
                      <p className="copy-balance max-w-sm text-sm leading-7 text-gray-200">
                        {profile.catchCopy}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-6 text-sm">
                    <span className="tracking-[0.16em] text-gray-400">{profile.year}</span>
                    <span className="inline-flex items-center gap-2 text-[#d4af37]">
                      インタビューを読む
                      <MoveRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <PageCta
        image="/IMG_6298.JPG"
        title="言葉だけでなく、現場でも判断できる人へ。"
      />
    </CareersLayout>
  );
}
