"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Calendar, Award, Rocket, Building, Globe } from "lucide-react";

export default function HistoryPage() {
    const locale = useLocale();
    const t = useTranslations("history");

    const timeline = [
        {
            year: "2024",
            title: t("2024.title"),
            icon: Globe,
            events: [
                { month: locale === 'en' ? 'Dec' : locale === 'ja' ? '12月' : '12월', description: t("2024.dec") },
                { month: locale === 'en' ? 'Oct' : locale === 'ja' ? '10月' : '10월', description: t("2024.oct") },
                { month: locale === 'en' ? 'Jul' : locale === 'ja' ? '7月' : '7월', description: t("2024.jul") },
                { month: locale === 'en' ? 'Mar' : locale === 'ja' ? '3月' : '3월', description: t("2024.mar") },
            ],
        },
        {
            year: "2023",
            title: t("2023.title"),
            icon: Rocket,
            events: [
                { month: locale === 'en' ? 'Nov' : locale === 'ja' ? '11月' : '11월', description: t("2023.nov") },
                { month: locale === 'en' ? 'Aug' : locale === 'ja' ? '8月' : '8월', description: t("2023.aug") },
                { month: locale === 'en' ? 'May' : locale === 'ja' ? '5月' : '5월', description: t("2023.may") },
                { month: locale === 'en' ? 'Feb' : locale === 'ja' ? '2月' : '2월', description: t("2023.feb") },
            ],
        },
        {
            year: "2022",
            title: t("2022.title"),
            icon: Award,
            events: [
                { month: locale === 'en' ? 'Oct' : locale === 'ja' ? '10月' : '10월', description: t("2022.oct") },
                { month: locale === 'en' ? 'Jul' : locale === 'ja' ? '7月' : '7월', description: t("2022.jul") },
                { month: locale === 'en' ? 'Apr' : locale === 'ja' ? '4月' : '4월', description: t("2022.apr") },
            ],
        },
        {
            year: "2021",
            title: t("2021.title"),
            icon: Building,
            events: [
                { month: locale === 'en' ? 'Dec' : locale === 'ja' ? '12月' : '12월', description: t("2021.dec") },
                { month: locale === 'en' ? 'Sep' : locale === 'ja' ? '9月' : '9월', description: t("2021.sep") },
                { month: locale === 'en' ? 'Jun' : locale === 'ja' ? '6月' : '6월', description: t("2021.jun") },
            ],
        },
    ];

    return (
        <div className="min-h-screen pt-24">
            {/* Hero Section */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6">
                            {t("badge")}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            <span className="gradient-text">{t("title")}</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            {t("description")}
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500" />

                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex items-start gap-8 mb-16 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0a0a0f] border-2 border-purple-500 flex items-center justify-center z-10">
                                    <item.icon className="w-4 h-4 text-purple-400" />
                                </div>

                                {/* Content */}
                                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                                    <div className="glass-card p-6 md:p-8">
                                        <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                            <span className="text-3xl font-bold gradient-text">{item.year}</span>
                                            <span className="text-gray-400">|</span>
                                            <span className="text-white font-medium">{item.title}</span>
                                        </div>
                                        <ul className="space-y-3">
                                            {item.events.map((event, eventIndex) => (
                                                <li
                                                    key={eventIndex}
                                                    className={`flex items-start gap-3 ${index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""}`}
                                                >
                                                    <span className="text-purple-400 text-sm font-medium whitespace-nowrap">
                                                        {event.month}
                                                    </span>
                                                    <span className="text-gray-400 text-sm">
                                                        {event.description}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-12"
                    >
                        <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-6" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            {t("future.title")}
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            {t("future.description")}
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
