import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import CharityReportCard, { type CharityReport } from "@/components/CharityReportCard";

export const metadata: Metadata = {
  title: "チャリティ活動",
  description: "INASE Charity Fightのチャリティ活動一覧。支援実績・寄付報告・活動レポートをご覧ください。",
};

const recentReports: CharityReport[] = [
  {
    id: "1",
    title: "〇〇県子ども食堂への食料支援",
    date: "2024年XX月",
    amount: "XXX,XXX",
    category: "donation",
    description: "INASE Charity Fight Vol.XXの収益より、〇〇県内の子ども食堂へ食料品と運営費用を寄付しました。",
  },
  {
    id: "2",
    title: "格闘技用具寄贈プロジェクト",
    date: "2024年XX月",
    category: "achievement",
    description: "格闘技を学びたい子供達のためにグローブ・プロテクター等をXXセット寄贈しました。",
  },
  {
    id: "3",
    title: "チャリティーイベント活動レポート Vol.XX",
    date: "2024年XX月",
    category: "activity",
    description: "前回大会のイベントレポート。総来場者XXX名、募金総額XXX,XXX円。",
  },
  {
    id: "4",
    title: "学習支援プログラムへの寄付",
    date: "2024年XX月",
    amount: "XX,XXX",
    category: "donation",
    description: "経済的困難な家庭の子供達が安心して学べる環境づくりへ支援しました。",
  },
  {
    id: "5",
    title: "施設訪問ボランティア活動",
    date: "2024年XX月",
    category: "activity",
    description: "選手・スタッフが児童養護施設を訪問。格闘技体験教室を開催しました。",
  },
  {
    id: "6",
    title: "年次支援実績報告 2024",
    date: "2024年XX月",
    category: "achievement",
    description: "2024年の支援先・寄付金額・活動内容をまとめた年次レポートを公開しました。",
  },
];

const categories = [
  { href: "/charity/achievements", label: "支援実績", en: "Achievements", icon: "🏅", desc: "これまでの支援・寄贈活動の実績一覧" },
  { href: "/charity/reports", label: "寄付報告", en: "Donation Reports", icon: "💰", desc: "大会収益からの寄付金の使途・報告" },
  { href: "/charity/activities", label: "活動レポート", en: "Activity Reports", icon: "📋", desc: "イベント・ボランティア活動のレポート" },
];

export default function CharityPage() {
  return (
    <div className="pt-16">
      <div className="relative bg-inase-black-light py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(220,10,10,0.1)_0%,_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-inase-red/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          <span className="text-inase-red text-xs font-bold tracking-widest uppercase">Charity</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2">チャリティ活動</h1>
          <p className="text-gray-400 mt-4 max-w-xl">
            格闘技の熱気を、子供達への支援へ。INASEのチャリティ活動をご紹介します。
          </p>
        </div>
      </div>

      {/* Category links */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group bg-inase-black-light border border-inase-red/20 hover:border-inase-red p-8 text-center transition-all"
            >
              <div className="text-5xl mb-4">{cat.icon}</div>
              <div className="text-inase-red text-xs font-bold tracking-widest mb-1">{cat.en}</div>
              <h2 className="text-white font-bold text-xl mb-2 group-hover:text-inase-red transition-colors">
                {cat.label}
              </h2>
              <p className="text-gray-400 text-sm">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent reports */}
      <section className="py-12 pb-20 bg-inase-black-light">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle titleEn="Recent Reports" titleJa="最近の活動" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentReports.map((report) => (
              <CharityReportCard key={report.id} report={report} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
