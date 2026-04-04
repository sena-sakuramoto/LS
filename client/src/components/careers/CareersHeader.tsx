import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import Link from "@/components/careers/CareersLink";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/careers/job/", label: "仕事について" },
  { href: "/careers/training/", label: "研修・制度" },
  { href: "/careers/interview/", label: "社員インタビュー" },
  { href: "/careers/benefits/", label: "待遇・福利厚生" },
  { href: "/careers/flow/", label: "選考フロー" },
];

export default function CareersHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
        isScrolled
          ? "border-b border-white/10 bg-black/95 backdrop-blur-md"
          : "bg-black/80 backdrop-blur-sm"
      )}
    >
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/careers/"
            className="inline-flex items-center transition-opacity hover:opacity-85"
          >
            <img
              src="/ls-logo-cropped.png"
              alt="LS"
              className="h-12 w-auto md:h-16"
            />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-nav text-xs text-white/80 transition-colors hover:text-[#d4af37]",
                  location.startsWith(link.href) && "text-[#d4af37]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/"
              className="ml-2 whitespace-nowrap text-[10px] tracking-[0.12em] text-white/45 transition-colors hover:text-white/75"
            >
              企業サイトはこちら →
            </a>
            <Link
              href="/careers/entry/"
              className="ml-4 inline-flex items-center justify-center rounded-sm bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] px-6 py-2.5 text-xs font-medium tracking-[0.15em] text-black transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
            >
              エントリーする
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(open => !open)}
            className="tap-bounce rounded-full border border-white/10 bg-white/5 p-2.5 text-white backdrop-blur-sm transition-colors hover:border-[#d4af37]/40 lg:hidden"
            aria-label={
              isMobileMenuOpen ? "メニューを閉じる" : "メニューを開く"
            }
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={cn(
            "fixed inset-x-0 bottom-0 top-20 z-40 transition-[opacity,transform] duration-300 lg:hidden",
            isMobileMenuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          )}
        >
          <div
            className="absolute inset-0 bg-black/74 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative flex h-full justify-end px-4 pb-4 pt-3">
            <nav className="w-full max-w-[312px] overflow-y-auto rounded-[1.5rem] border border-white/10 bg-black/95 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="space-y-2">
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block rounded-2xl border px-4 py-3 text-sm transition-colors",
                      location.startsWith(link.href)
                        ? "border-[#d4af37]/30 bg-white/5 text-[#d4af37]"
                        : "border-transparent text-white/82 hover:border-[#d4af37]/20 hover:bg-white/5 hover:text-[#d4af37]"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
                <Link
                  href="/careers/entry/"
                  className="block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] px-6 py-3 text-center text-sm font-medium tracking-[0.08em] text-black"
                >
                  エントリーする
                </Link>
                <a
                  href="/"
                  className="tap-bounce block rounded-2xl border border-white/10 px-4 py-3 text-center text-sm text-white/72 transition-colors hover:border-white/20 hover:text-white/88"
                >
                  企業サイトはこちら →
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
