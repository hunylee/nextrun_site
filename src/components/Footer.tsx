"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    const locale = useLocale();
    const t = useTranslations("footer");

    const footerLinks = [
        {
            title: t("services.title"),
            links: [
                { label: t("services.avatar"), href: `/${locale}/avatar` },
                { label: t("services.tech"), href: `/${locale}/avatar#technology` },
                { label: t("services.cases"), href: `/${locale}/avatar#cases` },
            ],
        },
        {
            title: t("company.title"),
            links: [
                { label: t("company.about"), href: `/${locale}` },
                { label: t("company.history"), href: `/${locale}/history` },
                { label: t("company.location"), href: `/${locale}/location` },
            ],
        },
        {
            title: t("support.title"),
            links: [
                { label: t("support.contact"), href: `/${locale}/contact` },
                { label: t("support.faq"), href: `/${locale}/contact#faq` },
                { label: t("support.partnership"), href: `/${locale}/contact#partnership` },
            ],
        },
    ];

    return (
        <footer className="bg-[#0a0a0f] border-t border-purple-500/20">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <Link href={`/${locale}`} className="flex items-center gap-2 mb-6">
                            <Image
                                src="/logo.png"
                                alt="NextRun Logo"
                                width={120}
                                height={40}
                                className="h-10 w-auto"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 whitespace-pre-line">
                            {t("description")}
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
                        {t("copyright")}
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link href={`/${locale}/privacy`} className="hover:text-purple-400 transition-colors">
                            {t("privacy")}
                        </Link>
                        <Link href={`/${locale}/terms`} className="hover:text-purple-400 transition-colors">
                            {t("terms")}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
