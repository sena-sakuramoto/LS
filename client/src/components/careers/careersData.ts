export type JobId = "designer" | "sales" | "pm";
export type InterviewId = "homma" | "arai" | "yoshikawa" | "matsui";

const recruitBlogUrl = import.meta.env.VITE_RECRUIT_BLOG_URL?.trim() ?? "";
const recruitContactName =
  import.meta.env.VITE_RECRUIT_CONTACT_NAME?.trim() || "採用担当";
const recruitContactEmail = import.meta.env.VITE_RECRUIT_CONTACT_EMAIL?.trim() ?? "";
const recruitContactPhone = import.meta.env.VITE_RECRUIT_CONTACT_PHONE?.trim() ?? "";

export interface JobStep {
  title: string;
  desc: string;
}

export interface JobOpening {
  id: JobId;
  title: string;
  sub: string;
  href: string;
  image: string;
  tagline: string;
  listingDescription: string;
  heroDescription: string;
  intro: string;
  salary: string;
  target: string;
  marketCopy: string;
  steps: JobStep[];
  appealPoints: string[];
  stats: { label: string; value: string }[];
  sceneImages: { src: string; alt: string }[];
}

export interface InterviewQA {
  q: string;
  a: string;
}

export interface InterviewProfile {
  id: InterviewId;
  displayName: string;
  role: string;
  year: string;
  image: string;
  catchCopy: string;
  lead: string;
  sceneImage: string;
  sceneCaption: string;
  qa: InterviewQA[];
}

