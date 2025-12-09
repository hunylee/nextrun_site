import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";
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

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    // Validate locale
    if (!routing.locales.includes(locale as typeof routing.locales[number])) {
        notFound();
    }

    // Get messages for the current locale
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`${notoSansKr.variable} antialiased bg-gradient-animated`}>
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    <main className="min-h-screen">
                        {children}
                    </main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
