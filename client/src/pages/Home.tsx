import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-[100]">
        <div 
          className="h-full bg-gradient-to-r from-[#d4af37] via-[#f4e5c3] to-[#d4af37] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Custom Cursor */}
      <div 
        className="hidden lg:block fixed w-6 h-6 border-2 border-[#d4af37] rounded-full pointer-events-none z-[100] mix-blend-difference transition-transform duration-200"
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      ></div>

      <Header />
      
      {/* Hero Section - Ultra Premium with Parallax */}
      <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
        {/* Parallax Background Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              transform: `translateY(${scrollProgress * 0.5}px)`
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
        
        {/* Animated Particles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#d4af37] rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
                opacity: 0.3
              }}
            ></div>
          ))}
        </div>
        
        {/* Floating Gradient Orbs */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center space-y-16 px-4 max-w-7xl mx-auto">
          <div className="mb-20 animate-fade-in-up">
            <img 
              src="/ls-logo.jpg" 
              alt="株式会社LS" 
              className="w-56 h-56 mx-auto opacity-90 brightness-200 drop-shadow-2xl hover:scale-110 transition-transform duration-700"
            />
          </div>
          
          <div className="space-y-12">
            <h1 className="text-8xl md:text-[10rem] lg:text-[14rem] font-light tracking-[0.15em] leading-none drop-shadow-2xl">
              <span className="inline-block animate-fade-in-up" style={{animationDelay: '0.2s'}}>L</span>
              <span className="inline-block animate-fade-in-up" style={{animationDelay: '0.3s'}}>S</span>
            </h1>
            
            <div className="flex items-center justify-center gap-12 animate-fade-in" style={{animationDelay: '0.5s'}}>
              <div className="h-px w-40 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
              <div className="w-3 h-3 bg-[#d4af37] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.8)]"></div>
              <div className="h-px w-40 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
            </div>
            
            <p className="text-3xl md:text-5xl lg:text-7xl font-light tracking-[0.1em] leading-relaxed animate-fade-in-up" style={{animationDelay: '0.7s'}}>
              空間を超え、<br className="md:hidden" />ブランドを創造する。
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center pt-16 animate-fade-in-up" style={{animationDelay: '0.9s'}}>
            <Button 
              variant="outline" 
              size="lg"
              className="magnetic-button bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] text-black hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] border-0 px-16 py-8 text-lg tracking-[0.2em] font-light transition-all duration-700 hover:scale-110"
            >
              OUR VISION
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="magnetic-button bg-transparent text-white hover:bg-white/10 border-2 border-[#d4af37] px-16 py-8 text-lg tracking-[0.2em] font-light backdrop-blur-sm transition-all duration-700 hover:scale-110 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
            >
              CONTACT US
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-[#d4af37] animate-bounce">
            <span className="text-xs tracking-[0.4em] font-light">SCROLL</span>
            <div className="w-px h-24 bg-gradient-to-b from-[#d4af37] to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Stats Section - Premium Numbers with Counter Animation */}
      <section className="relative py-40 bg-gradient-to-b from-black to-gray-900 border-y border-[#d4af37]/20">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
            {[
              { value: "50", unit: "億", label: "TARGET REVENUE", delay: "0s" },
              { value: "100", unit: "+", label: "PROJECTS", delay: "0.2s" },
              { value: "5", unit: "年", label: "TO STANDARD", delay: "0.4s" },
              { value: "AI", unit: "×", label: "INNOVATION", delay: "0.6s" }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-6 group cursor-pointer stagger-item" style={{animationDelay: stat.delay}}>
                <div className="text-7xl md:text-8xl font-light gold-gradient group-hover:scale-125 transition-all duration-700">
                  {stat.value}<span className="text-5xl">{stat.unit}</span>
                </div>
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto group-hover:w-32 transition-all duration-500"></div>
                <p className="text-xs tracking-[0.3em] text-gray-400 font-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section - Luxury Layout with Reveal */}
      <section id="about" className="relative py-56 bg-white text-black overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-[400px] h-[400px] border border-[#d4af37]/10 rounded-full"></div>
        
        <div className="container max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5 space-y-16">
              <div>
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-px bg-[#d4af37]"></div>
                  <span className="text-xs tracking-[0.5em] text-gray-400 font-light">MISSION</span>
                </div>
                
                <h2 className="text-7xl md:text-8xl lg:text-9xl font-light leading-[0.95] tracking-tight mb-16">
                  空間を超え、<br />
                  ブランドを<br />
                  創造する。
                </h2>
              </div>
              
              <div className="space-y-10">
                <p className="text-3xl md:text-4xl text-gray-700 leading-relaxed font-light">
                  私たちLSは、内装という「箱」を作るだけではなく、<span className="gold-gradient font-normal">事業の世界観と収益モデル</span>まで設計します。
                </p>
                
                <p className="text-xl text-gray-500 leading-relaxed font-light">
                  立地・動線・席数・オペレーション・採用・販促——店舗の成功に関わる要素を統合し、"続く売上"が生まれるブランド体験をつくる。それが私たちの使命です。
                </p>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="magnetic-button mt-12 border-2 border-black text-black hover:bg-black hover:text-white px-16 py-8 text-sm tracking-[0.3em] font-light transition-all duration-700 hover:scale-105"
                >
                  READ MORE
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-7 relative">
              <div className="relative h-[800px]">
                {/* Main Image with Hover Effect */}
                <div className="absolute inset-0 overflow-hidden shadow-2xl image-overlay group">
                  <img 
                    src="/luxury-1.webp" 
                    alt="Premium Interior Design" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Hover Overlay Info */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                    <div className="text-center text-white space-y-4">
                      <div className="w-20 h-px bg-white mx-auto mb-6"></div>
                      <p className="text-2xl font-light tracking-[0.2em]">PREMIUM DESIGN</p>
                      <div className="w-20 h-px bg-white mx-auto mt-6"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Card with Glass Effect */}
                <div className="absolute -bottom-16 -left-16 glass p-10 shadow-2xl max-w-md backdrop-blur-xl border border-[#d4af37]/20 hover-lift">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-px bg-[#d4af37]"></div>
                    <p className="text-xs tracking-[0.3em] text-gray-600 font-light">PHILOSOPHY</p>
                  </div>
                  <p className="text-2xl text-black font-light leading-relaxed">
                    "続く売上"が生まれる<br />ブランド体験をつくる
                  </p>
                </div>
                
                {/* Decorative Frame */}
                <div className="absolute -top-8 -right-8 w-32 h-32 border-t-2 border-r-2 border-[#d4af37]/30"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 border-b-2 border-l-2 border-[#d4af37]/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - Dark Elegance with Grid */}
      <section className="relative py-56 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden grid-bg">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 3px 3px, #d4af37 2px, transparent 0)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-7 relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-8">
                {/* Large Image */}
                <div className="col-span-2 relative h-[600px] group overflow-hidden image-overlay">
                  <img 
                    src="/luxury-3.jpg" 
                    alt="Luxury Space Design" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Image Number Badge */}
                  <div className="absolute top-8 left-8 glass px-6 py-3 border border-white/20">
                    <span className="text-sm tracking-[0.3em] font-light">01</span>
                  </div>
                </div>
                
                {/* Small Images */}
                <div className="relative h-72 group overflow-hidden image-overlay">
                  <img 
                    src="/luxury-4.png" 
                    alt="Interior Detail" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 glass px-4 py-2 border border-white/20">
                    <span className="text-xs tracking-[0.3em] font-light">02</span>
                  </div>
                </div>
                <div className="relative h-72 group overflow-hidden image-overlay">
                  <img 
                    src="/luxury-5.jpg" 
                    alt="Design Detail" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 glass px-4 py-2 border border-white/20">
                    <span className="text-xs tracking-[0.3em] font-light">03</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 space-y-16 order-1 lg:order-2">
              <div>
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-px bg-[#d4af37]"></div>
                  <span className="text-xs tracking-[0.5em] text-gray-400 font-light">VISION</span>
                </div>
                
                <h2 className="text-7xl md:text-8xl lg:text-9xl font-light leading-[0.95] tracking-tight mb-16">
                  業界を変革し、<br />
                  ブランド<br />
                  カンパニー<br />
                  になる。
                </h2>
              </div>
              
              <p className="text-3xl md:text-4xl text-gray-300 leading-relaxed font-light">
                内装＝コストという常識を変え、<span className="gold-gradient font-normal">内装＝投資</span>へ。
              </p>
              
              <div className="space-y-10 pt-12">
                {[
                  { title: "事業づくり視点の内装", desc: "成果に直結する店舗を増やす" },
                  { title: "全国展開の実現", desc: "同品質・同スピードで全国へ" },
                  { title: "建築 × AI", desc: "意思決定と設計を高度化" },
                  { title: "5年でスタンダードへ", desc: "ブランドカンパニーとしての地位確立" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-8 group cursor-pointer stagger-item" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="flex-shrink-0 w-16 h-16 border-2 border-[#d4af37]/30 flex items-center justify-center group-hover:bg-[#d4af37] group-hover:border-[#d4af37] transition-all duration-700 group-hover:rotate-180">
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

      {/* Film Section - Cinematic with Frame */}
      <section id="film" className="relative py-56 bg-black">
        <div className="container max-w-7xl">
          <div className="text-center mb-32">
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">BRAND FILM</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>
            
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-light mb-16 tracking-tight leading-tight">
              ブランドが<br className="md:hidden" />動き出す瞬間
            </h2>
            
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              LSが手がける空間とブランド体験の哲学を、短編映像に凝縮しました。
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Decorative Multi-Layer Frame */}
            <div className="absolute -inset-12 border border-[#d4af37]/20 pointer-events-none"></div>
            <div className="absolute -inset-20 border border-[#d4af37]/10 pointer-events-none"></div>
            <div className="absolute -inset-28 border border-[#d4af37]/5 pointer-events-none"></div>
            
            {/* Corner Decorations */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#d4af37]"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#d4af37]"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#d4af37]"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#d4af37]"></div>
            
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

      {/* Values Section - Interactive Premium Cards */}
      <section id="values" className="relative py-56 bg-white text-black">
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
                className={`group relative bg-gradient-to-br from-gray-50 via-white to-gray-50 p-14 border-2 border-gray-200 hover:border-[#d4af37] hover:shadow-2xl transition-all duration-1000 cursor-pointer overflow-hidden ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                {/* Top Border Animation */}
                <div className="absolute top-0 left-0 w-0 h-2 bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] group-hover:w-full transition-all duration-1000"></div>
                
                {/* Background Shimmer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 shimmer"></div>
                
                <div className="mb-16 relative">
                  <span className="text-9xl font-light text-gray-100 group-hover:gold-gradient transition-all duration-1000">
                    {value.num}
                  </span>
                </div>
                
                <h3 className="text-4xl font-light mb-10 tracking-tight group-hover:tracking-wide transition-all duration-700 relative z-10">
                  {value.title}
                </h3>
                
                <p className="text-2xl mb-10 text-gray-600 font-light leading-relaxed relative z-10">
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

      {/* Company Section - Sophisticated Glass */}
      <section id="company" className="relative py-56 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(30deg, #d4af37 12%, transparent 12.5%, transparent 87%, #d4af37 87.5%, #d4af37), linear-gradient(150deg, #d4af37 12%, transparent 12.5%, transparent 87%, #d4af37 87.5%, #d4af37)',
            backgroundSize: '80px 140px'
          }}></div>
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
          
          <div className="relative glass p-20 md:p-24 border-2 border-[#d4af37]/20">
            {/* Decorative Corners */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-[#d4af37]"></div>
            <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-[#d4af37]"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-[#d4af37]"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-[#d4af37]"></div>
            
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
                <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#d4af37]/20 last:border-0 group hover:border-[#d4af37]/50 transition-all duration-500">
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

      {/* CTA Section - Powerful with Animation */}
      <section className="relative py-48 bg-white text-black overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(212,175,55,.1) 25%, rgba(212,175,55,.1) 26%, transparent 27%, transparent 74%, rgba(212,175,55,.1) 75%, rgba(212,175,55,.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(212,175,55,.1) 25%, rgba(212,175,55,.1) 26%, transparent 27%, transparent 74%, rgba(212,175,55,.1) 75%, rgba(212,175,55,.1) 76%, transparent 77%, transparent)',
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        <div className="container max-w-6xl relative z-10 text-center">
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-light mb-20 tracking-tight leading-[1.1]">
            次世代の<br />
            ブランド体験を、<br />
            共に創造しませんか。
          </h2>
          
          <p className="text-3xl md:text-4xl text-gray-600 mb-24 font-light max-w-4xl mx-auto leading-relaxed">
            LSは、あなたの情熱と専門性を求めています。
          </p>
          
          <Button 
            size="lg"
            className="magnetic-button bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] text-black hover:shadow-[0_0_60px_rgba(212,175,55,0.8)] px-24 py-12 text-2xl tracking-[0.3em] font-light transition-all duration-700 hover:scale-110 border-0"
          >
            JOIN US
          </Button>
        </div>
      </section>

      {/* Footer - Minimalist Luxury */}
      <footer id="contact" className="relative py-40 bg-black border-t-2 border-[#d4af37]/20">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
            <div className="md:col-span-2 space-y-10">
              <img 
                src="/ls-logo.jpg" 
                alt="株式会社LS" 
                className="w-48 h-48 brightness-200 opacity-80 hover:scale-110 transition-transform duration-700"
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
                className="magnetic-button bg-transparent text-white border-2 border-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-700 px-10 py-7 text-sm tracking-[0.3em] font-light hover:scale-105"
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

