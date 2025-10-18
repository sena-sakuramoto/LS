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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <a href="#top" className="text-2xl font-bold tracking-wider">
            LS
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm tracking-wider hover:opacity-60 transition-opacity"
            >
              MISSION
            </a>
            <a
              href="#film"
              className="text-sm tracking-wider hover:opacity-60 transition-opacity"
            >
              FILM
            </a>
            <a
              href="#values"
              className="text-sm tracking-wider hover:opacity-60 transition-opacity"
            >
              VALUES
            </a>
            <a
              href="#company"
              className="text-sm tracking-wider hover:opacity-60 transition-opacity"
            >
              COMPANY
            </a>
            <a
              href="#contact"
              className="text-sm tracking-wider hover:opacity-60 transition-opacity"
            >
              CONTACT
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