export const jobOpenings: JobOpening[] = [
  {
    id: "designer",
    title: "設計デザイナー",
    sub: "DESIGNER",
    href: "/careers/job/designer/",
    image: "/luxury-1.webp",
    tagline: "クライアントの想いを図面に落とし込み、空間として完成させる仕事",
    listingDescription:
      "ヒアリングからコンセプト立案、図面・パース制作、現場との連携まで一気通貫で担います。",
    heroDescription: "ブランドの世界観を、空間美として具現化する。",
    intro:
      "設計デザイナーという仕事は、クライアントの想いをヒアリングし、空間コンセプトとして具現化する仕事です。LSでは店舗内装をメインに、飲食・美容・クリニック・シーシャバーなど多様な業態のデザインを手がけます。",
    salary: "月給35万円〜80万円",
    target: "設計・デザイン経験者（Vectorworks使用経験優遇）/ 微経験OK",
    marketCopy:
      "飲食・美容・クリニック・シーシャバーなど、話題化しやすい案件を横断しながら、設計意図を売上につながる空間体験へ落とし込めるポジションです。",
    steps: [
      {
        title: "ヒアリング・現場調査",
        desc: "クライアントの想いと現場の状況を同時に把握し、課題の輪郭をクリアにします。",
      },
      {
        title: "コンセプト立案",
        desc: "業態・ターゲット・ブランドイメージを言語化し、空間の方向性を固めます。",
      },
      {
        title: "図面・パース制作",
        desc: "Vectorworksで平面図・立面図・3Dパースを作成し、完成像を具体化します。",
      },
      {
        title: "PM・職人との連携",
        desc: "施工管理や協力会社と連携し、図面通りに仕上がるよう意思疎通を行います。",
      },
      {
        title: "完成・納品・フォロー",
        desc: "引き渡し後もクライアントの反応を確認し、次の提案へと磨き込みます。",
      },
    ],
    appealPoints: [
      "飲食・美容・クリニック・シーシャバーなど、あらゆる業態の内装を手がける",
      "芸能人御用達の店舗など、完成後に話題になる案件も多い",
      "0から空間を創る、唯一無二の達成感",
      "店舗内装市場は景気によらずニーズが安定しており、リピート率が高い",
    ],
    stats: [
      { label: "担当領域", value: "構想から現場監理まで" },
      { label: "主要ツール", value: "Vectorworks / 3D" },
      { label: "案件特性", value: "ラグジュアリー内装中心" },
    ],
    sceneImages: [
      { src: "/interior-2.jpg", alt: "高級感のある内装デザイン事例" },
      { src: "/IMG_6288.JPG", alt: "設計検討のための空間ディテール" },
      { src: "/IMG_6290.JPG", alt: "完成した店舗空間" },
    ],
  },
  {
    id: "sales",
    title: "営業コンサルタント",
    sub: "SALES CONSULTANT",
    href: "/careers/job/sales/",
    image: "/luxury-2.jpeg",
    tagline:
      "ブランド提案・受注まで、クライアントの空間づくりを最前線でリードする仕事",
    listingDescription:
      "事業理解に基づくヒアリングと提案で、設計・施工チームを巻き込みながら案件を前進させます。",
    heroDescription: "最初の接点から、事業の成長シナリオまで伴走する。",
    intro:
      "営業コンサルタントは、クライアントとの最初の接点となり、事業の世界観と収益モデルを理解した上で最適な空間提案を行うポジションです。",
    salary: "月給35万円〜80万円 + インセンティブ",
    target: "法人営業・提案営業の経験者 / 建築・インテリア知識は不問",
    marketCopy:
      "単なる受注ではなく、ブランドづくりの入口を担うポジションです。提案の深さと信頼構築が、そのまま案件規模とリピートに直結します。",
    steps: [
      {
        title: "クライアント開拓",
        desc: "新規案件のリード獲得・問い合わせ対応を行い、相談の起点を作ります。",
      },
      {
        title: "ヒアリング・提案",
        desc: "事業理解に基づくブランド×空間のコンサルティング提案を行います。",
      },
      {
        title: "見積・契約",
        desc: "プロジェクト規模・予算・スケジュールを調整し、契約を締結します。",
      },
      {
        title: "プロジェクト推進",
        desc: "設計・施工チームとの連携で、案件をスムーズに前へ進めます。",
      },
      {
        title: "アフターフォロー",
        desc: "納品後のリピート・紹介獲得まで見据えて関係性を深めます。",
      },
    ],
    appealPoints: [
      "クライアントの事業戦略を理解したうえで提案できる、深い営業スタイル",
      "少数精鋭のため、数千万円規模の案件にも早期から関われる",
      "設計・施工チームと近い距離で動けるので、提案の解像度が高い",
      "成果がインセンティブと新規紹介に反映され、再現性の高い営業基盤を築ける",
    ],
    stats: [
      { label: "提案スタイル", value: "コンサルティング型" },
      { label: "担当範囲", value: "リード獲得から契約後まで" },
      { label: "強み", value: "事業理解 × 空間提案" },
    ],
    sceneImages: [
      { src: "/luxury-5.jpg", alt: "ブランド提案に適した洗練された空間" },
      { src: "/IMG_6279.JPG", alt: "クライアント提案のイメージカット" },
      { src: "/IMG_6293.JPG", alt: "商談や打ち合わせを想起させる空間" },
    ],
  },
  {
    id: "pm",
    title: "施工管理",
    sub: "PROJECT MANAGEMENT",
    href: "/careers/job/pm/",
    image: "/architecture-2.jpg",
    tagline: "デザインを現実の空間に変える、現場の司令塔的ポジション",
    listingDescription:
      "品質・工程・安全・コストの4軸で現場を統括し、設計意図を超える完成度を目指します。",
    heroDescription: "図面を、期待を超える現場品質へ着地させる。",
    intro:
      '施工管理は、設計チームが描いたデザインを現実の空間として完成させる"現場の司令塔"です。品質・工程・安全・コストの4つを管理し、クライアントの期待を超える仕上がりを実現します。',
    salary: "月給38万円〜80万円",
    target: "建設・内装・リフォームの施工管理経験者 / 施工管理技士資格あれば尚可",
    marketCopy:
      "高難度な内装案件を、細部まで品質担保しながら推進できる人材は希少です。デザイン性の高い現場ほど、施工管理の判断力が成果を左右します。",
    steps: [
      {
        title: "施工計画",
        desc: "図面確認・工程表作成・協力会社手配を行い、着工前の精度を上げます。",
      },
      {
        title: "現場管理",
        desc: "日々の進捗確認・品質チェック・安全管理で現場を安定運営します。",
      },
      {
        title: "設計との調整",
        desc: "現場で発生した課題を、設計チームとリアルタイムで解決します。",
      },
      {
        title: "検査・是正",
        desc: "中間検査・完了検査を実施し、細部まで是正対応を詰めます。",
      },
      {
        title: "引き渡し",
        desc: "クライアントへの引き渡しと竣工書類の整理まで責任を持って行います。",
      },
    ],
    appealPoints: [
      "高級内装や意匠性の高い案件で、ミリ単位の精度に向き合える",
      "設計・営業との距離が近く、意思決定が速い",
      "品質・工程・安全・コストの4つを横断して、現場全体をリードできる",
      "難易度の高い現場を完遂した経験が、そのまま市場価値になる",
    ],
    stats: [
      { label: "管理領域", value: "品質・工程・安全・コスト" },
      { label: "案件特徴", value: "デザイン性の高い内装" },
      { label: "キャリア", value: "専門性と裁量が高い" },
    ],
    sceneImages: [
      { src: "/architecture-2.jpg", alt: "施工品質が求められる建築空間" },
      { src: "/IMG_6310.JPG", alt: "現場確認を想起させる空間" },
      { src: "/IMG_6311.JPG", alt: "竣工後の空間ディテール" },
    ],
  },
];

