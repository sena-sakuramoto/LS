import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section - Ultra Premium */}
      <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          </div>
          <img 
            src="/luxury-2.jpeg" 
            alt="LS Premium Space" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center space-y-16 px-4 max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-in-up">
            <img 
              src="/ls-logo.jpg" 
              alt="株式会社LS" 
              className="w-48 h-48 mx-auto opacity-90 brightness-200 drop-shadow-2xl"
            />
          </div>
          
          <div className="space-y-8">
            <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-extralight tracking-[0.25em] text-white leading-none drop-shadow-2xl">
              LS
            </h1>
            
            <div className="flex items-center justify-center gap-8">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            </div>
            
            <p className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-[0.15em] text-white/90 leading-relaxed">
              空間を超え、<br className="md:hidden" />ブランドを創造する。
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center pt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white text-black hover:bg-white/90 border-0 px-16 py-8 text-lg tracking-[0.2em] font-light shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105"
            >
              OUR VISION
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent text-white hover:bg-white/10 border border-white/30 px-16 py-8 text-lg tracking-[0.2em] font-light backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-white"
            >
              CONTACT US
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/40 animate-bounce">
            <span className="text-xs tracking-[0.3em] font-light">SCROLL</span>
            <div className="w-px h-20 bg-gradient-to-b from-white/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Stats Section - Premium Numbers */}
      <section className="relative py-32 bg-gradient-to-b from-black to-gray-900 border-y border-white/10">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center space-y-4 group cursor-pointer">
              <div className="text-6xl md:text-7xl font-extralight text-white group-hover:scale-110 transition-transform duration-500">
                50<span className="text-4xl">億</span>
              </div>
              <div className="h-px w-16 bg-white/20 mx-auto group-hover:w-24 transition-all"></div>
              <p className="text-sm tracking-[0.2em] text-gray-400 font-light">TARGET REVENUE</p>
            </div>
            
            <div className="text-center space-y-4 group cursor-pointer">
              <div className="text-6xl md:text-7xl font-extralight text-white group-hover:scale-110 transition-transform duration-500">
                100<span className="text-4xl">+</span>
              </div>
              <div className="h-px w-16 bg-white/20 mx-auto group-hover:w-24 transition-all"></div>
              <p className="text-sm tracking-[0.2em] text-gray-400 font-light">PROJECTS</p>
            </div>
            
            <div className="text-center space-y-4 group cursor-pointer">
              <div className="text-6xl md:text-7xl font-extralight text-white group-hover:scale-110 transition-transform duration-500">
                5<span className="text-4xl">年</span>
              </div>
              <div className="h-px w-16 bg-white/20 mx-auto group-hover:w-24 transition-all"></div>
              <p className="text-sm tracking-[0.2em] text-gray-400 font-light">TO STANDARD</p>
            </div>
            
            <div className="text-center space-y-4 group cursor-pointer">
              <div className="text-6xl md:text-7xl font-extralight text-white group-hover:scale-110 transition-transform duration-500">
                AI<span className="text-4xl">×</span>
              </div>
              <div className="h-px w-16 bg-white/20 mx-auto group-hover:w-24 transition-all"></div>
              <p className="text-sm tracking-[0.2em] text-gray-400 font-light">INNOVATION</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Luxury Layout */}
      <section id="about" className="relative py-48 bg-white text-black overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30"></div>
        
        <div className="container max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 space-y-12">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-black"></div>
                  <span className="text-xs tracking-[0.4em] text-gray-400 font-light">MISSION</span>
                </div>
                
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight leading-[1.1] tracking-tight mb-12">
                  空間を超え、<br />
                  ブランドを<br />
                  創造する。
                </h2>
              </div>
              
              <div className="space-y-8">
                <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light">
                  私たちLSは、内装という「箱」を作るだけではなく、事業の世界観と収益モデルまで設計します。
                </p>
                
                <p className="text-lg text-gray-500 leading-relaxed font-light">
                  立地・動線・席数・オペレーション・採用・販促——店舗の成功に関わる要素を統合し、"続く売上"が生まれるブランド体験をつくる。それが私たちの使命です。
                </p>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="mt-8 border-2 border-black text-black hover:bg-black hover:text-white px-12 py-6 text-sm tracking-[0.2em] font-light transition-all duration-500"
                >
                  READ MORE
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-7 relative">
              <div className="relative h-[700px] group">
                {/* Main Image */}
                <div className="absolute inset-0 overflow-hidden shadow-2xl">
                  <img 
                    src="/luxury-1.webp" 
                    alt="Premium Interior Design" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Floating Card */}
                <div className="absolute -bottom-12 -left-12 bg-white p-8 shadow-2xl max-w-sm backdrop-blur-sm bg-white/95">
                  <p className="text-sm tracking-[0.2em] text-gray-400 mb-4 font-light">PHILOSOPHY</p>
                  <p className="text-lg text-black font-light leading-relaxed">
                    "続く売上"が生まれるブランド体験をつくる
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - Dark Elegance */}
      <section className="relative py-48 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7 relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                {/* Large Image */}
                <div className="col-span-2 relative h-[500px] group overflow-hidden">
                  <img 
                    src="/luxury-3.jpg" 
                    alt="Luxury Space Design" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                {/* Small Images */}
                <div className="relative h-64 group overflow-hidden">
                  <img 
                    src="/luxury-4.png" 
                    alt="Interior Detail" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="relative h-64 group overflow-hidden">
                  <img 
                    src="/luxury-5.jpg" 
                    alt="Design Detail" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 space-y-12 order-1 lg:order-2">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-white/30"></div>
                  <span className="text-xs tracking-[0.4em] text-gray-400 font-light">VISION</span>
                </div>
                
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight leading-[1.1] tracking-tight mb-12">
                  業界を変革し、<br />
                  ブランド<br />
                  カンパニー<br />
                  になる。
                </h2>
              </div>
              
              <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light">
                内装＝コストという常識を変え、内装＝投資へ。
              </p>
              
              <div className="space-y-8 pt-8">
                {[
                  { title: "事業づくり視点の内装", desc: "成果に直結する店舗を増やす" },
                  { title: "全国展開の実現", desc: "同品質・同スピードで全国へ" },
                  { title: "建築 × AI", desc: "意思決定と設計を高度化" },
                  { title: "5年でスタンダードへ", desc: "ブランドカンパニーとしての地位確立" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-6 group cursor-pointer">
                    <div className="flex-shrink-0 w-12 h-12 border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                      <span className="text-sm font-light">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-light mb-2 group-hover:text-white/80 transition-colors">{item.title}</h4>
                      <p className="text-gray-400 text-sm font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Film Section - Cinematic */}
      <section id="film" className="relative py-48 bg-black">
        <div className="container max-w-7xl">
          <div className="text-center mb-24">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-white/20"></div>
              <span className="text-xs tracking-[0.4em] text-gray-400 font-light">BRAND FILM</span>
              <div className="w-16 h-px bg-white/20"></div>
            </div>
            
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight mb-12 tracking-tight leading-tight">
              ブランドが<br className="md:hidden" />動き出す瞬間
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              LSが手がける空間とブランド体験の哲学を、短編映像に凝縮しました。
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Decorative Frame */}
            <div className="absolute -inset-8 border border-white/10 pointer-events-none"></div>
            <div className="absolute -inset-16 border border-white/5 pointer-events-none"></div>
            
            <div className="relative aspect-video bg-black shadow-2xl overflow-hidden group">
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

      {/* Values Section - Interactive Cards */}
      <section id="values" className="relative py-48 bg-white text-black">
        <div className="container max-w-7xl">
          <div className="text-center mb-24">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-black/20"></div>
              <span className="text-xs tracking-[0.4em] text-gray-400 font-light">VALUES</span>
              <div className="w-16 h-px bg-black/20"></div>
            </div>
            
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight mb-8 tracking-tight">
              バリュー
            </h2>
            
            <p className="text-4xl md:text-5xl text-gray-600 font-extralight tracking-wide">
              "超"で貫く5つの基準
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className={`group relative bg-gradient-to-br from-gray-50 to-white p-12 border border-gray-200 hover:border-black hover:shadow-2xl transition-all duration-700 cursor-pointer ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                {/* Top Border Animation */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-black group-hover:w-full transition-all duration-700"></div>
                
                <div className="mb-12">
                  <span className="text-8xl font-extralight text-gray-200 group-hover:text-black/20 transition-colors duration-700">
                    {value.num}
                  </span>
                </div>
                
                <h3 className="text-4xl font-light mb-8 tracking-tight group-hover:tracking-wide transition-all duration-500">
                  {value.title}
                </h3>
                
                <p className="text-xl mb-8 text-gray-600 font-light leading-relaxed">
                  {value.desc}
                </p>
                
                <ul className="space-y-4 text-sm text-gray-500 font-light">
                  {value.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Section - Sophisticated */}
      <section id="company" className="relative py-48 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-24">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-white/20"></div>
              <span className="text-xs tracking-[0.4em] text-gray-400 font-light">COMPANY</span>
              <div className="w-16 h-px bg-white/20"></div>
            </div>
            
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight mb-8 tracking-tight">
              会社概要
            </h2>
          </div>
          
          <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-16 md:p-20">
            {/* Decorative Corner */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-white/20"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-white/20"></div>
            
            <div className="space-y-10">
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
                <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10 last:border-0 group hover:border-white/30 transition-colors">
                  <div className="text-sm tracking-[0.2em] text-gray-400 font-light uppercase">
                    {item.label}
                  </div>
                  <div className="md:col-span-3 text-xl font-light group-hover:text-white/80 transition-colors">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Powerful */}
      <section className="relative py-40 bg-white text-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="container max-w-6xl relative z-10 text-center">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight mb-16 tracking-tight leading-[1.2]">
            次世代の<br />
            ブランド体験を、<br />
            共に創造しませんか。
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-600 mb-20 font-light max-w-3xl mx-auto leading-relaxed">
            LSは、あなたの情熱と専門性を求めています。
          </p>
          
          <Button 
            size="lg"
            className="bg-black text-white hover:bg-gray-900 px-20 py-10 text-xl tracking-[0.3em] font-light shadow-2xl hover:shadow-black/50 transition-all duration-500 hover:scale-105"
          >
            JOIN US
          </Button>
        </div>
      </section>

      {/* Footer - Minimalist Luxury */}
      <footer id="contact" className="relative py-32 bg-black border-t border-white/10">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
            <div className="md:col-span-2 space-y-8">
              <img 
                src="/ls-logo.jpg" 
                alt="株式会社LS" 
                className="w-40 h-40 brightness-200 opacity-80"
              />
              <p className="text-2xl text-gray-300 font-light leading-relaxed max-w-md">
                空間を超え、<br />ブランドを創造する。
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-white text-sm font-light mb-8 tracking-[0.3em]">COMPANY</h4>
              <div className="space-y-4 text-gray-400 text-sm font-light leading-relaxed">
                <p>株式会社LS</p>
                <p>東京都渋谷区渋谷1-12-2<br />クロスオフィス渋谷505</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-white text-sm font-light mb-8 tracking-[0.3em]">CONTACT</h4>
              <Button 
                variant="outline" 
                className="bg-transparent text-white border-white/20 hover:bg-white hover:text-black transition-all duration-500 px-8 py-6 text-sm tracking-[0.2em] font-light"
              >
                お問い合わせ
              </Button>
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-xs border-t border-white/10 pt-16 tracking-[0.2em] font-light">
            <p>&copy; 2025 株式会社LS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

