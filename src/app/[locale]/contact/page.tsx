"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import {
    Send,
    Mail,
    Phone,
    MapPin,
    MessageSquare,
    Building,
    Users,
    HelpCircle,
    ChevronDown
} from "lucide-react";

export default function ContactPage() {
    const locale = useLocale();
    const t = useTranslations("contact");

    const contactMethods = [
        {
            icon: Mail,
            title: t("methods.email.title"),
            value: t("methods.email.value"),
            description: t("methods.email.description"),
        },
        {
            icon: Phone,
            title: t("methods.phone.title"),
            value: t("methods.phone.value"),
            description: t("methods.phone.description"),
        },
        {
            icon: MapPin,
            title: t("methods.visit.title"),
            value: t("methods.visit.value"),
            description: t("methods.visit.description"),
        },
    ];

    const inquiryTypes = [
        { value: "product", label: t("form.types.product") },
        { value: "partnership", label: t("form.types.partnership") },
        { value: "demo", label: t("form.types.demo") },
        { value: "support", label: t("form.types.support") },
        { value: "other", label: t("form.types.other") },
    ];

    const faqItems = t.raw("faq.items") as Array<{ question: string; answer: string }>;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        inquiryType: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", company: "", inquiryType: "", message: "" });
    };

    return (
        <div className="min-h-screen pt-24">
            {/* Hero Section */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
                            {t("badge")}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            <span className="gradient-text">{t("title")}</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            {t("description")}
                        </p>
                    </motion.div>

                    {/* Contact Methods */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={method.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.1 }}
                                className="glass-card p-6 text-center"
                            >
                                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                                    <method.icon className="w-7 h-7 text-purple-400" />
                                </div>
                                <h3 className="text-white font-semibold mb-1">{method.title}</h3>
                                <p className="text-purple-400 font-medium mb-1">{method.value}</p>
                                <p className="text-gray-500 text-sm">{method.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Form & Info */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-3"
                        >
                            <div className="glass-card p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">
                                    {t("form.title")}
                                </h2>

                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center">
                                            <Send className="w-10 h-10 text-white" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-2">
                                            {t("form.success.title")}
                                        </h3>
                                        <p className="text-gray-400">
                                            {t("form.success.description")}
                                        </p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="mt-6 text-purple-400 hover:text-purple-300 transition-colors"
                                        >
                                            {t("form.success.newInquiry")}
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                                    {t("form.name")} *
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, name: e.target.value })
                                                    }
                                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                                    placeholder={t("form.namePlaceholder")}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                                    {t("form.email")} *
                                                </label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, email: e.target.value })
                                                    }
                                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                                    placeholder={t("form.emailPlaceholder")}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                                    {t("form.company")}
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.company}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, company: e.target.value })
                                                    }
                                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                                    placeholder={t("form.companyPlaceholder")}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                                    {t("form.type")} *
                                                </label>
                                                <select
                                                    required
                                                    value={formData.inquiryType}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, inquiryType: e.target.value })
                                                    }
                                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-colors appearance-none cursor-pointer"
                                                >
                                                    <option value="" className="bg-[#1a1a2e]">{t("form.typePlaceholder")}</option>
                                                    {inquiryTypes.map((type) => (
                                                        <option key={type.value} value={type.value} className="bg-[#1a1a2e]">
                                                            {type.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                                {t("form.message")} *
                                            </label>
                                            <textarea
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, message: e.target.value })
                                                }
                                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                                placeholder={t("form.messagePlaceholder")}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full btn-glow flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    {t("form.submitting")}
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={18} />
                                                    {t("form.submit")}
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>

                        {/* Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="lg:col-span-2 space-y-6"
                        >
                            {/* Partnership */}
                            <div id="partnership" className="glass-card p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Building className="w-6 h-6 text-purple-400" />
                                    <h3 className="text-lg font-semibold text-white">{t("sidebar.partnership.title")}</h3>
                                </div>
                                <p className="text-gray-400 text-sm mb-4">
                                    {t("sidebar.partnership.description")}
                                </p>
                                <a href="mailto:partner@nextrun.ai" className="text-purple-400 text-sm hover:text-purple-300 transition-colors">
                                    partner@nextrun.ai →
                                </a>
                            </div>

                            {/* Media */}
                            <div className="glass-card p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Users className="w-6 h-6 text-cyan-400" />
                                    <h3 className="text-lg font-semibold text-white">{t("sidebar.media.title")}</h3>
                                </div>
                                <p className="text-gray-400 text-sm mb-4">
                                    {t("sidebar.media.description")}
                                </p>
                                <a href="mailto:press@nextrun.ai" className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors">
                                    press@nextrun.ai →
                                </a>
                            </div>

                            {/* Support */}
                            <div className="glass-card p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <MessageSquare className="w-6 h-6 text-green-400" />
                                    <h3 className="text-lg font-semibold text-white">{t("sidebar.support.title")}</h3>
                                </div>
                                <p className="text-gray-400 text-sm mb-4">
                                    {t("sidebar.support.description")}
                                </p>
                                <a href="mailto:support@nextrun.ai" className="text-green-400 text-sm hover:text-green-300 transition-colors">
                                    support@nextrun.ai →
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <HelpCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            {t("faq.title")}
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        {faqItems.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                                >
                                    <span className="text-white font-medium pr-4">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-purple-400 transition-transform flex-shrink-0 ${openFaq === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {openFaq === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-6 pb-4"
                                    >
                                        <p className="text-gray-400">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
