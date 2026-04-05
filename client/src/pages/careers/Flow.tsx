import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import CareersLayout from "@/components/careers/CareersLayout";
import {
  CareersHero,
  PageCta,
  SectionHeading,
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/components/careers/CareersShared";
import {
  companyProfile,
  flowSteps,
  flowSupportCopy,
  recruitContact,
} from "@/components/careers/careersData";

export default function Flow() {
  return (
    <CareersLayout>
      <CareersHero
        eyebrow="FLOW"
        title="選考は、短くても雑には進めない。"
        description="エントリーから内定まで、プロセスはシンプルです。ただし、相互理解ができるように各ステップで丁寧に対話します。"
        image="/architecture-1.jpg"
      />

      <section className="bg-black py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="PROCESS"
            title="選考フロー"
            description="各ステップの内容と連絡目安をまとめています。応募前に、選考の進み方を一通り確認できます。"
            align="center"
          />
          <motion.div
            className="mt-14 grid gap-6 xl:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {flowSteps.map((step, index) => (
              <motion.div key={step.step} className="relative h-full" variants={fadeInUp}>
                <div className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/5 p-7">
                  <p className="font-heading-en text-xs tracking-[0.32em] text-[#d4af37]">
                    {step.step}
                  </p>
                  <h2 className="mt-4 text-3xl font-light">{step.title}</h2>
                  <p className="mt-4 text-sm leading-8 text-gray-200">{step.desc}</p>
                  <div className="mt-auto pt-6">
                    <div className="rounded-[1.25rem] border border-[#d4af37]/20 bg-black/40 p-4">
                      <p className="text-sm leading-7 text-gray-300">{step.note}</p>
                    </div>
                  </div>
                </div>

                {index < flowSteps.length - 1 ? (
                  <>
                    <div className="mt-4 flex justify-center xl:hidden">
                      <ArrowDown className="h-5 w-5 text-[#d4af37]" />
                    </div>
                    <div className="absolute right-[-18px] top-1/2 hidden -translate-y-1/2 xl:block">
                      <ArrowRight className="h-6 w-6 text-[#d4af37]" />
                    </div>
                  </>
                ) : null}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 rounded-[1.75rem] border border-[#d4af37]/20 bg-[#0d0d0d] p-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <p className="font-heading-en text-xs tracking-[0.3em] text-[#d4af37]">
              SUPPORT
            </p>
            <p className="mt-4 max-w-4xl text-sm leading-8 text-gray-300 md:text-base">
              {flowSupportCopy}
            </p>
          </motion.div>

          <motion.div
            className="mt-8 grid gap-6 rounded-[1.75rem] border border-white/10 bg-white/5 p-8 md:grid-cols-[1fr_auto]"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <div className="space-y-4">
              <p className="font-heading-en text-xs tracking-[0.3em] text-[#d4af37]">
                RECRUIT CONTACT
              </p>
              <h3 className="text-3xl font-light">{recruitContact.recruiter}</h3>
              <p className="max-w-2xl text-sm leading-8 text-gray-300 md:text-base">
                選考に関する確認事項や日程の相談は、こちらの窓口から受け付けています。
              </p>
              <div className="space-y-1 text-sm leading-7 text-gray-400">
                <p>{companyProfile.name}</p>
                <p>{companyProfile.address}</p>
                {recruitContact.email ? <p>メール: {recruitContact.email}</p> : null}
                {recruitContact.phone ? <p>TEL: {recruitContact.phone}</p> : null}
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <a
                href={recruitContact.inquiryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-bounce inline-flex items-center justify-between gap-4 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] px-6 py-4 text-sm font-medium tracking-[0.18em] text-black"
              >
                問い合わせる
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <PageCta
        image="/architecture-1.jpg"
        title="準備が整ったら、3分でエントリーできます。"
      />
    </CareersLayout>
  );
}
