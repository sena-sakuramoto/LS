import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import Link from "@/components/careers/CareersLink";
import { cn } from "@/lib/utils";

export default function CareersHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/careers/job/', label: '仕事について' },
    { href: '/careers/training/', label: '研修・制度' },
    { href: '/careers/interview/', label: '社員インタビュー' },
    { href: '/careers/benefits/', label: '待遇・福利厚生' },
    { href: '/careers/flow/', label: '選考フロー' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10' : 'bg-black/80 backdrop-blur-sm'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Link href="/careers/" className="font-logo text-3xl tracking-[0.1em] text-white hover:opacity-70 transition-opacity">
            LS
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-nav text-xs text-white/80 hover:text-[#d4af37] transition-colors ${
                  location.startsWith(link.href) ? 'text-[#d4af37]' : ''
                }`}
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
              className="ml-4 inline-block px-6 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] text-black text-xs tracking-[0.15em] font-medium rounded-sm hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-500 hover:scale-105"
            >
              エントリーする
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="tap-bounce lg:hidden rounded-full border border-white/10 bg-white/5 p-2 text-white backdrop-blur-sm transition-colors hover:border-[#d4af37]/40"
            aria-label="メニュー"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-[max-height,opacity,transform] duration-300",
            isMobileMenuOpen
              ? "pointer-events-auto max-h-[390px] opacity-100 translate-y-0"
              : "pointer-events-none max-h-0 opacity-0 -translate-y-2",
          )}
        >
          <div className="flex justify-end pb-4 pt-2">
            <nav className="w-full max-w-[272px] rounded-[1.5rem] border border-white/10 bg-black/95 p-3.5 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-2xl border border-transparent px-4 py-2.5 font-nav text-sm text-white/80 transition-colors hover:border-[#d4af37]/20 hover:bg-white/5 hover:text-[#d4af37]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
                <Link
                  href="/careers/entry/"
                  className="block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] px-6 py-3 text-center text-[11px] font-medium tracking-[0.15em] text-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  エントリーする
                </Link>
                <a
                  href="/"
                  className="tap-bounce block rounded-2xl border border-white/10 px-4 py-3 text-center text-[11px] tracking-[0.12em] text-white/60 transition-colors hover:border-white/20 hover:text-white/85"
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
