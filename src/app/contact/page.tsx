import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "INASE Charity Fightへのお問い合わせはこちらから。",
};

const categories = [
  "チケット購入について",
  "選手エントリー",
  "協賛・スポンサーについて",
  "取材・メディア",
  "チャリティ活動について",
  "その他",
];

export default function ContactPage() {
  return (
    <div className="pt-16">
      <div className="relative bg-inase-black-light py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(220,10,10,0.1)_0%,_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-inase-red/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          <span className="text-inase-red text-xs font-bold tracking-widest uppercase">Contact</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2">お問い合わせ</h1>
        </div>
      </div>

      <section className="py-20 max-w-3xl mx-auto px-4">
        <SectionTitle
          titleEn="Get In Touch"
          titleJa="お問い合わせフォーム"
          description="ご質問・ご要望・取材のご依頼など、お気軽にご連絡ください。3営業日以内にご返信いたします。"
        />

        {/* Contact form — wire up action/API route when adding backend */}
        <form className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-2">
                お名前 <span className="text-inase-red">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="山田 太郎"
                className="w-full bg-inase-black-light border border-inase-red/20 focus:border-inase-red outline-none px-4 py-3 text-white placeholder-gray-600 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-2">
                メールアドレス <span className="text-inase-red">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="example@email.com"
                className="w-full bg-inase-black-light border border-inase-red/20 focus:border-inase-red outline-none px-4 py-3 text-white placeholder-gray-600 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">
              お問い合わせ種別 <span className="text-inase-red">*</span>
            </label>
            <select
              name="category"
              required
              className="w-full bg-inase-black-light border border-inase-red/20 focus:border-inase-red outline-none px-4 py-3 text-white transition-colors appearance-none"
            >
              <option value="">選択してください</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">
              件名 <span className="text-inase-red">*</span>
            </label>
            <input
              type="text"
              name="subject"
              required
              placeholder="お問い合わせ件名をご入力ください"
              className="w-full bg-inase-black-light border border-inase-red/20 focus:border-inase-red outline-none px-4 py-3 text-white placeholder-gray-600 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">
              お問い合わせ内容 <span className="text-inase-red">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="お問い合わせ内容をご入力ください"
              className="w-full bg-inase-black-light border border-inase-red/20 focus:border-inase-red outline-none px-4 py-3 text-white placeholder-gray-600 transition-colors resize-none"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-12 py-4 bg-inase-red hover:bg-inase-red-light text-white font-bold text-lg tracking-wider transition-all hover:shadow-[0_0_20px_rgba(220,10,10,0.5)] active:scale-95"
            >
              送信する
            </button>
          </div>

          <p className="text-gray-600 text-xs text-center">
            ※ 送信後、自動返信メールをお送りします。届かない場合は迷惑メールフォルダをご確認ください。<br />
            ※ 現在このフォームは静的サイトのため、実際の送信機能は準備中です。
          </p>
        </form>

        {/* Direct contact */}
        <div className="mt-12 bg-inase-black-light border border-inase-red/15 p-8 text-center">
          <h3 className="text-white font-bold text-lg mb-4">直接のご連絡</h3>
          <div className="space-y-2 text-gray-400 text-sm">
            <p>Email: <span className="text-inase-red">info@inase-charity-fight.jp（仮）</span></p>
            <p>受付時間：平日 10:00〜18:00（土日祝除く）</p>
          </div>
        </div>
      </section>
    </div>
  );
}
