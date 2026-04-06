import type { ReactNode } from "react";
import { ArrowRight, MoveRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "@/components/careers/CareersLink";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

export const viewportOnce = { once: true, amount: 0.2 as const };

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn(
        "space-y-5",
        align === "center" ? "mx-auto max-w-5xl text-center" : "max-w-4xl",
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
    >
      <p className="font-heading-en text-xs tracking-[0.45em] text-[#d4af37]">
        {eyebrow}
      </p>
      <div className="space-y-4">
        <h2
          className={cn(
            "title-balance text-3xl font-light leading-[1.15]",
            align === "center"
              ? "mx-auto max-w-[12.5em] text-[clamp(2.15rem,8vw,4rem)] sm:max-w-[15em] md:max-w-[24ch] lg:max-w-[26ch]"
              : "max-w-[13ch] sm:max-w-[15ch] md:max-w-[17ch] md:text-[clamp(2.75rem,4vw,4.5rem)]"
            ,
            titleClassName
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "copy-balance text-sm leading-7 text-gray-300 md:text-base",
              align === "center"
                ? "mx-auto max-w-[30rem] md:max-w-[42rem]"
                : "max-w-3xl",
              descriptionClassName
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </motion.div>
  );
}

interface CareersHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt?: string;
  imageClassName?: string;
  backgroundImageClassName?: string;
  imageFrameClassName?: string;
  imageMode?: "cover" | "contain";
  children?: React.ReactNode;
  minHeightClassName?: string;
  align?: "left" | "center";
  titleClassName?: string;
}

export function CareersHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imageClassName,
  backgroundImageClassName,
  imageFrameClassName,
  imageMode = "cover",
  children,
  minHeightClassName = "min-h-[78vh]",
  align = "left",
  titleClassName,
}: CareersHeroProps) {
  const resolvedImageAlt = imageAlt ?? (typeof title === "string" ? title : eyebrow);

  return (
    <section
      className={cn(
        "relative isolate flex overflow-hidden bg-black",
        minHeightClassName,
        align === "center" ? "items-center" : "items-end"
      )}
    >
      {imageMode === "contain" ? (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className={cn(
              "absolute inset-0 h-full w-full object-cover blur-[2px] md:blur-none",
              backgroundImageClassName
            )}
          />
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center px-4 pt-20 md:hidden",
              imageFrameClassName
            )}
          >
            <img
              src={image}
              alt={resolvedImageAlt}
              className={cn("h-full w-full object-contain", imageClassName)}
            />
          </div>
        </>
      ) : (
        <img
          src={image}
          alt={resolvedImageAlt}
          className={cn(
            "absolute inset-0 h-full w-full object-cover",
            imageClassName
          )}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_30%)]" />
      <div className="container relative z-10 flex w-full pb-16 pt-24 md:py-36">
        <motion.div
          className={cn(
            "max-w-4xl space-y-6 md:space-y-8",
            align === "center" ? "mx-auto text-center" : ""
          )}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p
            className="font-heading-en text-xs tracking-[0.5em] text-[#d4af37]"
            variants={fadeInUp}
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            className={cn(
              "title-balance max-w-[9.5em] text-4xl font-light leading-[1.1] sm:max-w-[10.5em] md:max-w-[12em] md:text-[clamp(3.5rem,5vw,5.75rem)] lg:max-w-[13em]",
              titleClassName
            )}
            variants={fadeInUp}
          >
            {title}
          </motion.h1>
          <motion.p
            className={cn(
              "copy-balance max-w-2xl text-base leading-8 text-gray-200 md:text-lg",
              align === "center" ? "mx-auto" : ""
            )}
            variants={fadeInUp}
          >
            {description}
          </motion.p>
          {children ? (
            <motion.div variants={fadeInUp}>{children}</motion.div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}

interface PageCtaProps {
  title?: ReactNode;
  description?: string;
  image?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  tertiaryHref?: string;
  tertiaryLabel?: string;
  titleClassName?: string;
}

export function PageCta({
  title = "次の案件を、一緒に仕掛ける側へ。",
  description = "ブランドの世界観を空間として立ち上げる仕事に、経験を活かしませんか。まずは選考フローと募集ポジションをご確認ください。",
  image = "/interior-1.jpg",
  primaryHref = "/careers/entry/",
  primaryLabel = "エントリーする",
  secondaryHref = "/careers/flow/",
  secondaryLabel = "選考フローを見る",
  tertiaryHref,
  tertiaryLabel,
  titleClassName,
}: PageCtaProps) {
  const resolvedTitle = title ?? "次の案件を、一緒に仕掛ける側へ。";
  const resolvedTitleAlt =
    typeof resolvedTitle === "string" ? resolvedTitle : "ENTRY";

  return (
    <section className="bg-black pb-24 pt-8 md:pb-32">
      <div className="container">
        <motion.div
          className="relative overflow-hidden rounded-[2rem] border border-white/10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <img
            src={image}
            alt={resolvedTitleAlt}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/80" />
          <div className="relative z-10 grid gap-10 px-6 py-12 md:grid-cols-[1.5fr_0.9fr] md:px-12 md:py-16">
            <div className="space-y-5">
              <p className="font-heading-en text-xs tracking-[0.45em] text-[#d4af37]">
                ENTRY
              </p>
              <h2
                className={cn(
                  "title-balance max-w-[12em] text-3xl font-light leading-[1.12] md:max-w-[14ch] md:text-[clamp(2.75rem,4vw,4.5rem)] lg:max-w-[15ch]",
                  titleClassName
                )}
              >
                {resolvedTitle}
              </h2>
              <p className="copy-balance max-w-2xl text-sm leading-7 text-gray-200 md:text-base">
                {description}
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-between gap-4 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] px-6 py-4 text-sm font-medium tracking-[0.18em] text-black transition-transform duration-300 hover:scale-[1.02]"
              >
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-between gap-4 rounded-full border border-white/20 px-6 py-4 text-sm tracking-[0.18em] text-white transition-colors duration-300 hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                {secondaryLabel}
                <MoveRight className="h-4 w-4" />
              </Link>
              {tertiaryHref && tertiaryLabel ? (
                <Link
                  href={tertiaryHref}
                  className="inline-flex items-center justify-between gap-4 rounded-full border border-white/20 px-6 py-4 text-sm tracking-[0.18em] text-white transition-colors duration-300 hover:border-[#d4af37] hover:text-[#d4af37]"
                >
                  {tertiaryLabel}
                  <MoveRight className="h-4 w-4" />
                </Link>
              ) : null}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface StatStripProps {
  items: { label: string; value: string }[];
  className?: string;
}

export function StatStrip({ items, className }: StatStripProps) {
  return (
    <motion.div
      className={cn("grid gap-4 md:grid-cols-3", className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      {items.map(item => (
        <motion.div
          key={item.label}
          className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm"
          variants={fadeInUp}
        >
          <p className="text-xs tracking-[0.18em] text-gray-400">
            {item.label}
          </p>
          <p className="mt-2 text-lg font-light text-white">{item.value}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
