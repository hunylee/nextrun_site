"use client";

import { motion } from "framer-motion";
import { Calendar, Award, Rocket, Users, Building, Globe } from "lucide-react";

const timeline = [
    {
        year: "2024",
        title: "글로벌 확장",
        icon: Globe,
        events: [
            { month: "12월", description: "일본 시장 진출 준비" },
            { month: "10월", description: "시리즈 A 투자 유치" },
            { month: "7월", description: "수화 아바타 2.0 버전 출시" },
            { month: "3월", description: "Google과 파트너십 체결" },
        ],
    },
    {
        year: "2023",
        title: "본격 성장",
        icon: Rocket,
        events: [
            { month: "11월", description: "sign-gemma3 기반 아바타 엔진 개발 완료" },
            { month: "8월", description: "시드 투자 유치 (10억원)" },
            { month: "5월", description: "MediaPipe 기반 수화 인식 시스템 개발" },
            { month: "2월", description: "모션캡처 장갑 프로토타입 완성" },
        ],
    },
    {
        year: "2022",
        title: "기술 개발",
        icon: Award,
        events: [
            { month: "10월", description: "AI 수화 인식 알고리즘 특허 출원" },
            { month: "7월", description: "핵심 R&D팀 구성" },
            { month: "4월", description: "창업진흥원 지원사업 선정" },
        ],
    },
    {
        year: "2021",
        title: "회사 설립",
        icon: Building,
        events: [
            { month: "12월", description: "법인 설립 및 사업자 등록" },
            { month: "9월", description: "공동 창업팀 결성" },
            { month: "6월", description: "아이디어 구상 및 시장 조사" },
        ],
    },
];

export default function HistoryPage() {
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
                            Our Journey
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            <span className="gradient-text">NextRun</span>의 여정
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            수화 접근성의 새로운 역사를 써 내려가는 NextRun의 이야기
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
                            앞으로의 계획
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            2025년에는 다국어 수화 지원과 함께 실시간 화상 통화 수화 통역 기능을 출시할 예정입니다.
                            <br />
                            모든 사람이 언어의 장벽 없이 소통할 수 있는 세상을 위해 나아갑니다.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
