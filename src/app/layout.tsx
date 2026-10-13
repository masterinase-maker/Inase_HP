import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: {
    default: "INASE Charity Fight | 格闘技を通じて支援の輪を",
    template: "%s | INASE Charity Fight",
  },
  description:
    "INASE Charity Fightは格闘技を通じて子供達への支援活動を行うチャリティーファイトイベントです。",
  keywords: ["INASE", "チャリティーファイト", "格闘技", "チャリティ", "支援"],
  openGraph: {
    title: "INASE Charity Fight",
    description: "格闘技を通じて、支援の輪を広げるチャリティーファイト",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="bg-inase-black text-inase-white min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