export const jobOpeningsById: Record<JobId, JobOpening> = {
  designer: jobOpenings[0],
  sales: jobOpenings[1],
  pm: jobOpenings[2],
};

export const interviewProfiles: InterviewProfile[] = [
  {
    id: "homma",
    displayName: "本間 拓彌",
    role: "代表取締役",
    year: "創業メンバー",
    image: "/team/homma.jpg",
    catchCopy: "ブランドと事業の両方を見据えて、空間づくりの価値を引き上げる。",
    lead:
      "LS の立ち上げから現場に立ち続け、設計・営業・施工のすべてを一つのチームで前に進めてきた本間。空間をつくるだけで終わらない、事業成果まで責任を持つ仕事観について聞きました。",
    sceneImage: "/team/homma.jpg",
    sceneCaption: "ブランドの骨格と現場の実行、その両方を見ながらチームを動かしていく。",
    qa: [
      {
        q: "LS を立ち上げた理由を教えてください。",
        a: "内装を単なる工事で終わらせず、ブランドの価値を高める仕事にしたいと思ったのが出発点です。設計だけ、施工だけではなく、事業の成功まで見据えて伴走できる会社をつくりたかったです。",
      },
      {
        q: "今の LS が大事にしていることは何ですか。",
        a: "スピードと誠実さです。お客様の期待を超えるには、判断の速さと、最後までやり切る責任感の両方が必要だと考えています。",
      },
      {
        q: "どんな人が LS に合うと思いますか。",
        a: "自分の担当範囲を決めすぎず、より良い結果のために一歩踏み込める人です。職種を超えて連携しながら前に進める人は、LS で強みを発揮しやすいです。",
      },
      {
        q: "仕事のやりがいを感じる瞬間はどこですか。",
        a: "お客様の理想が形になり、その先で実際に売上や評判につながったと聞けた瞬間です。空間づくりが事業成果に結びついたときに一番手応えを感じます。",
      },
      {
        q: "これから仲間になる方へ一言お願いします。",
        a: "成長途中の会社だからこそ、役割を待つのではなく自分で広げていけます。ブランドづくりに本気で向き合いたい人と一緒に働きたいです。",
      },
    ],
  },
  {
    id: "arai",
    displayName: "新井",
    role: "営業",
    year: "コアメンバー",
    image: "/team/arai.jpg",
    catchCopy: "相手の想いを受け取り、案件を前に進める推進力が営業の仕事。",
    lead:
      "お客様との最初の接点から、設計や施工につなぐまでを担う新井。信頼をつくる営業とは何か、LS での営業の面白さについて話してもらいました。",
    sceneImage: "/team/arai.jpg",
    sceneCaption: "要望の背景まで聞き切ることが、良い提案の出発点になる。",
    qa: [
      {
        q: "LS の営業はどんな役割ですか。",
        a: "案件を取るだけではなく、お客様の理想をチームに正しく渡すハブの役割です。最初のヒアリングの質が、その後の設計や現場の完成度に直結します。",
      },
      {
        q: "営業として意識していることを教えてください。",
        a: "言われたことだけでなく、なぜその要望が出てきたのかを掘り下げて聞くことです。背景を理解できると、提案の精度が大きく変わります。",
      },
      {
        q: "LS で働く面白さは何ですか。",
        a: "営業が入口だけで終わらず、設計や施工と密に連携しながら最後まで案件に関われることです。お客様の反応をダイレクトに感じられます。",
      },
      {
        q: "印象に残っている仕事はありますか。",
        a: "難易度の高い案件でも、チームで方向性を揃えて乗り切れたときです。連携がはまると、想像以上に強い提案ができます。",
      },
      {
        q: "これから応募する方へ一言お願いします。",
        a: "人と話すのが好きなだけではなく、相手の事業を本気で考えられる人に向いています。主体的に動ける人と一緒に働きたいです。",
      },
    ],
  },
  {
    id: "yoshikawa",
    displayName: "吉川",
    role: "設計",
    year: "デザインチーム",
    image: "/team/yoshikawa.jpg",
    catchCopy: "見た目の美しさだけでなく、使われ続ける理由まで設計する。",
    lead:
      "ブランドの世界観を空間に翻訳する設計職の吉川。感性だけでなく、事業や運用まで視野に入れた設計の考え方を語ってもらいました。",
    sceneImage: "/team/yoshikawa.jpg",
    sceneCaption: "意匠と実用のバランスを取りながら、空間の説得力を高めていく。",
    qa: [
      {
        q: "設計の仕事で大切にしていることは何ですか。",
        a: "見た目のインパクトだけでなく、運用しやすさやブランドの一貫性まで考えることです。長く使われる空間には理由があります。",
      },
      {
        q: "LS の設計の特徴は何だと思いますか。",
        a: "営業や施工と近い距離で進められることです。早い段階で実現性を確認しながら進められるので、提案の精度が上がります。",
      },
      {
        q: "仕事で成長を感じる瞬間はありますか。",
        a: "自分の提案がチームの議論を通して磨かれ、最終的にお客様に響いたときです。ひとりで完結しない分、視野が広がります。",
      },
      {
        q: "難しさを感じるのはどんな場面ですか。",
        a: "デザイン性と予算、工期のバランスを取る場面です。ただ、その制約の中で最適解を出すところに設計の面白さがあります。",
      },
      {
        q: "応募を考えている方へメッセージをお願いします。",
        a: "手を動かすだけではなく、ブランドや事業に興味を持てる人にはすごく面白い環境です。空間の意味まで考えたい人に来てほしいです。",
      },
    ],
  },
  {
    id: "matsui",
    displayName: "松井",
    role: "設計",
    year: "デザインチーム",
    image: "/team/matsui.jpg",
    catchCopy: "細部の積み重ねが、空間全体の印象を決めていく。",
    lead:
      "ディテールの精度と全体の完成度、その両方に向き合う松井。LS の設計チームがどのように品質を高めているのかを聞きました。",
    sceneImage: "/team/matsui.jpg",
    sceneCaption: "一つひとつの判断を積み重ねて、空間の質を引き上げていく。",
    qa: [
      {
        q: "普段どのように設計を進めていますか。",
        a: "まず全体の方向性を整理して、そのあとで細部の納まりを詰めていきます。最初から最後まで一貫した空気感をつくることを意識しています。",
      },
      {
        q: "LS のチームの良さはどこにありますか。",
        a: "相談のスピードが速いことです。設計だけで抱え込まず、営業や施工とすぐに確認できるので、判断の質もスピードも上がります。",
      },
      {
        q: "印象に残っている学びはありますか。",
        a: "細部の説得力が、最終的には空間全体の印象を左右するということです。図面や素材選定の段階から、妥協しない姿勢が大切だと感じています。",
      },
      {
        q: "どんなときにやりがいを感じますか。",
        a: "完成した空間を見たお客様が納得した表情を見せてくれたときです。設計意図が伝わったと実感できます。",
      },
      {
        q: "これから一緒に働く人に求めることは何ですか。",
        a: "受け身ではなく、自分の考えを持って対話できることです。チームで磨きながら良いものをつくりたい人に合う環境だと思います。",
      },
    ],
  },
];

