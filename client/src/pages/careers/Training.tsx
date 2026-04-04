import { motion } from "framer-motion";
import { MoveRight, Sparkles, TrendingUp, Users } from "lucide-react";
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
import {
  careerPaths,
  evaluationPolicy,
  trainingTimeline,
} from "@/components/careers/careersData";

const pathIcons = [Sparkles, Users, TrendingUp];

export default function Training() {
  return (
    <CareersLayout>
      <CareersHero
        eyebrow="TRAINING"
        title="経験を土台に、さらに伸びる。"
        description="LSでは、あなたが持つ経験をベースに、さらに伸ばせる環境を用意しています。経験ゼロからは求めていませんが、完璧な即戦力も求めていません。一緒に成長しましょう。"
        image="/vision1.JPG"
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
          <div className="grid gap-14 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <SectionHeading
                eyebrow="TIMELINE"
                title="研修タイムライン"
                description="入社後は段階的に案件へ入り、補助業務から担当案件デビューまで明確なステップで進みます。"
              />
              <motion.div
                className="mt-14 space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerContainer}
              >
                {trainingTimeline.map((step, index) => (
                  <motion.div
                    key={step.step}
                    className="grid gap-5 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 md:grid-cols-[120px_1fr]"
                    variants={fadeInUp}
                  >
                    <div className="flex items-start gap-4 md:block">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d4af37]/40 text-sm tracking-[0.16em] text-[#d4af37]">
                        {index + 1}
                      </div>
                      {index < trainingTimeline.length - 1 ? (
                        <div className="mt-4 hidden h-16 w-px bg-gradient-to-b from-[#d4af37]/50 to-transparent md:block" />
                      ) : null}
                    </div>
                    <div className="space-y-3">
                      <p className="font-heading-en text-xs tracking-[0.3em] text-[#d4af37]">
                        {step.period}
                      </p>
                      <h3 className="text-2xl font-light">{step.title}</h3>
                      <p className="text-sm leading-8 text-gray-300 md:text-base">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="grid gap-6 sm:grid-cols-2 md:grid-cols-1"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
            >
              {[
                {
                  image: "/vision2.JPG",
                  title: "近い距離で学べる",
                  desc: "先輩に同行しながら、提案の組み立て方や判断基準を吸収していく設計です。",
                },
                {
                  image: "/vision3.JPG",
                  title: "早い段階で任される",
                  desc: "補助から始めつつ、一定期間で担当案件を持つ前提で育成します。",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5"
                  variants={fadeInUp}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3 p-6">
                    <h3 className="text-2xl font-light">{item.title}</h3>
                    <p className="text-sm leading-7 text-gray-300">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="CAREER PATH"
            title="キャリアは、ひとつの正解に縛られない。"
            description="専門性を深める道、チームを率いる道、独立を見据える道。LSではキャリアの伸ばし方を複線で考えます。"
            align="center"
          />
          <motion.div
            className="mt-14 grid gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {careerPaths.map((path, index) => {
              const Icon = pathIcons[index];
              return (
                <motion.div
                  key={path.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8"
                  variants={fadeInUp}
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#d4af37]/30 text-[#d4af37]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-2xl font-light">{path.title}</h3>
                  <p className="mt-4 text-sm leading-8 text-gray-300">{path.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="mt-12 rounded-[1.75rem] border border-[#d4af37]/20 bg-black/50 p-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <p className="font-heading-en text-xs tracking-[0.3em] text-[#d4af37]">
              EVALUATION
            </p>
            <h3 className="mt-4 text-3xl font-light">評価は、年次ではなく成果で決まる。</h3>
            <p className="mt-5 max-w-4xl text-sm leading-8 text-gray-300 md:text-base">
              {evaluationPolicy}
            </p>
          </motion.div>
        </div>
      </section>

      <PageCta
        image="/vision1.JPG"
        title="伸びる余白がある人ほど、LSで強くなる。"
      />
    </CareersLayout>
  );
}
