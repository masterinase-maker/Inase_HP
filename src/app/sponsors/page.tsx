import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import SponsorCard from "@/components/SponsorCard";
import CTASection from "@/components/CTASection";
import type { Sponsor } from "@/components/SponsorMarquee";

export const metadata: Metadata = {
  title: "協賛企業・協賛者一覧",
  description: "INASE Charity Fightを支えてくださっている協賛企業・個人スポンサー一覧です。",
};

const goldSponsors: Sponsor[] = [
  { id: "g1", name: "株式会社〇〇商事", nameEn: "SAMPLE CORP", tier: "gold" },
  { id: "g2", name: "△△建設株式会社", nameEn: "SAMPLE CONSTRUCTION", tier: "gold" },
];

const silverSponsors: Sponsor[] = [
  { id: "s1", name: "□□フィットネス", nameEn: "SAMPLE FITNESS", tier: "silver" },
  { id: "s2", name: "◇◇整骨院", nameEn: "SAMPLE CLINIC", tier: "silver" },
  { id: "s3", name: "株式会社○○食品", nameEn: "SAMPLE FOOD", tier: "silver" },
];

const bronzeSponsors: Sponsor[] = [
  { id: "b1", name: "△△スポーツ用品", nameEn: "SAMPLE SPORTS", tier: "bronze" },
  { id: "b2", name: "□□プロテイン", nameEn: "SAMPLE PROTEIN", tier: "bronze" },
  { id: "b3", name: "◇◇ジム", nameEn: "SAMPLE GYM", tier: "bronze" },
  { id: "b4", name: "○○医療クリニック", nameEn: "SAMPLE MEDICAL", tier: "bronze" },
];

const generalSponsors: Sponsor[] = [
  { id: "n1", name: "○○不動産", tier: "general" },
  { id: "n2", name: "△△デザイン", tier: "general" },
  { id: "n3", name: "□□保険", tier: "general" },
  { id: "n4", name: "◇◇税理士事務所", tier: "general" },
  { id: "n5", name: "○○美容室", tier: "general" },
  { id: "n6", name: "△△飲食店", tier: "general" },
  { id: "n7", name: "個人スポンサー 〇〇 様", tier: "general" },
  { id: "n8", name: "個人スポンサー △△ 様", tier: "general" },
];

export default function SponsorsPage() {
  return (
    <div className="pt-16">
      <div className="relative bg-inase-black-light py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(220,10,10,0.1)_0%,_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-inase-red/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          <span className="text-inase-red text-xs font-bold tracking-widest uppercase">Sponsors</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2">
            協賛企業・協賛者一覧
          </h1>
          <p className="text-gray-400 mt-4">
            INASE Charity Fightを支えてくださっているすべての皆様に、心より感謝申し上げます。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 space-y-16">
        {/* Gold */}
        <section>
          <SectionTitle titleEn="Gold Sponsors" titleJa="ゴールドスポンサー" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {goldSponsors.map((s) => (
              <SponsorCard key={s.id} sponsor={s} />
            ))}
          </div>
        </section>

        {/* Silver */}
        <section>
          <SectionTitle titleEn="Silver Sponsors" titleJa="シルバースポンサー" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {silverSponsors.map((s) => (
              <SponsorCard key={s.id} sponsor={s} />
            ))}
          </div>
        </section>

        {/* Bronze */}
        <section>
          <SectionTitle titleEn="Bronze Sponsors" titleJa="ブロンズスポンサー" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {bronzeSponsors.map((s) => (
              <SponsorCard key={s.id} sponsor={s} />
            ))}
          </div>
        </section>

        {/* General */}
        <section>
          <SectionTitle titleEn="Sponsors & Supporters" titleJa="スポンサー・サポーター" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {generalSponsors.map((s) => (
              <SponsorCard key={s.id} sponsor={s} />
            ))}
          </div>
        </section>

        <p className="text-gray-600 text-xs text-center">
          ※ 掲載内容は最新情報と異なる場合があります。最新の協賛情報はお問い合わせください。
        </p>
      </div>

      <CTASection
        title="協賛のご参加をお待ちしています"
        description="企業・個人を問わず、INASEのチャリティ活動へのご支援・ご協賛をお待ちしております。"
        buttons={[
          { label: "協賛について詳しく", href: "/sponsorship", variant: "primary" },
          { label: "お問い合わせ", href: "/contact", variant: "outline" },
        ]}
      />
    </div>
  );
}
