import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

export default function Careers() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [countUpValues, setCountUpValues] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Observe sections
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2],
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe individual animated elements
    const elementObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            const element = entry.target as HTMLElement;
            element.classList.add('animate-in');
            element.style.transitionDelay = '0s';
          }
        });
      },
      {
        threshold: [0, 0.2, 0.4],
        rootMargin: '0px 0px -80px 0px'
      }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      sectionObserver.observe(section);
    });

    // Observe all charts and animated elements
    document.querySelectorAll('[data-animate]').forEach((element) => {
      elementObserver.observe(element);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sectionObserver.disconnect();
      elementObserver.disconnect();
    };
  }, []);

  // Count up animation when numbers section becomes visible
  useEffect(() => {
    if (isVisible.numbers) {
      const targets = [
        { key: 'age', value: 29, duration: 1800 },
        { key: 'employees', value: 10, duration: 1400 },
        { key: 'minPrice', value: 100, duration: 1600 },
        { key: 'maxPrice', value: 2000, duration: 1800 },
        { key: 'avgYears', value: 3, duration: 1400 },
        { key: 'sales1', value: 20, duration: 1600 },
        { key: 'sales2', value: 50, duration: 1800 },
        { key: 'recruitment', value: 100, duration: 1600 },
        { key: 'minSalary', value: 420, duration: 1800 },
        { key: 'maxSalary', value: 1000, duration: 2000 },
        { key: 'distance', value: 5, duration: 1400 }
      ];

      targets.forEach(({ key, value, duration }) => {
        let startTime: number | null = null;
        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          // Elegant cubic easing - matches our chart animations
          const easeOutCubic = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.floor(easeOutCubic * value);

          setCountUpValues(prev => ({ ...prev, [key]: currentValue }));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      });
    }
  }, [isVisible.numbers]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          >
            <img
              src="/luxury-1.webp"
              alt="Join LS"
              className="w-full h-full object-cover mix-blend-luminosity"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        </div>

        <div className="relative z-10 text-center space-y-10 px-4 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">CAREERS</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.3] animate-fade-in-up">
              次世代の<br />
              ブランド体験を、<br />
              共に創造しませんか。
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
              空間を超え、ブランドを創造する。<br />
              LSで、あなたの情熱と専門性を解き放ちませんか。
            </p>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[#d4af37] animate-bounce">
            <span className="text-xs tracking-[0.4em] font-light">SCROLL</span>
            <div className="w-px h-16 bg-gradient-to-b from-[#d4af37] to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section
        id="overview"
        className={`relative py-20 md:py-32 lg:py-40 bg-white text-black transition-all duration-1000 ${isVisible.overview ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container max-w-7xl">
          <div className="text-center mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">COMPANY</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight">
              会社概要
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              { label: "社名", value: "株式会社LS" },
              { label: "所在地", value: "東京都渋谷区渋谷1-12-2\nクロスオフィス渋谷505" },
              { label: "設立", value: "2023年10月" },
              { label: "社員数", value: "10名未満\n（平均年齢29歳）" },
              { label: "事業内容", value: "店舗内装のデザイン設計施工\nブランド空間プロデュース" },
              { label: "事業規模", value: "案件単価\n100〜2000万円" }
            ].map((item, index) => (
              <div
                key={index}
                className={`group p-8 md:p-10 border-2 border-gray-200 hover:border-[#d4af37] transition-all duration-700 hover:shadow-xl cursor-pointer ${isVisible.overview ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-xs tracking-[0.3em] text-gray-400 font-light mb-4 uppercase">
                  {item.label}
                </div>
                <div className="text-xl md:text-2xl font-light leading-relaxed whitespace-pre-line group-hover:gold-gradient transition-all duration-500">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        id="philosophy"
        className={`relative py-20 md:py-32 lg:py-40 bg-gradient-to-b from-gray-900 to-black text-white transition-all duration-1000 ${isVisible.philosophy ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container max-w-7xl">
          <div className="text-center mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">PHILOSOPHY</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight">
              経営理念・ビジョン
            </h2>
          </div>

          <div className="space-y-16 md:space-y-20">
            {[
              {
                title: "MISSION",
                subtitle: "ミッション",
                content: "空間を超え、\nブランドを創造する"
              },
              {
                title: "VISION",
                subtitle: "ビジョン",
                content: "業界を変革し、\nブランドカンパニーになる"
              },
              {
                title: "VALUES",
                subtitle: "バリュー",
                content: "超顧客思考 / 超徹底 / 超追求 / 超連携 / 超挑戦"
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center space-y-8 transition-all duration-1000 ${isVisible.philosophy ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-4">
                  <h3 className="text-sm tracking-[0.5em] text-[#d4af37] font-light">{item.title}</h3>
                  <p className="text-base tracking-[0.3em] text-gray-400 font-light">{item.subtitle}</p>
                </div>
                <p className="text-xl md:text-2xl lg:text-3xl font-light leading-[1.6] max-w-4xl mx-auto whitespace-pre-line">
                  {item.content}
                </p>
                <div className="h-px w-40 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Phase */}
      <section
        id="phase"
        className={`relative py-20 md:py-32 lg:py-40 bg-white text-black transition-all duration-1000 ${isVisible.phase ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container max-w-7xl">
          <div className="text-center mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">GROWTH</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight">
              事業フェーズ
            </h2>
          </div>

          {/* Visual Timeline */}
          <div className="mb-16 md:mb-20 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#d4af37] via-[#d4af37]/50 to-[#d4af37]/20 -translate-x-1/2 hidden lg:block"></div>

            <div className="space-y-10 md:space-y-12">
              {[
                {
                  phase: "第1フェーズ",
                  period: "〜2026年",
                  title: "組織基盤の確立と幹部育成",
                  desc: "少数精鋭のチームで、事業の基盤を固め、次世代のリーダーを育成します。",
                  revenue: "10億円",
                  revenueValue: 10,
                  employees: "20名",
                  progress: 35
                },
                {
                  phase: "第2フェーズ",
                  period: "〜2028年",
                  title: "売上20億→50億を目指す成長ステージ",
                  desc: "確立した基盤をもとに、急成長を実現。全国展開の準備を進めます。",
                  revenue: "50億円",
                  revenueValue: 50,
                  employees: "50名",
                  progress: 75
                },
                {
                  phase: "第3フェーズ",
                  period: "2028年以降",
                  title: "全国・海外展開、新規事業化",
                  desc: "国内外への展開と、新たな事業領域への挑戦を開始します。",
                  revenue: "100億円+",
                  revenueValue: 100,
                  employees: "100名+",
                  progress: 100
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group relative transition-all duration-1000 ${isVisible.phase ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left side - Info card */}
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} relative`}>
                      <div className="p-10 md:p-12 border-2 border-gray-200 hover:border-[#d4af37] transition-all duration-700 hover:shadow-2xl bg-white group-hover:bg-gray-50">
                        <div className="absolute top-0 left-0 w-0 h-2 bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] group-hover:w-full transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"></div>

                        <div className="space-y-6">
                          <div className="flex items-center gap-6">
                            <div className="text-5xl md:text-6xl font-light bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] bg-clip-text text-transparent">
                              {String(index + 1).padStart(2, '0')}
                            </div>
                            <div>
                              <h3 className="text-2xl font-light">{item.phase}</h3>
                              <span className="text-sm text-gray-400 font-light">{item.period}</span>
                            </div>
                          </div>

                          <h4 className="text-xl md:text-2xl font-light leading-tight">{item.title}</h4>
                          <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">{item.desc}</p>

                          {/* Key Metrics */}
                          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                            <div>
                              <p className="text-xs text-gray-400 mb-2 tracking-wider">目標売上</p>
                              <p className="text-2xl font-light text-[#d4af37]">{item.revenue}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-400 mb-2 tracking-wider">目標人員</p>
                              <p className="text-2xl font-light text-[#d4af37]">{item.employees}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right side - Visual chart */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                      <div data-animate className="relative p-10 md:p-12 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 group-hover:border-[#d4af37]/50 transition-all duration-700">
                        {/* Revenue Growth Bar Chart */}
                        <div className="space-y-8">
                          <h5 className="text-sm tracking-[0.3em] text-gray-400 font-light uppercase">Revenue Growth</h5>

                          {/* Animated Bar */}
                          <div className="relative">
                            <div className="flex justify-between items-end h-64 gap-4">
                              {[
                                { label: '現在', value: 10, height: 30 },
                                { label: 'Phase1', value: 10, height: index >= 0 ? 30 : 0 },
                                { label: 'Phase2', value: 50, height: index >= 1 ? 75 : 0 },
                                { label: 'Phase3', value: 100, height: index >= 2 ? 100 : 0 }
                              ].map((bar, barIndex) => (
                                <div key={barIndex} className="flex-1 flex flex-col items-center">
                                  <div className="w-full relative h-64 flex items-end">
                                    <div
                                      className="w-full bg-gradient-to-t from-[#d4af37] to-[#f4e5c3] relative overflow-hidden transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:shadow-lg group-hover:shadow-[#d4af37]/30"
                                      style={{
                                        height: isVisible.phase ? `${bar.height}%` : '0%',
                                        transitionDelay: `${barIndex * 0.2}s`
                                      }}
                                    >
                                      {/* Shimmer effect */}
                                      <div
                                        className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent"
                                        style={{
                                          animation: `shimmer 2s ease-in-out ${barIndex * 0.3}s infinite`,
                                          backgroundSize: '200% 200%'
                                        }}
                                      ></div>
                                      {/* Value label */}
                                      <div className="absolute top-2 left-1/2 -translate-x-1/2 text-black font-light text-sm whitespace-nowrap">
                                        {bar.value}億
                                      </div>
                                    </div>
                                  </div>
                                  <p className="text-xs text-gray-500 mt-3 font-light">{bar.label}</p>
                                </div>
                              ))}
                            </div>

                            {/* Grid lines */}
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                              {[100, 75, 50, 25, 0].map((val, i) => (
                                <div key={i} className="w-full border-t border-gray-200 relative">
                                  <span className="absolute -left-8 -top-2 text-xs text-gray-400">{val}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Progress indicator */}
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-500 tracking-wider">進捗度</span>
                              <span className="text-lg font-light text-[#d4af37]">{item.progress}%</span>
                            </div>
                            <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] rounded-full transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                                style={{
                                  width: isVisible.phase ? `${item.progress}%` : '0%',
                                  transitionDelay: `${index * 0.3}s`,
                                  filter: 'drop-shadow(0 2px 6px rgba(212, 175, 55, 0.4))'
                                }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer-horizontal_2s_ease-in-out_infinite]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline dot - centered */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block z-10">
                      <div
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f4e5c3] border-4 border-white shadow-lg transition-all duration-700 hover:scale-125"
                        style={{
                          transitionDelay: `${index * 0.15}s`,
                          transform: isVisible.phase ? 'scale(1)' : 'scale(0)'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Numbers - Data Visualization */}
      <section
        id="numbers"
        className={`relative py-20 md:py-32 lg:py-40 bg-gradient-to-b from-gray-900 to-black text-white transition-all duration-1000 ${isVisible.numbers ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container max-w-7xl">
          <div className="text-center mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">BY THE NUMBERS</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight">
              数字で見るLS
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              データで見る、LSのリアル
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16">
            {[
              {
                key: "age",
                number: "29",
                unit: "歳",
                label: "平均年齢",
                description: "若く活気のある組織。20代〜30代前半が中心で、フラットに意見を言い合える環境です。",
                highlight: true,
                animated: true
              },
              {
                key: "employees",
                number: "10",
                unit: "名未満",
                label: "社員数",
                description: "少数精鋭の組織。一人ひとりの影響力が大きく、裁量を持って働けます。",
                highlight: false,
                animated: true
              },
              {
                key: "price",
                number: "100〜2000",
                unit: "万円",
                label: "案件単価",
                description: "幅広い規模の案件を手掛けています。大型案件にも挑戦できる環境。",
                highlight: false,
                animated: false
              },
              {
                key: "avgYears",
                number: "3",
                unit: "年",
                label: "平均勤続年数",
                description: "設立2年目の若い会社。創業期メンバーとして、会社の成長に関われます。",
                highlight: false,
                animated: true
              },
              {
                key: "oneOnOne",
                number: "週1",
                unit: "回",
                label: "経営陣との1on1",
                description: "経営層と定期的に直接対話。フィードバックが密で、成長スピードが速い環境。",
                highlight: true,
                animated: false
              },
              {
                key: "sales",
                number: "20→50",
                unit: "億円",
                label: "売上目標（第2フェーズ）",
                description: "2028年までに売上50億円を目指す成長戦略。急拡大するビジネスに参画できます。",
                highlight: true,
                animated: false
              },
              {
                key: "recruitment",
                number: "100",
                unit: "%",
                label: "中途採用比率",
                description: "多様なバックグラウンドを持つメンバーが集結。前職での経験を活かせます。",
                highlight: false,
                animated: true
              },
              {
                key: "salary",
                number: "420〜1000",
                unit: "万円",
                label: "年収レンジ",
                description: "職種・経験に応じた柔軟な給与体系。実力次第で高収入を目指せます。",
                highlight: true,
                animated: false
              },
              {
                key: "distance",
                number: "5",
                unit: "分",
                label: "渋谷駅から徒歩",
                description: "渋谷駅徒歩5分の好立地。アクセス抜群で通勤も快適です。",
                highlight: false,
                animated: true
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden ${isVisible.numbers ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`relative p-10 md:p-12 h-full ${item.highlight ? 'bg-gradient-to-br from-[#d4af37]/20 via-[#d4af37]/10 to-transparent' : 'bg-white/5'} border-2 ${item.highlight ? 'border-[#d4af37]/50' : 'border-white/10'} hover:border-[#d4af37] transition-all duration-700 hover:shadow-2xl hover:shadow-[#d4af37]/20 hover:-translate-y-2`}>
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative text-center space-y-6">
                    {/* Large number display */}
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700"></div>
                      <div className="relative">
                        <div className="text-5xl md:text-6xl lg:text-7xl font-light bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-700 inline-block">
                          {item.animated && countUpValues[item.key] !== undefined ? countUpValues[item.key] : item.number}
                        </div>
                        <div className="text-xl md:text-2xl text-[#d4af37]/80 font-light mt-2">{item.unit}</div>
                      </div>
                    </div>

                    {/* Label */}
                    <div className="relative">
                      <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-4"></div>
                      <h3 className="text-xl md:text-2xl font-light text-white group-hover:text-[#d4af37] transition-colors duration-500">
                        {item.label}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Stats Section - Visual Highlights with Charts */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 transition-all duration-1000 ${isVisible.numbers ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '0.9s' }}>
            {/* 職種構成 - Donut Chart */}
            <div data-animate className="relative p-8 md:p-10 bg-gradient-to-br from-white/10 to-white/5 border-2 border-[#d4af37]/30 rounded-2xl overflow-hidden group hover:border-[#d4af37] transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#d4af37]/20">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10 space-y-6">
                <h4 className="text-xl font-light text-[#d4af37] mb-8 text-center">職種構成</h4>

                {/* Donut Chart */}
                <div className="flex justify-center items-center mb-8">
                  <div className="relative w-48 h-48">
                    <svg className="transform -rotate-90 w-48 h-48" viewBox="0 0 200 200">
                      {/* Background circle */}
                      <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="30"/>

                      {/*営業・PM - 40% */}
                      <circle
                        cx="100" cy="100" r="80"
                        fill="none"
                        stroke="url(#gradient1)"
                        strokeWidth="30"
                        strokeDasharray="502"
                        strokeDashoffset="100"
                        className="transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{
                          strokeDashoffset: isVisible.numbers ? 301 : 502,
                          filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.4))'
                        }}
                      />

                      {/* デザイナー - 30% */}
                      <circle
                        cx="100" cy="100" r="80"
                        fill="none"
                        stroke="url(#gradient2)"
                        strokeWidth="30"
                        strokeDasharray="502"
                        strokeDashoffset="100"
                        className="transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{
                          strokeDashoffset: isVisible.numbers ? 150 : 502,
                          transitionDelay: '0.4s',
                          filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.4))'
                        }}
                      />

                      {/* 施工管理 - 30% */}
                      <circle
                        cx="100" cy="100" r="80"
                        fill="none"
                        stroke="url(#gradient3)"
                        strokeWidth="30"
                        strokeDasharray="502"
                        strokeDashoffset="100"
                        className="transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{
                          strokeDashoffset: isVisible.numbers ? 0 : 502,
                          transitionDelay: '0.8s',
                          filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.4))'
                        }}
                      />

                      {/* Gradients */}
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#d4af37" />
                          <stop offset="100%" stopColor="#f4e5c3" />
                        </linearGradient>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#b8941f" />
                          <stop offset="100%" stopColor="#d4af37" />
                        </linearGradient>
                        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#9c7e1a" />
                          <stop offset="100%" stopColor="#b8941f" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Center text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-light text-[#d4af37]">100%</div>
                        <div className="text-xs text-gray-400">構成比</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="space-y-3">
                  {[
                    { role: "営業・PM", percent: 40, color: "from-[#d4af37] to-[#f4e5c3]" },
                    { role: "デザイナー", percent: 30, color: "from-[#b8941f] to-[#d4af37]" },
                    { role: "施工管理", percent: 30, color: "from-[#9c7e1a] to-[#b8941f]" }
                  ].map((job, i) => (
                    <div key={i} className="flex items-center justify-between group/item">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${job.color} group-hover/item:scale-125 transition-transform`}></div>
                        <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors">{job.role}</span>
                      </div>
                      <span className="text-lg font-light text-[#d4af37]">{job.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 年代構成 - Bar Chart */}
            <div data-animate className="relative p-8 md:p-10 bg-gradient-to-br from-white/10 to-white/5 border-2 border-[#d4af37]/30 rounded-2xl overflow-hidden group hover:border-[#d4af37] transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#d4af37]/20">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10 space-y-6">
                <h4 className="text-xl font-light text-[#d4af37] mb-8 text-center">年代構成</h4>

                {/* Vertical Bar Chart */}
                <div className="flex items-end justify-around h-48 gap-4 mb-6">
                  {[
                    { age: "20代", percent: 50, color: "#d4af37" },
                    { age: "30代", percent: 40, color: "#b8941f" },
                    { age: "40代〜", percent: 10, color: "#9c7e1a" }
                  ].map((ageGroup, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-4 group/bar">
                      <div className="relative w-full">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xl font-light text-[#d4af37] group-hover/bar:scale-125 transition-transform">
                          {ageGroup.percent}%
                        </div>
                        <div
                          className="w-full bg-gradient-to-t from-[#d4af37] to-[#f4e5c3] rounded-t-lg relative overflow-hidden group-hover/bar:shadow-lg group-hover/bar:shadow-[#d4af37]/50 transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                          style={{
                            height: isVisible.numbers ? `${ageGroup.percent * 1.5}px` : '0px',
                            transitionDelay: `${i * 0.25}s`,
                            transform: isVisible.numbers ? 'scaleY(1)' : 'scaleY(0)',
                            transformOrigin: 'bottom'
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 animate-pulse"></div>
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]"
                            style={{
                              backgroundSize: '200% 200%',
                              animation: `shimmer 2s ease-in-out ${i * 0.3}s infinite`
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-300 group-hover/bar:text-white transition-colors font-light">
                        {ageGroup.age}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-[#d4af37]/20">
                  <p className="text-xs text-gray-400 italic">平均年齢29歳の若い組織</p>
                </div>
              </div>
            </div>

            {/* 前職業界 - Horizontal Bar Chart */}
            <div data-animate className="relative p-8 md:p-10 bg-gradient-to-br from-white/10 to-white/5 border-2 border-[#d4af37]/30 rounded-2xl overflow-hidden group hover:border-[#d4af37] transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#d4af37]/20">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10 space-y-6">
                <h4 className="text-xl font-light text-[#d4af37] mb-8 text-center">前職業界</h4>

                <div className="space-y-4">
                  {[
                    { industry: "建設・不動産", percent: 35 },
                    { industry: "IT・Web", percent: 25 },
                    { industry: "コンサル", percent: 20 },
                    { industry: "営業・サービス", percent: 15 },
                    { industry: "その他", percent: 5 }
                  ].map((item, i) => (
                    <div key={i} className="group/item">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-300 group-hover/item:text-white transition-colors">{item.industry}</span>
                        <span className="text-[#d4af37] font-light">{item.percent}%</span>
                      </div>
                      <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] rounded-full transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/item:shadow-lg group-hover/item:shadow-[#d4af37]/50"
                          style={{
                            width: isVisible.numbers ? `${item.percent}%` : '0%',
                            transitionDelay: `${i * 0.15}s`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-pulse"></div>
                          {/* Animated shimmer */}
                          <div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                            style={{
                              backgroundSize: '200% 100%',
                              animation: `shimmer-horizontal 2s ease-in-out ${i * 0.2}s infinite`,
                              backgroundPosition: isVisible.numbers ? '100% 0' : '-100% 0'
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-[#d4af37]/20">
                  <p className="text-xs text-gray-400 italic">多様なバックグラウンドを持つメンバーが活躍中</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work - Dialogue Format */}
      <section
        id="our-work"
        className={`relative py-20 md:py-32 lg:py-40 bg-white text-black transition-all duration-1000 ${isVisible['our-work'] ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container max-w-7xl">
          <div className="text-center mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">OUR WORK</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight">
              私たちの仕事
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              営業・デザイナー・施工管理の3職種が語る、<br />
              LSの仕事の魅力
            </p>
          </div>

          <div className="space-y-16 md:space-y-20">
            {/* Dialogue 1: Sales & Designer */}
            <div
              className={`relative transition-all duration-1000 ${isVisible['our-work'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#f4e5c3] flex items-center justify-center text-black font-light text-sm">
                      営業
                    </div>
                    <div>
                      <p className="text-lg font-light">佐藤 健太</p>
                      <p className="text-sm text-gray-400">営業コンサルタント / PM職</p>
                    </div>
                  </div>
                  <div className="bg-white/5 p-8 border-l-4 border-[#d4af37] space-y-4">
                    <p className="text-base md:text-lg font-light leading-relaxed">
                      「クライアントの『こんな店舗を作りたい』という想いを、デザイナーと一緒に形にしていく。そのプロセスが本当に面白いんです」
                    </p>
                    <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
                      営業と言っても、単に案件を取ってくるだけじゃない。ブランドのコンセプトを理解して、お客様の事業戦略まで踏まえた提案をする。そこからデザイナーにバトンタッチして、一緒にブランド体験を作り上げていくんです。
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#f4e5c3] flex items-center justify-center text-black font-light text-sm">
                      設計
                    </div>
                    <div>
                      <p className="text-lg font-light">田中 美咲</p>
                      <p className="text-sm text-gray-400">店舗設計デザイナー</p>
                    </div>
                  </div>
                  <div className="bg-white/5 p-8 border-l-4 border-[#d4af37] space-y-4">
                    <p className="text-base md:text-lg font-light leading-relaxed">
                      「営業から聞いたブランドストーリーを、空間で表現する。それがデザイナーの腕の見せどころですね」
                    </p>
                    <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
                      ただ見た目がきれいなデザインを作るだけじゃなくて、そのブランドらしさ、お客様の事業目標を達成できる空間を設計する。営業と密に連携しながら、最適な提案を練り上げていくのがLSのスタイルです。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dialogue 2: Designer & Construction */}
            <div
              className={`relative transition-all duration-1000 ${isVisible['our-work'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#f4e5c3] flex items-center justify-center text-black font-light text-sm">
                      設計
                    </div>
                    <div>
                      <p className="text-lg font-light">田中 美咲</p>
                      <p className="text-sm text-gray-400">店舗設計デザイナー</p>
                    </div>
                  </div>
                  <div className="bg-white/5 p-8 border-l-4 border-[#d4af37] space-y-4">
                    <p className="text-base md:text-lg font-light leading-relaxed">
                      「設計図を描くだけじゃダメ。施工チームと密に連携して、実現可能性とデザイン性を両立させるんです」
                    </p>
                    <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
                      現場の施工管理者と何度も打ち合わせをして、コストや工期、施工の難易度を考慮しながらデザインを調整していく。この連携があるから、高品質な空間を作れるんです。
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#f4e5c3] flex items-center justify-center text-black font-light text-sm">
                      施工
                    </div>
                    <div>
                      <p className="text-lg font-light">山田 大輔</p>
                      <p className="text-sm text-gray-400">施工管理</p>
                    </div>
                  </div>
                  <div className="bg-white/5 p-8 border-l-4 border-[#d4af37] space-y-4">
                    <p className="text-base md:text-lg font-light leading-relaxed">
                      「デザイナーの想いを、現場で100%再現する。それが施工管理の責任です」
                    </p>
                    <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
                      品質・コスト・納期を守りながら、デザインの意図を最大限に引き出す。職人さんたちと協力して、ブランド価値を体現する空間を作り上げます。デザイナーとの連携が何より重要なんです。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cross-functional collaboration */}
            <div
              className={`relative p-10 md:p-12 bg-white/5 border border-white/10 transition-all duration-1000 ${isVisible['our-work'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="text-center space-y-8 max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-light tracking-tight">
                  3職種の連携が、最高のブランド体験を生む
                </h3>
                <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
                  営業・デザイナー・施工管理。それぞれの専門性を活かしながら、<br />
                  一つのチームとして動く。それがLSの強みです。<br />
                  お互いをリスペクトし、協力し合う文化の中で、<br />
                  最高のブランド体験を創造します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Interviews */}
      <section
        id="interviews"
        className={`relative py-20 md:py-32 lg:py-40 bg-white text-black transition-all duration-1000 ${isVisible.interviews ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container max-w-7xl">
          <div className="text-center mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">INTERVIEWS</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight">
              社員インタビュー
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              LSで働く社員のリアルな声をお届けします
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {[
              {
                name: "佐藤 健太",
                role: "営業コンサルタント / PM職",
                years: "入社2年目 / 27歳",
                previousJob: "前職：大手不動産営業",
                quote: "裁量の大きさと成長スピードが、想像を超えていた",
                interview: "前職では100人以上いる営業部の一人でしたが、LSでは入社1年目から大型案件を任されました。経営陣と直接やりとりして、事業戦略から関われる。この経験は他では絶対にできないと思います。もちろん大変なこともありますが、それ以上に成長実感があります。",
                imageGradient: "from-blue-500 to-cyan-400",
                highlights: [
                  "入社1年目で1000万円規模の案件を担当",
                  "週次で経営陣と1on1、フィードバックが密",
                  "年収は前職比+200万円、成果がダイレクトに評価される"
                ],
                skills: [
                  { skill: "営業力", before: 65, after: 90 },
                  { skill: "PM管理", before: 40, after: 85 },
                  { skill: "経営視点", before: 30, after: 80 },
                  { skill: "提案力", before: 60, after: 92 }
                ]
              },
              {
                name: "田中 美咲",
                role: "店舗設計デザイナー",
                years: "入社1年6ヶ月 / 26歳",
                previousJob: "前職：設計事務所デザイナー",
                quote: "ブランド戦略まで考えられる、デザイナー冥利に尽きる環境",
                interview: "前職では「この図面通りに作って」という指示型の仕事が多かったんです。でもLSでは、ブランドのコンセプトから一緒に考えて、デザインの自由度も高い。営業・施工との距離も近いので、自分のアイデアが形になる実感があります。ハイブランドの案件に携われるのも魅力です。",
                imageGradient: "from-purple-500 to-pink-400",
                highlights: [
                  "有名ラグジュアリーブランドの店舗設計を経験",
                  "デザイン提案の7割が採用される高い裁量",
                  "CADだけでなく、3Dモデリングやプレゼンスキルも向上"
                ],
                skills: [
                  { skill: "設計力", before: 70, after: 92 },
                  { skill: "3Dモデリング", before: 50, after: 88 },
                  { skill: "ブランド理解", before: 45, after: 85 },
                  { skill: "プレゼン力", before: 55, after: 87 }
                ]
              },
              {
                name: "山田 大輔",
                role: "施工管理",
                years: "入社3年目 / 32歳",
                previousJob: "前職：大手建設会社施工管理",
                quote: "経営視点を持って現場を動かせる、施工管理の理想形",
                interview: "大手では「この現場を管理してください」という受け身の仕事でしたが、LSでは施工プロセスの改善提案から、原価管理、新しい施工方法の導入まで、幅広く関われます。経営陣が現場の声を本気で聞いてくれるし、自分の提案が会社の仕組みになる。それが何より嬉しいです。",
                imageGradient: "from-green-500 to-teal-400",
                highlights: [
                  "施工マニュアルの整備を主導、原価を15%削減",
                  "協力会社との関係構築も任され、交渉力が向上",
                  "次のフェーズで施工チームのマネージャー候補"
                ],
                skills: [
                  { skill: "施工管理", before: 75, after: 94 },
                  { skill: "原価管理", before: 60, after: 90 },
                  { skill: "交渉力", before: 50, after: 88 },
                  { skill: "マネジメント", before: 40, after: 82 }
                ]
              },
              {
                name: "鈴木 翔太",
                role: "営業コンサルタント / チームリーダー",
                years: "創業メンバー / 30歳",
                previousJob: "前職：人材系ベンチャー営業マネージャー",
                quote: "0→1を作る面白さ。挑戦できる人には最高の環境",
                interview: "創業から関わっていますが、会社が急成長する中で、自分も一緒に成長できる実感があります。少数精鋭だからこそ、一人ひとりの影響力が大きい。事業戦略、組織作り、採用まで関われるのは、ベンチャーならではの醍醐味ですね。挑戦を楽しめる人には、本当に最高の環境だと思います。",
                imageGradient: "from-orange-500 to-yellow-400",
                highlights: [
                  "売上・利益目標の設定から事業戦略立案まで関与",
                  "採用面接にも参加、次世代を育てる責任も",
                  "ストックオプション保有、会社と一緒に成長できる"
                ],
                skills: [
                  { skill: "事業戦略", before: 65, after: 95 },
                  { skill: "組織構築", before: 55, after: 90 },
                  { skill: "採用力", before: 60, after: 88 },
                  { skill: "リーダーシップ", before: 70, after: 96 }
                ]
              }
            ].map((interview, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl border-2 border-gray-200 hover:border-[#d4af37] transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 overflow-hidden ${isVisible.interviews ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Photo Placeholder */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br ${interview.imageGradient}">
                  <div className={`absolute inset-0 bg-gradient-to-br ${interview.imageGradient} opacity-90`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Person Icon */}
                      <svg className="w-32 h-32 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-3xl font-light mb-2">{interview.name}</h3>
                    <p className="text-sm font-light opacity-90">{interview.role}</p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 space-y-6">
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 font-light">{interview.years}</p>
                    <p className="text-xs text-gray-400 font-light italic">{interview.previousJob}</p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-[#d4af37]/30 to-transparent"></div>

                  <blockquote className="text-lg md:text-xl font-light leading-relaxed border-l-4 border-[#d4af37] pl-6 py-2">
                    "{interview.quote}"
                  </blockquote>

                  <p className="text-sm md:text-base text-gray-700 font-light leading-relaxed">
                    {interview.interview}
                  </p>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs tracking-[0.2em] text-gray-400 font-light mb-4 uppercase">Key Points</p>
                    <div className="space-y-3">
                      {interview.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600 font-light">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skill Growth Chart */}
                  <div className="pt-6 border-t border-gray-200 space-y-4">
                    <p className="text-xs tracking-[0.2em] text-gray-400 font-light mb-4 uppercase">スキル成長度</p>
                    <div className="space-y-4">
                      {interview.skills.map((skillData, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-700 font-light">{skillData.skill}</span>
                            <div className="flex items-center gap-3">
                              <span className="text-xs text-gray-400">入社前: {skillData.before}</span>
                              <span className="text-xs text-[#d4af37] font-medium">現在: {skillData.after}</span>
                            </div>
                          </div>

                          {/* Comparison bars */}
                          <div className="relative h-8 flex items-center gap-2">
                            {/* Before bar (background) */}
                            <div className="relative flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="absolute top-0 left-0 h-full bg-gray-400 rounded-full transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                                style={{
                                  width: isVisible.interviews ? `${skillData.before}%` : '0%',
                                  transitionDelay: `${index * 0.15 + i * 0.1}s`
                                }}
                              ></div>
                            </div>

                            {/* After bar (overlayed) */}
                            <div className="absolute inset-0 flex items-center">
                              <div className="relative flex-1 h-3 bg-transparent rounded-full overflow-hidden">
                                <div
                                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] rounded-full transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] shadow-lg"
                                  style={{
                                    width: isVisible.interviews ? `${skillData.after}%` : '0%',
                                    transitionDelay: `${index * 0.15 + i * 0.1 + 0.3}s`
                                  }}
                                >
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer-horizontal_2s_ease-in-out_infinite]"></div>
                                  {/* Growth arrow indicator */}
                                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2">
                                    <svg className="w-4 h-4 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Growth percentage */}
                          <div className="text-right">
                            <span className="text-xs text-green-600 font-medium">
                              +{skillData.after - skillData.before} pts
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Summary radar chart placeholder */}
                    <div className="mt-6 p-4 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl">
                      <div className="flex items-center justify-center gap-8">
                        {/* Before/After comparison */}
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-3 bg-gray-400 rounded-full"></div>
                          <span className="text-xs text-gray-500">入社前</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-3 bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] rounded-full"></div>
                          <span className="text-xs text-gray-700">現在</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-light text-green-600">
                            +{Math.round(interview.skills.reduce((sum, s) => sum + (s.after - s.before), 0) / interview.skills.length)}
                          </span>
                          <span className="text-xs text-gray-500">平均成長</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Day in the Life */}
      <section
        id="day-in-life"
        className={`relative py-20 md:py-32 lg:py-40 bg-gradient-to-b from-gray-900 to-black text-white transition-all duration-1000 ${isVisible['day-in-life'] ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container max-w-7xl">
          <div className="text-center mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">A DAY IN THE LIFE</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight">
              社員の一日
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              LSで働く社員の、リアルな1日を紹介します
            </p>
          </div>

          {/* 営業コンサルタントの一日 */}
          <div className={`mb-20 md:mb-24 transition-all duration-1000 ${isVisible['day-in-life'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            {/* Photo Hero Section */}
            <div className="relative mb-16 rounded-3xl overflow-hidden border-2 border-[#d4af37]/30 group hover:border-[#d4af37] transition-all duration-700">
              <div className="relative h-96 bg-gradient-to-br from-blue-600 to-cyan-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 opacity-90">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Briefcase Icon */}
                    <svg className="w-40 h-40 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <h3 className="text-3xl md:text-4xl font-light mb-3 text-white">営業コンサルタント（PM職）の一日</h3>
                  <p className="text-sm md:text-base text-white/90">佐藤 健太 / 入社2年目 / 27歳</p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
              </div>
            </div>

            {/* Time Distribution Chart */}
            <div data-animate className="max-w-5xl mx-auto mb-16 p-10 md:p-12 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl">
              <h4 className="text-2xl md:text-3xl font-light text-center mb-12">時間配分の可視化</h4>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Donut Chart */}
                <div className="flex items-center justify-center">
                  <div className="relative w-72 h-72">
                    <svg viewBox="0 0 200 200" className="transform -rotate-90 w-72 h-72">
                      <defs>
                        <linearGradient id="time-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#60a5fa" />
                        </linearGradient>
                        <linearGradient id="time-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#d4af37" />
                          <stop offset="100%" stopColor="#f4e5c3" />
                        </linearGradient>
                        <linearGradient id="time-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#34d399" />
                        </linearGradient>
                        <linearGradient id="time-gradient-4" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f59e0b" />
                          <stop offset="100%" stopColor="#fbbf24" />
                        </linearGradient>
                      </defs>

                      {/* Client meetings - 30% */}
                      <circle
                        cx="100" cy="100" r="80"
                        fill="none"
                        stroke="url(#time-gradient-1)"
                        strokeWidth="35"
                        strokeDasharray="502"
                        className="transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{
                          strokeDashoffset: isVisible['day-in-life'] ? 352 : 502,
                          transitionDelay: '0.3s',
                          filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.3))'
                        }}
                      />

                      {/* Internal meetings - 25% */}
                      <circle
                        cx="100" cy="100" r="80"
                        fill="none"
                        stroke="url(#time-gradient-2)"
                        strokeWidth="35"
                        strokeDasharray="502"
                        className="transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{
                          strokeDashoffset: isVisible['day-in-life'] ? 377 : 502,
                          transitionDelay: '0.6s',
                          filter: 'drop-shadow(0 0 6px rgba(212, 175, 55, 0.3))'
                        }}
                        strokeDashoffset="226"
                      />

                      {/* Preparation & Admin - 25% */}
                      <circle
                        cx="100" cy="100" r="80"
                        fill="none"
                        stroke="url(#time-gradient-3)"
                        strokeWidth="35"
                        strokeDasharray="502"
                        className="transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{
                          strokeDashoffset: isVisible['day-in-life'] ? 377 : 502,
                          transitionDelay: '0.9s',
                          filter: 'drop-shadow(0 0 6px rgba(16, 185, 129, 0.3))'
                        }}
                        strokeDashoffset="101"
                      />

                      {/* Break & Personal - 20% */}
                      <circle
                        cx="100" cy="100" r="80"
                        fill="none"
                        stroke="url(#time-gradient-4)"
                        strokeWidth="35"
                        strokeDasharray="502"
                        className="transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{
                          strokeDashoffset: isVisible['day-in-life'] ? 402 : 502,
                          transitionDelay: '1.2s',
                          filter: 'drop-shadow(0 0 6px rgba(245, 158, 11, 0.3))'
                        }}
                        strokeDashoffset="0"
                      />
                    </svg>

                    {/* Center label */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-5xl font-light text-[#d4af37]">10.5</div>
                      <div className="text-sm text-gray-400 tracking-wider">時間 / 日</div>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="space-y-6">
                  {[
                    {
                      label: "クライアント商談・訪問",
                      percent: 30,
                      hours: "3.0h",
                      color: "from-blue-500 to-blue-400",
                      description: "提案プレゼン、要件ヒアリング"
                    },
                    {
                      label: "社内ミーティング・連携",
                      percent: 25,
                      hours: "2.5h",
                      color: "from-[#d4af37] to-[#f4e5c3]",
                      description: "チーム朝会、プロジェクト定例"
                    },
                    {
                      label: "資料作成・事務作業",
                      percent: 25,
                      hours: "2.5h",
                      color: "from-green-500 to-green-400",
                      description: "見積作成、契約書確認"
                    },
                    {
                      label: "ランチ・休憩・1on1",
                      percent: 20,
                      hours: "2.5h",
                      color: "from-amber-500 to-yellow-400",
                      description: "リフレッシュ、経営陣との対話"
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-1000 ${isVisible['day-in-life'] ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
                      style={{ transitionDelay: `${index * 0.15 + 0.3}s` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-6 h-6 rounded bg-gradient-to-br ${item.color} flex-shrink-0 mt-1`}></div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <h5 className="text-lg font-light">{item.label}</h5>
                            <span className="text-[#d4af37] font-light">{item.percent}%</span>
                          </div>
                          <p className="text-sm text-gray-400 font-light">{item.description}</p>
                          <div className="flex items-center gap-3">
                            <div className="relative flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                              <div
                                className={`absolute top-0 left-0 h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]`}
                                style={{
                                  width: isVisible['day-in-life'] ? `${item.percent * 4}%` : '0%',
                                  transitionDelay: `${index * 0.15 + 0.5}s`
                                }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer-horizontal_2s_ease-in-out_infinite]"></div>
                              </div>
                            </div>
                            <span className="text-sm text-gray-300 font-light w-12 text-right">{item.hours}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  time: "09:00",
                  title: "出社・メールチェック",
                  description: "オフィスに到着後、メールやSlackをチェック。本日の予定を確認し、優先順位を整理します。",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  time: "09:30",
                  title: "チームミーティング",
                  description: "営業チームで朝会。各自の進捗共有と、当日の目標を確認。経営陣も参加するため、会社全体の動きも把握できます。",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
                {
                  time: "10:00",
                  title: "クライアント訪問準備",
                  description: "午後の商談に向けて、提案資料の最終チェック。デザイナーと連携し、プレゼン内容をブラッシュアップ。",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )
                },
                {
                  time: "12:00",
                  title: "ランチ",
                  description: "チームメンバーと渋谷でランチ。仕事の話だけでなく、プライベートな話題も。風通しの良い雰囲気です。",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  )
                },
                {
                  time: "13:30",
                  title: "クライアント商談",
                  description: "新規案件の提案プレゼン。クライアントのニーズを深掘りしながら、LSの強みをアピール。",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  time: "16:00",
                  title: "社内打ち合わせ",
                  description: "進行中プロジェクトの定例会議。営業・デザイナー・施工管理が集まり、進捗確認と課題共有。",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  )
                },
                {
                  time: "17:00",
                  title: "見積作成・事務作業",
                  description: "商談後のフォローアップと見積書作成。契約書の確認など、事務処理も丁寧に行います。",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  time: "18:30",
                  title: "経営陣との1on1",
                  description: "週次の1on1ミーティング。今週の振り返りと来週の目標設定。経営視点でのアドバイスももらえます。",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  )
                },
                {
                  time: "19:30",
                  title: "退社",
                  description: "明日の予定を確認して退社。メリハリをつけて働けるのがLSのスタイルです。",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  )
                }
              ].map((schedule, index) => (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${isVisible['day-in-life'] ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-6 md:gap-8">
                    {/* Time + Timeline */}
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="text-xl md:text-2xl font-light text-[#d4af37] mb-4 w-20 md:w-24 text-center">{schedule.time}</div>
                      <div className="relative">
                        {/* Timeline dot with icon */}
                        <div className="w-12 h-12 rounded-full border-2 border-[#d4af37] bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-500 group-hover:scale-110 relative z-10">
                          {schedule.icon}
                        </div>
                        {/* Connecting line */}
                        {index < 8 && (
                          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-[#d4af37]/50 to-[#d4af37]/10"></div>
                        )}
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 pb-8">
                      <div className="relative p-6 md:p-8 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover:border-[#d4af37] transition-all duration-700 group-hover:bg-white/15 rounded-lg overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d4af37]/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                        <div className="relative space-y-3">
                          <h4 className="text-lg md:text-xl font-light group-hover:text-[#d4af37] transition-colors duration-500">{schedule.title}</h4>
                          <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
                            {schedule.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* デザイナーの一日 */}
          <div className={`transition-all duration-1000 ${isVisible['day-in-life'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '0.9s' }}>
            {/* Photo Hero Section */}
            <div className="relative mb-16 rounded-3xl overflow-hidden border-2 border-[#d4af37]/30 group hover:border-[#d4af37] transition-all duration-700">
              <div className="relative h-96 bg-gradient-to-br from-purple-600 to-pink-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 opacity-90">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Pencil/Design Icon */}
                    <svg className="w-40 h-40 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <h3 className="text-3xl md:text-4xl font-light mb-3 text-white">店舗設計デザイナーの一日</h3>
                  <p className="text-sm md:text-base text-white/90">田中 美咲 / 入社1年6ヶ月 / 26歳</p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  time: "09:30",
                  title: "出社・デザイン作業",
                  description: "出社後、進行中の設計図面をチェック。CADで細部を調整しながら、デザインをブラッシュアップします。",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  )
                },
                {
                  time: "11:00",
                  title: "営業との打ち合わせ",
                  description: "新規案件のキックオフミーティング。営業からクライアントの要望をヒアリングし、デザインの方向性を議論。",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
                {
                  time: "12:30",
                  title: "ランチ",
                  description: "近くのカフェでランチ。午後に向けてリフレッシュ。",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  )
                },
                {
                  time: "13:30",
                  title: "デザイン制作",
                  description: "3Dモデリングで空間のイメージを作成。素材や照明の配置を検討しながら、ブランドらしさを追求。",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  )
                },
                {
                  time: "16:00",
                  title: "施工管理との調整",
                  description: "デザインの実現可能性について施工管理と相談。コストや工期を考慮しながら、最適な設計に調整。",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  )
                },
                {
                  time: "17:30",
                  title: "プレゼン資料作成",
                  description: "クライアント向けのプレゼン資料を作成。デザインの意図やコンセプトを分かりやすく伝える工夫を凝らします。",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  )
                },
                {
                  time: "19:00",
                  title: "退社",
                  description: "明日の作業内容を整理して退社。たまにチームで飲みに行くこともあります。",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  )
                }
              ].map((schedule, index) => (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${isVisible['day-in-life'] ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
                  style={{ transitionDelay: `${(index + 9) * 0.1}s` }}
                >
                  <div className="flex gap-6 md:gap-8">
                    {/* Time + Timeline */}
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="text-xl md:text-2xl font-light text-[#d4af37] mb-4 w-20 md:w-24 text-center">{schedule.time}</div>
                      <div className="relative">
                        {/* Timeline dot with icon */}
                        <div className="w-12 h-12 rounded-full border-2 border-[#d4af37] bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-500 group-hover:scale-110 relative z-10">
                          {schedule.icon}
                        </div>
                        {/* Connecting line */}
                        {index < 6 && (
                          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-[#d4af37]/50 to-[#d4af37]/10"></div>
                        )}
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 pb-8">
                      <div className="relative p-6 md:p-8 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover:border-[#d4af37] transition-all duration-700 group-hover:bg-white/15 rounded-lg overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d4af37]/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                        <div className="relative space-y-3">
                          <h4 className="text-lg md:text-xl font-light group-hover:text-[#d4af37] transition-colors duration-500">{schedule.title}</h4>
                          <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
                            {schedule.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Working Style at LS */}
      <section
        id="working-style"
        className={`relative py-20 md:py-32 lg:py-40 bg-white text-black transition-all duration-1000 ${isVisible['working-style'] ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container max-w-7xl">
          <div className="text-center mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">WORKING STYLE</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight">
              LSでの働き方
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              成長を加速させる、LSならではの働き方
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-20">
            {[
              {
                title: "裁量の大きさ",
                description: "少数精鋭だからこそ、一人ひとりの裁量が大きい。入社1年目から大型案件を任され、自分で考え、判断し、実行できる環境があります。",
                score: 95,
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "意思決定の速さ",
                description: "経営陣との距離が近く、意思決定が圧倒的に速い。朝の打ち合わせで出たアイデアが、夕方には実行されることも。スピード感を持って働けます。",
                score: 98,
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "挑戦を歓迎する文化",
                description: "「やりたい」と言えば任される風土。新しいチャレンジを歓迎し、失敗から学ぶ文化があります。挑戦した人が評価される会社です。",
                score: 92,
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                )
              },
              {
                title: "経営層との近さ",
                description: "週次1on1で経営陣と直接話せる。事業戦略、採用、組織作りにも意見を述べられる。自分の意見が会社の意思決定に影響を与える実感があります。",
                score: 100,
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                title: "圧倒的な成長機会",
                description: "急成長フェーズだからこそ、通常では経験できない規模とスピードで成長できます。半年で1年分の経験を積めるような環境です。",
                score: 96,
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              },
              {
                title: "チームワーク",
                description: "職種を超えた連携が密。営業・デザイナー・施工が一つのチームとして動く。互いをリスペクトし、協力し合う文化があります。",
                score: 94,
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div
                key={index}
                data-animate
                className={`group p-8 md:p-10 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-[#d4af37] transition-all duration-700 hover:shadow-2xl ${isVisible['working-style'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              >
                {/* Radial Progress Chart */}
                <div className="flex items-center justify-center mb-6">
                  <div className="relative w-32 h-32">
                    {/* Background circle */}
                    <svg className="transform -rotate-90 w-32 h-32">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-gray-200"
                      />
                      {/* Animated progress circle */}
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="url(#working-gradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 56}`}
                        className="transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{
                          strokeDashoffset: isVisible['working-style']
                            ? `${2 * Math.PI * 56 * (1 - item.score / 100)}`
                            : `${2 * Math.PI * 56}`,
                          transitionDelay: `${index * 0.15}s`
                        }}
                      />
                      <defs>
                        <linearGradient id="working-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#d4af37" />
                          <stop offset="100%" stopColor="#f4e5c3" />
                        </linearGradient>
                      </defs>
                    </svg>
                    {/* Center content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-3xl font-light bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] bg-clip-text text-transparent">
                        {item.score}
                      </div>
                      <div className="text-xs text-gray-400 tracking-wider">SCORE</div>
                    </div>
                  </div>
                </div>

                {/* Icon badge */}
                <div className="flex items-center justify-center w-12 h-12 mb-6 mx-auto border-2 border-[#d4af37]/30 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:border-[#d4af37] group-hover:text-white transition-all duration-700">
                  {item.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-light mb-4 text-center group-hover:text-[#d4af37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed text-center">
                  {item.description}
                </p>

                {/* Progress bar at bottom */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] rounded-full transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{
                        width: isVisible['working-style'] ? `${item.score}%` : '0%',
                        transitionDelay: `${index * 0.15}s`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer-horizontal_2s_ease-in-out_infinite]"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits & Welfare */}
          <div
            className={`relative p-10 md:p-12 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 transition-all duration-1000 ${isVisible['working-style'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            style={{ transitionDelay: '0.6s' }}
          >
            <h3 className="text-2xl md:text-3xl font-light mb-10 text-center tracking-tight text-black">
              福利厚生・待遇
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-light text-[#d4af37] mb-6">給与・評価</h4>
                <div className="space-y-3 text-sm md:text-base text-gray-700 font-light">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                    <span>実力・成果に応じた柔軟な給与体系（年齢・社歴不問）</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                    <span>業績賞与制度（年2回、成果に応じて支給）</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                    <span>明確な評価基準と定期的なフィードバック（月1回1on1）</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                    <span>昇給・昇格の機会が豊富（半年ごとに評価）</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                    <span>ストックオプション制度（幹部候補）</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-light text-[#d4af37] mb-6">働く環境</h4>
                <div className="space-y-3 text-sm md:text-base text-gray-700 font-light">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                    <span>渋谷駅徒歩5分の好立地オフィス</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                    <span>各種社会保険完備（健康保険、厚生年金、雇用保険、労災保険）</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                    <span>交通費全額支給</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                    <span>PC・モニターなど必要機材の支給</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                    <span>服装自由（TPOに応じて）</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-light text-[#d4af37] mb-6">成長支援</h4>
                <div className="space-y-3 text-sm md:text-base text-gray-700 font-light">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                    <span>経営層による直接指導・メンタリング</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                    <span>業界トップレベルの案件経験（ハイブランド多数）</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                    <span>スキルアップのための書籍購入支援（月1万円まで）</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                    <span>外部セミナー・研修参加支援（業務に関連するもの）</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                    <span>資格取得支援制度</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-light text-[#d4af37] mb-6">ワークライフバランス</h4>
                <div className="space-y-3 text-sm md:text-base text-gray-700 font-light">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                    <span>週休2日制（土日祝）</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                    <span>有給休暇制度（入社半年後10日付与）</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                    <span>夏季・年末年始休暇</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                    <span>慶弔休暇</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                    <span>リモートワーク可（職種・業務内容による）</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Satisfaction Metrics */}
      <section
        id="satisfaction"
        className={`relative py-20 md:py-32 lg:py-40 bg-gradient-to-b from-gray-900 to-black text-white transition-all duration-1000 ${isVisible.satisfaction ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container max-w-7xl">
          <div className="text-center mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">SATISFACTION</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight">
              社員満足度スコア
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              実際に働く社員の満足度を、項目別に可視化
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            {[
              {
                label: "総合満足度",
                score: 94,
                description: "会社への総合的な満足度",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                label: "成長実感",
                score: 97,
                description: "自分が成長していると感じる度合い",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              },
              {
                label: "仕事のやりがい",
                score: 96,
                description: "仕事に対するやりがいや充実感",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )
              },
              {
                label: "職場環境",
                score: 92,
                description: "働きやすさ・人間関係の良好さ",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              }
            ].map((metric, index) => (
              <div
                key={index}
                data-animate
                className={`group relative transition-all duration-1000 ${isVisible.satisfaction ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              >
                <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/10 hover:border-[#d4af37] transition-all duration-700 rounded-2xl group-hover:shadow-2xl group-hover:shadow-[#d4af37]/20">
                  {/* Gauge Chart */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative w-40 h-40">
                      {/* Semi-circle gauge */}
                      <svg viewBox="0 0 200 120" className="w-40 h-24">
                        {/* Background arc */}
                        <path
                          d="M 20 100 A 80 80 0 0 1 180 100"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="20"
                          className="text-white/10"
                        />
                        {/* Animated progress arc */}
                        <path
                          d="M 20 100 A 80 80 0 0 1 180 100"
                          fill="none"
                          stroke="url(#gauge-gradient)"
                          strokeWidth="20"
                          strokeLinecap="round"
                          strokeDasharray={`${Math.PI * 80}`}
                          className="transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                          style={{
                            strokeDashoffset: isVisible.satisfaction
                              ? `${Math.PI * 80 * (1 - metric.score / 100)}`
                              : `${Math.PI * 80}`,
                            transitionDelay: `${index * 0.25}s`,
                            filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.5))'
                          }}
                        />
                        {/* Gauge needle indicator */}
                        <g
                          className="transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                          style={{
                            transform: isVisible.satisfaction
                              ? `rotate(${(metric.score / 100) * 180 - 90}deg)`
                              : 'rotate(-90deg)',
                            transformOrigin: '100px 100px',
                            transitionDelay: `${index * 0.25 + 0.6}s`,
                            filter: 'drop-shadow(0 2px 4px rgba(212, 175, 55, 0.4))'
                          }}
                        >
                          <line
                            x1="100"
                            y1="100"
                            x2="100"
                            y2="40"
                            stroke="#d4af37"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                          <circle cx="100" cy="100" r="6" fill="#d4af37" />
                        </g>

                        <defs>
                          <linearGradient id="gauge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ef4444" />
                            <stop offset="50%" stopColor="#f59e0b" />
                            <stop offset="100%" stopColor="#10b981" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Center score */}
                      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center">
                        <div className="text-5xl font-light bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] bg-clip-text text-transparent">
                          {metric.score}
                        </div>
                        <div className="text-xs text-gray-400 tracking-wider">/ 100</div>
                      </div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 mb-4 mx-auto border-2 border-[#d4af37]/30 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:border-[#d4af37] group-hover:text-black transition-all duration-700">
                    {metric.icon}
                  </div>

                  {/* Label */}
                  <h3 className="text-xl md:text-2xl font-light mb-3 text-center group-hover:text-[#d4af37] transition-colors">
                    {metric.label}
                  </h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed text-center">
                    {metric.description}
                  </p>

                  {/* Progress bar */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] rounded-full transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{
                          width: isVisible.satisfaction ? `${metric.score}%` : '0%',
                          transitionDelay: `${index * 0.2}s`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer-horizontal_2s_ease-in-out_infinite]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Overall Summary */}
          <div
            className={`mt-16 p-10 md:p-12 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl transition-all duration-1000 ${isVisible.satisfaction ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            style={{ transitionDelay: '0.6s' }}
          >
            <div className="text-center max-w-4xl mx-auto space-y-8">
              <h3 className="text-2xl md:text-3xl font-light tracking-tight">
                社員の9割以上が「働きやすい」と回答
              </h3>
              <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
                少数精鋭だからこその裁量の大きさ、成長機会の豊富さ、<br />
                そして何より経営陣との距離の近さが、高い満足度につながっています。<br />
                「次のステージで活躍できる人材」として、全力で育てる環境があります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Environment */}
      <section
        id="office-environment"
        className={`relative py-20 md:py-32 lg:py-40 bg-gradient-to-b from-gray-900 to-black text-white transition-all duration-1000 ${isVisible['office-environment'] ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container max-w-7xl">
          <div className="text-center mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">OFFICE ENVIRONMENT</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight">
              働く環境
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              快適に働けるオフィス環境と充実した設備
            </p>
          </div>

          {/* Office Photo Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 transition-all duration-1000 ${isVisible['office-environment'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            {/* Large Main Office Photo */}
            <div className="md:col-span-2 relative h-96 rounded-3xl overflow-hidden border-2 border-[#d4af37]/30 group hover:border-[#d4af37] transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Office Building Icon */}
                  <svg className="w-48 h-48 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <h3 className="text-3xl md:text-4xl font-light mb-3 text-white">渋谷駅徒歩5分の好立地オフィス</h3>
                <p className="text-base text-white/90">アクセス抜群、周辺施設も充実した快適な環境</p>
              </div>
              <div className="absolute top-10 right-10 w-40 h-40 bg-[#d4af37]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>

            {/* Smaller Office Photos */}
            <div className="relative h-64 rounded-2xl overflow-hidden border-2 border-[#d4af37]/30 group hover:border-[#d4af37] transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-32 h-32 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-lg font-light text-white">最新の設備と機器</p>
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden border-2 border-[#d4af37]/30 group hover:border-[#d4af37] transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-teal-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-32 h-32 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-lg font-light text-white">リラックスできる空間</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* オフィス環境 */}
            <div
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#d4af37]/20 ${isVisible['office-environment'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
              <div className="relative p-10 md:p-12 bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/10 hover:border-[#d4af37] transition-all duration-700 h-full">
                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#d4af37]/5 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>

                <div className="relative space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl border-2 border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black group-hover:scale-110 transition-all duration-700 relative z-10">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-light group-hover:text-[#d4af37] transition-colors">オフィス立地</h3>
                  </div>
                  <div className="space-y-4 text-sm md:text-base text-gray-300 font-light">
                    <p className="leading-relaxed">
                      渋谷駅から徒歩5分の好立地。渋谷スクランブルスクエアや渋谷ヒカリエも近く、ランチや仕事終わりのリフレッシュにも便利です。
                    </p>
                    <div className="pt-4 border-t border-[#d4af37]/20">
                      <p className="text-xs tracking-[0.2em] text-gray-400 mb-4 uppercase">アクセス</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 group/item">
                          <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                          <span className="group-hover/item:text-white transition-colors">JR・東京メトロ・東急各線「渋谷駅」徒歩5分</span>
                        </li>
                        <li className="flex items-start gap-3 group/item">
                          <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                          <span className="group-hover/item:text-white transition-colors">複数路線利用可能でアクセス抜群</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* オフィス設備 */}
            <div
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#d4af37]/20 ${isVisible['office-environment'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: '0.1s' }}
            >
              <div className="relative p-10 md:p-12 bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/10 hover:border-[#d4af37] transition-all duration-700 h-full">
                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#d4af37]/5 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>

                <div className="relative space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl border-2 border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black group-hover:scale-110 transition-all duration-700 relative z-10">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-light group-hover:text-[#d4af37] transition-colors">オフィス設備</h3>
                  </div>
                  <div className="space-y-4 text-sm md:text-base text-gray-300 font-light">
                    <p className="leading-relaxed">
                      快適に働ける環境を整備。集中して作業できるデスク環境と、リラックスできる休憩スペースを完備しています。
                    </p>
                    <div className="pt-4 border-t border-[#d4af37]/20">
                      <p className="text-xs tracking-[0.2em] text-gray-400 mb-4 uppercase">設備</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 group/item">
                          <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                          <span className="group-hover/item:text-white transition-colors">高性能PC・大画面モニター完備</span>
                        </li>
                        <li className="flex items-start gap-3 group/item">
                          <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                          <span className="group-hover/item:text-white transition-colors">フリーアドレス制で自由な働き方</span>
                        </li>
                        <li className="flex items-start gap-3 group/item">
                          <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                          <span className="group-hover/item:text-white transition-colors">快適な休憩スペース</span>
                        </li>
                        <li className="flex items-start gap-3 group/item">
                          <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                          <span className="group-hover/item:text-white transition-colors">無料ドリンク・軽食あり</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 働き方の柔軟性 */}
            <div
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#d4af37]/20 ${isVisible['office-environment'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="relative p-10 md:p-12 bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/10 hover:border-[#d4af37] transition-all duration-700 h-full">
                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#d4af37]/5 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>

                <div className="relative space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl border-2 border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black group-hover:scale-110 transition-all duration-700 relative z-10">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-light group-hover:text-[#d4af37] transition-colors">働き方の柔軟性</h3>
                  </div>
                  <div className="space-y-4 text-sm md:text-base text-gray-300 font-light">
                    <p className="leading-relaxed">
                      職種や業務内容に応じて、柔軟な働き方が可能。メリハリをつけて、効率的に働ける環境を提供しています。
                    </p>
                    <div className="pt-4 border-t border-[#d4af37]/20">
                      <p className="text-xs tracking-[0.2em] text-gray-400 mb-4 uppercase">働き方</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 group/item">
                          <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                          <span className="group-hover/item:text-white transition-colors">リモートワーク可（職種・業務による）</span>
                        </li>
                        <li className="flex items-start gap-3 group/item">
                          <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                          <span className="group-hover/item:text-white transition-colors">服装自由（TPOに応じて）</span>
                        </li>
                        <li className="flex items-start gap-3 group/item">
                          <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                          <span className="group-hover/item:text-white transition-colors">週休2日制（土日祝）</span>
                        </li>
                        <li className="flex items-start gap-3 group/item">
                          <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                          <span className="group-hover/item:text-white transition-colors">有給休暇取得推奨</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* コミュニケーション */}
            <div
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#d4af37]/20 ${isVisible['office-environment'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="relative p-10 md:p-12 bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/10 hover:border-[#d4af37] transition-all duration-700 h-full">
                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#d4af37]/5 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>

                <div className="relative space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl border-2 border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black group-hover:scale-110 transition-all duration-700 relative z-10">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-light group-hover:text-[#d4af37] transition-colors">コミュニケーション</h3>
                  </div>
                  <div className="space-y-4 text-sm md:text-base text-gray-300 font-light">
                    <p className="leading-relaxed">
                      フラットな組織で、コミュニケーションが活発。職種を超えた交流があり、チームワークを大切にしています。
                    </p>
                    <div className="pt-4 border-t border-[#d4af37]/20">
                      <p className="text-xs tracking-[0.2em] text-gray-400 mb-4 uppercase">交流</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 group/item">
                          <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                          <span className="group-hover/item:text-white transition-colors">週1回の全社ミーティング</span>
                        </li>
                        <li className="flex items-start gap-3 group/item">
                          <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                          <span className="group-hover/item:text-white transition-colors">経営陣との定期的な1on1</span>
                        </li>
                        <li className="flex items-start gap-3 group/item">
                          <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                          <span className="group-hover/item:text-white transition-colors">チームランチ・飲み会（任意参加）</span>
                        </li>
                        <li className="flex items-start gap-3 group/item">
                          <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                          <span className="group-hover/item:text-white transition-colors">Slack・Notionで情報共有</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section
        id="culture"
        className={`relative py-20 md:py-32 lg:py-40 bg-white text-black transition-all duration-1000 ${isVisible.culture ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container max-w-7xl">
          <div className="text-center mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">CULTURE</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight">
              組織文化
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              LSが大切にしている5つの文化
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "少数精鋭で裁量が大きく、意思決定が速い",
                description: "10名未満の組織だからこそ、一人ひとりが事業の中核を担います。経営陣との距離が近く、意思決定のスピードが圧倒的に速い環境です。"
              },
              {
                title: "「やりたい」と言えば任される風土",
                description: "新しいチャレンジを歓迎する文化。アイデアを出せば、それを実現する機会が与えられます。年齢や社歴に関係なく、挑戦できる環境です。"
              },
              {
                title: "経営層との距離が近く、事業や採用戦略にも関われる",
                description: "週次1on1で経営陣と直接対話。事業戦略、組織作り、採用まで、会社の重要な意思決定に関わることができます。"
              },
              {
                title: "数字に強く、論理と熱量の両立を重視",
                description: "感覚だけでなく、データに基づいた意思決定を重視。同時に、ブランドへの熱量や、顧客への想いも大切にしています。"
              },
              {
                title: "全員が事業家意識を持ち、ブランドを育てる会社",
                description: "ただの従業員ではなく、事業を作る当事者として働く。会社と一緒に成長し、ブランドを育てていく意識を持った仲間が集まっています。"
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`group flex flex-col gap-6 p-8 md:p-10 border-2 border-gray-200 hover:border-[#d4af37] transition-all duration-700 hover:shadow-xl cursor-pointer ${isVisible.culture ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-[#d4af37]/30 flex items-center justify-center group-hover:bg-[#d4af37] group-hover:border-[#d4af37] transition-all duration-700 group-hover:rotate-180">
                    <span className="text-sm font-light group-hover:text-black">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-lg md:text-xl font-light leading-relaxed group-hover:text-[#d4af37] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions */}
      <section
        id="positions"
        className={`relative py-20 md:py-32 lg:py-40 bg-gradient-to-b from-gray-900 to-black text-white transition-all duration-1000 ${isVisible.positions ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container max-w-7xl">
          <div className="text-center mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">POSITIONS</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight">
              募集職種
            </h2>
          </div>

          <div className="space-y-12 md:space-y-16">
            {/* Position 1: Sales Consultant */}
            <div
              className={`group relative p-10 sm:p-12 md:p-16 bg-white/5 border-2 border-white/10 hover:border-[#d4af37] transition-all duration-1000 hover:shadow-2xl ${isVisible.positions ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
              <div className="absolute top-0 left-0 w-0 h-3 bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] group-hover:w-full transition-all duration-1000"></div>

              <div className="space-y-8 md:space-y-10">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 tracking-tight">営業コンサルタント職（PM職）</h3>
                  <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
                    店舗内装事業の中心を担うポジションです。単なる営業ではなく、プロジェクト全体の推進役として、顧客・設計・施工チームをつなぎ、案件の成功をリードします。
                  </p>
                </div>

                <div className="space-y-8 md:space-y-10">
                  <div>
                    <h4 className="text-xl font-light mb-4 flex items-center gap-4">
                      <div className="w-10 h-px bg-[#d4af37]"></div>
                      主な仕事内容
                    </h4>
                    <ul className="space-y-3 text-base text-gray-300 font-light">
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                        <span>店舗内装案件の新規顧客開拓およびクロージング</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                        <span>案件スタートから完了までのプロジェクト全体管理</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                        <span>チームビルディングおよびメンバー間の調整</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                        <span>社内外関係者との調整、進行フォロー</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-light mb-4 flex items-center gap-4">
                      <div className="w-10 h-px bg-[#d4af37]"></div>
                      求める人物像
                    </h4>
                    <ul className="space-y-3 text-base text-gray-300 font-light">
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                        <span>人との関係づくりが得意で、信頼されるコミュニケーションが取れる方</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                        <span>自責思考を持ち、課題を前向きに捉えて改善できる方</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                        <span>リーダーシップと柔軟性を併せ持ち、挑戦を楽しめる方</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-6 border-t-2 border-white/10">
                    <p className="text-xl font-light text-[#d4af37]">
                      月給35〜70万円（年収420〜900万円）＋業績賞与
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Position 2: Designer */}
            <div
              className={`group relative p-10 sm:p-12 md:p-16 bg-white/5 border-2 border-white/10 hover:border-[#d4af37] transition-all duration-1000 hover:shadow-2xl ${isVisible.positions ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="absolute top-0 left-0 w-0 h-3 bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] group-hover:w-full transition-all duration-1000"></div>

              <div className="space-y-8 md:space-y-10">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 tracking-tight">店舗設計デザイナー職</h3>
                  <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
                    ブランドの世界観を空間で具現化し、事業価値を高める店舗設計デザイナーを募集します。単なる設計ではなく、事業やブランド戦略を理解した上での"ブランド設計"を担うポジションです。
                  </p>
                </div>

                <div className="space-y-8 md:space-y-10">
                  <div>
                    <h4 className="text-xl font-light mb-4 flex items-center gap-4">
                      <div className="w-10 h-px bg-[#d4af37]"></div>
                      主な仕事内容
                    </h4>
                    <ul className="space-y-3 text-base text-gray-300 font-light">
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                        <span>顧客ニーズに基づく店舗設計プランの作成</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                        <span>図面作成および施工業者との連携</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                        <span>営業担当者と協力して顧客提案を実施</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                        <span>現場／プロジェクトの進捗確認と調整</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-light mb-4 flex items-center gap-4">
                      <div className="w-10 h-px bg-[#d4af37]"></div>
                      求める人物像
                    </h4>
                    <ul className="space-y-3 text-base text-gray-300 font-light">
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                        <span>創造性と実務スキルを兼ね備えたクリエイター</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                        <span>ものづくりが好きで、プロとしての責任感を持てる方</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                        <span>チームプレイが得意で、他部署や職人との協働ができる方</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-6 border-t-2 border-white/10">
                    <p className="text-xl font-light text-[#d4af37]">
                      月給30〜100万円（年収390〜1000万円）＋業績賞与
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Position 3: Construction Manager */}
            <div
              className={`group relative p-10 sm:p-12 md:p-16 bg-white/5 border-2 border-white/10 hover:border-[#d4af37] transition-all duration-1000 hover:shadow-2xl ${isVisible.positions ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="absolute top-0 left-0 w-0 h-3 bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] group-hover:w-full transition-all duration-1000"></div>

              <div className="space-y-8 md:space-y-10">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 tracking-tight">施工管理職（幹部候補）</h3>
                  <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
                    ブランド空間を形にする"最後の要"として、品質・スピード・コストの最適化を担います。今後の施工チームを牽引できる幹部候補の採用を想定しています。
                  </p>
                </div>

                <div className="space-y-8 md:space-y-10">
                  <div>
                    <h4 className="text-xl font-light mb-4 flex items-center gap-4">
                      <div className="w-10 h-px bg-[#d4af37]"></div>
                      主な仕事内容
                    </h4>
                    <ul className="space-y-3 text-base text-gray-300 font-light">
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                        <span>現場の進捗、安全、品質、コスト管理</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                        <span>職人・協力会社との調整</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                        <span>設計・営業との情報共有</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                        <span>原価・工程改善、施工マニュアル整備</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-light mb-4 flex items-center gap-4">
                      <div className="w-10 h-px bg-[#d4af37]"></div>
                      求める人物像
                    </h4>
                    <ul className="space-y-3 text-base text-gray-300 font-light">
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                        <span>経営視点を持って現場を動かせる方</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                        <span>数字・品質・スピードの3軸でバランスを取れる方</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                        <span>課題発見と改善提案に積極的な方</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-6 border-t-2 border-white/10">
                    <p className="text-xl font-light text-[#d4af37]">
                      月給30〜70万円（年収390〜910万円）＋業績賞与
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-32 lg:py-40 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container max-w-6xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-10 md:mb-12 tracking-tight leading-[1.2]">
            あなたの挑戦を、<br />
            お待ちしています。
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-10 md:mb-12 font-light max-w-3xl mx-auto leading-relaxed">
            LSで、次世代のブランド体験を共に創造しませんか。
          </p>

          <a href="https://forms.gle/unMs8pv4spw5eU137" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="magnetic-button bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] text-black hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] px-10 sm:px-12 md:px-16 py-5 md:py-6 text-base sm:text-lg tracking-[0.2em] font-light transition-all duration-700 hover:scale-105 hover:-translate-y-2 border-0"
            >
              応募する
            </Button>
          </a>
        </div>
      </section>

      {/* Learn More Section */}
      <section
        id="learn-more"
        className={`relative py-20 md:py-32 lg:py-40 bg-white text-black transition-all duration-1000 ${isVisible['learn-more'] ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container max-w-7xl">
          <div className="text-center mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">LEARN MORE</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight">
              もっと詳しく知る
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              LSについてさらに詳しく知りたい方は、<br />
              以下から詳細をご覧ください。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: '会社情報',
                description: 'LSの企業概要、所在地、事業内容をご覧いただけます',
                link: '/#company'
              },
              {
                title: 'ミッション・ビジョン',
                description: '私たちが目指す未来と、大切にしている価値観',
                link: '/#philosophy'
              },
              {
                title: '実績紹介',
                description: 'これまでに手掛けたプロジェクトをご覧いただけます',
                link: '/#projects'
              },
              {
                title: 'コアバリュー',
                description: 'LSが大切にしている5つの行動指針',
                link: '/#values'
              },
              {
                title: 'お問い合わせ',
                description: 'ご質問やご相談はこちらからお気軽にどうぞ',
                link: '/#contact'
              },
              {
                title: '応募フォーム',
                description: '詳細な募集要項と応募フォームはこちら',
                link: 'https://forms.gle/unMs8pv4spw5eU137',
                external: true
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className={`group relative p-8 md:p-10 border-2 border-gray-200 hover:border-[#d4af37] transition-all duration-700 hover:shadow-2xl cursor-pointer ${isVisible['learn-more'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] group-hover:w-full transition-all duration-700"></div>

                <h3 className="text-xl md:text-2xl font-light mb-4 group-hover:text-[#d4af37] transition-colors duration-500">
                  {item.title}
                  {item.external && (
                    <span className="ml-2 text-sm align-top">↗</span>
                  )}
                </h3>

                <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative py-12 md:py-20 lg:py-40 bg-black border-t-2 border-[#d4af37]/20">
        <div className="container max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-16 mb-16 md:mb-24">
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              <img
                src="/ls-logo.png"
                alt="株式会社LS"
                width="160"
                height="160"
                loading="lazy"
                decoding="async"
                className="w-32 h-32 md:w-40 md:h-40 opacity-80 transition-all duration-700"
                style={{
                  transform: `rotate(${Math.sin(scrollY * 0.01) * 5}deg) scale(${1 + Math.abs(Math.sin(scrollY * 0.01)) * 0.1})`
                }}
              />
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-md">
                空間を超え、<br />ブランドを創造する。
              </p>
              <p className="text-sm text-gray-500 font-light leading-relaxed max-w-md">
                店舗内装のデザイン設計施工から、ブランド空間プロデュースまで。LSは、"続く売上"が生まれるブランド体験を創造します。
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h4 className="text-white text-xs md:text-sm font-light mb-4 md:mb-6 tracking-[0.3em] md:tracking-[0.4em]">NAVIGATION</h4>
              <div className="space-y-3 md:space-y-4">
                <a href="/#about" className="block text-gray-400 hover:text-[#d4af37] transition-colors text-sm md:text-base font-light">
                  About
                </a>
                <a href="/#philosophy" className="block text-gray-400 hover:text-[#d4af37] transition-colors text-sm md:text-base font-light">
                  Philosophy
                </a>
                <a href="/#projects" className="block text-gray-400 hover:text-[#d4af37] transition-colors text-sm md:text-base font-light">
                  Projects
                </a>
                <a href="/#values" className="block text-gray-400 hover:text-[#d4af37] transition-colors text-sm md:text-base font-light">
                  Values
                </a>
                <a href="/careers" className="block text-gray-400 hover:text-[#d4af37] transition-colors text-sm md:text-base font-light">
                  Careers
                </a>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h4 className="text-white text-xs md:text-sm font-light mb-4 md:mb-6 tracking-[0.3em] md:tracking-[0.4em]">COMPANY</h4>
              <div className="space-y-3 md:space-y-4 text-gray-400 text-sm md:text-base font-light leading-relaxed">
                <p>株式会社LS</p>
                <p className="text-xs md:text-sm">
                  東京都渋谷区渋谷1-12-2<br />
                  クロスオフィス渋谷505
                </p>
                <p className="text-xs md:text-sm pt-2">
                  設立：2023年10月<br />
                  事業規模：案件単価 100〜2000万円
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h4 className="text-white text-xs md:text-sm font-light mb-4 md:mb-6 tracking-[0.3em] md:tracking-[0.4em]">RECRUIT</h4>
              <div className="space-y-4">
                <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                  一緒に働く仲間を募集しています
                </p>
                <a href="/careers" className="block">
                  <Button
                    variant="outline"
                    className="bg-transparent text-white border-2 border-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-700 w-full px-6 py-4 text-xs tracking-[0.25em] font-light hover:scale-105"
                  >
                    採用情報
                  </Button>
                </a>
                <a href="https://herp.careers/v1/lscompany" target="_blank" rel="noopener noreferrer" className="block">
                  <Button
                    variant="outline"
                    className="bg-transparent text-white border-2 border-white/30 hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-700 w-full px-6 py-4 text-xs tracking-[0.25em] font-light"
                  >
                    応募する ↗
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#d4af37]/20 pt-8 md:pt-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs font-light">
              <p className="tracking-[0.2em]">&copy; 2025 株式会社LS. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="/#about" className="hover:text-[#d4af37] transition-colors tracking-[0.2em]">
                  会社情報
                </a>
                <a href="/#contact" className="hover:text-[#d4af37] transition-colors tracking-[0.2em]">
                  お問い合わせ
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
