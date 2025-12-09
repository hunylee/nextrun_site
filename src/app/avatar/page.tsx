"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    Hand,
    Cpu,
    Eye,
    Video,
    Layers,
    Sparkles,
    Check,
    Zap,
    Globe,
    Users
} from "lucide-react";

const techStack = [
    {
        step: 1,
        title: "수화 캡처",
        icon: Hand,
        description: "모션캡처 장갑과 카메라로 수화통역사의 정밀한 동작을 실시간 캡처",
        tech: ["Motion Capture Gloves", "Multi-Camera System", "Depth Sensing"],
    },
    {
        step: 2,
        title: "동작 인식",
        icon: Eye,
        description: "MediaPipe를 통해 손가락, 손목, 팔 동작을 정밀하게 분석",
        tech: ["MediaPipe Hands", "Pose Estimation", "Real-time Tracking"],
    },
    {
        step: 3,
        title: "AI 처리",
        icon: Cpu,
        description: "sign-gemma3 모델로 수화 동작을 해석하고 자연스러운 표현 생성",
        tech: ["sign-gemma3", "Transformer Model", "NLP Integration"],
    },
    {
        step: 4,
        title: "아바타 생성",
        icon: Sparkles,
        description: "고품질 실사 아바타가 자연스럽게 수화를 표현",
        tech: ["3D Rendering", "Facial Animation", "Real-time Synthesis"],
    },
];

const features = [
    {
        icon: Zap,
        title: "실시간 처리",
        description: "0.5초 이내의 빠른 응답으로 자연스러운 대화 흐름 유지",
    },
    {
        icon: Layers,
        title: "다양한 표현",
        description: "50가지 이상의 수화 표현과 감정 표현 지원",
    },
    {
        icon: Globe,
        title: "다국어 지원",
        description: "한국 수화(KSL)를 시작으로 글로벌 수화 지원 확대",
    },
    {
        icon: Users,
        title: "맞춤형 아바타",
        description: "다양한 외형과 스타일의 아바타 선택 가능",
    },
];

const useCases = [
    {
        title: "공공기관 안내",
        description: "관공서, 병원, 은행 등에서 청각장애인을 위한 안내 서비스",
        image: "🏛️",
    },
    {
        title: "교육 콘텐츠",
        description: "온라인 강의, 교육 영상에 수화 통역 추가",
        image: "📚",
    },
    {
        title: "미디어 콘텐츠",
        description: "뉴스, 드라마, 유튜브 영상에 수화 아바타 삽입",
        image: "📺",
    },
    {
        title: "기업 서비스",
        description: "고객 상담, 제품 설명 등 기업 서비스에 적용",
        image: "🏢",
    },
];

export default function AvatarPage() {
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
                            AI Sign Language Avatar
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            실사 <span className="gradient-text">수화 아바타</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            AI가 만들어내는 자연스럽고 정확한 수화 표현,
                            <br />
                            실제 수화통역사처럼 생동감 있는 아바타를 만나보세요
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
                            <div className="aspect-video rounded-xl bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 grid-pattern opacity-20" />
                                <div className="text-center z-10">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center"
                                    >
                                        <Video className="w-16 h-16 text-white" />
                                    </motion.div>
                                    <p className="text-gray-400 text-lg">아바타 데모 영상</p>
                                    <p className="text-gray-500 text-sm mt-2">Coming Soon</p>
                                </div>
                            </div>
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
                            기술 파이프라인
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            수화 영상이 AI 아바타로 변환되는 과정
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
                            주요 특징
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            NextRun 수화 아바타만의 차별화된 기능
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
                            활용 사례
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            다양한 분야에서 활용되는 수화 아바타 솔루션
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
                            수화 아바타 도입을 원하시나요?
                        </h2>
                        <p className="text-gray-400 mb-8">
                            기업, 공공기관, 교육기관 등 다양한 분야에 맞춤형 솔루션을 제공합니다
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-glow inline-flex items-center gap-2">
                                도입 문의
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="/contact#partnership"
                                className="px-8 py-3 rounded-full border border-gray-600 text-gray-300 hover:border-purple-500 hover:text-white transition-all"
                            >
                                파트너십 문의
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
