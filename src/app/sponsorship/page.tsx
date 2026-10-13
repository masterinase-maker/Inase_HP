import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "協賛募集",
  description: "INASE Charity Fight 協賛企業・個人スポンサーを募集しています。",
};

const tiers = [
  {
    name: "GOLD",
    nameJa: "ゴールドスポンサー",
    price: "¥XXX,XXX〜",
    color: "border-yellow-500 bg-yellow-500/5",
    headerBg: "bg-yellow-500/20",
    textColor: "text-yellow-400",
    benefits: [
      "会場内メインバナー掲出（最大サイズ）",
      "公式HP トップページへのロゴ掲載",
      "大会パンフレット 企業紹介ページ（A4 1ページ）",
      "SNS・プレスリリースにて企業名紹介",
      "VIPシート招待（XX名）",
      "試合映像内字幕スポンサー表示",
      "チャリティ目録贈呈式への参加",
    ],
  },
  {
    name: "SILVER",
    nameJa: "シルバースポンサー",
    price: "¥XX,XXX〜",
    color: "border-gray-400 bg-gray-400/5",
    headerBg: "bg-gray-400/10",
    textColor: "text-gray-300",
    benefits: [
      "会場内バナー掲出（中サイズ）",
      "公式HP スポンサー一覧ページへのロゴ掲載",
      "大会パンフレット 企業名掲載",
      "SNSにて企業名紹介",
      "優先チケット（X名）",
    ],
  },
  {
    name: "BRONZE",
    nameJa: "ブロンズスポンサー",
    price: "¥X,XXX〜",
    color: "border-orange-700 bg-orange-700/5",
    headerBg: "bg-orange-700/10",
    textColor: "text-orange-400",
    benefits: [
      "会場内バナー掲出（小サイズ）",
      "公式HP スポンサー一覧への名前掲載",
      "大会パンフレット スポンサー欄掲載",
      "チケット（X名）",
    ],
  },
  {
    name: "GENERAL",
    nameJa: "一般スポンサー",
    price: "¥X,XXX〜",
    color: "border-inase-red/30 bg-inase-red/5",
    headerBg: "bg-inase-red/10",
    textColor: "text-inase-red",
    benefits: [
      "公式HP スポンサー一覧への名前掲載",
      "大会パンフレット スポンサー欄掲載",
    ],
  },
];

const reasons = [
  {
    icon: "🤝",
    title: "社会貢献・CSR活動として",
    desc: "格闘技イベントを通じた子供達への支援活動に参加することで、企業・個人の社会的意義を発信できます。",
  },
  {
    icon: "📢",
    title: "ブランド露出・PR効果",
    desc: "会場バナー・パンフレット・公式HP・SNSを通じて、多くのファンに貴社ブランドをアピールできます。",
  },
  {
    icon: "🏆",
    title: "格闘技ファンへのリーチ",
    desc: "格闘技に関心の高いアクティブな層に直接アプローチする絶好の機会です。",
  },
  {
    icon: "💬",
    title: "透明性のある寄付報告",
    desc: "協賛金がどのように子供達への支援に使われたかを、詳細なレポートでご報告します。",
  },
];

export default function SponsorshipPage() {
  return (
    <div className="pt-16">
      <div className="relative bg-inase-black-light py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(220,10,10,0.15)_0%,_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-inase-red/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          <span className="text-inase-red text-xs font-bold tracking-widest uppercase">Sponsorship</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2">協賛募集</h1>
          <p className="text-gray-300 mt-4 max-w-xl text-lg">
            格闘技の力で、子供達の未来を一緒に支えませんか？
          </p>
        </div>
      </div>

      {/* Why Sponsor */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <SectionTitle titleEn="Why Sponsor" titleJa="協賛のメリット" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="bg-inase-black-light border border-inase-red/15 p-6 hover:border-inase-red/40 transition-all group">
              <div className="text-4xl mb-4">{r.icon}</div>
              <h3 className="text-white font-bold mb-2 group-hover:text-inase-red transition-colors text-sm">{r.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tiers */}
      <section className="py-12 pb-20 bg-inase-black-light">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle titleEn="Sponsorship Plans" titleJa="協賛プラン" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <div key={tier.name} className={`border ${tier.color} overflow-hidden`}>
                <div className={`${tier.headerBg} px-6 py-4 text-center`}>
                  <div className={`font-black text-xl ${tier.textColor}`}>{tier.name}</div>
                  <div className="text-white text-sm">{tier.nameJa}</div>
                  <div className={`font-black text-2xl mt-2 ${tier.textColor}`}>{tier.price}</div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {tier.benefits.map((b) => (
                      <li key={b} className="flex gap-2 text-gray-300 text-xs leading-relaxed">
                        <span className={`${tier.textColor} mt-0.5 flex-shrink-0`}>✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-xs text-center mt-6">
            ※ 協賛内容は変更になる場合があります。詳細はお問い合わせください。
          </p>
          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-inase-red hover:bg-inase-red-light text-white font-bold text-lg tracking-wider transition-all hover:shadow-[0_0_20px_rgba(220,10,10,0.5)]"
            >
              協賛のお問い合わせはこちら
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="個人スポンサーも大歓迎！"
        description="企業・個人を問わず、チャリティ活動を応援していただける方のご参加をお待ちしています。"
        buttons={[
          { label: "お問い合わせ", href: "/contact", variant: "primary" },
          { label: "協賛一覧を見る", href: "/sponsors", variant: "outline" },
        ]}
      />
    </div>
  );
}
