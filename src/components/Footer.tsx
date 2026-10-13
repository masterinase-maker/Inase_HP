import Link from "next/link";

const footerLinks = [
  {
    title: "INASE",
    links: [
      { label: "INASEとは", href: "/about" },
      { label: "お問い合わせ", href: "/contact" },
    ],
  },
  {
    title: "チャリティ活動",
    links: [
      { label: "支援実績", href: "/charity/achievements" },
      { label: "寄付報告", href: "/charity/reports" },
      { label: "活動レポート", href: "/charity/activities" },
    ],
  },
  {
    title: "大会情報",
    links: [
      { label: "次回大会", href: "/events/next" },
      { label: "対戦カード", href: "/events/matchups" },
      { label: "過去大会", href: "/events/past" },
    ],
  },
  {
    title: "参加・協賛",
    links: [
      { label: "選手募集", href: "/recruitment" },
      { label: "協賛募集", href: "/sponsorship" },
      { label: "協賛企業・協賛者一覧", href: "/sponsors" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-inase-black border-t border-inase-red/20">
      {/* Red accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-inase-red to-transparent" />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Logo & Description */}
        <div className="mb-10">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-inase-red flex items-center justify-center font-black text-white">
              I
            </div>
            <div>
              <div className="font-black text-xl tracking-wider text-white">
                INASE
              </div>
              <div className="text-inase-red text-xs tracking-widest">
                CHARITY FIGHT
              </div>
            </div>
          </Link>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            格闘技を通じて、子供達への支援の輪を広げるチャリティーファイトイベント。
            一緒に、未来を変えましょう。
          </p>
        </div>

        {/* Nav Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-inase-red text-xs font-bold tracking-widest uppercase mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-inase-red transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-inase-red/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} INASE Charity Fight. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="text-gray-500 text-xs hover:text-inase-red transition-colors"
            >
              お問い合わせ
            </Link>
            <span className="text-gray-700">|</span>
            <span className="text-gray-500 text-xs">プライバシーポリシー</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
