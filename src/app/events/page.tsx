import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import EventCard, { type EventData } from "@/components/EventCard";

export const metadata: Metadata = {
  title: "大会情報",
  description: "INASE Charity Fightの大会情報。次回大会・対戦カード・過去大会をご確認ください。",
};

const events: EventData[] = [
  {
    id: "next",
    title: "INASE Charity Fight Vol.XX【次回大会】",
    date: "2025年〇月〇日（〇）",
    venue: "〇〇アリーナ（〇〇県〇〇市）",
    status: "upcoming",
    description: "チケット販売中！協賛・選手エントリーも受付中です。",
    href: "/events/next",
  },
  {
    id: "past1",
    title: "INASE Charity Fight Vol.XX",
    date: "2024年XX月XX日",
    venue: "〇〇体育館",
    status: "past",
    description: "総来場者XXX名、選手XX名参加。大盛況のうちに終了しました。",
    href: "/events/past",
  },
  {
    id: "past2",
    title: "INASE Charity Fight Vol.XX",
    date: "2024年XX月XX日",
    venue: "〇〇アリーナ",
    status: "past",
    description: "寄付金XXX,XXX円を達成。多くのご支援をいただきました。",
    href: "/events/past",
  },
];

const categories = [
  { href: "/events/next", label: "次回大会", en: "Next Event", icon: "🥊", desc: "開催予定の次回大会情報" },
  { href: "/events/matchups", label: "対戦カード", en: "Match Card", icon: "⚔️", desc: "出場選手・対戦カード発表" },
  { href: "/events/past", label: "過去大会", en: "Past Events", icon: "📚", desc: "これまでの大会記録" },
];

export default function EventsPage() {
  return (
    <div className="pt-16">
      <div className="relative bg-inase-black-light py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(220,10,10,0.1)_0%,_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-inase-red/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          <span className="text-inase-red text-xs font-bold tracking-widest uppercase">Events</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2">大会情報</h1>
        </div>
      </div>

      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group bg-inase-black-light border border-inase-red/20 hover:border-inase-red p-8 text-center transition-all"
            >
              <div className="text-5xl mb-4">{cat.icon}</div>
              <div className="text-inase-red text-xs font-bold tracking-widest mb-1">{cat.en}</div>
              <h2 className="text-white font-bold text-xl mb-2 group-hover:text-inase-red transition-colors">
                {cat.label}
              </h2>
              <p className="text-gray-400 text-sm">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-12 pb-20 bg-inase-black-light">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle titleEn="All Events" titleJa="大会一覧" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
