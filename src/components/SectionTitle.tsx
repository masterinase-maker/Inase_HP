type SectionTitleProps = {
  titleEn: string;
  titleJa: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  titleEn,
  titleJa,
  description,
  align = "center",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass} mb-12`}>
      <span className="text-inase-red text-xs font-bold tracking-[0.3em] uppercase mb-2">
        {titleEn}
      </span>
      <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
        {titleJa}
      </h2>
      <div className="flex items-center gap-2">
        <div className="h-px w-12 bg-inase-red" />
        <div className="h-px w-4 bg-inase-red/40" />
      </div>
      {description && (
        <p className="text-gray-400 mt-6 max-w-2xl leading-relaxed text-sm md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
