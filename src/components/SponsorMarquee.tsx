export type Sponsor = {
  id: string;
  name: string;
  nameEn?: string;
  tier: "gold" | "silver" | "bronze" | "general";
  logoUrl?: string;
};

const sponsors: Sponsor[] = [
  { id: "1", name: "株式会社〇〇商事", nameEn: "SAMPLE CORP", tier: "gold" },
  { id: "2", name: "△△建設株式会社", nameEn: "SAMPLE CONSTRUCTION", tier: "gold" },
  { id: "3", name: "□□フィットネス", nameEn: "SAMPLE FITNESS", tier: "silver" },
  { id: "4", name: "◇◇整骨院", nameEn: "SAMPLE CLINIC", tier: "silver" },
  { id: "5", name: "株式会社○○食品", nameEn: "SAMPLE FOOD", tier: "silver" },
  { id: "6", name: "△△スポーツ用品", nameEn: "SAMPLE SPORTS", tier: "bronze" },
  { id: "7", name: "□□プロテイン", nameEn: "SAMPLE PROTEIN", tier: "bronze" },
  { id: "8", name: "◇◇ジム", nameEn: "SAMPLE GYM", tier: "bronze" },
  { id: "9", name: "○○不動産", nameEn: "SAMPLE REALTY", tier: "general" },
  { id: "10", name: "△△デザイン", nameEn: "SAMPLE DESIGN", tier: "general" },
  { id: "11", name: "□□保険", nameEn: "SAMPLE INSURANCE", tier: "general" },
  { id: "12", name: "◇◇医療クリニック", nameEn: "SAMPLE MEDICAL", tier: "general" },
];

const tierConfig = {
  gold: {
    border: "border-yellow-500/60",
    text: "text-yellow-400",
    bg: "bg-yellow-500/10",
    label: "GOLD",
  },
  silver: {
    border: "border-gray-400/60",
    text: "text-gray-300",
    bg: "bg-gray-400/10",
    label: "SILVER",
  },
  bronze: {
    border: "border-orange-700/60",
    text: "text-orange-400",
    bg: "bg-orange-700/10",
    label: "BRONZE",
  },
  general: {
    border: "border-inase-red/30",
    text: "text-inase-red",
    bg: "bg-inase-red/5",
    label: "SPONSOR",
  },
};

function SponsorBadge({ sponsor }: { sponsor: Sponsor }) {
  const config = tierConfig[sponsor.tier];
  return (
    <div
      className={`flex-shrink-0 mx-4 px-6 py-4 border ${config.border} ${config.bg} flex flex-col items-center justify-center min-w-[180px] h-20`}
    >
      {/* Replace this div with <Image> when actual logo is available */}
      <span className={`text-[10px] font-bold tracking-widest ${config.text} mb-1`}>
        {config.label}
      </span>
      <span className="text-white text-sm font-bold text-center leading-tight">
        {sponsor.name}
      </span>
      {sponsor.nameEn && (
        <span className="text-gray-500 text-[10px] tracking-wider mt-0.5">
          {sponsor.nameEn}
        </span>
      )}
    </div>
  );
}

export default function SponsorMarquee() {
  const doubled = [...sponsors, ...sponsors];

  return (
    <section className="bg-inase-black-light py-10 overflow-hidden border-y border-inase-red/20">
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-inase-red/20" />
          <span className="text-inase-red text-xs font-bold tracking-widest uppercase">
            Our Sponsors &amp; Supporters
          </span>
          <div className="h-px flex-1 bg-inase-red/20" />
        </div>
      </div>

      <div className="marquee-container relative flex overflow-hidden">
        {/* First row */}
        <div className="flex animate-marquee">
          {doubled.map((sponsor, i) => (
            <SponsorBadge key={`a-${sponsor.id}-${i}`} sponsor={sponsor} />
          ))}
        </div>
        {/* Second row (seamless loop) */}
        <div className="flex animate-marquee-2 absolute top-0">
          {doubled.map((sponsor, i) => (
            <SponsorBadge key={`b-${sponsor.id}-${i}`} sponsor={sponsor} />
          ))}
        </div>
      </div>
    </section>
  );
}
