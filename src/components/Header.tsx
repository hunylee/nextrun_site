"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const locale = useLocale();
    const t = useTranslations("nav");

    const navItems = [
        { href: `/${locale}`, label: t("home") },
        { href: `/${locale}/history`, label: t("history") },
        { href: `/${locale}/avatar`, label: t("avatar") },
        { href: `/${locale}/location`, label: t("location") },
        { href: `/${locale}/contact`, label: t("contact") },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActivePath = (href: string) => {
        if (href === `/${locale}`) {
            return pathname === `/${locale}` || pathname === `/${locale}/`;
        }
        return pathname.startsWith(href);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-purple-500/20"
                : "bg-transparent"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href={`/${locale}`} className="flex items-center gap-2">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Image
                                src="/logo.png"
                                alt="NextRun Logo"
                                width={120}
                                height={40}
                                className="h-10 w-auto"
                                priority
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative py-2 text-sm font-medium transition-colors ${isActivePath(item.href)
                                    ? "text-purple-400"
                                    : "text-gray-300 hover:text-white"
                                    }`}
                            >
                                {item.label}
                                {isActivePath(item.href) && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="hidden md:flex items-center gap-4">
                        <LanguageSwitcher />
                        <Link
                            href={`/${locale}/contact`}
                            className="btn-glow text-sm"
                        >
                            {t("inquiry")}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-3">
                        <LanguageSwitcher />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-gray-300 hover:text-white"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden mt-4 pb-4"
                        >
                            <div className="flex flex-col gap-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`py-2 text-center rounded-lg transition-colors ${isActivePath(item.href)
                                            ? "bg-purple-500/20 text-purple-400"
                                            : "text-gray-300 hover:bg-white/5"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
