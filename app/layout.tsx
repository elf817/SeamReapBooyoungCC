import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_KR, IBM_Plex_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-kr",
  display: "swap",
});

const ibmPlexSansKr = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "씨엠립 부영 컨트리클럽 | Siem Reap Booyoung Country Club",
  description:
    "캄보디아 시엠립 소재 7,396야드 18홀 챔피언십 골프장 씨엠립 부영 컨트리클럽. 앙코르와트에서 차로 20분, 코스 안 골프텔 94실·78타석 골프연습장 운영.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${cormorant.variable} ${notoSansKr.variable} ${ibmPlexSansKr.variable}`}>
      <body className="font-sans text-ink bg-bg overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
