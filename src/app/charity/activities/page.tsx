import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import CharityReportCard, { type CharityReport } from "@/components/CharityReportCard";

export const metadata: Metadata = {
  title: "活動レポート",
  description: "INASE Charity Fightの活動レポート一覧です。",
};

const activities: CharityReport[] = [
  {
    id: "1",
    title: "INASE Charity Fight Vol.XX 活動レポート",
    date: "2024年XX月",
    category: "activity",
    description: "総来場者XXX名、選手XX名参加。大会の様子と支援活動の報告をご覧いただけます。",
    imageColor: "linear-gradient(135deg, #1A0A1A 0%, #2A0A0A 100%)",
  },
  {
    id: "2",
    title: "児童施設 格闘技体験教室 レポート",
    date: "2024年XX月",
    category: "activity",
    description: "選手・スタッフ計XX名が児童養護施設を訪問。子供達への格闘技体験教室を開催しました。",
  },
  {
    id: "3",
    title: "地域スポーツフェスタ参加レポート",
    date: "2024年XX月",
    category: "activity",
    description: "〇〇市主催の地域スポーツフェスタに参加。格闘技体験ブースを設け、子供から大人まで楽しんでいただきました。",
  },
  {
    id: "4",
    title: "INASE Charity Fight Vol.XX 活動レポート",
    date: "2023年XX月",
    category: "activity",
    description: "記念大会となったVol.XXのフルレポート。特別対談・チャリティオークションの結果もご報告します。",
  },
];

export default function ActivitiesPage() {
  return (
    <div className="pt-16">
      <div className="relative bg-inase-black-light py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(220,10,10,0.1)_0%,_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-inase-red/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          <span className="text-inase-red text-xs font-bold tracking-widest uppercase">Activity Reports</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2">活動レポート</h1>
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <SectionTitle titleEn="Activity Reports" titleJa="活動レポート一覧" />
        <div className="grid sm:grid-cols-2 gap-6">
          {activities.map((a) => (
            <CharityReportCard key={a.id} report={a} />
          ))}
        </div>
      </section>
    </div>
  );
}
