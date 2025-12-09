"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';

const locales = [
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
];

export default function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const currentLocale = locales.find((l) => l.code === locale) || locales[0];

    const switchLocale = (newLocale: string) => {
        // Replace the current locale in the pathname with the new one
        const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(newPathname);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-gray-700 hover:border-purple-500 transition-colors"
            >
                <Globe size={16} className="text-purple-400" />
                <span className="text-sm">{currentLocale.flag}</span>
                <ChevronDown
                    size={14}
                    className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Dropdown */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute right-0 mt-2 w-40 py-2 rounded-xl bg-[#1a1a2e] border border-purple-500/20 shadow-xl z-50"
                        >
                            {locales.map((loc) => (
                                <button
                                    key={loc.code}
                                    onClick={() => switchLocale(loc.code)}
                                    className={`w-full px-4 py-2 flex items-center gap-3 hover:bg-white/5 transition-colors ${loc.code === locale ? 'text-purple-400' : 'text-gray-300'
                                        }`}
                                >
                                    <span className="text-lg">{loc.flag}</span>
                                    <span className="text-sm">{loc.label}</span>
                                </button>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
