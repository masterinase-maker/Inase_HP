import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "対戦カード",
  description: "INASE Charity Fight 次回大会の対戦カードです。",
};

type Matchup = {
  id: string;
  bout: number;
  weightClass: string;
  fighterA: { name: string; affiliation: string; record?: string };
  fighterB: { name: string; affiliation: string; record?: string };
  isMain?: boolean;
  isCo?: boolean;
};

const matchups: Matchup[] = [
  {
    id: "1",
    bout: 1,
    weightClass: "〇〇級",
    fighterA: { name: "選手名 〇〇 〇〇", affiliation: "〇〇ジム", record: "XX勝XX敗" },
    fighterB: { name: "選手名 〇〇 〇〇", affiliation: "〇〇ジム", record: "XX勝XX敗" },
    isMain: true,
  },
  {
    id: "2",
    bout: 2,
    weightClass: "〇〇級",
    fighterA: { name: "選手名 〇〇 〇〇", affiliation: "〇〇ジム" },
    fighterB: { name: "選手名 〇〇 〇〇", affiliation: "〇〇ジム" },
    isCo: true,
  },
  {
    id: "3",
    bout: 3,
    weightClass: "〇〇級",
    fighterA: { name: "選手名 〇〇 〇〇", affiliation: "〇〇ジム" },
    fighterB: { name: "選手名 〇〇 〇〇", affiliation: "〇〇ジム" },
  },
  {
    id: "4",
    bout: 4,
    weightClass: "〇〇級",
    fighterA: { name: "選手名 〇〇 〇〇", affiliation: "〇〇ジム" },
    fighterB: { name: "選手名 〇〇 〇〇", affiliation: "〇〇ジム" },
  },
  {
    id: "5",
    bout: 5,
    weightClass: "〇〇級",
    fighterA: { name: "TBD", affiliation: "調整中" },
    fighterB: { name: "TBD", affiliation: "調整中" },
  },
];

function FighterBlock({ fighter, side }: { fighter: Matchup["fighterA"]; side: "left" | "right" }) {
  const isRight = side === "right";
  return (
    <div className={`flex-1 flex flex-col ${isRight ? "items-end text-right" : "items-start text-left"}`}>
      <div className="w-16 h-16 mb-3 bg-inase-red/10 border border-inase-red/30 flex items-center justify-center">
        <span className="text-inase-red font-black text-xl">{fighter.name.charAt(0)}</span>
      </div>
      <p className="text-white font-bold text-lg leading-tight">{fighter.name}</p>
      <p className="text-gray-400 text-sm">{fighter.affiliation}</p>
      {fighter.record && (
        <p className="text-inase-red text-xs font-bold mt-1">{fighter.record}</p>
      )}
    </div>
  );
}

export default function MatchupsPage() {
  return (
    <div className="pt-16">
      <div className="relative bg-inase-black-light py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(220,10,10,0.1)_0%,_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-inase-red/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          <span className="text-inase-red text-xs font-bold tracking-widest uppercase">Match Card</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2">対戦カード</h1>
          <p className="text-gray-400 mt-2">INASE Charity Fight Vol.XX</p>
        </div>
      </div>

      <section className="py-20 max-w-4xl mx-auto px-4">
        <SectionTitle titleEn="Match Card" titleJa="全試合カード" />
        <div className="space-y-4">
          {matchups.map((m) => (
            <div
              key={m.id}
              className={`bg-inase-black-light border transition-all ${
                m.isMain
                  ? "border-inase-red shadow-[0_0_15px_rgba(220,10,10,0.2)]"
                  : m.isCo
                  ? "border-inase-red/50"
                  : "border-inase-red/20"
              } p-6`}
            >
              {/* Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-500 text-xs font-bold">BOUT {m.bout}</span>
                <span className="text-gray-600 text-xs">|</span>
                <span className="text-gray-400 text-xs">{m.weightClass}</span>
                {m.isMain && (
                  <span className="ml-auto bg-inase-red text-white text-xs font-bold px-2 py-0.5 tracking-wider">
                    MAIN EVENT
                  </span>
                )}
                {m.isCo && (
                  <span className="ml-auto bg-inase-red/30 text-inase-red text-xs font-bold px-2 py-0.5">
                    CO-MAIN
                  </span>
                )}
              </div>
              {/* Fighters */}
              <div className="flex items-center gap-4">
                <FighterBlock fighter={m.fighterA} side="left" />
                <div className="flex-shrink-0 text-center">
                  <div className="text-inase-red font-black text-2xl">VS</div>
                </div>
                <FighterBlock fighter={m.fighterB} side="right" />
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-xs text-center mt-6">
          ※ 対戦カードは変更になる場合があります。最新情報はSNSをご確認ください。
        </p>
      </section>

      <CTASection
        title="選手エントリー受付中"
        description="出場希望の選手はこちらからエントリーをお願いします。"
        buttons={[{ label: "選手募集ページへ", href: "/recruitment", variant: "primary" }]}
      />
    </div>
  );
}
