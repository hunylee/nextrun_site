"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
    ArrowRight,
    Hand,
    Cpu,
    Eye,
    Video,
    Layers,
    Sparkles,
    Zap,
    Globe,
    Users
} from "lucide-react";

export default function AvatarPage() {
    const locale = useLocale();
    const t = useTranslations("avatar");

    const techStack = [
        {
            step: 1,
            title: t("pipeline.step1.title"),
            icon: Hand,
            description: t("pipeline.step1.description"),
            tech: ["Motion Capture Gloves", "Multi-Camera System", "Depth Sensing"],
        },
        {
            step: 2,
            title: t("pipeline.step2.title"),
            icon: Eye,
            description: t("pipeline.step2.description"),
            tech: ["MediaPipe Hands", "Pose Estimation", "Real-time Tracking"],
        },
        {
            step: 3,
            title: t("pipeline.step3.title"),
            icon: Cpu,
            description: t("pipeline.step3.description"),
            tech: ["sign-gemma3", "Transformer Model", "NLP Integration"],
        },
        {
            step: 4,
            title: t("pipeline.step4.title"),
            icon: Sparkles,
            description: t("pipeline.step4.description"),
            tech: ["3D Rendering", "Facial Animation", "Real-time Synthesis"],
        },
    ];

    const features = [
        {
            icon: Zap,
            title: t("features.realtime.title"),
            description: t("features.realtime.description"),
        },
        {
            icon: Layers,
            title: t("features.expressions.title"),
            description: t("features.expressions.description"),
        },
        {
            icon: Globe,
            title: t("features.multilang.title"),
            description: t("features.multilang.description"),
        },
        {
            icon: Users,
            title: t("features.custom.title"),
            description: t("features.custom.description"),
        },
    ];

    const useCases = [
        {
            title: t("useCases.public.title"),
            description: t("useCases.public.description"),
            image: "🏛️",
        },
        {
            title: t("useCases.education.title"),
            description: t("useCases.education.description"),
            image: "📚",
        },
        {
            title: t("useCases.media.title"),
            description: t("useCases.media.description"),
            image: "📺",
        },
        {
            title: t("useCases.business.title"),
            description: t("useCases.business.description"),
            image: "🏢",
        },
    ];

    return (
        <div className="min-h-screen pt-24">
            {/* Hero Section */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
                            {t("badge")}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            {t("title1")} <span className="gradient-text">{t("title2")}</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            {t("description")}
                        </p>
                    </motion.div>

                    {/* Demo Preview */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="glass-card p-2 md:p-4">
                            <div className="aspect-video rounded-xl overflow-hidden relative">
                                <video
                                    className="w-full h-full object-cover"
                                    controls
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    poster=""
                                >
                                    <source src="/videos/demo-avatar.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <p className="text-center text-gray-400 text-sm mt-4">{t("demo")}</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Technology Pipeline */}
            <section id="technology" className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {t("pipeline.title")}
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            {t("pipeline.description")}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {techStack.map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                {/* Connector Line */}
                                {index < techStack.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 right-0 w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent translate-x-1/2 z-0" />
                                )}

                                <div className="glass-card p-6 relative z-10 h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                                            {item.step}
                                        </div>
                                        <item.icon className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 text-xs bg-purple-500/10 text-purple-400 rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="section-padding">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-8 flex items-start gap-6"
                            >
                                <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                                    <feature.icon className="w-7 h-7 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section id="cases" className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {t("useCases.title")}
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            {t("useCases.description")}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {useCases.map((useCase, index) => (
                            <motion.div
                                key={useCase.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-6 text-center group hover:scale-105 transition-transform"
                            >
                                <div className="text-5xl mb-4">{useCase.image}</div>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {useCase.title}
                                </h3>
                                <p className="text-gray-400 text-sm">{useCase.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-12 text-center"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            {t("cta.title")}
                        </h2>
                        <p className="text-gray-400 mb-8">
                            {t("cta.description")}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href={`/${locale}/contact`} className="btn-glow inline-flex items-center gap-2">
                                {t("cta.button")}
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href={`/${locale}/contact#partnership`}
                                className="px-8 py-3 rounded-full border border-gray-600 text-gray-300 hover:border-purple-500 hover:text-white transition-all"
                            >
                                {t("cta.partnership")}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
