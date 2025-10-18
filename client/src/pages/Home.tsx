import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section - Premium Brand */}
      <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/luxury-2.jpeg" 
            alt="LS Premium Space" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center space-y-12 px-4 max-w-6xl mx-auto">
          <div className="mb-12 animate-fade-in-up">
            <img 
              src="/ls-logo.jpg" 
              alt="株式会社LS" 
              className="w-40 h-40 mx-auto opacity-90 brightness-200"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.2em] text-white leading-tight">
            LS
          </h1>
          
          <div className="h-px w-24 bg-white/30 mx-auto"></div>
          
          <p className="text-2xl md:text-4xl lg:text-5xl font-light tracking-wider text-white/90 leading-relaxed">
            空間を超え、<br className="md:hidden" />ブランドを創造する。
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white text-black hover:bg-white/90 border-0 px-12 py-6 text-lg tracking-wider"
            >
              OUR VISION
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent text-white hover:bg-white/10 border-white/30 px-12 py-6 text-lg tracking-wider"
            >
              CONTACT US
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
            <span className="text-xs tracking-widest">SCROLL</span>
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Mission Section - Cinematic */}
      <section id="about" className="relative py-40 bg-white text-black overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-gray-100 to-transparent opacity-50"></div>
        
        <div className="container max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-xs tracking-[0.3em] text-gray-400 font-light">MISSION</span>
                <div className="h-px w-16 bg-black/20 mt-4 mb-8"></div>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight">
                空間を超え、<br />
                ブランドを<br />
                創造する。
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                私たちLSは、内装という「箱」を作るだけではなく、事業の世界観と収益モデルまで設計します。
              </p>
              
              <p className="text-lg text-gray-500 leading-relaxed">
                立地・動線・席数・オペレーション・採用・販促——店舗の成功に関わる要素を統合し、"続く売上"が生まれるブランド体験をつくる。それが私たちの使命です。
              </p>
            </div>
            
            <div className="relative h-[600px] group">
              <img 
                src="/luxury-1.webp" 
                alt="Premium Interior Design" 
                className="w-full h-full object-cover shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - Dark Premium */}
      <section className="relative py-40 bg-black text-white">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative h-[600px] group order-2 lg:order-1">
              <img 
                src="/luxury-3.jpg" 
                alt="Luxury Space Design" 
                className="w-full h-full object-cover shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <span className="text-xs tracking-[0.3em] text-gray-400 font-light">VISION</span>
                <div className="h-px w-16 bg-white/20 mt-4 mb-8"></div>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight">
                業界を変革し、<br />
                ブランドカンパニー<br />
                になる。
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                内装＝コストという常識を変え、内装＝投資へ。
              </p>
              
              <div className="space-y-6 pt-8">
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-1 h-12 bg-white/20 group-hover:bg-white transition-colors"></div>
                  <div>
                    <h4 className="text-lg font-light mb-2">事業づくり視点の内装</h4>
                    <p className="text-gray-400 text-sm">成果に直結する店舗を増やす</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-1 h-12 bg-white/20 group-hover:bg-white transition-colors"></div>
                  <div>
                    <h4 className="text-lg font-light mb-2">全国展開の実現</h4>
                    <p className="text-gray-400 text-sm">同品質・同スピードで全国へ</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-1 h-12 bg-white/20 group-hover:bg-white transition-colors"></div>
                  <div>
                    <h4 className="text-lg font-light mb-2">建築 × AI</h4>
                    <p className="text-gray-400 text-sm">意思決定と設計を高度化</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-1 h-12 bg-white/20 group-hover:bg-white transition-colors"></div>
                  <div>
                    <h4 className="text-lg font-light mb-2">5年でスタンダードへ</h4>
                    <p className="text-gray-400 text-sm">ブランドカンパニーとしての地位確立</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Film Section - Immersive */}
      <section id="film" className="relative py-40 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container max-w-7xl">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] text-gray-400 font-light">BRAND FILM</span>
            <div className="h-px w-16 bg-white/20 mt-4 mb-12 mx-auto"></div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 tracking-tight">
              ブランドが動き出す瞬間
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              LSが手がける空間とブランド体験の哲学を、短編映像に凝縮しました。
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="aspect-video bg-black shadow-2xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/GjfqIFZ2SPg?si=AZ8gf3B0byRfezB7"
                title="LS Brand Film"
                className="w-full h-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 border border-white/10"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-white/10"></div>
          </div>
        </div>
      </section>

      {/* Values Section - Premium Grid */}
      <section id="values" className="relative py-40 bg-white text-black">
        <div className="container max-w-7xl">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] text-gray-400 font-light">VALUES</span>
            <div className="h-px w-16 bg-black/20 mt-4 mb-12 mx-auto"></div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
              バリュー
            </h2>
            
            <p className="text-3xl md:text-4xl text-gray-600 font-light tracking-wide">
              "超"で貫く5つの基準
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="group relative bg-gray-50 p-12 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-1 bg-black group-hover:bg-white transition-colors"></div>
              
              <div className="mb-8">
                <span className="text-6xl font-light text-gray-200 group-hover:text-white/20">01</span>
              </div>
              
              <h3 className="text-3xl font-light mb-6 tracking-tight">超顧客思考</h3>
              
              <p className="text-lg mb-6 opacity-80 font-light">
                成果から逆算して設計・工事・運用まで伴走。
              </p>
              
              <ul className="space-y-3 text-sm opacity-70">
                <li>• 売上・粗利を初回提案に数値化</li>
                <li>• 費用対効果の低い装飾を排除</li>
                <li>• 引渡し後30日レビュー実施</li>
              </ul>
            </div>

            {/* Value 2 */}
            <div className="group relative bg-gray-50 p-12 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-1 bg-black group-hover:bg-white transition-colors"></div>
              
              <div className="mb-8">
                <span className="text-6xl font-light text-gray-200 group-hover:text-white/20">02</span>
              </div>
              
              <h3 className="text-3xl font-light mb-6 tracking-tight">超徹底</h3>
              
              <p className="text-lg mb-6 opacity-80 font-light">
                約束・基準・手順を守り切る。
              </p>
              
              <ul className="space-y-3 text-sm opacity-70">
                <li>• チェックリスト運用の徹底</li>
                <li>• 記録主義で全て保管</li>
                <li>• リスクは"はじめに言う"</li>
              </ul>
            </div>

            {/* Value 3 */}
            <div className="group relative bg-gray-50 p-12 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-1 bg-black group-hover:bg-white transition-colors"></div>
              
              <div className="mb-8">
                <span className="text-6xl font-light text-gray-200 group-hover:text-white/20">03</span>
              </div>
              
              <h3 className="text-3xl font-light mb-6 tracking-tight">超追求</h3>
              
              <p className="text-lg mb-6 opacity-80 font-light">
                品質と再現性に貪欲。
              </p>
              
              <ul className="space-y-3 text-sm opacity-70">
                <li>• ディテールまで設計検証</li>
                <li>• 最適点を比較提示</li>
                <li>• 学びを標準化して反映</li>
              </ul>
            </div>

            {/* Value 4 */}
            <div className="group relative bg-gray-50 p-12 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-1 bg-black group-hover:bg-white transition-colors"></div>
              
              <div className="mb-8">
                <span className="text-6xl font-light text-gray-200 group-hover:text-white/20">04</span>
              </div>
              
              <h3 className="text-3xl font-light mb-6 tracking-tight">超連携</h3>
              
              <p className="text-lg mb-6 opacity-80 font-light">
                全てのステークホルダーが一体。
              </p>
              
              <ul className="space-y-3 text-sm opacity-70">
                <li>• 情報の一元管理</li>
                <li>• 三者合意ルール</li>
                <li>• トラブル時の即共有</li>
              </ul>
            </div>

            {/* Value 5 */}
            <div className="group relative bg-gray-50 p-12 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-black group-hover:bg-white transition-colors"></div>
              
              <div className="mb-8">
                <span className="text-6xl font-light text-gray-200 group-hover:text-white/20">05</span>
              </div>
              
              <h3 className="text-3xl font-light mb-6 tracking-tight">超挑戦</h3>
              
              <p className="text-lg mb-6 opacity-80 font-light">
                スピードと挑戦で業界を前進。
              </p>
              
              <ul className="space-y-3 text-sm opacity-70">
                <li>• 最短48時間で3案提示</li>
                <li>• 新技術を積極採用</li>
                <li>• 失敗を学びに変換</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Section - Elegant */}
      <section id="company" className="relative py-40 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] text-gray-400 font-light">COMPANY</span>
            <div className="h-px w-16 bg-white/20 mt-4 mb-12 mx-auto"></div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
              会社概要
            </h2>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 md:p-16">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-8 border-b border-white/10">
                <div className="text-sm tracking-wider text-gray-400 font-light">会社名</div>
                <div className="md:col-span-3 text-lg font-light">株式会社LS</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-8 border-b border-white/10">
                <div className="text-sm tracking-wider text-gray-400 font-light">設立</div>
                <div className="md:col-span-3 text-lg font-light">2023年10月</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-8 border-b border-white/10">
                <div className="text-sm tracking-wider text-gray-400 font-light">所在地</div>
                <div className="md:col-span-3 text-lg font-light">東京都渋谷区渋谷1-12-2 クロスオフィス渋谷505</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-8 border-b border-white/10">
                <div className="text-sm tracking-wider text-gray-400 font-light">代表者</div>
                <div className="md:col-span-3 text-lg font-light">本間 拓彌</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-8 border-b border-white/10">
                <div className="text-sm tracking-wider text-gray-400 font-light">資本金</div>
                <div className="md:col-span-3 text-lg font-light">1,000,000円</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-8 border-b border-white/10">
                <div className="text-sm tracking-wider text-gray-400 font-light">事業内容</div>
                <div className="md:col-span-3 text-lg font-light">店舗内装のコンサルティング／設計デザイン／施工・PM／ブランド展開支援</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-8 border-b border-white/10">
                <div className="text-sm tracking-wider text-gray-400 font-light">建設業許可</div>
                <div className="md:col-span-3 text-lg font-light">東京都知事 許可（般-7）第159994号</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-sm tracking-wider text-gray-400 font-light">従業員数</div>
                <div className="md:col-span-3 text-lg font-light">コアメンバー5名</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Powerful */}
      <section className="relative py-32 bg-white text-black overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, black 2px, black 4px)'}}>
          </div>
        </div>
        
        <div className="container max-w-5xl relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-12 tracking-tight leading-tight">
            次世代のブランド体験を、<br />
            共に創造しませんか。
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-16 font-light max-w-3xl mx-auto leading-relaxed">
            LSは、あなたの情熱と専門性を求めています。
          </p>
          
          <Button 
            size="lg"
            className="bg-black text-white hover:bg-gray-900 px-16 py-8 text-xl tracking-wider"
          >
            JOIN US
          </Button>
        </div>
      </section>

      {/* Footer - Minimalist Premium */}
      <footer id="contact" className="relative py-24 bg-black border-t border-white/10">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="md:col-span-2">
              <img 
                src="/ls-logo.jpg" 
                alt="株式会社LS" 
                className="w-32 h-32 mb-8 brightness-200 opacity-80"
              />
              <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
                空間を超え、ブランドを創造する。
              </p>
            </div>
            
            <div>
              <h4 className="text-white text-sm font-light mb-6 tracking-widest">COMPANY</h4>
              <div className="space-y-3 text-gray-400 text-sm font-light">
                <p>株式会社LS</p>
                <p>東京都渋谷区渋谷1-12-2</p>
                <p>クロスオフィス渋谷505</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-white text-sm font-light mb-6 tracking-widest">CONTACT</h4>
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="bg-transparent text-white border-white/20 hover:bg-white hover:text-black transition-all"
                >
                  お問い合わせ
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-xs border-t border-white/10 pt-12 tracking-wider">
            <p>&copy; 2025 株式会社LS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

