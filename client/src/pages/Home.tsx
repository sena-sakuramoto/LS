import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  // マウス追従機能を削除
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [scrollY, setScrollY] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setScrollY(window.scrollY);
    };

    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    document.querySelectorAll('section[id]').forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Canvas particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.1)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach((p) => {
        ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // マウスパララックスを削除

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden" style={{ perspective: '1000px' }}>
      {/* Canvas Particle Network */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[5]"
      />

      {/* Scroll Progress Bar with Glow */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-[100]">
        <div 
          className="h-full bg-gradient-to-r from-[#d4af37] via-[#f4e5c3] to-[#d4af37] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* カスタムカーソルを削除 */}

      <Header />
      
      {/* Hero Section - 3D Parallax */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
        {/* 3D Parallax Layers */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            transform: `translateZ(-100px) scale(1.1) translate(${0}px, ${0}px)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              transform: `translateY(${scrollProgress * 0.5}px) scale(${1 + scrollProgress * 0.001})`,
              filter: `blur(${scrollProgress * 0.05}px)`
            }}
          >
            <img 
              src="/luxury-2.jpeg" 
              alt="LS Premium Space" 
              className="w-full h-full object-cover mix-blend-luminosity"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black"></div>
        </div>
        
        {/* Animated Mesh Gradient Orbs with 3D */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[
            { size: 600, top: '10%', left: '5%', delay: 0, depth: 0.03 },
            { size: 500, bottom: '15%', right: '10%', delay: 2, depth: 0.04 },
            { size: 400, top: '50%', left: '50%', delay: 4, depth: 0.05 }
          ].map((orb, i) => (
            <div
              key={i}
              className="absolute rounded-full blur-3xl animate-pulse"
              style={{
                width: `${orb.size}px`,
                height: `${orb.size}px`,
                top: orb.top,
                bottom: orb.bottom,
                left: orb.left,
                right: orb.right,
                background: `radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)`,
                animationDelay: `${orb.delay}s`,
                transform: `translate(${0}px, ${0}px) translateZ(${orb.delay * 20}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            ></div>
          ))}
        </div>
        
        {/* Content with 3D Transform */}
        <div 
          className="relative z-10 text-center space-y-16 px-4 max-w-7xl mx-auto"
          style={{
            transform: `translateZ(50px) translate(${0}px, ${0}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          <div className="mb-20 animate-fade-in-up">
            <img 
              src="/ls-logo.png" 
              alt="株式会社LS" 
              className="w-56 h-56 mx-auto drop-shadow-2xl transition-all duration-700"
              style={{
                transform: `rotate(0deg) scale(1)`
              }}
            />
          </div>
          
          <div className="space-y-12">
            <h1 className="text-8xl md:text-[10rem] lg:text-[14rem] font-light tracking-[0.15em] leading-none drop-shadow-2xl">
              {['L', 'S'].map((letter, i) => (
                <span 
                  key={i}
                  className="inline-block animate-fade-in-up hover:gold-gradient transition-all duration-500" 
                  style={{
                    animationDelay: `${0.2 + i * 0.1}s`,
                    transform: `translateY(${Math.sin(scrollY * 0.01 + i) * 10}px)`,
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>
            
            <div className="flex items-center justify-center gap-12 animate-fade-in" style={{animationDelay: '0.5s'}}>
              <div className="h-px w-40 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
              <div 
                className="w-3 h-3 bg-[#d4af37] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.8)] animate-pulse"
                style={{
                  transform: `scale(${1 + Math.sin(scrollY * 0.05) * 0.3})`
                }}
              ></div>
              <div className="h-px w-40 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
            </div>
            
            <p 
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.1em] leading-[1.3] animate-fade-in-up" 
              style={{
                animationDelay: '0.7s',
                transform: `translateZ(30px)`
              }}
            >
              空間を超え、<br />ブランドを創造する。
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center pt-16 animate-fade-in-up" style={{animationDelay: '0.9s'}}>
            <a href="#vision">
              <Button 
                variant="outline" 
                size="lg"
                className="magnetic-button bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] text-black hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] border-0 px-16 py-8 text-lg tracking-[0.2em] font-light transition-all duration-700 hover:scale-110 hover:-translate-y-2"
                style={{
                  transform: `translateZ(40px)`
                }}
              >
                OUR VISION
              </Button>
            </a>
            <a href="#contact">
              <Button 
                variant="outline" 
                size="lg"
                className="magnetic-button bg-transparent text-white hover:bg-white/10 border-2 border-[#d4af37] px-16 py-8 text-lg tracking-[0.2em] font-light backdrop-blur-sm transition-all duration-700 hover:scale-110 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
                style={{
                  transform: `translateZ(40px)`
                }}
              >
                CONTACT US
              </Button>
            </a>
          </div>
          
          {/* Scroll Indicator with Wave Animation */}
          <div 
            className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-[#d4af37]"
            style={{
              animation: 'bounce 2s infinite',
              transform: `translateY(${Math.sin(scrollY * 0.1) * 5}px)`
            }}
          >
            <span className="text-xs tracking-[0.4em] font-light">SCROLL</span>
            <div className="w-px h-24 bg-gradient-to-b from-[#d4af37] to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Stats Section - 3D Flip Cards */}
      <section 
        id="stats" 
        className={`relative py-20 md:py-40 bg-gradient-to-b from-black to-gray-900 border-y border-[#d4af37]/20 transition-all duration-1000 ${isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="container max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
            {[
              { value: "50", unit: "億", label: "TARGET REVENUE", delay: "0s", color: "from-[#d4af37] to-[#f4e5c3]" },
              { value: "100", unit: "+", label: "PROJECTS", delay: "0.2s", color: "from-[#f4e5c3] to-[#d4af37]" },
              { value: "5", unit: "年", label: "TO STANDARD", delay: "0.4s", color: "from-[#d4af37] to-[#f4e5c3]" },
              { value: "AI", unit: "×", label: "INNOVATION", delay: "0.6s", color: "from-[#f4e5c3] to-[#d4af37]" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center space-y-6 group cursor-pointer stagger-item" 
                style={{
                  animationDelay: stat.delay,
                  transformStyle: 'preserve-3d',
                  transform: `translateZ(${20 + index * 10}px) rotateY(${0 * 0.1}deg)`
                }}
              >
                <div 
                  className={`text-7xl md:text-8xl font-light bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-125 transition-all duration-700`}
                  style={{
                    transform: `translateY(${Math.sin(scrollY * 0.01 + index) * 5}px)`,
                    textShadow: '0 0 30px rgba(212,175,55,0.5)'
                  }}
                >
                  {stat.value}<span className="text-5xl">{stat.unit}</span>
                </div>
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto group-hover:w-32 transition-all duration-500"></div>
                <p className="text-xs tracking-[0.3em] text-gray-400 font-light group-hover:text-[#d4af37] transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section - Tilt on Hover */}
      <section 
        id="mission" 
        className={`relative py-56 bg-white text-black overflow-hidden transition-all duration-1000 ${isVisible.mission ? 'opacity-100' : 'opacity-0'}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Decorative Elements with Scroll Animation */}
        <div 
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent opacity-50 transition-transform duration-1000"
          style={{ transform: isVisible.mission ? 'translateX(0)' : 'translateX(100px)' }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-3xl transition-transform duration-1000"
          style={{ 
            transform: isVisible.mission ? `scale(1) translate(${0}px, ${0}px)` : 'scale(0.5)'
          }}
        ></div>
        <div 
          className="absolute top-20 right-20 w-[400px] h-[400px] border border-[#d4af37]/10 rounded-full"
          style={{
            animation: 'spin 20s linear infinite',
            transform: `rotate(${scrollY * 0.1}deg)`
          }}
        ></div>
        
        <div className="container max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div 
              className={`lg:col-span-5 space-y-16 transition-all duration-1000 delay-200 ${isVisible.mission ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
            >
              <div>
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-px bg-[#d4af37]"></div>
                  <span className="text-xs tracking-[0.5em] text-gray-400 font-light">MISSION</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-light leading-[1.3] tracking-tight mb-16">
                  {['空間を超え、', 'ブランドを創造する。'].map((text, i) => (
                    <span 
                      key={i}
                      className="block hover:gold-gradient transition-all duration-500 cursor-pointer"
                      style={{
                        transitionDelay: `${i * 0.1}s`,
                        transform: `translateX(${Math.sin(scrollY * 0.01 + i) * 10}px)`
                      }}
                    >
                      {text}
                    </span>
                  ))}
                </h2>
              </div>
              
              <div className="space-y-10">
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed font-light md:whitespace-nowrap">
                  私たちLSは、内装という「箱」を作るだけではなく、<span className="gold-gradient font-normal">事業の世界観と収益モデル</span>まで設計します。
                </p>
                
                <p className="text-base md:text-lg text-gray-500 leading-relaxed font-light md:whitespace-nowrap">
                  立地・動線・席数・オペレーション・採用・販促——店舗の成功に関わる要素を統合し、"続く売上"が生まれるブランド体験をつくる。それが私たちの使命です。
                </p>
              </div>
            </div>
            
            <div 
              className={`lg:col-span-7 relative transition-all duration-1000 delay-400 ${isVisible.mission ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
            >
              <div 
                className="relative h-[800px] group"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${0 * 0.05}deg) rotateX(${-0 * 0.05}deg)`
                }}
              >
                {/* Main Image with 3D Tilt */}
                <div className="absolute inset-0 overflow-hidden shadow-2xl image-overlay">
                  <img 
                    src="/mission-bg.jpg" 
                    alt="Mission Space" 
                    className="w-full h-full object-cover"
                    style={{
                      transform: `scale(${1 + Math.abs(0) * 0.0001})`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Hover Overlay Info with Fade */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                    <div className="text-center text-white space-y-4">
                      <div className="w-20 h-px bg-white mx-auto mb-6 group-hover:w-32 transition-all duration-500"></div>
                      <p className="text-2xl font-light tracking-[0.2em]">PREMIUM DESIGN</p>
                      <div className="w-20 h-px bg-white mx-auto mt-6 group-hover:w-32 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Card with 3D */}
                <div 
                  className="absolute -bottom-16 -right-16 glass p-10 shadow-2xl max-w-md backdrop-blur-xl border border-[#d4af37]/20 hover-lift group/card cursor-pointer"
                  style={{
                    transform: `translateZ(60px) translate(${0}px, ${0}px)`
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-px bg-[#d4af37] group-hover/card:w-20 transition-all duration-500"></div>
                    <p className="text-xs tracking-[0.3em] text-gray-600 font-light">PHILOSOPHY</p>
                  </div>
                  <p className="text-2xl text-black font-light leading-relaxed group-hover/card:gold-gradient transition-all duration-500">
                    "続く売上"が生まれる<br />ブランド体験をつくる
                  </p>
                </div>
                
                {/* Decorative Frame with Rotation */}
                <div 
                  className="absolute -top-8 -right-8 w-32 h-32 border-t-2 border-r-2 border-[#d4af37]/30 transition-all duration-700"
                  style={{
                    transform: `rotate(${scrollY * 0.05}deg)`
                  }}
                ></div>
                <div 
                  className="absolute -bottom-8 -left-8 w-32 h-32 border-b-2 border-l-2 border-[#d4af37]/30 transition-all duration-700"
                  style={{
                    transform: `rotate(${-scrollY * 0.05}deg)`
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - Morphing Grid */}
      <section 
        id="vision" 
        className={`relative py-56 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden grid-bg transition-all duration-1000 ${isVisible.vision ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Animated Morphing Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 transition-all duration-1000" 
            style={{
              backgroundImage: 'radial-gradient(circle at 3px 3px, #d4af37 2px, transparent 0)',
              backgroundSize: '60px 60px',
              transform: `scale(${1 + Math.sin(scrollY * 0.01) * 0.1}) rotate(${scrollY * 0.05}deg)`,
              backgroundPosition: `${scrollY * 0.5}px ${scrollY * 0.3}px`
            }}
          ></div>
        </div>
        
        <div className="container max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div 
              className={`lg:col-span-7 relative order-2 lg:order-1 transition-all duration-1000 delay-200 ${isVisible.vision ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="grid grid-cols-2 gap-8">
                {/* Large Image with 3D Depth */}
                <div 
                  className="col-span-2 relative h-[600px] group overflow-hidden image-overlay"
                  style={{
                    transform: `translateZ(30px) rotateY(${0 * 0.1}deg)`
                  }}
                >
                  <img 
                    src="/vision-bg.jpg" 
                    alt="Vision Space" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Image Number Badge with Pulse */}
                  <div 
                    className="absolute top-8 left-8 glass px-6 py-3 border border-white/20 group-hover:scale-110 group-hover:bg-[#d4af37] transition-all duration-500"
                  >
                    <span className="text-sm tracking-[0.3em] font-light">01</span>
                  </div>
                </div>
                
                {/* Small Images with 3D Stagger */}
                {[
                  { src: "/luxury-4.png", alt: "Interior Detail", num: "02", depth: 20 },
                  { src: "/luxury-5.jpg", alt: "Design Detail", num: "03", depth: 40 }
                ].map((img, index) => (
                  <div 
                    key={index}
                    className={`relative h-72 group overflow-hidden image-overlay transition-all duration-700 delay-${(index + 1) * 200} ${isVisible.vision ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{
                      transform: `translateZ(${img.depth}px) rotateY(${0 * 0.1}deg)`
                    }}
                  >
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6 glass px-4 py-2 border border-white/20 group-hover:scale-110 group-hover:bg-[#d4af37] transition-all duration-500">
                      <span className="text-xs tracking-[0.3em] font-light">{img.num}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div 
              className={`lg:col-span-5 space-y-16 order-1 lg:order-2 transition-all duration-1000 delay-400 ${isVisible.vision ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
            >
              <div>
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-px bg-[#d4af37]"></div>
                  <span className="text-xs tracking-[0.5em] text-gray-400 font-light">VISION</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-light leading-[1.3] tracking-tight mb-16">
                  {['業界を変革し、', 'ブランドカンパニーに', 'なる。'].map((text, i) => (
                    <span 
                      key={i}
                      className="block hover:gold-gradient transition-all duration-500 cursor-pointer"
                      style={{
                        transitionDelay: `${i * 0.1}s`,
                        transform: `translateX(${Math.sin(scrollY * 0.01 + i) * 10}px)`
                      }}
                    >
                      {text}
                    </span>
                  ))}
                </h2>
              </div>
              
              <p className="text-2xl md:text-3xl text-gray-300 leading-[1.6] font-light">
                内装＝コストという常識を変え、<br />
                <span className="gold-gradient font-normal">内装＝投資</span>へ。
              </p>
              
              <div className="space-y-10 pt-12">
                {[
                  { title: "事業づくり視点の内装", desc: "成果に直結する店舗を増やす" },
                  { title: "全国展開の実現", desc: "同品質・同スピードで全国へ" },
                  { title: "建築 × AI", desc: "意思決定と設計を高度化" },
                  { title: "5年でスタンダードへ", desc: "ブランドカンパニーとしての地位確立" }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start gap-8 group cursor-pointer transition-all duration-700 delay-${index * 100} ${isVisible.vision ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                    style={{
                      transform: `translateZ(${10 + index * 5}px)`
                    }}
                  >
                    <div 
                      className="flex-shrink-0 w-16 h-16 border-2 border-[#d4af37]/30 flex items-center justify-center group-hover:bg-[#d4af37] group-hover:border-[#d4af37] transition-all duration-700"
                    >
                      <span className="text-sm font-light group-hover:text-black">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-2">
                      <h4 className="text-2xl font-light mb-3 group-hover:gold-gradient transition-colors duration-500">{item.title}</h4>
                      <p className="text-gray-400 text-sm font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Film Section - 3D Frame */}
      <section 
        id="film" 
        className={`relative py-56 bg-black transition-all duration-1000 ${isVisible.film ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="container max-w-7xl">
          <div className="text-center mb-32">
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">BRAND FILM</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>
            
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-light mb-16 tracking-tight leading-tight">
              ブランドが<br />動き出す瞬間
            </h2>
            
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              LSが手がける空間とブランド体験の哲学を、短編映像に凝縮しました。
            </p>
          </div>
          
          <div 
            className="relative max-w-6xl mx-auto"
            style={{
              transform: `translateZ(50px) rotateY(${0 * 0.05}deg) rotateX(${-0 * 0.05}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Decorative Multi-Layer Frame with 3D Depth */}
            {[-12, -20, -28].map((inset, i) => (
              <div 
                key={i}
                className="absolute border border-[#d4af37] pointer-events-none animate-pulse"
                style={{
                  inset: `${inset}px`,
                  opacity: 0.2 - i * 0.05,
                  animationDelay: `${i * 0.5}s`,
                  transform: `translateZ(${-i * 10}px)`
                }}
              ></div>
            ))}
            
            {/* Corner Decorations with Rotation */}
            {[
              { top: '-16px', left: '-16px', rotateVal: 0 },
              { top: '-16px', right: '-16px', rotateVal: 90 },
              { bottom: '-16px', left: '-16px', rotateVal: 270 },
              { bottom: '-16px', right: '-16px', rotateVal: 180 }
            ].map((corner, i) => (
              <div 
                key={i}
                className="absolute w-24 h-24 border-t-2 border-l-2 border-[#d4af37] hover:w-32 hover:h-32 transition-all duration-500"
                style={{
                  top: corner.top,
                  left: corner.left,
                  right: corner.right,
                  bottom: corner.bottom,
                  transform: `rotate(${corner.rotateVal + scrollY * 0.1}deg) translateZ(20px)`
                }}
              ></div>
            ))}
            
            <div className="relative aspect-video bg-black shadow-2xl overflow-hidden group hover-lift">
              <iframe
                src="https://www.youtube.com/embed/GjfqIFZ2SPg?si=AZ8gf3B0byRfezB7"
                title="LS Brand Film"
                className="w-full h-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="relative py-20 md:py-40 bg-white overflow-hidden">
        <div className="container grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="flex items-center gap-6">
              <div className="w-16 h-px bg-[#d4af37]"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">PHILOSOPHY</span>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-light leading-[1.3] tracking-tight whitespace-nowrap">
              "続く売上"が生まれるブランド体験をつくる
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              私たちLSは、内装という「箱」を作るだけではなく、事業の世界観と収益モデルまで設計します。
            </p>
          </div>
          
          <div className="relative ml-auto" style={{ maxWidth: '800px' }}>
            <img 
              src="/architecture-2.jpg" 
              alt="Philosophy" 
              className="w-full h-[600px] object-cover shadow-2xl hover-lift"
            />
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section 
        id="projects" 
        className="relative py-56 bg-black text-white"
      >
        <div className="container max-w-7xl">
          <div className="text-center mb-32">
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">PROJECTS</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>
            
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-light mb-12 tracking-tight gold-gradient">
              実績
            </h2>
            
            <p className="text-2xl text-gray-400 font-light">
              私たちが手掛けたブランド空間
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: '/architecture-1.jpg', title: 'プロジェクト 01', category: '店舗内装' },
              { img: '/architecture-2.jpg', title: 'プロジェクト 02', category: 'オフィス設計' },
              { img: '/architecture-3.jpg', title: 'プロジェクト 03', category: '商業施設' },
              { img: '/architecture-1.jpg', title: 'プロジェクト 04', category: '飲食店' },
              { img: '/architecture-2.jpg', title: 'プロジェクト 05', category: 'ホテル' },
              { img: '/architecture-3.jpg', title: 'プロジェクト 06', category: '小売店舗' },
              { img: '/architecture-1.jpg', title: 'プロジェクト 07', category: 'サロン' },
              { img: '/architecture-2.jpg', title: 'プロジェクト 08', category: 'ショールーム' },
              { img: '/architecture-3.jpg', title: 'プロジェクト 09', category: '複合施設' },
            ].map((project, i) => (
              <div 
                key={i}
                className="group relative overflow-hidden bg-gray-900 aspect-[4/3] hover-lift cursor-pointer"
              >
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="text-xs tracking-[0.3em] text-[#d4af37] mb-2">{project.category}</div>
                    <h3 className="text-3xl font-light">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-24">
            <Button 
              variant="outline" 
              size="lg"
              className="magnetic-button border-2 border-white text-white hover:bg-white hover:text-black px-16 py-8 text-sm tracking-[0.3em] font-light transition-all duration-700"
            >
              VIEW ALL PROJECTS
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section - 3D Card Flip */}
      <section 
        id="values" 
        className={`relative py-56 bg-white text-black transition-all duration-1000 ${isVisible.values ? 'opacity-100' : 'opacity-0'}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="container max-w-7xl">
          <div className="text-center mb-32">
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">VALUES</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>
            
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-light mb-12 tracking-tight">
              バリュー
            </h2>
            
            <p className="text-5xl md:text-6xl text-gray-600 font-light tracking-wide">
              "超"で貫く5つの基準
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                num: "01",
                title: "超顧客思考",
                desc: "成果から逆算して設計・工事・運用まで伴走。",
                points: ["売上・粗利を初回提案に数値化", "費用対効果の低い装飾を排除", "引渡し後30日レビュー実施"]
              },
              {
                num: "02",
                title: "超徹底",
                desc: "約束・基準・手順を守り切る。",
                points: ["チェックリスト運用の徹底", "記録主義で全て保管", "リスクは\"はじめに言う\""]
              },
              {
                num: "03",
                title: "超追求",
                desc: "品質と再現性に貪欲。",
                points: ["ディテールまで設計検証", "最適点を比較提示", "学びを標準化して反映"]
              },
              {
                num: "04",
                title: "超連携",
                desc: "全てのステークホルダーが一体。",
                points: ["情報の一元管理", "三者合意ルール", "トラブル時の即共有"]
              },
              {
                num: "05",
                title: "超挑戦",
                desc: "スピードと挑戦で業界を前進。",
                points: ["最短48時間で3案提示", "新技術を積極採用", "失敗を学びに変換"]
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className={`group relative bg-gradient-to-br from-gray-50 via-white to-gray-50 p-14 border-2 border-gray-200 hover:border-[#d4af37] hover:shadow-2xl transition-all duration-1000 cursor-pointer overflow-hidden ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""} ${isVisible.values ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  transformStyle: 'preserve-3d',
                  transform: `translateZ(${index * 10}px) rotateY(${0 * 0.1}deg)`
                }}
              >
                {/* Left and Bottom Border Animation */}
                <div className="absolute left-0 bottom-0 h-0 w-2 bg-gradient-to-t from-[#d4af37] to-[#f4e5c3] group-hover:h-full transition-all duration-1000"></div>
                <div className="absolute left-0 bottom-0 w-0 h-2 bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] group-hover:w-full transition-all duration-1000"></div>
                
                {/* Background Shimmer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 shimmer"></div>
                
                <div className="mb-8 md:mb-16 relative">
                  <span 
                    className="text-6xl md:text-8xl lg:text-9xl font-light text-gray-300 group-hover:text-[#d4af37] transition-all duration-700 inline-block"
                  >
                    {value.num}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-4xl font-light mb-6 md:mb-10 tracking-tight group-hover:tracking-wide transition-all duration-700 relative z-10">
                  {value.title}
                </h3>
                
                <p className="text-base md:text-2xl mb-6 md:mb-10 text-gray-600 font-light leading-relaxed relative z-10">
                  {value.desc}
                </p>
                
                <ul className="space-y-5 text-base text-gray-500 font-light relative z-10">
                  {value.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-4 group/item">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                      <span className="group-hover/item:text-black transition-colors">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Section - 3D Glass Box */}
      <section 
        id="company" 
        className={`relative py-56 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden transition-all duration-1000 ${isVisible.company ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Background Pattern with 3D Rotation */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0 transition-transform duration-1000" 
            style={{
              backgroundImage: 'linear-gradient(30deg, #d4af37 12%, transparent 12.5%, transparent 87%, #d4af37 87.5%, #d4af37), linear-gradient(150deg, #d4af37 12%, transparent 12.5%, transparent 87%, #d4af37 87.5%, #d4af37)',
              backgroundSize: '80px 140px',
              transform: `rotate(${scrollY * 0.05}deg) scale(${1 + Math.sin(scrollY * 0.01) * 0.1})`
            }}
          ></div>
        </div>
        
        <div className="container max-w-6xl relative z-10">
          <div className="text-center mb-32">
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">COMPANY</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>
            
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-light mb-12 tracking-tight">
              会社概要
            </h2>
          </div>
          
          <div 
            className="relative glass p-20 md:p-24 border-2 border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all duration-700"
            style={{
              transform: `translateZ(40px) rotateY(${0 * 0.05}deg) rotateX(${-0 * 0.05}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Decorative Corners with 3D */}
            {[
              { top: '0', left: '0', borderTop: true, borderLeft: true, rotateVal: 0 },
              { top: '0', right: '0', borderTop: true, borderRight: true, rotateVal: 90 },
              { bottom: '0', left: '0', borderBottom: true, borderLeft: true, rotateVal: 270 },
              { bottom: '0', right: '0', borderBottom: true, borderRight: true, rotateVal: 180 }
            ].map((corner, i) => (
              <div 
                key={i}
                className="absolute w-32 h-32 border-[#d4af37] hover:w-40 hover:h-40 transition-all duration-500"
                style={{
                  top: corner.top,
                  left: corner.left,
                  right: corner.right,
                  bottom: corner.bottom,
                  borderTopWidth: corner.borderTop ? '4px' : '0',
                  borderBottomWidth: corner.borderBottom ? '4px' : '0',
                  borderLeftWidth: corner.borderLeft ? '4px' : '0',
                  borderRightWidth: corner.borderRight ? '4px' : '0',
                  transform: `rotate(${corner.rotateVal + scrollY * 0.02}deg) translateZ(10px)`
                }}
              ></div>
            ))}
            
            <div className="space-y-12">
              {[
                { label: "会社名", value: "株式会社LS" },
                { label: "設立", value: "2023年10月" },
                { label: "所在地", value: "東京都渋谷区渋谷1-12-2 クロスオフィス渋谷505" },
                { label: "代表者", value: "本間 拓彌" },
                { label: "資本金", value: "1,000,000円" },
                { label: "事業内容", value: "店舗内装のコンサルティング／設計デザイン／施工・PM／ブランド展開支援" },
                { label: "建設業許可", value: "東京都知事 許可（般-7）第159994号" },
                { label: "従業員数", value: "コアメンバー5名" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#d4af37]/20 last:border-0 group hover:border-[#d4af37]/50 transition-all duration-500 ${isVisible.company ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                  style={{ 
                    transitionDelay: `${index * 0.05}s`,
                    transform: `translateZ(${5 + index * 2}px)`
                  }}
                >
                  <div className="text-sm tracking-[0.3em] text-gray-400 font-light uppercase">
                    {item.label}
                  </div>
                  <div className="md:col-span-3 text-2xl font-light group-hover:gold-gradient transition-all duration-500">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Magnetic Pull Effect */}
      <section 
        id="cta"
        className={`relative py-48 bg-white text-black overflow-hidden transition-all duration-1000 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        {/* Animated Background Grid with Morph */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(212,175,55,.1) 25%, rgba(212,175,55,.1) 26%, transparent 27%, transparent 74%, rgba(212,175,55,.1) 75%, rgba(212,175,55,.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(212,175,55,.1) 25%, rgba(212,175,55,.1) 26%, transparent 27%, transparent 74%, rgba(212,175,55,.1) 75%, rgba(212,175,55,.1) 76%, transparent 77%, transparent)',
              backgroundSize: '80px 80px',
              transform: `scale(${1 + Math.sin(scrollY * 0.01) * 0.05})`,
              backgroundPosition: `${Math.sin(scrollY * 0.01) * 20}px ${Math.cos(scrollY * 0.01) * 20}px`
            }}
          ></div>
        </div>
        
        <div className="container max-w-7xl relative z-10">
          <div className="text-center mb-32">
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="w-24 h-px bg-[#d4af37]"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">CAREERS</span>
              <div className="w-24 h-px bg-[#d4af37]"></div>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-light mb-20 tracking-tight leading-[1.3]">
              次世代の<br />
              ブランド体験を、<br />
              共に創造しませんか。
            </h2>
            
            <p className="text-3xl md:text-4xl text-gray-600 mb-16 font-light max-w-4xl mx-auto leading-relaxed">
              LSは、あなたの情熱と専門性を求めています。
            </p>
          </div>

          {/* 募集職種 */}
          <div className="mb-32">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-20 text-center">募集職種</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  title: '空間デザイナー',
                  desc: 'ブランド体験を空間に落とし込む設計者',
                  requirements: ['建築・インテリアデザイン経験3年以上', 'CAD/3Dソフト使用経験', 'ブランド理解力'],
                  type: '正社員'
                },
                {
                  title: 'プロジェクトマネージャー',
                  desc: '設計から施工まで一気通貫で管理',
                  requirements: ['PM経験2年以上', '建築・内装業界知識', 'コミュニケーション能力'],
                  type: '正社員'
                },
                {
                  title: 'ブランドストラテジスト',
                  desc: '事業戦略とブランド体験を設計',
                  requirements: ['ブランディング経験', '事業企画・戦略立案経験', 'データ分析スキル'],
                  type: '正社員'
                },
                {
                  title: '施工管理',
                  desc: '高品質な施工を実現する現場責任者',
                  requirements: ['施工管理経験3年以上', '建築士または施工管理技士資格歓迎', '品質管理能力'],
                  type: '正社員'
                }
              ].map((job, index) => (
                <div 
                  key={index}
                  className="group relative bg-white p-6 md:p-12 border-2 border-gray-200 hover:border-[#d4af37] hover:shadow-2xl transition-all duration-700 cursor-pointer"
                >
                  <div className="absolute top-8 right-8">
                    <span className="text-sm text-[#d4af37] border border-[#d4af37] px-4 py-2">{job.type}</span>
                  </div>
                  
                  <h4 className="text-2xl md:text-4xl font-light mb-4 md:mb-6 group-hover:text-[#d4af37] transition-colors duration-500">{job.title}</h4>
                  <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-10 font-light">{job.desc}</p>
                  
                  <div className="space-y-4">
                    <p className="text-sm text-gray-400 tracking-wider">必要スキル・経験</p>
                    <ul className="space-y-3">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] group-hover:w-full transition-all duration-700"></div>
                </div>
              ))}
            </div>
          </div>

          {/* 福利厚生・働く環境 */}
          <div className="mb-32">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-20 text-center">福利厚生・働く環境</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { icon: '💰', title: '競争力のある報酬', desc: '業界トップクラスの給与水準と成果連動型ボーナス' },
                { icon: '📈', title: '成長機会', desc: '最新技術・トレンドに触れる機会、外部研修支援' },
                { icon: '⚖️', title: 'ワークライフバランス', desc: 'フレックスタイム制、リモートワーク可' },
                { icon: '🏥', title: '充実の保険', desc: '各種社会保険完備、健康診断サポート' },
                { icon: '🎯', title: '裁量権', desc: 'フラットな組織で意思決定に参画' },
                { icon: '🌏', title: '多様性', desc: '年齢・国籍問わず、実力主義の評価' }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-6 md:p-10 bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#d4af37] transition-all duration-500">
                  <div className="text-4xl md:text-6xl mb-4 md:mb-6">{benefit.icon}</div>
                  <h4 className="text-xl md:text-2xl font-light mb-3 md:mb-4">{benefit.title}</h4>
                  <p className="text-gray-600 font-light leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-2xl text-gray-600 mb-12 font-light">まずはカジュアル面談から。あなたのキャリアについてお聞かせください。</p>
            <a href="/careers">
              <Button 
                size="lg"
                className="magnetic-button bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] text-black hover:shadow-[0_0_60px_rgba(212,175,55,0.8)] px-12 md:px-24 py-6 md:py-12 text-lg md:text-2xl tracking-[0.2em] md:tracking-[0.3em] font-light transition-all duration-700 hover:scale-110 hover:-translate-y-3 border-0"
                style={{
                  transform: `translateZ(50px) translate(${0 * 0.1}px, ${0 * 0.1}px)`
                }}
              >
                JOIN US
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - 3D Depth */}
      <footer id="contact" className="relative py-20 md:py-40 bg-black border-t-2 border-[#d4af37]/20">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
            <div className="md:col-span-2 space-y-10">
              <img 
                src="/ls-logo.png" 
                alt="株式会社LS" 
                className="w-48 h-48 opacity-80 transition-all duration-700"
                style={{
                  transform: `rotate(${Math.sin(scrollY * 0.01) * 5}deg) scale(${1 + Math.abs(Math.sin(scrollY * 0.01)) * 0.1})`
                }}
              />
              <p className="text-3xl text-gray-300 font-light leading-relaxed max-w-md">
                空間を超え、<br />ブランドを創造する。
              </p>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-white text-sm font-light mb-10 tracking-[0.4em]">COMPANY</h4>
              <div className="space-y-5 text-gray-400 text-base font-light leading-relaxed">
                <p>株式会社LS</p>
                <p>東京都渋谷区渋谷1-12-2<br />クロスオフィス渋谷505</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-white text-sm font-light mb-10 tracking-[0.4em]">CONTACT</h4>
              <Button 
                variant="outline" 
                className="magnetic-button bg-transparent text-white border-2 border-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-700 px-10 py-7 text-sm tracking-[0.3em] font-light hover:scale-105 hover:-translate-y-2"
              >
                お問い合わせ
              </Button>
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-xs border-t border-[#d4af37]/20 pt-20 tracking-[0.3em] font-light">
            <p>&copy; 2025 株式会社LS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

