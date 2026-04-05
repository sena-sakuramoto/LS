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
  const cloneCount = Math.min(interviewProfiles.length, 3);
  const carouselProfiles = [
    ...interviewProfiles.slice(-cloneCount),
    ...interviewProfiles,
    ...interviewProfiles.slice(0, cloneCount),
  ];
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    startIndex: cloneCount,
    align: "start",
    containScroll: false,
    skipSnaps: false,
    duration: 28,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const snap = emblaApi.selectedScrollSnap();
      const firstIndex = cloneCount;
      const lastIndex = cloneCount + interviewProfiles.length - 1;

      if (snap < firstIndex) {
        emblaApi.scrollTo(snap + interviewProfiles.length, true);
        return;
      }

      if (snap > lastIndex) {
        emblaApi.scrollTo(snap - interviewProfiles.length, true);
        return;
      }

      setSelectedIndex((snap - cloneCount + interviewProfiles.length) % interviewProfiles.length);
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
        imageMode="contain"
        backgroundImageClassName="object-[50%_18%] md:object-[50%_20%] lg:object-[50%_22%]"
        imageClassName="object-top"
        imageFrameClassName="items-start pt-20 md:items-center md:pt-28 lg:pt-32"
        minHeightClassName="min-h-[88svh] md:min-h-[84vh] lg:min-h-[86vh]"
      >
        <motion.div
          className="grid gap-3 md:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {jobOpenings.map(job => (
            <motion.div key={job.id} variants={fadeInUp}>
              <Link
                href={job.href}
                data-scroll-glow
                className="group flex min-h-[98px] flex-col justify-between rounded-[1.5rem] border border-white/15 bg-black/32 px-4 py-3.5 backdrop-blur-md transition-colors duration-300 hover:border-[#d4af37]/40 hover:bg-black/45 md:min-h-[112px] md:px-5 md:py-4"
              >
                <p className="font-heading-en text-[10px] tracking-[0.28em] text-[#d4af37] md:text-[11px] md:tracking-[0.3em]">
                  {job.sub}
                </p>
                <div className="flex items-end justify-between gap-4">
                  <div className="space-y-1">
                    <p className="scroll-glow-accent title-balance text-[1.05rem] font-light text-white md:text-lg">
                      {job.title}
                    </p>
                    <p className="copy-balance text-[11px] leading-5 text-gray-300 md:text-xs md:leading-6">
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
                {carouselProfiles.map((profile, index) => {
                  const normalizedIndex =
                    (index - cloneCount + interviewProfiles.length) % interviewProfiles.length;
                  const isActive = normalizedIndex === selectedIndex;

                  return (
                    <motion.div
                      key={`${profile.id}-${index}`}
                      className="min-w-0 flex-[0_0_84%] md:flex-[0_0_44%] xl:flex-[0_0_31%]"
                      variants={fadeInUp}
                    >
                      <Link
                        href={`/careers/interview/${profile.id}/`}
                        data-scroll-glow
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
                              className={`scroll-glow-image h-full w-full object-cover transition-all duration-700 ${
                                isActive
                                  ? "scale-[1.03] saturate-110"
                                  : "scale-100 grayscale-[0.08]"
                              } group-hover:scale-105`}
                            />
                            <div className="scroll-glow-overlay absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-90" />
                            <div className="absolute inset-x-0 bottom-0 space-y-2 p-6">
                              <p className="font-heading-en text-xs tracking-[0.3em] text-[#d4af37]">
                                {profile.role}
                              </p>
                              <h3 className="title-balance text-2xl font-light">
                                {profile.displayName}
                              </h3>
                              <p className="text-xs tracking-[0.15em] text-gray-400">
                                {profile.year}
                              </p>
                            </div>
                          </div>
                          <div className="p-6">
                            <p className="copy-balance text-sm leading-7 text-gray-300">
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

      <section className="bg-gray-950 py-16 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="STORIES"
            title={
              <>
                <span className="block">仕事を知る入口を、</span>
                <span className="block">ひとつずつ用意する。</span>
              </>
            }
            description="仕事内容、育成環境、働く人の声。気になるテーマから、LSで働く姿を具体的に知ることができます。"
            align="center"
          />
          <motion.div
            className="mt-10 grid gap-6 md:mt-14 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {storyBanners.map(banner => (
              <motion.div key={banner.href} variants={fadeInUp}>
                <Link
                  href={banner.href}
                  data-scroll-glow
                  className="group block overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="scroll-glow-image h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="scroll-glow-overlay absolute inset-0 bg-black/45 opacity-100 transition-colors duration-700 group-hover:bg-black/25" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <p className="font-heading-en text-xs tracking-[0.3em] text-[#d4af37]">
                        {banner.sub}
                      </p>
                      <h3 className="title-balance mt-3 text-2xl font-light">
                        {banner.title}
                      </h3>
                      <p className="copy-balance mt-3 text-sm leading-7 text-gray-200">
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
            title={
              <>
                <span className="block">採用と現場の動きを、</span>
                <span className="block">記事でも届ける。</span>
              </>
            }
            description="LSの仕事やプロジェクトの背景を、記事コンテンツとして順次発信していきます。"
            align="center"
          />
          <motion.div
            className="mt-14 grid gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {blogPosts.map(post => (
              <motion.article
                key={post.title}
                data-scroll-glow
                className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5"
                variants={fadeInUp}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="scroll-glow-image h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <p className="font-heading-en text-xs tracking-[0.24em] text-[#d4af37]">
                    {post.date}
                  </p>
                  <h3 className="title-balance text-xl font-light leading-8">
                    {post.title}
                  </h3>
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
