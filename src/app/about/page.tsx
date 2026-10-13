import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "INASEとは",
  description: "INASE Charity Fightについて。格闘技を通じて子供達への支援を行う団体の理念・活動をご紹介します。",
};

const values = [
  {
    icon: "🥊",
    title: "格闘技の力で社会貢献",
    description:
      "「格闘技には人を変える力がある」という信念のもと、試合の場を通じて社会問題への関心と支援の輪を広げます。",
  },
  {
    icon: "❤️",
    title: "子供達の未来を支える",
    description:
      "大会収益の一部を子ども食堂・スポーツ支援・教育支援など、子供達の健やかな成長につながる活動に充てています。",
  },
  {
    icon: "🤝",
    title: "地域とともに",
    description:
      "地域の企業・団体・個人と手を取り合い、一つ一つの大会が地域全体の支援につながる仕組みを目指しています。",
  },
  {
    icon: "🏆",
    title: "透明性のある運営",
    description:
      "寄付金の使途や支援実績を定期的に公開し、ご支援いただいた皆様への説明責任を果たします。",
  },
];

const members = [
  { name: "代表者名 〇〇 〇〇", role: "代表・総合格闘技選手", bio: "プロ格闘家として長年活動し、格闘技の社会的価値を高めるためINASEを設立。" },
  { name: "スタッフ名 〇〇 〇〇", role: "副代表・運営責任者", bio: "大会運営・スポンサー調整を担当。選手と協賛企業の橋渡しを行う。" },
  { name: "スタッフ名 〇〇 〇〇", role: "チャリティ担当", bio: "支援先団体との連携・寄付金管理・活動レポート作成を担当。" },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Page Hero */}
      <div className="relative bg-inase-black-light py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(220,10,10,0.1)_0%,_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-inase-red/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          <span className="text-inase-red text-xs font-bold tracking-widest uppercase">About</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2">INASEとは</h1>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle titleEn="Our Mission" titleJa="私たちの使命" align="left" />
            <p className="text-gray-300 leading-relaxed mb-4">
              INASE Charity Fightは、格闘技イベントを通じて社会に貢献することを使命とする団体です。
              「格闘技を通じて、子供達のために」という理念のもと、大会収益の一部を各種チャリティ活動に充てています。
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              格闘技は「闘い」であると同時に、人と人とのつながりの場でもあります。
              選手・観客・スポンサーが一体となって生み出すエネルギーを、社会の役に立てたいという想いからINASEは生まれました。
            </p>
            <p className="text-gray-400 leading-relaxed">
              子ども食堂への支援・スポーツ用具の寄贈・学習支援など、具体的な活動を通じて
              地域の子供達の笑顔を増やしていきます。
            </p>
          </div>
          <div className="h-64 md:h-80 bg-gradient-to-br from-inase-black-mid to-[#1a0000] border border-inase-red/20 flex items-center justify-center">
            <div className="text-center">
              <div className="text-inase-red/20 font-black text-7xl">理念</div>
              <div className="text-gray-500 text-sm mt-2">— ビジュアル素材 —</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-inase-black-light">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle titleEn="Our Values" titleJa="活動理念" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-inase-black border border-inase-red/15 hover:border-inase-red/40 p-6 transition-all group"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-white font-bold mb-2 group-hover:text-inase-red transition-colors">
                  {v.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <SectionTitle titleEn="Our Team" titleJa="運営メンバー" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-inase-black-light border border-inase-red/15 p-6 flex gap-4"
            >
              {/* Avatar placeholder */}
              <div className="w-16 h-16 flex-shrink-0 bg-inase-red/10 border border-inase-red/30 flex items-center justify-center">
                <span className="text-inase-red font-black text-xl">
                  {member.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="text-inase-red text-xs font-bold tracking-wider mb-1">
                  {member.role}
                </div>
                <div className="text-white font-bold mb-2">{member.name}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="INASEの活動を応援してください"
        buttons={[
          { label: "チャリティ活動を見る", href: "/charity", variant: "primary" },
          { label: "お問い合わせ", href: "/contact", variant: "outline" },
        ]}
      />
    </div>
  );
}
