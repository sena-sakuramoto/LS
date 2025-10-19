import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

export default function Careers() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

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

        <div className="relative z-10 text-center space-y-16 px-4 max-w-7xl mx-auto">
          <div className="space-y-12">
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">CAREERS</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.3] animate-fade-in-up">
              次世代の<br />
              ブランド体験を、<br />
              共に創造しません<br />
              か。
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
              空間を超え、ブランドを創造する。<br />
              LSで、あなたの情熱と専門性を解き放ちませんか。
            </p>
          </div>

          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-[#d4af37] animate-bounce">
            <span className="text-xs tracking-[0.4em] font-light">SCROLL</span>
            <div className="w-px h-24 bg-gradient-to-b from-[#d4af37] to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section 
        id="overview"
        className={`relative py-56 bg-white text-black transition-all duration-1000 ${isVisible.overview ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container max-w-7xl">
          <div className="text-center mb-32">
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">COMPANY</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>
            
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light mb-12 tracking-tight">
              会社概要
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
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
                className={`group p-10 border-2 border-gray-200 hover:border-[#d4af37] transition-all duration-700 hover:shadow-xl cursor-pointer ${isVisible.overview ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-xs tracking-[0.3em] text-gray-400 font-light mb-8 uppercase">
                  {item.label}
                </div>
                <div className="text-2xl font-light leading-relaxed whitespace-pre-line group-hover:gold-gradient transition-all duration-500">
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
        className={`relative py-56 bg-gradient-to-b from-gray-900 to-black text-white transition-all duration-1000 ${isVisible.philosophy ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container max-w-7xl">
          <div className="text-center mb-32">
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">PHILOSOPHY</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>
            
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light mb-12 tracking-tight">
              経営理念・ビジョン
            </h2>
          </div>

          <div className="space-y-32">
            {[
              { 
                title: "MISSION", 
                subtitle: "ミッション",
                content: "空間を超え、\nブランドを創造する" 
              },
              { 
                title: "VISION", 
                subtitle: "ビジョン",
                content: "業界を変革し、\nブランドカンパニーに\nなる" 
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
                <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.6] max-w-5xl mx-auto whitespace-pre-line">
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
        className={`relative py-56 bg-white text-black transition-all duration-1000 ${isVisible.phase ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container max-w-7xl">
          <div className="text-center mb-32">
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">GROWTH</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>
            
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light mb-12 tracking-tight">
              事業フェーズ
            </h2>
          </div>

          <div className="space-y-16">
            {[
              { 
                phase: "第1フェーズ", 
                period: "〜2026年",
                title: "組織基盤の確立と幹部育成",
                desc: "少数精鋭のチームで、事業の基盤を固め、次世代のリーダーを育成します。"
              },
              { 
                phase: "第2フェーズ", 
                period: "〜2028年",
                title: "売上20億→50億を目指す成長ステージ",
                desc: "確立した基盤をもとに、急成長を実現。全国展開の準備を進めます。"
              },
              { 
                phase: "第3フェーズ", 
                period: "2028年以降",
                title: "全国・海外展開、新規事業化",
                desc: "国内外への展開と、新たな事業領域への挑戦を開始します。"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`group relative p-16 border-2 border-gray-200 hover:border-[#d4af37] transition-all duration-700 hover:shadow-2xl ${isVisible.phase ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="absolute top-0 left-0 w-0 h-2 bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] group-hover:w-full transition-all duration-1000"></div>
                
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="flex-shrink-0">
                    <div className="text-6xl font-light text-gray-100 group-hover:gold-gradient transition-all duration-700">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-6">
                      <h3 className="text-3xl font-light">{item.phase}</h3>
                      <span className="text-lg text-gray-400 font-light">{item.period}</span>
                    </div>
                    <h4 className="text-4xl font-light leading-tight">{item.title}</h4>
                    <p className="text-xl text-gray-600 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section 
        id="culture"
        className={`relative py-56 bg-gradient-to-b from-gray-900 to-black text-white transition-all duration-1000 ${isVisible.culture ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container max-w-7xl">
          <div className="text-center mb-32">
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">CULTURE</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>
            
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light mb-12 tracking-tight">
              組織文化
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              "少数精鋭で裁量が大きく、意思決定が速い",
              "「やりたい」と言えば任される風土",
              "経営層との距離が近く、事業や採用戦略にも関われる",
              "数字に強く、論理と熱量の両立を重視",
              "全員が事業家意識を持ち、ブランドを育てる会社"
            ].map((text, index) => (
              <div 
                key={index}
                className={`group flex items-start gap-8 p-12 bg-white/5 border border-white/10 hover:border-[#d4af37] transition-all duration-700 hover:bg-white/10 cursor-pointer ${isVisible.culture ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 border-2 border-[#d4af37]/30 flex items-center justify-center group-hover:bg-[#d4af37] group-hover:border-[#d4af37] transition-all duration-700 group-hover:rotate-180">
                  <span className="text-sm font-light group-hover:text-black">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <p className="flex-1 text-2xl font-light leading-relaxed pt-2 group-hover:text-[#d4af37] transition-colors">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions */}
      <section 
        id="positions"
        className={`relative py-56 bg-white text-black transition-all duration-1000 ${isVisible.positions ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container max-w-7xl">
          <div className="text-center mb-32">
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">POSITIONS</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>
            
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light mb-12 tracking-tight">
              募集職種
            </h2>
          </div>

          <div className="space-y-24">
            {/* Position 1: Sales Consultant */}
            <div 
              className={`group relative p-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 border-2 border-gray-200 hover:border-[#d4af37] transition-all duration-1000 hover:shadow-2xl ${isVisible.positions ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
              <div className="absolute top-0 left-0 w-0 h-3 bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] group-hover:w-full transition-all duration-1000"></div>
              
              <div className="space-y-16">
                <div>
                  <h3 className="text-5xl md:text-6xl font-light mb-8 tracking-tight">営業コンサルタント職（PM職）</h3>
                  <p className="text-2xl text-gray-600 font-light leading-relaxed">
                    店舗内装事業の中心を担うポジションです。単なる営業ではなく、プロジェクト全体の推進役として、顧客・設計・施工チームをつなぎ、案件の成功をリードします。
                  </p>
                </div>

                <div className="space-y-12">
                  <div>
                    <h4 className="text-2xl font-light mb-6 flex items-center gap-4">
                      <div className="w-12 h-px bg-[#d4af37]"></div>
                      主な仕事内容
                    </h4>
                    <ul className="space-y-4 text-lg text-gray-600 font-light">
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
                    <h4 className="text-2xl font-light mb-6 flex items-center gap-4">
                      <div className="w-12 h-px bg-[#d4af37]"></div>
                      求める人物像
                    </h4>
                    <ul className="space-y-4 text-lg text-gray-600 font-light">
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

                  <div className="pt-8 border-t-2 border-gray-200">
                    <p className="text-3xl font-light gold-gradient">
                      月給35〜70万円（年収420〜900万円）＋業績賞与
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Position 2: Designer */}
            <div 
              className={`group relative p-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 border-2 border-gray-200 hover:border-[#d4af37] transition-all duration-1000 hover:shadow-2xl ${isVisible.positions ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="absolute top-0 left-0 w-0 h-3 bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] group-hover:w-full transition-all duration-1000"></div>
              
              <div className="space-y-16">
                <div>
                  <h3 className="text-5xl md:text-6xl font-light mb-8 tracking-tight">店舗設計デザイナー職</h3>
                  <p className="text-2xl text-gray-600 font-light leading-relaxed">
                    ブランドの世界観を空間で具現化し、事業価値を高める店舗設計デザイナーを募集します。単なる設計ではなく、事業やブランド戦略を理解した上での"ブランド設計"を担うポジションです。
                  </p>
                </div>

                <div className="space-y-12">
                  <div>
                    <h4 className="text-2xl font-light mb-6 flex items-center gap-4">
                      <div className="w-12 h-px bg-[#d4af37]"></div>
                      主な仕事内容
                    </h4>
                    <ul className="space-y-4 text-lg text-gray-600 font-light">
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
                    <h4 className="text-2xl font-light mb-6 flex items-center gap-4">
                      <div className="w-12 h-px bg-[#d4af37]"></div>
                      求める人物像
                    </h4>
                    <ul className="space-y-4 text-lg text-gray-600 font-light">
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

                  <div className="pt-8 border-t-2 border-gray-200">
                    <p className="text-3xl font-light gold-gradient">
                      月給30〜100万円（年収390〜1000万円）＋業績賞与
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Position 3: Construction Manager */}
            <div 
              className={`group relative p-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 border-2 border-gray-200 hover:border-[#d4af37] transition-all duration-1000 hover:shadow-2xl ${isVisible.positions ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="absolute top-0 left-0 w-0 h-3 bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] group-hover:w-full transition-all duration-1000"></div>
              
              <div className="space-y-16">
                <div>
                  <h3 className="text-5xl md:text-6xl font-light mb-8 tracking-tight">施工管理職（幹部候補）</h3>
                  <p className="text-2xl text-gray-600 font-light leading-relaxed">
                    ブランド空間を形にする"最後の要"として、品質・スピード・コストの最適化を担います。今後の施工チームを牽引できる幹部候補の採用を想定しています。
                  </p>
                </div>

                <div className="space-y-12">
                  <div>
                    <h4 className="text-2xl font-light mb-6 flex items-center gap-4">
                      <div className="w-12 h-px bg-[#d4af37]"></div>
                      主な仕事内容
                    </h4>
                    <ul className="space-y-4 text-lg text-gray-600 font-light">
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
                    <h4 className="text-2xl font-light mb-6 flex items-center gap-4">
                      <div className="w-12 h-px bg-[#d4af37]"></div>
                      求める人物像
                    </h4>
                    <ul className="space-y-4 text-lg text-gray-600 font-light">
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

                  <div className="pt-8 border-t-2 border-gray-200">
                    <p className="text-3xl font-light gold-gradient">
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
      <section className="relative py-48 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container max-w-6xl text-center">
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-light mb-20 tracking-tight leading-[1.1]">
            あなたの挑戦を、<br />
            お待ちしています。
          </h2>
          
          <p className="text-3xl md:text-4xl text-gray-300 mb-24 font-light max-w-4xl mx-auto leading-relaxed">
            LSで、次世代のブランド体験を共に創造しませんか。
          </p>
          
          <a href="#application-form">
            <Button 
              size="lg"
              className="magnetic-button bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] text-black hover:shadow-[0_0_60px_rgba(212,175,55,0.8)] px-24 py-12 text-2xl tracking-[0.3em] font-light transition-all duration-700 hover:scale-110 hover:-translate-y-3 border-0"
            >
              応募する
            </Button>
          </a>
        </div>
      </section>

      {/* Application Form */}
      <section 
        id="application-form"
        className={`relative py-56 bg-white text-black transition-all duration-1000 ${isVisible['application-form'] ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container max-w-5xl">
          <div className="text-center mb-32">
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
              <span className="text-xs tracking-[0.5em] text-gray-400 font-light">APPLICATION</span>
              <div className="w-24 h-px bg-[#d4af37]/30"></div>
            </div>
            
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light mb-12 tracking-tight">
              応募フォーム
            </h2>
            <p className="text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              以下のフォームに必要事項をご記入の上、送信してください。<br />
              担当者より3営業日以内にご連絡いたします。
            </p>
          </div>

          <form 
            action="mailto:t.homma@lsgroup-co.jp"
            method="post"
            encType="text/plain"
            className="space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="block text-sm tracking-[0.2em] text-gray-600 font-light uppercase">
                  お名前 <span className="text-[#d4af37]">*</span>
                </label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full px-8 py-6 bg-gray-50 border-2 border-gray-200 focus:border-[#d4af37] focus:outline-none transition-all duration-500 text-lg font-light"
                  placeholder="山田 太郎"
                />
              </div>

              <div className="space-y-4">
                <label className="block text-sm tracking-[0.2em] text-gray-600 font-light uppercase">
                  メールアドレス <span className="text-[#d4af37]">*</span>
                </label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full px-8 py-6 bg-gray-50 border-2 border-gray-200 focus:border-[#d4af37] focus:outline-none transition-all duration-500 text-lg font-light"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="block text-sm tracking-[0.2em] text-gray-600 font-light uppercase">
                  電話番号 <span className="text-[#d4af37]">*</span>
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  className="w-full px-8 py-6 bg-gray-50 border-2 border-gray-200 focus:border-[#d4af37] focus:outline-none transition-all duration-500 text-lg font-light"
                  placeholder="090-1234-5678"
                />
              </div>

              <div className="space-y-4">
                <label className="block text-sm tracking-[0.2em] text-gray-600 font-light uppercase">
                  応募職種 <span className="text-[#d4af37]">*</span>
                </label>
                <select 
                  name="position"
                  required
                  className="w-full px-8 py-6 bg-gray-50 border-2 border-gray-200 focus:border-[#d4af37] focus:outline-none transition-all duration-500 text-lg font-light"
                >
                  <option value="">選択してください</option>
                  <option value="営業コンサルタント職（PM職）">営業コンサルタント職（PM職）</option>
                  <option value="店舗設計デザイナー職">店舗設計デザイナー職</option>
                  <option value="施工管理職（幹部候補）">施工管理職（幹部候補）</option>
                  <option value="その他">その他</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm tracking-[0.2em] text-gray-600 font-light uppercase">
                志望動機 <span className="text-[#d4af37]">*</span>
              </label>
              <textarea 
                name="motivation"
                required
                rows={8}
                className="w-full px-8 py-6 bg-gray-50 border-2 border-gray-200 focus:border-[#d4af37] focus:outline-none transition-all duration-500 text-lg font-light resize-none"
                placeholder="LSへの志望動機をお聞かせください"
              ></textarea>
            </div>

            <div className="space-y-4">
              <label className="block text-sm tracking-[0.2em] text-gray-600 font-light uppercase">
                職務経歴・スキル
              </label>
              <textarea 
                name="experience"
                rows={8}
                className="w-full px-8 py-6 bg-gray-50 border-2 border-gray-200 focus:border-[#d4af37] focus:outline-none transition-all duration-500 text-lg font-light resize-none"
                placeholder="これまでの職務経歴や保有スキルをご記入ください"
              ></textarea>
            </div>

            <div className="space-y-4">
              <label className="block text-sm tracking-[0.2em] text-gray-600 font-light uppercase">
                その他・ご質問
              </label>
              <textarea 
                name="other"
                rows={6}
                className="w-full px-8 py-6 bg-gray-50 border-2 border-gray-200 focus:border-[#d4af37] focus:outline-none transition-all duration-500 text-lg font-light resize-none"
                placeholder="その他、ご質問やお伝えしたいことがあればご記入ください"
              ></textarea>
            </div>

            <div className="text-center pt-12">
              <Button 
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] text-black hover:shadow-[0_0_60px_rgba(212,175,55,0.8)] px-24 py-8 text-xl tracking-[0.3em] font-light transition-all duration-700 hover:scale-110 hover:-translate-y-2 border-0"
              >
                送信する
              </Button>
              <p className="text-sm text-gray-400 mt-8 font-light">
                ※ 送信ボタンを押すと、メールアプリが起動します
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-40 bg-black border-t-2 border-[#d4af37]/20">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
            <div className="md:col-span-2 space-y-10">
              <img 
                src="/ls-logo.png" 
                alt="株式会社LS" 
                className="w-48 h-48 opacity-80"
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
              <h4 className="text-white text-sm font-light mb-10 tracking-[0.4em]">LINKS</h4>
              <div className="space-y-5">
                <a href="/" className="block text-gray-400 hover:text-[#d4af37] transition-colors text-base font-light">
                  ホーム
                </a>
                <a href="https://herp.careers/v1/lscompany" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-[#d4af37] transition-colors text-base font-light">
                  採用ページ
                </a>
              </div>
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

