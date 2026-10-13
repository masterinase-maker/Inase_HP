import Link from "next/link";

export type EventData = {
  id: string;
  title: string;
  date: string;
  venue: string;
  status: "upcoming" | "ongoing" | "past";
  description?: string;
  href?: string;
  thumbnailColor?: string;
};

type EventCardProps = {
  event: EventData;
};

const statusConfig = {
  upcoming: { label: "開催予定", class: "bg-inase-red text-white" },
  ongoing: { label: "開催中", class: "bg-green-600 text-white" },
  past: { label: "終了", class: "bg-gray-600 text-gray-300" },
};

export default function EventCard({ event }: EventCardProps) {
  const status = statusConfig[event.status];
  const cardContent = (
    <div className="group bg-inase-black-light border border-inase-red/20 hover:border-inase-red/50 transition-all duration-300 overflow-hidden">
      {/* Thumbnail placeholder — replace with <Image> when photo is available */}
      <div
        className="h-48 flex items-center justify-center relative overflow-hidden"
        style={{
          background:
            event.thumbnailColor ??
            "linear-gradient(135deg, #1A0000 0%, #2D0000 50%, #0A0A0A 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,10,10,0.2)_0%,_transparent_70%)]" />
        <span className="relative text-inase-red/30 font-black text-5xl">
          {event.title.charAt(0)}
        </span>
        <span
          className={`absolute top-3 right-3 text-xs px-2 py-1 font-bold ${status.class}`}
        >
          {status.label}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-inase-red transition-colors line-clamp-2">
          {event.title}
        </h3>
        <div className="space-y-1 mb-3">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            <span className="text-inase-red">📅</span>
            {event.date}
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            <span className="text-inase-red">📍</span>
            {event.venue}
          </p>
        </div>
        {event.description && (
          <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
            {event.description}
          </p>
        )}
        {event.href && (
          <div className="mt-4 pt-4 border-t border-inase-red/10">
            <span className="text-inase-red text-sm font-bold group-hover:underline">
              詳細を見る →
            </span>
          </div>
        )}
      </div>
    </div>
  );

  if (event.href) {
    return <Link href={event.href}>{cardContent}</Link>;
  }
  return cardContent;
}
