import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="top" className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center space-y-8 px-4">
          <div className="mb-8">
            <img src="/ls-logo.jpg" alt="株式会社LS" className="w-48 h-48 mx-auto" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wider text-gray-800">
            株式会社LS
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wide">
            空間を超え、ブランドを創造する。
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-32 bg-white">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <p className="text-sm tracking-widest text-gray-500 mb-4">MISSION</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8">
              ミッション
            </h2>
          </div>
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              空間を超え、ブランドを創造する。
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              私たちLSは、内装という「箱」を作るだけではなく、事業の世界観と収益モデルまで設計します。
              立地・動線・席数・オペレーション・採用・販促——店舗の成功に関わる要素を統合し、"続く売上"が生まれるブランド体験をつくる。それが私たちの使命です。
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 bg-gray-50">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <p className="text-sm tracking-widest text-gray-500 mb-4">VISION</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8">
              ビジョン
            </h2>
          </div>
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              業界を変革し、ブランドカンパニーになる。
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              内装＝コストという常識を変え、内装＝投資へ。コンサル／設計／施工を一気通貫し、データとAIを活用した再現性の高い出店モデルで全国展開を支援します。
            </p>
            <ul className="space-y-4 mt-8">
              <li className="flex items-start gap-4">
                <span className="text-2xl font-bold text-gray-300">•</span>
                <span className="text-lg text-gray-700">事業づくり視点の内装で、成果に直結する店舗を増やす</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl font-bold text-gray-300">•</span>
                <span className="text-lg text-gray-700">パートナーと連携し、全国で同品質・同スピードを実現</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl font-bold text-gray-300">•</span>
                <span className="text-lg text-gray-700">「建築 × AI」で意思決定と設計・現場管理を高度化</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl font-bold text-gray-300">•</span>
                <span className="text-lg text-gray-700">5年で"ブランドカンパニー"としてのスタンダードを確立</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Film Section */}
      <section id="film" className="py-32 bg-black">
        <div className="container max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-sm tracking-widest text-gray-400 mb-4">FILM</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              ブランドが動き出す瞬間
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              LSが手がける空間とブランド体験の哲学を、短編映像に凝縮しました。
            </p>
          </div>
          <div className="aspect-video max-w-4xl mx-auto bg-gray-900 rounded-lg overflow-hidden">
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
      </section>

      {/* Values Section */}
      <section id="values" className="py-32 bg-white">
        <div className="container max-w-6xl">
          <div className="mb-16">
            <p className="text-sm tracking-widest text-gray-500 mb-4">VALUES</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8">
              バリュー
            </h2>
            <p className="text-2xl md:text-3xl text-gray-700 font-light">
              "超"で貫く5つの基準
            </p>
          </div>

          <div className="space-y-12">
            {/* Value 1 */}
            <div className="border-l-4 border-black pl-8 py-6">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-4xl font-bold text-gray-300">01</span>
                <h3 className="text-3xl md:text-4xl font-bold text-black">超顧客思考</h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">成果から逆算して設計・工事・運用まで伴走。</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-black">•</span>
                  <span>売上・粗利・席数・回転率を初回提案に数値で明記</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black">•</span>
                  <span>「やらない提案」（費用対効果の低い装飾は切る）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black">•</span>
                  <span>引渡し後30日レビューで改善提案を必ず実施</span>
                </li>
              </ul>
            </div>

            {/* Value 2 */}
            <div className="border-l-4 border-black pl-8 py-6">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-4xl font-bold text-gray-300">02</span>
                <h3 className="text-3xl md:text-4xl font-bold text-black">超徹底</h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">約束・基準・手順を守り切る。</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-black">•</span>
                  <span>現調→設計→積算→工程のチェックリスト運用</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black">•</span>
                  <span>記録主義（現場写真・変更履歴・図面差分を全て残す）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black">•</span>
                  <span>リスクは"はじめに言う"。曖昧さを残さない</span>
                </li>
              </ul>
            </div>

            {/* Value 3 */}
            <div className="border-l-4 border-black pl-8 py-6">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-4xl font-bold text-gray-300">03</span>
                <h3 className="text-3xl md:text-4xl font-bold text-black">超追求</h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">品質と再現性に貪欲。</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-black">•</span>
                  <span>ディテール（R、目地、納まり、見えない裏側）まで詰める</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black">•</span>
                  <span>原価と仕上がりの最適点を比較提示（A/B/ミニマム）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black">•</span>
                  <span>現場から学んだ改善を標準化して次案件に反映</span>
                </li>
              </ul>
            </div>

            {/* Value 4 */}
            <div className="border-l-4 border-black pl-8 py-6">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-4xl font-bold text-gray-300">04</span>
                <h3 className="text-3xl md:text-4xl font-bold text-black">超連携</h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">コンサル・設計・施工・協力会社・発注者が一体。</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-black">•</span>
                  <span>ワンチーム工程表とSlack/Notionの情報一元化</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black">•</span>
                  <span>決裁者・現場・サプライヤーの三者合意ルール</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black">•</span>
                  <span>トラブル時は"事実→影響→代替案→決定"の4点で即共有</span>
                </li>
              </ul>
            </div>

            {/* Value 5 */}
            <div className="border-l-4 border-black pl-8 py-6">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-4xl font-bold text-gray-300">05</span>
                <h3 className="text-3xl md:text-4xl font-bold text-black">超挑戦</h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">スピードと挑戦で業界を前進。</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-black">•</span>
                  <span>初回提案は最短48時間・3案（ミニマム／スタンダード／ブランディング）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black">•</span>
                  <span>新素材・新工法・AIを積極採用、検証結果を公開</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black">•</span>
                  <span>失敗は学びに変換し、再発防止を仕組みに残す</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="py-32 bg-gray-50">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <p className="text-sm tracking-widest text-gray-500 mb-4">COMPANY</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8">
              会社概要
            </h2>
          </div>
          <div className="bg-white p-8 md:p-12 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-gray-200 pb-6">
              <div className="font-bold text-gray-900">会社名</div>
              <div className="md:col-span-3 text-gray-700">株式会社LS</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-gray-200 pb-6">
              <div className="font-bold text-gray-900">設立</div>
              <div className="md:col-span-3 text-gray-700">2023年10月</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-gray-200 pb-6">
              <div className="font-bold text-gray-900">所在地</div>
              <div className="md:col-span-3 text-gray-700">東京都渋谷区渋谷1-12-2 クロスオフィス渋谷505</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-gray-200 pb-6">
              <div className="font-bold text-gray-900">代表者</div>
              <div className="md:col-span-3 text-gray-700">本間 拓彌</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-gray-200 pb-6">
              <div className="font-bold text-gray-900">資本金</div>
              <div className="md:col-span-3 text-gray-700">1,000,000円</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-gray-200 pb-6">
              <div className="font-bold text-gray-900">事業内容</div>
              <div className="md:col-span-3 text-gray-700">店舗内装のコンサルティング／設計デザイン／施工・PM／ブランド展開支援</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-gray-200 pb-6">
              <div className="font-bold text-gray-900">建設業許可</div>
              <div className="md:col-span-3 text-gray-700">東京都知事 許可（般-7）第159994号</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="font-bold text-gray-900">従業員数</div>
              <div className="md:col-span-3 text-gray-700">コアメンバー5名</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-24 bg-black border-t border-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="mb-6">
                <img src="/ls-logo.jpg" alt="株式会社LS" className="w-32 h-32 brightness-0 invert" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                空間を超え、ブランドを創造する。
              </p>
            </div>
            <div>
              <h4 className="text-white text-sm font-bold mb-4 tracking-wider">COMPANY</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>株式会社LS</p>
                <p>東京都渋谷区渋谷1-12-2</p>
                <p>クロスオフィス渋谷505</p>
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-bold mb-4 tracking-wider">CONTACT</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>お問い合わせはこちら</p>
                <Button variant="outline" className="mt-4 text-white border-white hover:bg-white hover:text-black">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
            <p>&copy; 2025 株式会社LS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

