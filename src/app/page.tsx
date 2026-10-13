import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SponsorMarquee from "@/components/SponsorMarquee";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import EventCard, { type EventData } from "@/components/EventCard";
import CharityReportCard, { type CharityReport } from "@/components/CharityReportCard";

const upcomingEvent: EventData = {
  id: "1",
  title: "INASE Charity Fight Vol.XX",
  date: "2025年〇月〇日（〇）開場 XX:XX / 開始 XX:XX",
  venue: "〇〇アリーナ（〇〇県〇〇市）",
  status: "upcoming",
  description:
    "格闘技を通じて子供達への支援を行うチャリティーファイトイベント。出場選手・協賛企業を随時募集中です。",
  href: "/events/next",
};

const charityHighlights: CharityReport[] = [
  {
    id: "1",
    title: "〇〇県子ども食堂への食料支援",
    date: "2024年XX月",
    amount: "XXX,XXX",
    category: "donation",
    description:
      "INASE Charity Fight Vol.XX の収益より、〇〇県内の子ども食堂XXか所へ食料品と運営費用を寄付しました。",
  },
  {
    id: "2",
    title: "スポーツ用具寄贈プロジェクト",
    date: "2024年XX月",
    category: "achievement",
    description:
      "格闘技・スポーツを学びたい子供達のために、グローブ・プロテクター等のトレーニング用具をXX セット寄贈しました。",
  },
  {
    id: "3",
    title: "チャリティーイベント活動レポート Vol.XX",
    date: "2024年XX月",
    category: "activity",
    description:
      "前回大会のイベントレポートを公開しました。総来場者数XXX名、募金総額XXX,XXX円のご支援をいただきました。",
  },
];

const stats = [
  { value: "XX回", label: "大会開催実績" },
  { value: "¥X,XXX万", label: "累計寄付総額" },
  { value: "XXか所", label: "支援先団体数" },
  { value: "X,XXX名", label: "延べ来場者数" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Stats Bar */}
      <section className="bg-inase-red py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-white font-black text-3xl md:text-4xl">{stat.value}</div>
                <div className="text-white/80 text-xs mt-1 tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              titleEn="ABOUT INASE"
              titleJa="INASEとは"
              align="left"
            />
            <p className="text-gray-300 leading-relaxed mb-6">
              INASE Charity Fightは、格闘技の力で社会に貢献することを目指すチャリティーファイトイベントです。
              子供達の健やかな成長と夢を支えるため、大会収益の一部を各種支援活動に充てています。
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              「勝負の世界だからこそ、人の痛みがわかる」——格闘技を愛する選手・スタッフが一体となって、
              地域の子供達へ届ける支援の輪を広げています。
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-inase-red font-bold hover:underline"
            >
              INASEについて詳しく →
            </Link>
          </div>
          {/* Placeholder visual */}
          <div className="relative h-72 md:h-96 bg-gradient-to-br from-inase-black-light to-[#1a0000] flex items-center justify-center border border-inase-red/20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,10,10,0.15)_0%,_transparent_70%)]" />
            <div className="relative text-center">
              <div className="text-6xl font-black text-inase-red/20">INASE</div>
              <div className="text-gray-500 text-sm mt-2">— 写真・ビジュアル素材 —</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Marquee */}
      <SponsorMarquee />

      {/* Next Event */}
      <section className="py-20 bg-inase-black-light">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            titleEn="NEXT EVENT"
            titleJa="次回大会情報"
            description="チケット・参加申込は随時受付中です。詳細はイベントページをご確認ください。"
          />
          <div className="max-w-lg mx-auto">
            <EventCard event={upcomingEvent} />
          </div>
          <div className="text-center mt-8">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-6 py-3 border border-inase-red text-inase-red hover:bg-inase-red hover:text-white font-bold transition-all"
            >
              全大会情報を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Charity Highlights */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <SectionTitle
          titleEn="CHARITY"
          titleJa="チャリティ活動"
          description="皆様からのご支援を通じて、子供達の笑顔のためにさまざまな活動を行っています。"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {charityHighlights.map((report) => (
            <CharityReportCard key={report.id} report={report} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/charity"
            className="inline-flex items-center gap-2 px-6 py-3 border border-inase-red text-inase-red hover:bg-inase-red hover:text-white font-bold transition-all"
          >
            チャリティ活動をもっと見る
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="あなたも「支援の輪」に加わりませんか？"
        description="選手として、スポンサーとして、サポーターとして。関わり方は人それぞれです。まずはお気軽にお問い合わせください。"
        buttons={[
          { label: "選手募集を見る", href: "/recruitment", variant: "primary" },
          { label: "協賛について", href: "/sponsorship", variant: "outline" },
          { label: "お問い合わせ", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  );
}
