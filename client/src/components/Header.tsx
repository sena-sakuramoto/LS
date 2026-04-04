import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/#about", label: "MISSION" },
    { href: "/#film", label: "FILM" },
    { href: "/#philosophy", label: "PHILOSOPHY" },
    { href: "/#projects", label: "PROJECTS" },
    { href: "/#values", label: "VALUES" },
    { href: "/#company", label: "COMPANY" },
    { href: "/careers", label: "CAREERS" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <a
            href="/"
            className="inline-flex items-center hover:opacity-85 transition-opacity"
          >
            <img
              src="/ls-logo-cropped.png"
              alt="LS"
              className="h-12 w-auto md:h-14"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="font-nav text-xs text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://career-cloud.asia/"
              target="_blank"
              rel="noopener noreferrer"
              className="tap-bounce font-nav text-xs text-white/80 hover:text-white transition-colors"
            >
              CONTACT
            </a>
            <a href="/careers" className="ml-6 tap-bounce">
              <div className="relative px-6 py-2 bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] text-black text-xs tracking-[0.2em] font-medium rounded-sm hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-500 hover:scale-105">
                <span className="relative z-10">RECRUIT</span>
                <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </a>
          </nav>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="tap-bounce md:hidden rounded-full border border-white/10 bg-white/5 p-2 text-white backdrop-blur-sm transition-colors hover:border-[#d4af37]/40"
            aria-label="メニュー"
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
            "fixed inset-x-0 top-20 bottom-0 z-40 md:hidden transition-[opacity,transform] duration-300",
            isMobileMenuOpen
              ? "pointer-events-auto opacity-100 translate-y-0"
              : "pointer-events-none opacity-0 -translate-y-2"
          )}
        >
          <div
            className="absolute inset-0 bg-black/72 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative flex h-full justify-end px-4 pb-4 pt-2">
            <nav className="w-full max-w-[272px] overflow-y-auto rounded-[1.5rem] border border-white/10 bg-black/95 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl max-h-[min(520px,calc(100dvh-7rem))]">
              <div className="space-y-2">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="tap-bounce block rounded-2xl border border-transparent px-4 py-3 font-nav text-sm text-white/80 transition-colors hover:border-[#d4af37]/20 hover:bg-white/5 hover:text-[#d4af37]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
                <a
                  href="/careers"
                  className="tap-bounce block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] px-6 py-3 text-center text-xs font-medium tracking-[0.15em] text-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  RECRUIT
                </a>
                <a
                  href="https://career-cloud.asia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-bounce block rounded-2xl border border-white/10 px-4 py-3 text-center text-xs tracking-[0.12em] text-white/60 transition-colors hover:border-white/20 hover:text-white/85"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACT
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
