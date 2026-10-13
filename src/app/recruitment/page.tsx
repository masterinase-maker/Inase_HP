import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "選手募集",
  description: "INASE Charity Fight 出場選手を募集しています。",
};

const requirements = [
  {
    title: "対象",
    items: [
      "格闘技歴・実績を問わず参加可能（ルールによる）",
      "18歳以上（未成年は保護者の同意が必要）",
      "健康診断書を提出できる方",
      "チャリティ活動の趣旨に賛同できる方",
    ],
  },
  {
    title: "対応ルール",
    items: [
      "キックボクシング（K-1ルール）",
      "ムエタイ",
      "MMA（総合格闘技）",
      "グラップリング",
      "ボクシング",
    ],
  },
  {
    title: "参加費用",
    items: [
      "出場料：¥X,XXX〜（体重クラス・ルールによる）",
      "ライセンス保険料：実費",
      "健康診断費：実費",
    ],
  },
];

const flow = [
  { step: "01", title: "エントリーフォーム送信", desc: "下記フォームよりお申し込みください。" },
  { step: "02", title: "マッチングメール", desc: "事務局よりマッチング状況をご連絡します（2週間以内）。" },
  { step: "03", title: "対戦合意・書類提出", desc: "対戦合意後、健康診断書・誓約書等をご提出ください。" },
  { step: "04", title: "計量・当日参加", desc: "当日計量後、試合に出場いただきます。" },
];

export default function RecruitmentPage() {
  return (
    <div className="pt-16">
      <div className="relative bg-inase-black-light py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(220,10,10,0.15)_0%,_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-inase-red/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          <span className="text-inase-red text-xs font-bold tracking-widest uppercase">Fighter Recruitment</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2">選手募集</h1>
          <p className="text-gray-300 mt-4 max-w-xl text-lg">
            あなたの戦いが、子供達の未来を変える。
          </p>
        </div>
      </div>

      {/* Message */}
      <section className="py-16 max-w-4xl mx-auto px-4 text-center">
        <p className="text-gray-300 leading-relaxed text-lg mb-4">
          INASE Charity Fightでは、出場選手を随時募集しています。
        </p>
        <p className="text-gray-400 leading-relaxed">
          格闘技歴・実績を問わず、チャリティの趣旨に賛同していただける方であればどなたでもご参加いただけます。
          あなたの戦う姿が、子供達への支援につながります。
        </p>
      </section>

      {/* Requirements */}
      <section className="py-12 bg-inase-black-light">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle titleEn="Requirements" titleJa="参加要件・ルール" />
          <div className="grid sm:grid-cols-3 gap-6">
            {requirements.map((req) => (
              <div
                key={req.title}
                className="bg-inase-black border border-inase-red/20 p-6"
              >
                <h3 className="text-inase-red font-bold mb-4 tracking-wider">{req.title}</h3>
                <ul className="space-y-2">
                  {req.items.map((item) => (
                    <li key={item} className="flex gap-2 text-gray-300 text-sm">
                      <span className="text-inase-red mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <SectionTitle titleEn="Entry Flow" titleJa="エントリーの流れ" />
        <div className="grid sm:grid-cols-2 gap-6">
          {flow.map((f) => (
            <div key={f.step} className="flex gap-4 items-start">
              <div className="w-12 h-12 flex-shrink-0 bg-inase-red flex items-center justify-center font-black text-white text-lg">
                {f.step}
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 pb-20 max-w-2xl mx-auto px-4 text-center">
        <div className="bg-inase-black-light border border-inase-red/30 p-8">
          <h2 className="text-white font-black text-2xl mb-4">エントリーはこちら</h2>
          <p className="text-gray-400 text-sm mb-6">
            お問い合わせフォームより「選手エントリー希望」とご記入の上、<br />
            お名前・体重・格闘技歴・希望ルールをご記載ください。
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-inase-red hover:bg-inase-red-light text-white font-bold text-lg tracking-wider transition-all hover:shadow-[0_0_20px_rgba(220,10,10,0.5)]"
          >
            選手エントリーフォームへ
          </Link>
        </div>
      </section>

      <CTASection
        title="大会情報もチェックしてください"
        buttons={[
          { label: "次回大会を見る", href: "/events/next", variant: "primary" },
          { label: "対戦カードを見る", href: "/events/matchups", variant: "outline" },
        ]}
      />
    </div>
  );
}
