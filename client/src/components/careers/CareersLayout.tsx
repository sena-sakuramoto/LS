import { useEffect } from "react";
import { useLocation } from "wouter";
import CareersHeader from './CareersHeader';
import CareersFooter from './CareersFooter';

interface CareersLayoutProps {
  children: React.ReactNode;
}

export default function CareersLayout({ children }: CareersLayoutProps) {
  const [location] = useLocation();

  useEffect(() => {
    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      const main = document.querySelector("main");
      if (main instanceof HTMLElement) {
        main.scrollTop = 0;
      }
    };

    resetScroll();
    const rafId = window.requestAnimationFrame(() => {
      resetScroll();
      window.requestAnimationFrame(resetScroll);
    });
    const timeoutId = window.setTimeout(resetScroll, 150);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
    };
  }, [location]);

  return (
    <div className="min-h-screen bg-black text-white">
      <CareersHeader />
      <main className="pt-20">
        {children}
      </main>
      <CareersFooter />
    </div>
  );
}
