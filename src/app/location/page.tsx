"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Bus, Train, Car } from "lucide-react";

const contactInfo = [
    {
        icon: MapPin,
        label: "주소",
        value: "서울특별시 강남구 테헤란로 123\nNextRun 빌딩 5층",
    },
    {
        icon: Phone,
        label: "전화",
        value: "02-1234-5678",
    },
    {
        icon: Mail,
        label: "이메일",
        value: "contact@nextrun.ai",
    },
    {
        icon: Clock,
        label: "영업시간",
        value: "평일 09:00 - 18:00\n(주말 및 공휴일 휴무)",
    },
];

const transportation = [
    {
        icon: Train,
        title: "지하철",
        description: "2호선 강남역 3번 출구에서 도보 5분",
    },
    {
        icon: Bus,
        title: "버스",
        description: "강남역 정류장 하차 (146, 341, 360, 740)",
    },
    {
        icon: Car,
        title: "자가용",
        description: "건물 내 지하주차장 이용 가능 (2시간 무료)",
    },
];

export default function LocationPage() {
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
                            Location
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            <span className="gradient-text">오시는 길</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            NextRun 본사로 방문하시는 방법을 안내해 드립니다
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
                                            <p className="text-white font-medium">서울특별시 강남구 테헤란로 123</p>
                                            <p className="text-gray-400 text-sm mt-1">NextRun 빌딩 5층</p>
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
                            교통편 안내
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
                            방문 전 안내사항
                        </h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 mt-2 rounded-full bg-purple-500 flex-shrink-0" />
                                <span>방문 일정은 사전에 연락 주시면 더욱 원활하게 안내해 드릴 수 있습니다.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 mt-2 rounded-full bg-purple-500 flex-shrink-0" />
                                <span>건물 1층 안내데스크에서 방문증을 수령하신 후 5층으로 올라오시면 됩니다.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 mt-2 rounded-full bg-purple-500 flex-shrink-0" />
                                <span>주차는 지하 1~3층에 가능하며, 방문 고객 2시간 무료 주차가 가능합니다.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 mt-2 rounded-full bg-purple-500 flex-shrink-0" />
                                <span>휠체어 접근이 가능한 엘리베이터가 있으며, 장애인 주차구역도 마련되어 있습니다.</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
