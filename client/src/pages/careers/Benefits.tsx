import { motion } from "framer-motion";
import {
  BadgeDollarSign,
  BriefcaseBusiness,
  CalendarDays,
  Clock3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import CareersLayout from "@/components/careers/CareersLayout";
import {
  CareersHero,
  PageCta,
  SectionHeading,
  StatStrip,
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/components/careers/CareersShared";
import {
  benefitsData,
  benefitsHeroStats,
} from "@/components/careers/careersData";

const icons = [
  BadgeDollarSign,
  Sparkles,
  Clock3,
  CalendarDays,
  ShieldCheck,
  Rocket,
  BriefcaseBusiness,
  Users,
];

export default function Benefits() {
  return (
    <CareersLayout>
      <CareersHero
        eyebrow="BENEFITS"
        title="働きやすさも、挑戦しやすさも両立する。"
        description="報酬、制度、評価、カルチャー。LSの福利厚生は、ただ整っているだけでなく、成果を出し続けるための土台として設計しています。"
        image="/IMG_6312.JPG"
      />

      <section className="bg-black py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="OVERVIEW"
            title="待遇の全体像"
            description="報酬、制度、評価の考え方をまとめて確認できます。働く前に知っておきたい条件を、全体像からご覧ください。"
          />
          <StatStrip items={benefitsHeroStats} className="mt-12" />
          <motion.div
            className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {benefitsData.map((item, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
                  variants={fadeInUp}
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#d4af37]/30 text-[#d4af37]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-6 text-2xl font-light">{item.title}</h2>
                  <p className="mt-4 text-sm leading-8 text-gray-300">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-950 py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="WORK STYLE"
            title="日々の働き方も、無理なく成果に向かう設計。"
            description="フレックスタイム、休暇制度、保険、1on1。長く良い状態で働くための土台も整えています。"
            align="center"
          />
          <motion.div
            className="mt-14 grid gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {[
              {
                title: "時間と裁量",
                items: [
                  "9:30〜18:30（実働8時間）",
                  "フレックスタイム制",
                  "コアタイム 10:00〜15:15",
                ],
              },
              {
                title: "休暇と安心",
                items: [
                  "完全週休2日制（土日祝）",
                  "年間休日120日以上",
                  "年末年始・夏季・慶弔・産前産後・育児・介護・有給",
                ],
              },
            ].map((group) => (
              <motion.div
                key={group.title}
                className="rounded-[1.75rem] border border-white/10 bg-black/35 p-8"
                variants={fadeInUp}
              >
                <h3 className="text-2xl font-light">{group.title}</h3>
                <ul className="mt-6 space-y-4">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 px-5 py-3 text-sm leading-7 text-gray-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <PageCta
        image="/IMG_6313.JPG"
        title="制度は整っている。そのうえで、成果に集中できる。"
      />
    </CareersLayout>
  );
}
