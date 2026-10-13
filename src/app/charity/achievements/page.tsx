import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import CharityReportCard, { type CharityReport } from "@/components/CharityReportCard";

export const metadata: Metadata = {
  title: "支援実績",
  description: "INASE Charity Fightのこれまでの支援実績一覧です。",
};

const achievements: CharityReport[] = [
  {
    id: "1",
    title: "格闘技用具寄贈プロジェクト Vol.3",
    date: "2024年XX月",
    category: "achievement",
    description: "グローブ・プロテクター・サンドバッグ等、計XX点を〇〇市内のXX小中学校・スポーツクラブへ寄贈しました。",
    imageColor: "linear-gradient(135deg, #0A1A0A 0%, #1A2A0A 100%)",
  },
  {
    id: "2",
    title: "子ども食堂 食材支援",
    date: "2024年XX月",
    category: "achievement",
    description: "〇〇県内の子ども食堂XXか所に対し、米・野菜・調味料等の食材を定期提供するプロジェクトを開始しました。",
  },
  {
    id: "3",
    title: "奨学金制度（格闘技支援）",
    date: "2023年XX月",
    category: "achievement",
    description: "経済的な理由で格闘技を続けることが困難な子供達への奨学金支援。第1期生X名の道場費を全額負担しました。",
  },
  {
    id: "4",
    title: "児童養護施設への備品寄贈",
    date: "2023年XX月",
    category: "achievement",
    description: "〇〇市内の児童養護施設へ運動用具・学習用品・文房具等を寄贈しました。",
  },
];

const totalStats = [
  { value: "XX点", label: "寄贈用具数" },
  { value: "XXか所", label: "支援先数" },
  { value: "XX名", label: "支援した子供達" },
];

export default function AchievementsPage() {
  return (
    <div className="pt-16">
      <div className="relative bg-inase-black-light py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(220,10,10,0.1)_0%,_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-inase-red/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          <span className="text-inase-red text-xs font-bold tracking-widest uppercase">Achievements</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2">支援実績</h1>
        </div>
      </div>

      <section className="py-12 bg-inase-red">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-6 text-center">
            {totalStats.map((s) => (
              <div key={s.label}>
                <div className="text-white font-black text-3xl">{s.value}</div>
                <div className="text-white/80 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <SectionTitle titleEn="All Achievements" titleJa="支援実績一覧" />
        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((item) => (
            <CharityReportCard key={item.id} report={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