export const interviewProfilesById: Record<InterviewId, InterviewProfile> = {
  homma: interviewProfiles[0],
  arai: interviewProfiles[1],
  yoshikawa: interviewProfiles[2],
  matsui: interviewProfiles[3],
};

export const storyBanners = [
  {
    title: "仕事について",
    sub: "WORK",
    desc: "設計から施工まで、LSの仕事の全体像を紹介します。",
    image: "/interior-2.jpg",
    href: "/careers/job/",
  },
  {
    title: "研修・成長支援",
    sub: "TRAINING",
    desc: "経験を活かし、さらに伸ばせる育成制度を紹介します。",
    image: "/interior-3.jpg",
    href: "/careers/training/",
  },
  {
    title: "社員インタビュー",
    sub: "INTERVIEW",
    desc: "LSで働くスタッフのリアルな声を聞いてください。",
    image: "/architecture-1.jpg",
    href: "/careers/interview/",
  },
];

export const blogPosts = [
  {
    title: "ブランド体験をつくる内装提案の考え方",
    date: "2026.04.02",
    image: "/IMG_6290.JPG",
  },
  {
    title: "現場と設計の連携で品質を上げるポイント",
    date: "2026.03.24",
    image: "/IMG_6291.JPG",
  },
  {
    title: "LSで働くメンバーが大切にしている視点",
    date: "2026.03.16",
    image: "/IMG_6292.JPG",
  },
];

