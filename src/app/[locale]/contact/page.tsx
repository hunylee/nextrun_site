"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

const contactMethods = [
    {
        icon: Mail,
        title: "이메일",
        value: "contact@nextrun.ai",
        description: "24시간 내 답변드립니다",
    },
    {
        icon: Phone,
        title: "전화",
        value: "02-1234-5678",
        description: "평일 09:00 - 18:00",
    },
    {
        icon: MapPin,
        title: "방문",
        value: "서울시 강남구 테헤란로 123",
        description: "사전 예약 후 방문",
    },
];

const inquiryTypes = [
    { value: "product", label: "제품 문의" },
    { value: "partnership", label: "파트너십 문의" },
    { value: "demo", label: "데모 요청" },
    { value: "support", label: "기술 지원" },
    { value: "other", label: "기타 문의" },
];

const faqs = [
    {
        question: "수화 아바타 도입 비용은 어떻게 되나요?",
        answer: "도입 비용은 사용 규모와 요구사항에 따라 다릅니다. 기본 구독형부터 기업 맞춤형까지 다양한 플랜을 제공하고 있습니다. 자세한 견적은 문의 양식을 통해 상담받으실 수 있습니다.",
    },
    {
        question: "데모를 직접 체험해볼 수 있나요?",
        answer: "네, 온라인 데모와 오프라인 시연 모두 가능합니다. 데모 요청을 해주시면 담당자가 연락드려 일정을 조율해 드립니다.",
    },
    {
        question: "어떤 수화를 지원하나요?",
        answer: "현재 한국 수화(KSL)를 지원하고 있으며, 2025년에는 미국 수화(ASL)와 일본 수화(JSL) 지원을 계획하고 있습니다.",
    },
    {
        question: "API 연동이 가능한가요?",
        answer: "네, REST API를 통해 기존 시스템에 쉽게 연동할 수 있습니다. 상세한 기술 문서와 SDK를 제공해 드립니다.",
    },
];

export default function ContactPage() {
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
                            Contact Us
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            <span className="gradient-text">문의하기</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            AI 수화 아바타 솔루션에 대해 궁금한 점이 있으시면
                            <br />
                            언제든 연락해 주세요
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
                                    문의 양식
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
                                            문의가 접수되었습니다!
                                        </h3>
                                        <p className="text-gray-400">
                                            빠른 시일 내에 답변드리겠습니다.
                                        </p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="mt-6 text-purple-400 hover:text-purple-300 transition-colors"
                                        >
                                            새 문의하기
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                                    이름 *
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, name: e.target.value })
                                                    }
                                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                                    placeholder="홍길동"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                                    이메일 *
                                                </label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, email: e.target.value })
                                                    }
                                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                                    placeholder="email@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                                    회사/기관
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.company}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, company: e.target.value })
                                                    }
                                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                                    placeholder="(선택사항)"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                                    문의 유형 *
                                                </label>
                                                <select
                                                    required
                                                    value={formData.inquiryType}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, inquiryType: e.target.value })
                                                    }
                                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-colors appearance-none cursor-pointer"
                                                >
                                                    <option value="" className="bg-[#1a1a2e]">선택해주세요</option>
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
                                                문의 내용 *
                                            </label>
                                            <textarea
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, message: e.target.value })
                                                }
                                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                                placeholder="문의하실 내용을 입력해주세요"
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
                                                    전송 중...
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={18} />
                                                    문의 보내기
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
                                    <h3 className="text-lg font-semibold text-white">파트너십</h3>
                                </div>
                                <p className="text-gray-400 text-sm mb-4">
                                    기업, 공공기관, 교육기관과의 전략적 파트너십을 환영합니다.
                                </p>
                                <a href="mailto:partner@nextrun.ai" className="text-purple-400 text-sm hover:text-purple-300 transition-colors">
                                    partner@nextrun.ai →
                                </a>
                            </div>

                            {/* Media */}
                            <div className="glass-card p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Users className="w-6 h-6 text-cyan-400" />
                                    <h3 className="text-lg font-semibold text-white">미디어 문의</h3>
                                </div>
                                <p className="text-gray-400 text-sm mb-4">
                                    인터뷰, 보도자료 요청은 아래 이메일로 연락주세요.
                                </p>
                                <a href="mailto:press@nextrun.ai" className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors">
                                    press@nextrun.ai →
                                </a>
                            </div>

                            {/* Support */}
                            <div className="glass-card p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <MessageSquare className="w-6 h-6 text-green-400" />
                                    <h3 className="text-lg font-semibold text-white">기술 지원</h3>
                                </div>
                                <p className="text-gray-400 text-sm mb-4">
                                    기존 고객을 위한 기술 지원 창구입니다.
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
                            자주 묻는 질문
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
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
