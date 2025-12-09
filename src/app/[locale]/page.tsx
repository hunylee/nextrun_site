"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, Cpu, Hand, Sparkles, Users, Zap, Award } from "lucide-react";

export default function HomePage() {
    const locale = useLocale();
    const t = useTranslations("home");

    const features = [
        {
            icon: Hand,
            title: t("features.recognition.title"),
            description: t("features.recognition.description"),
        },
        {
            icon: Cpu,
            title: t("features.ai.title"),
            description: t("features.ai.description"),
        },
        {
            icon: Sparkles,
            title: t("features.avatar.title"),
            description: t("features.avatar.description"),
        },
    ];

    const stats = [
        { value: "99.2%", label: t("stats.accuracy") },
        { value: "50+", label: t("stats.expressions") },
        { value: "24/7", label: t("stats.availability") },
        { value: "0.5초", label: t("stats.response") },
    ];

    const values = [
        {
            icon: Users,
            title: t("values.accessibility.title"),
            description: t("values.accessibility.description"),
        },
        {
            icon: Zap,
            title: t("values.technology.title"),
            description: t("values.technology.description"),
        },
        {
            icon: Award,
            title: t("values.quality.title"),
            description: t("values.quality.description"),
        },
    ];

    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
                {/* Background Effects */}
                <div className="absolute inset-0 grid-pattern opacity-50" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-8">
                            {t("hero.badge")}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                    >
                        <span className="text-white">{t("hero.title1")}</span>
                        <br />
                        <span className="gradient-text">{t("hero.title2")}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
                    >
                        {t("hero.description")}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link href={`/${locale}/avatar`} className="btn-glow inline-flex items-center gap-2">
                            {t("hero.cta")}
                            <ArrowRight size={18} />
                        </Link>
                        <Link
                            href={`/${locale}/contact`}
                            className="px-8 py-3 rounded-full border border-gray-600 text-gray-300 hover:border-purple-500 hover:text-white transition-all"
                        >
                            {t("hero.contact")}
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center p-2">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-purple-500 rounded-full"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="section-padding relative">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {t("features.title")}
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            {t("features.description")}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-8 text-center group"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-8 h-8 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding relative">
                <div className="max-w-7xl mx-auto">
                    <div className="glass-card p-10 md:p-16">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-400 text-sm">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="section-padding relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                <span className="gradient-text">{t("about.title1")}</span>
                                <br />
                                {t("about.title2")}
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                {t("about.description1")}
                            </p>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                {t("about.description2")}
                            </p>
                            <Link href={`/${locale}/history`} className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                                {t("about.link")}
                                <ArrowRight size={18} />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 p-1">
                                <div className="w-full h-full rounded-3xl bg-[#0a0a0f] flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center animate-pulse-glow">
                                            <Hand className="w-12 h-12 text-white" />
                                        </div>
                                        <p className="text-gray-400">
                                            {t("about.tagline")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section-padding relative">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {t("values.title")}
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            {t("values.description")}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-8"
                            >
                                <value.icon className="w-10 h-10 text-purple-400 mb-4" />
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-400">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding relative">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-12 md:p-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            {t("cta.title1")}
                            <br />
                            <span className="gradient-text">{t("cta.title2")}</span>
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            {t("cta.description")}
                        </p>
                        <Link href={`/${locale}/contact`} className="btn-glow inline-flex items-center gap-2">
                            {t("cta.button")}
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
