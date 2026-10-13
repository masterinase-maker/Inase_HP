import type { Sponsor } from "./SponsorMarquee";

type SponsorCardProps = {
  sponsor: Sponsor;
};

const tierConfig = {
  gold: {
    label: "GOLD SPONSOR",
    border: "border-yellow-500/50",
    bg: "bg-yellow-500/5",
    text: "text-yellow-400",
    badgeBg: "bg-yellow-500/20",
  },
  silver: {
    label: "SILVER SPONSOR",
    border: "border-gray-400/40",
    bg: "bg-gray-400/5",
    text: "text-gray-300",
    badgeBg: "bg-gray-400/10",
  },
  bronze: {
    label: "BRONZE SPONSOR",
    border: "border-orange-700/40",
    bg: "bg-orange-700/5",
    text: "text-orange-400",
    badgeBg: "bg-orange-700/10",
  },
  general: {
    label: "SPONSOR",
    border: "border-inase-red/25",
    bg: "bg-inase-red/5",
    text: "text-inase-red",
    badgeBg: "bg-inase-red/10",
  },
};

export default function SponsorCard({ sponsor }: SponsorCardProps) {
  const config = tierConfig[sponsor.tier];
  return (
    <div
      className={`border ${config.border} ${config.bg} p-6 flex flex-col items-center justify-center text-center gap-3 hover:scale-[1.02] transition-transform duration-200`}
    >
      {/* Logo placeholder — replace with <Image src={sponsor.logoUrl} .../> when logo is available */}
      <div className="w-full h-20 flex items-center justify-center bg-black/20">
        <span className="text-gray-600 text-xs">LOGO</span>
      </div>
      <div>
        <span
          className={`text-[10px] font-bold tracking-widest px-2 py-0.5 ${config.badgeBg} ${config.text}`}
        >
          {config.label}
        </span>
        <p className="text-white font-bold mt-2 text-sm">{sponsor.name}</p>
        {sponsor.nameEn && (
          <p className="text-gray-500 text-xs mt-0.5">{sponsor.nameEn}</p>
        )}
      </div>
    </div>
  );
}
