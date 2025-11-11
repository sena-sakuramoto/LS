import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="text-2xl font-light tracking-[0.3em] text-white hover:opacity-70 transition-opacity">
            LS
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/#about"
              className="text-xs tracking-[0.2em] text-white/80 hover:text-white transition-colors font-light"
            >
              MISSION
            </a>
            <a
              href="/#film"
              className="text-xs tracking-[0.2em] text-white/80 hover:text-white transition-colors font-light"
            >
              FILM
            </a>
            <a
              href="/#philosophy"
              className="text-xs tracking-[0.2em] text-white/80 hover:text-white transition-colors font-light"
            >
              PHILOSOPHY
            </a>
            <a
              href="/#projects"
              className="text-xs tracking-[0.2em] text-white/80 hover:text-white transition-colors font-light"
            >
              PROJECTS
            </a>
            <a
              href="/#values"
              className="text-xs tracking-[0.2em] text-white/80 hover:text-white transition-colors font-light"
            >
              VALUES
            </a>
            <a
              href="/#company"
              className="text-xs tracking-[0.2em] text-white/80 hover:text-white transition-colors font-light"
            >
              COMPANY
            </a>
            <a
              href="/careers"
              className="text-xs tracking-[0.2em] text-white/80 hover:text-white transition-colors font-light"
            >
              CAREERS
            </a>
            <a
              href="/#contact"
              className="text-xs tracking-[0.2em] text-white/80 hover:text-white transition-colors font-light"
            >
              CONTACT
            </a>
            <a href="/careers" className="ml-6">
              <div className="relative px-6 py-2 bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] text-black text-xs tracking-[0.2em] font-medium rounded-sm hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-500 hover:scale-105">
                <span className="relative z-10">求人中</span>
                <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

