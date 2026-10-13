import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "次回大会",
  description: "INASE Charity Fight 次回大会の詳細情報です。",
};

const eventDetails = [
  { label: "大会名", value: "INASE Charity Fight Vol.XX" },
  { label: "開催日", value: "2025年〇月〇日（〇）" },
  { label: "開場", value: "XX:XX" },
  { label: "開始", value: "XX:XX" },
  { label: "会場", value: "〇〇アリーナ（〇〇県〇〇市〇〇町X-X）" },
  { label: "チケット", value: "S席：¥X,XXX　A席：¥X,XXX　自由席：¥X,XXX" },
  { label: "主催", value: "INASE Charity Fight 実行委員会" },
];

const schedule = [
  { time: "XX:XX", content: "開場" },
  { time: "XX:XX", content: "開会式・チャリティ紹介" },
  { time: "XX:XX", content: "第1試合 開始" },
  { time: "XX:XX〜", content: "各試合（計XX試合予定）" },
  { time: "XX:XX", content: "メインイベント" },
  { time: "XX:XX", content: "閉会式・チャリティ目録贈呈式" },
];

export default function NextEventPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="relative bg-inase-black-light py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(220,10,10,0.15)_0%,_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-inase-red/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-inase-red rounded-full animate-pulse" />
            <span className="text-inase-red text-xs font-bold tracking-widest uppercase">
              Upcoming Event
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white">次回大会</h1>
          <p className="text-3xl md:text-4xl font-black text-inase-red mt-2">
            INASE Charity Fight Vol.XX
          </p>
        </div>
      </div>

      {/* Event Details */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info table */}
          <div>
            <SectionTitle titleEn="Event Details" titleJa="大会詳細" align="left" />
            <div className="space-y-3">
              {eventDetails.map((d) => (
                <div
                  key={d.label}
                  className="flex gap-4 border-b border-inase-red/10 pb-3"
                >
                  <span className="text-inase-red text-sm font-bold min-w-[80px]">{d.label}</span>
                  <span className="text-gray-300 text-sm">{d.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="px-6 py-3 bg-inase-red hover:bg-inase-red-light text-white font-bold transition-all"
              >
                チケット購入・問い合わせ
              </Link>
              <Link
                href="/events/matchups"
                className="px-6 py-3 border border-inase-red text-inase-red hover:bg-inase-red/10 font-bold transition-all"
              >
                対戦カードを見る →
              </Link>
            </div>
          </div>

          {/* Schedule */}
          <div>
            <SectionTitle titleEn="Schedule" titleJa="当日スケジュール" align="left" />
            <div className="space-y-3">
              {schedule.map((s, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-inase-red font-bold text-sm min-w-[60px]">{s.time}</span>
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-2 h-2 mt-1.5 bg-inase-red rounded-full flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{s.content}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Venue */}
      <section className="py-12 bg-inase-black-light">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle titleEn="Venue" titleJa="会場案内" />
          <div className="bg-inase-black border border-inase-red/20 p-8 max-w-2xl mx-auto text-center">
            <div className="text-5xl mb-4">📍</div>
            <h3 className="text-white font-bold text-xl mb-2">〇〇アリーナ</h3>
            <p className="text-gray-400 text-sm mb-4">〇〇県〇〇市〇〇町X-X-X</p>
            <p className="text-gray-500 text-xs">
              ※ 最寄り駅：〇〇線「〇〇駅」より徒歩XX分<br />
              ※ 駐車場あり（有料・台数限定）
            </p>
            {/* Map placeholder — embed Google Maps iframe here when available */}
            <div className="mt-6 h-48 bg-gray-900 flex items-center justify-center border border-inase-red/10">
              <span className="text-gray-600 text-sm">地図（Googleマップ埋め込み予定）</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="選手・協賛も募集中！"
        description="出場選手・協賛企業・ボランティアスタッフを募集しています。まずはお気軽にお問い合わせください。"
        buttons={[
          { label: "選手応募フォーム", href: "/recruitment", variant: "primary" },
          { label: "協賛について", href: "/sponsorship", variant: "outline" },
        ]}
      />
    </div>
  );
}
