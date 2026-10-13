import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import EventCard, { type EventData } from "@/components/EventCard";

export const metadata: Metadata = {
  title: "過去大会",
  description: "INASE Charity Fightの過去大会一覧です。",
};

const pastEvents: EventData[] = [
  {
    id: "past1",
    title: "INASE Charity Fight Vol.XX",
    date: "2024年XX月XX日",
    venue: "〇〇体育館",
    status: "past",
    description: "総来場者XXX名、選手XX名参加。寄付金XXX,XXX円を達成しました。",
    thumbnailColor: "linear-gradient(135deg, #1A0A00 0%, #2A1A00 100%)",
  },
  {
    id: "past2",
    title: "INASE Charity Fight Vol.XX",
    date: "2024年XX月XX日",
    venue: "〇〇アリーナ",
    status: "past",
    description: "記念大会。特別対談・チャリティオークションを開催し大盛況でした。",
    thumbnailColor: "linear-gradient(135deg, #001A0A 0%, #002A1A 100%)",
  },
  {
    id: "past3",
    title: "INASE Charity Fight Vol.XX",
    date: "2023年XX月XX日",
    venue: "〇〇市民会館",
    status: "past",
    description: "第X回目の開催。格闘技体験コーナーも好評でした。",
  },
  {
    id: "past4",
    title: "INASE Charity Fight Vol.XX",
    date: "2023年XX月XX日",
    venue: "〇〇スポーツセンター",
    status: "past",
    description: "初めての遠征大会。〇〇県での開催となり多くの方に来場いただきました。",
  },
];

export default function PastEventsPage() {
  return (
    <div className="pt-16">
      <div className="relative bg-inase-black-light py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(220,10,10,0.1)_0%,_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-inase-red/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          <span className="text-inase-red text-xs font-bold tracking-widest uppercase">Past Events</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2">過去大会</h1>
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <SectionTitle titleEn="Event History" titleJa="過去大会一覧" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}
