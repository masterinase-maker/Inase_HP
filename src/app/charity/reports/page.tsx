import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import CharityReportCard, { type CharityReport } from "@/components/CharityReportCard";

export const metadata: Metadata = {
  title: "寄付報告",
  description: "INASE Charity Fightの寄付金使途報告です。",
};

const reports: CharityReport[] = [
  {
    id: "1",
    title: "INASE Charity Fight Vol.XX 寄付報告",
    date: "2024年XX月",
    amount: "XXX,XXX",
    category: "donation",
    description: "Vol.XXより寄付金XXX,XXX円を〇〇県子ども食堂連絡会へ寄贈しました。ご支援ありがとうございました。",
  },
  {
    id: "2",
    title: "INASE Charity Fight Vol.XX 寄付報告",
    date: "2024年XX月",
    amount: "XX,XXX",
    category: "donation",
    description: "Vol.XXより寄付金XX,XXX円を〇〇市の学習支援NPOへ寄贈しました。",
  },
  {
    id: "3",
    title: "年次寄付報告 2023年度",
    date: "2024年X月",
    amount: "X,XXX,XXX",
    category: "donation",
    description: "2023年度の全大会を通じた累計寄付総額と使途をまとめた年次報告書です。",
  },
  {
    id: "4",
    title: "INASE Charity Fight Vol.XX 寄付報告",
    date: "2023年XX月",
    amount: "XX,XXX",
    category: "donation",
    description: "Vol.XXの収益より、児童養護施設への備品購入費用として寄贈しました。",
  },
];

export default function ReportsPage() {
  return (
    <div className="pt-16">
      <div className="relative bg-inase-black-light py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(220,10,10,0.1)_0%,_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-inase-red/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          <span className="text-inase-red text-xs font-bold tracking-widest uppercase">Donation Reports</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2">寄付報告</h1>
          <p className="text-gray-400 mt-4 max-w-xl">
            大会収益からの寄付金の使途を透明性をもって報告しています。
          </p>
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <SectionTitle titleEn="Donation Reports" titleJa="寄付報告一覧" />
        <div className="grid sm:grid-cols-2 gap-6">
          {reports.map((r) => (
            <CharityReportCard key={r.id} report={r} />
          ))}
        </div>
      </section>
    </div>
  );
}
