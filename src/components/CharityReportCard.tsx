export type CharityReport = {
  id: string;
  title: string;
  date: string;
  amount?: string;
  category: "achievement" | "donation" | "activity";
  description: string;
  imageColor?: string;
};

type CharityReportCardProps = {
  report: CharityReport;
};

const categoryConfig = {
  achievement: { label: "支援実績", color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30" },
  donation: { label: "寄付報告", color: "text-green-400 bg-green-400/10 border-green-400/30" },
  activity: { label: "活動レポート", color: "text-inase-red bg-inase-red/10 border-inase-red/30" },
};

export default function CharityReportCard({ report }: CharityReportCardProps) {
  const cat = categoryConfig[report.category];
  return (
    <div className="bg-inase-black-light border border-inase-red/15 hover:border-inase-red/40 transition-all duration-300 overflow-hidden group">
      {/* Image placeholder — replace with <Image> when photo is available */}
      <div
        className="h-40 flex items-center justify-center"
        style={{
          background:
            report.imageColor ??
            "linear-gradient(135deg, #0A1A0A 0%, #1A2A0A 100%)",
        }}
      >
        <span className="text-4xl opacity-20">🤝</span>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`text-[10px] font-bold tracking-widest px-2 py-0.5 border ${cat.color}`}
          >
            {cat.label}
          </span>
          <span className="text-gray-500 text-xs">{report.date}</span>
        </div>
        <h3 className="text-white font-bold mb-2 group-hover:text-inase-red transition-colors">
          {report.title}
        </h3>
        {report.amount && (
          <p className="text-green-400 font-bold text-lg mb-2">
            ¥ {report.amount}
          </p>
        )}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {report.description}
        </p>
      </div>
    </div>
  );
}
