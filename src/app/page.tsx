"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Cpu, Hand, Sparkles, Users, Zap, Award } from "lucide-react";

const features = [
  {
    icon: Hand,
    title: "수화 인식",
    description: "MediaPipe 기반 정밀 수화 동작 인식 및 분석",
  },
  {
    icon: Cpu,
    title: "AI 처리",
    description: "sign-gemma3 모델로 자연스러운 수화 생성",
  },
  {
    icon: Sparkles,
    title: "실사 아바타",
    description: "고품질 실사 기반 수화 아바타 렌더링",
  },
];

const stats = [
  { value: "99.2%", label: "인식 정확도" },
  { value: "50+", label: "수화 표현" },
  { value: "24/7", label: "서비스 가용성" },
  { value: "0.5초", label: "응답 속도" },
];

const values = [
  {
    icon: Users,
    title: "접근성 혁신",
    description: "모든 사람이 동등하게 정보에 접근할 수 있는 세상을 만듭니다.",
  },
  {
    icon: Zap,
    title: "기술 선도",
    description: "최신 AI 기술을 활용해 수화 통역의 새로운 표준을 제시합니다.",
  },
  {
    icon: Award,
    title: "품질 추구",
    description: "실제 수화통역사 수준의 자연스럽고 정확한 표현을 구현합니다.",
  },
];

export default function HomePage() {
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
              AI-Powered Sign Language Avatar
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-white">수화의 미래,</span>
            <br />
            <span className="gradient-text">AI로 연결합니다</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            MediaPipe와 sign-gemma3, 모션캡처 기술을 결합하여
            <br className="hidden md:block" />
            실사 수화 아바타로 소통의 장벽을 허물어갑니다
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/avatar" className="btn-glow inline-flex items-center gap-2">
              아바타 소개
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full border border-gray-600 text-gray-300 hover:border-purple-500 hover:text-white transition-all"
            >
              문의하기
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
              핵심 기술
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              최첨단 AI 기술의 조합으로 자연스러운 수화 아바타를 구현합니다
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
                <span className="gradient-text">NextRun</span>은
                <br />
                어떤 회사인가요?
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                NextRun은 AI 기술을 활용하여 수화 통역의 새로운 패러다임을 제시하는
                스타트업입니다. 우리는 청각 장애인과 비장애인 사이의 소통 장벽을
                허물기 위해 혁신적인 실사 수화 아바타 기술을 개발하고 있습니다.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Google의 MediaPipe와 sign-gemma3 모델, 그리고 첨단 모션캡처 장갑
                기술을 결합하여 수화통역사의 동작을 정밀하게 인식하고, 이를
                자연스러운 실사 아바타로 렌더링합니다.
              </p>
              <Link href="/history" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                회사 연혁 보기
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
                      수화의 아름다움을 AI로 전달합니다
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
              우리의 가치
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              NextRun이 추구하는 핵심 가치입니다
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
              함께 만들어가는
              <br />
              <span className="gradient-text">접근성 있는 세상</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              NextRun의 AI 수화 아바타 솔루션에 대해 더 알고 싶으시다면
              언제든 문의해주세요.
            </p>
            <Link href="/contact" className="btn-glow inline-flex items-center gap-2">
              문의하기
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
