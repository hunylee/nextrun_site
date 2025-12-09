"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail, Clock, Bus, Train, Car } from "lucide-react";

export default function LocationPage() {
    const t = useTranslations("location");

    const contactInfo = [
        {
            icon: MapPin,
            label: t("address.label"),
            value: t("address.value"),
        },
        {
            icon: Phone,
            label: t("phone.label"),
            value: t("phone.value"),
        },
        {
            icon: Mail,
            label: t("email.label"),
            value: t("email.value"),
        },
        {
            icon: Clock,
            label: t("hours.label"),
            value: t("hours.value"),
        },
    ];

    const transportation = [
        {
            icon: Train,
            title: t("transport.subway.title"),
            description: t("transport.subway.description"),
        },
        {
            icon: Bus,
            title: t("transport.bus.title"),
            description: t("transport.bus.description"),
        },
        {
            icon: Car,
            title: t("transport.car.title"),
            description: t("transport.car.description"),
        },
    ];

    const noticeItems = t.raw("notice.items") as string[];

    return (
        <div className="min-h-screen pt-24">
            {/* Hero Section */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
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

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="glass-card p-2 h-full">
                                <div className="w-full h-80 lg:h-full min-h-[400px] rounded-xl bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] relative overflow-hidden">
                                    {/* Stylized Map Placeholder */}
                                    <div className="absolute inset-0 grid-pattern opacity-30" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <motion.div
                                                animate={{ y: [0, -10, 0] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center"
                                            >
                                                <MapPin className="w-8 h-8 text-white" />
                                            </motion.div>
                                            <p className="text-white font-medium whitespace-pre-line">{t("address.value")}</p>
                                        </div>
                                    </div>

                                    {/* Grid Lines for Map Effect */}
                                    <svg className="absolute inset-0 w-full h-full opacity-20">
                                        {[...Array(10)].map((_, i) => (
                                            <line
                                                key={`h-${i}`}
                                                x1="0"
                                                y1={`${(i + 1) * 10}%`}
                                                x2="100%"
                                                y2={`${(i + 1) * 10}%`}
                                                stroke="#7c3aed"
                                                strokeWidth="0.5"
                                            />
                                        ))}
                                        {[...Array(10)].map((_, i) => (
                                            <line
                                                key={`v-${i}`}
                                                x1={`${(i + 1) * 10}%`}
                                                y1="0"
                                                x2={`${(i + 1) * 10}%`}
                                                y2="100%"
                                                stroke="#7c3aed"
                                                strokeWidth="0.5"
                                            />
                                        ))}
                                    </svg>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-6"
                        >
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="glass-card p-6 flex items-start gap-4"
                                >
                                    <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                                        <item.icon className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">{item.label}</h3>
                                        <p className="text-gray-400 whitespace-pre-line">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Transportation Section */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            {t("transport.title")}
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {transportation.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-6 text-center"
                            >
                                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                                    <item.icon className="w-7 h-7 text-cyan-400" />
                                </div>
                                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Info */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-12"
                    >
                        <h3 className="text-xl font-semibold text-white mb-6 text-center">
                            {t("notice.title")}
                        </h3>
                        <ul className="space-y-4 text-gray-400">
                            {noticeItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-purple-500 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
