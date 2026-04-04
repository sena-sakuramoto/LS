import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
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
  blogPosts,
  interviewProfiles,
  jobOpenings,
  recruitPublishing,
  storyBanners,
} from "@/components/careers/careersData";

export default function CareersTop() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const timer = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => window.clearInterval(timer);
  }, [emblaApi]);

  return (
    <CareersLayout>
      <CareersHero
        eyebrow="RECRUIT"
        title="空間を創造する。"
        description="設計・営業・施工。あなたの仕事が、誰かの理想をつくる。"
        image="/careers-hero-team.jpg"
        imageClassName="object-[56%_18%] sm:object-[58%_22%] md:object-center"
        minHeightClassName="min-h-[88svh] md:min-h-[78vh]"
      >
        <motion.div
          className="grid gap-3 md:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {jobOpenings.map((job) => (
            <motion.div key={job.id} variants={fadeInUp}>
              <Link
                href={job.href}
                className="group flex min-h-[112px] flex-col justify-between rounded-[1.5rem] border border-white/15 bg-black/35 px-5 py-4 backdrop-blur-md transition-colors duration-300 hover:border-[#d4af37]/40 hover:bg-black/45"
              >
                <p className="font-heading-en text-[11px] tracking-[0.3em] text-[#d4af37]">
                  {job.sub}
                </p>
                <div className="flex items-end justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-lg font-light text-white">{job.title}</p>
                    <p className="text-xs leading-6 text-gray-300">
                      {job.tagline}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[#d4af37]" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </CareersHero>

      <section className="bg-gradient-to-b from-black to-gray-950 py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="PEOPLE"
            title="社員スペシャリスト紹介"
            description="実際に働くメンバーの表情と言葉から、LSのカルチャーと仕事の温度感を伝えます。"
          />
          <div className="mt-14">
            <div ref={emblaRef} className="overflow-hidden">
              <motion.div
                className="flex gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerContainer}
              >
                {interviewProfiles.map((profile, index) => {
                  const isActive = index === selectedIndex;

                  return (
                    <motion.div
                      key={profile.id}
                      className="min-w-0 flex-[0_0_84%] md:flex-[0_0_44%] xl:flex-[0_0_31%]"
                      variants={fadeInUp}
                    >
                      <Link
                        href={`/careers/interview/${profile.id}/`}
                        className="group block"
                      >
                        <div
                          className={`overflow-hidden rounded-[1.75rem] border bg-white/5 transition-all duration-500 ${
                            isActive
                              ? "border-[#d4af37]/40 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
                              : "border-white/10 opacity-85"
                          }`}
                        >
                          <div className="relative aspect-[3/4] overflow-hidden">
                            <img
                              src={profile.image}
                              alt={profile.displayName}
                              className={`h-full w-full object-cover transition-all duration-700 ${
                                isActive
                                  ? "scale-[1.03] saturate-110"
                                  : "scale-100 grayscale-[0.08]"
                              } group-hover:scale-105`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 space-y-2 p-6">
                              <p className="font-heading-en text-xs tracking-[0.3em] text-[#d4af37]">
                                {profile.role}
                              </p>
                              <h3 className="text-2xl font-light">{profile.displayName}</h3>
                              <p className="text-xs tracking-[0.15em] text-gray-400">
                                {profile.year}
                              </p>
                            </div>
                          </div>
                          <div className="p-6">
                            <p className="text-sm leading-7 text-gray-300">
                              {profile.catchCopy}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={scrollPrev}
                className="tap-bounce flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#d4af37] hover:text-[#d4af37]"
                aria-label="前へ"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2">
                {interviewProfiles.map((profile, index) => (
                  <span
                    key={profile.id}
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${
                      index === selectedIndex ? "bg-[#d4af37]" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={scrollNext}
                className="tap-bounce flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#d4af37] hover:text-[#d4af37]"
                aria-label="次へ"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="STORIES"
            title="知るべき情報を、入口ごとに整理する。"
            description="仕事理解、育成環境、メンバーのリアル。必要な情報へ迷わず移動できるようにしています。"
            align="center"
          />
          <motion.div
            className="mt-14 grid gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {storyBanners.map((banner) => (
              <motion.div key={banner.href} variants={fadeInUp}>
                <Link
                  href={banner.href}
                  className="group block overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/45 transition-colors duration-700 group-hover:bg-black/25" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <p className="font-heading-en text-xs tracking-[0.3em] text-[#d4af37]">
                        {banner.sub}
                      </p>
                      <h3 className="mt-3 text-2xl font-light">{banner.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-gray-200">
                        {banner.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-gray-950 py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="BLOG"
            title="採用と現場の空気感を、記事でも補足する。"
            description="本格運用前の仮カードですが、実際のプロジェクト写真でコンテンツのトーンを揃えています。"
            align="center"
          />
          <motion.div
            className="mt-14 grid gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.title}
                className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5"
                variants={fadeInUp}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <p className="font-heading-en text-xs tracking-[0.24em] text-[#d4af37]">
                    {post.date}
                  </p>
                  <h3 className="text-xl font-light leading-8">{post.title}</h3>
                </div>
              </motion.article>
            ))}
          </motion.div>
          <motion.div
            className="mt-10 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            {recruitPublishing.blogReady ? (
              <a
                href={recruitPublishing.blogHref}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-bounce inline-flex items-center gap-3 rounded-full border border-[#d4af37] px-8 py-4 text-sm tracking-[0.18em] text-[#d4af37] transition-colors duration-300 hover:bg-[#d4af37] hover:text-black"
              >
                ブログ一覧を見る
                <MoveRight className="h-4 w-4" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-3 rounded-full border border-white/10 px-8 py-4 text-sm tracking-[0.18em] text-gray-500">
                発信一覧は準備中です
              </span>
            )}
          </motion.div>
        </div>
      </section>

      <PageCta image="/interior-1.jpg" />
    </CareersLayout>
  );
}