export const trainingTimeline = [
  {
    step: "STEP 1",
    period: "入社〜1週間",
    title: "企業理念・社内ルール・既存事例をインプット",
    desc: "LSの思想、案件の流れ、使うツールや情報共有ルールを短期間で把握します。",
  },
  {
    step: "STEP 2",
    period: "〜1ヶ月",
    title: "先輩同行・現場見学・打ち合わせ同席",
    desc: "実際の案件に触れながら、クライアント対応とプロジェクト推進の進め方を現場で掴みます。",
  },
  {
    step: "STEP 3",
    period: "〜3ヶ月",
    title: "補助業務で業務全体を理解する",
    desc: "図面チェック、見積補助、現場補助などを通じて、各職種のつながりを理解します。",
  },
  {
    step: "STEP 4",
    period: "〜6ヶ月",
    title: "担当案件デビュー",
    desc: "上長サポートのもと、担当案件を持って主体的に動くフェーズへ進みます。",
  },
  {
    step: "STEP 5",
    period: "独り立ち",
    title: "クライアント対応から納品まで完結",
    desc: "単独で案件を進めつつ、成果とチーム貢献の両面で評価される状態を目指します。",
  },
];

export const careerPaths = [
  {
    title: "スペシャリスト路線",
    desc: "高難度案件のエキスパート。技術力を極め、業界内での評価を高める。",
  },
  {
    title: "マネージャー路線",
    desc: "チームを持ち、後輩育成・案件管理を担うマネジメントポジション。",
  },
  {
    title: "独立支援路線",
    desc: "独立を目指すスタッフへのサポート制度あり。外に出ても戦える実力を養う。",
  },
];

export const evaluationPolicy =
  "年功序列は採用していない。「どれだけ成果を出したか・チームに貢献したか」を評価軸とする。マネージャーへの昇格で基本給の大幅ベースアップがある。";

export const benefitsData = [
  {
    title: "給与",
    desc: "月給35万円〜80万円（職種・経験による）",
  },
  {
    title: "賞与・インセンティブ",
    desc: "業績連動賞与あり。営業職はインセンティブ制度を用意。",
  },
  {
    title: "勤務時間",
    desc: "9:30〜18:30（実働8時間）フレックスタイム制 コアタイム：10:00〜15:15",
  },
  {
    title: "休日休暇",
    desc: "完全週休2日制（土日祝）年間休日120日以上。年末年始・夏季・慶弔・産前産後・育児・介護・有給あり。",
  },
  {
    title: "各種保険",
    desc: "健康保険・厚生年金・雇用保険・労災保険（社会保険完備）",
  },
  {
    title: "独立支援制度",
    desc: "将来の独立や事業立ち上げも見据えた支援制度を整備。",
  },
  {
    title: "社内ベンチャー",
    desc: "新しい事業やアイデアの提案を歓迎。挑戦を後押しする文化。",
  },
  {
    title: "社内文化・イベント",
    desc: "打ち上げ・表彰制度・チームランチ・月1の1on1面談を実施。",
  },
];

export const benefitsHeroStats = [
  { label: "年間休日", value: "120日以上" },
  { label: "コアタイム", value: "10:00 - 15:15" },
  { label: "報酬レンジ", value: "35万 - 80万円" },
];

export const flowSteps = [
  {
    step: "STEP 1",
    title: "エントリー",
    desc: "フォームに入力して送信（所要2〜3分）",
    note: "3営業日以内に採用担当よりご連絡します",
  },
  {
    step: "STEP 2",
    title: "書類選考",
    desc: "履歴書・職務経歴書をもとに確認（通過者のみ連絡）",
    note: "経験の深さだけでなく、これからの伸びしろも見ています",
  },
  {
    step: "STEP 3",
    title: "面接",
    desc: "オンライン可。1〜2回の面接を実施（代表面談含む）",
    note: "形式ばらずに、仕事観やこれまでの経験を率直に聞かせてください",
  },
  {
    step: "STEP 4",
    title: "内定・オファー提示",
    desc: "条件・待遇・業務内容を詳しく説明します",
    note: "入社時期や条件面もここで丁寧にすり合わせます",
  },
];

export const flowSupportCopy =
  "選考中に気になることや不安なことがあれば、いつでも採用担当にご連絡ください。形式ばらずに話せる環境です。";

export const companyProfile = {
  name: "株式会社LS",
  address: "東京都渋谷区渋谷1-12-2 クロスオフィス渋谷505",
  founded: "2023年10月",
  representative: "本間 拓彌",
};

export const recruitContact = {
  recruiter: recruitContactName,
  inquiryHref: "https://career-cloud.asia/",
  inquiryLabel: "採用に関するお問い合わせはこちら",
  corporateHref: "/",
  email: recruitContactEmail,
  phone: recruitContactPhone,
};

export const recruitPublishing = {
  blogHref: recruitBlogUrl,
  blogReady: Boolean(recruitBlogUrl),
};
