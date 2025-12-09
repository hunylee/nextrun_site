import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
    {
        title: "서비스",
        links: [
            { label: "아바타 솔루션", href: "/avatar" },
            { label: "기술 소개", href: "/avatar#technology" },
            { label: "사례 연구", href: "/avatar#cases" },
        ],
    },
    {
        title: "회사",
        links: [
            { label: "회사소개", href: "/" },
            { label: "연혁", href: "/history" },
            { label: "오시는 길", href: "/location" },
        ],
    },
    {
        title: "지원",
        links: [
            { label: "문의하기", href: "/contact" },
            { label: "FAQ", href: "/contact#faq" },
            { label: "파트너십", href: "/contact#partnership" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0f] border-t border-purple-500/20">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">N</span>
                            </div>
                            <span className="text-xl font-bold gradient-text">NextRun</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            AI 기반 실사 수화아바타 전문기업
                            <br />
                            MediaPipe, sign-gemma3, 모션캡처 기술로
                            <br />
                            수화 접근성의 새로운 패러다임을 제시합니다.
                        </p>
                        <div className="flex flex-col gap-3 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-purple-400" />
                                <span>서울특별시 강남구 테헤란로 123</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={16} className="text-purple-400" />
                                <span>02-1234-5678</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail size={16} className="text-purple-400" />
                                <span>contact@nextrun.ai</span>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 text-sm hover:text-purple-400 transition-colors"
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
                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2024 NextRun. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link href="/privacy" className="hover:text-purple-400 transition-colors">
                            개인정보처리방침
                        </Link>
                        <Link href="/terms" className="hover:text-purple-400 transition-colors">
                            이용약관
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
