import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NextRun - AI 기반 실사 수화아바타",
  description: "MediaPipe, sign-gemma3, 모션캡처 기술을 활용한 혁신적인 AI 수화아바타 솔루션",
  keywords: ["수화", "아바타", "AI", "MediaPipe", "sign-gemma3", "수화통역", "접근성"],
  openGraph: {
    title: "NextRun - AI 기반 실사 수화아바타",
    description: "MediaPipe, sign-gemma3, 모션캡처 기술을 활용한 혁신적인 AI 수화아바타 솔루션",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.variable} antialiased bg-gradient-animated`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
