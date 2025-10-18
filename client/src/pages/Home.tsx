import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section - nano·universe style */}
      <section id="top" className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center space-y-6">
          <div className="text-8xl font-light tracking-wider text-gray-800">
            LS
          </div>
          <div className="text-xl tracking-[0.3em] text-gray-600 uppercase">
            株式会社LS
          </div>
        </div>
      </section>

      {/* KIITO Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-white">
        <div className="container max-w-4xl">
          <h1 className="text-9xl font-bold leading-none text-black">
            LS:
          </h1>
          <p className="text-3xl mt-6 text-black tracking-wide font-light">
            SPACE STORYTELLING STUDIO
          </p>
        </div>
      </section>

      {/* PHASE Section - Dark with diagonal lines */}
      <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-px bg-white"
              style={{
                left: `${i * 3.33}%`,
                transform: 'rotate(-45deg) translateX(-50%)',
                transformOrigin: 'top left',
              }}
            />
          ))}
        </div>
        <h1 className="text-9xl font-bold text-white relative z-10 tracking-widest">
          PHASE
        </h1>
      </section>

      {/* Grid Section - TOPICS style */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-5xl font-bold mb-16 text-black">TOPICS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white aspect-[4/3] relative group overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Project {item}</span>
                </div>
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <h3 className="text-2xl font-bold mb-2">Project Title {item}</h3>
                    <p className="text-sm">Architecture & Design</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WELCOME Section */}
      <section className="py-32 bg-white">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
              <img src="/interior-1.jpg" alt="Modern interior design" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-6xl font-serif text-black">WELCOME</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                建築・空間・体験を横断し、感情を動かすストーリーでプロジェクトを導く。
                私たちは、図面の先にある記憶を設計します。
              </p>
              <Button variant="outline" className="mt-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* LEGACY Section */}
      <section className="py-32 bg-gray-50">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-6xl font-serif text-black">LEGACY</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                空間を超え、ブランドを創造する。内装という「箱」を作るだけではなく、
                事業の世界観と収益モデルまで設計する。
              </p>
              <Button variant="outline" className="mt-8">
                View Projects
              </Button>
            </div>
            <div className="aspect-[4/3] bg-gray-200 order-1 lg:order-2 overflow-hidden">
              <img src="/interior-2.jpg" alt="Contemporary architecture" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* HOSHIZAKI DESIGN Section */}
      <section className="py-32 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-4">HOSHIZAKI DESIGN</h2>
            <p className="text-xl text-gray-600 writing-mode-vertical-rl mx-auto">
              設計図に物語を
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="aspect-[3/4] bg-gray-200 overflow-hidden">
              <img src="/interior-3.jpg" alt="Minimalist design" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                そこにどんな人が集まり、どんな時間を過ごし、どんな記憶を持ち帰るのか。
                私たちは、空間の先にある物語を設計します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section - Dark */}
      <section className="py-32 bg-gray-900">
        <div className="container">
          <h2 className="text-7xl font-bold text-white mb-16">Quality</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square bg-gray-800"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Projects Section - Right side style */}
      <section className="min-h-screen bg-black relative">
        <div className="absolute inset-0 bg-gray-800/50"></div>
        <div className="relative z-10 container py-32">
          <div className="max-w-4xl ml-auto text-white">
            <h2 className="text-6xl font-bold mb-8">
              МЫ СОЗДАЁМ НАСТОЯЩЕЕ<br />
              СБАЛАНСИРОВАННОЕ ДОМА
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div>
                <div className="text-5xl font-bold">15</div>
                <div className="text-sm mt-2 text-gray-400">лет на рынке</div>
              </div>
              <div>
                <div className="text-5xl font-bold">186</div>
                <div className="text-sm mt-2 text-gray-400">реализованных проектов</div>
              </div>
              <div>
                <div className="text-5xl font-bold">110</div>
                <div className="text-sm mt-2 text-gray-400">постоянных клиентов</div>
              </div>
              <div>
                <div className="text-5xl font-bold">5</div>
                <div className="text-sm mt-2 text-gray-400">строительных бригад</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Japanese Content Section - Bottom right style */}
      <section id="philosophy" className="min-h-screen bg-black relative">
        <div className="absolute inset-0 opacity-40 bg-gradient-to-b from-purple-900/30 to-black"></div>
        <div className="relative z-10 container py-32">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-6xl font-bold mb-8 leading-tight">
              まだ見ぬ<br />
              世界を<br />
              つくせ。
            </h2>
            <p className="text-xl mt-12 leading-relaxed text-gray-300">
              コンセプトメイキングから始まる、ブランド体験のデザイン。
              ユーザーの心に響く物語を、空間とサービスに落とし込み、
              これまでにないブランド体験を創造します。
            </p>
            <div className="mt-16">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ONE BY ONE Project Section */}
      <section className="py-32 bg-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto text-white">
            <h3 className="text-sm tracking-widest mb-4 text-gray-400">PROJECT</h3>
            <h2 className="text-5xl font-bold mb-8">ONE BY ONE Project</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              一つひとつのプロジェクトに、固有の物語がある。
              私たちは、その物語を丁寧に紡ぎ、形にしていきます。
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 bg-black border-t border-gray-800">
        <div className="container">
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; 2025 株式会社LS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

