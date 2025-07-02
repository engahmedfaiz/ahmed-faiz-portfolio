"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Calendar,
  Code2,
  Database,
  Smartphone,
  Globe,
  Award,
  Users,
  Coffee,
  Zap,
} from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import GradientBackground from "@/components/ui/gradient-background"
import Link from "next/link"
import Image from "next/image"

const skills = [
  { name: "React & Next.js", level: 95, icon: <Code2 className="w-5 h-5" /> },
  { name: "Node.js", level: 90, icon: <Database className="w-5 h-5" /> },
  { name: "React Native", level: 85, icon: <Smartphone className="w-5 h-5" /> },
  { name: "Full Stack", level: 92, icon: <Globe className="w-5 h-5" /> },
]

const stats = [
  { number: "15+", label: { ar: "مشروع مكتمل", en: "Completed Projects" }, icon: <Award className="w-6 h-6" /> },
  { number: "3+", label: { ar: "سنوات خبرة", en: "Years Experience" }, icon: <Calendar className="w-6 h-6" /> },
  { number: "50+", label: { ar: "عميل راضي", en: "Happy Clients" }, icon: <Users className="w-6 h-6" /> },
  { number: "1000+", label: { ar: "كوب قهوة", en: "Cups of Coffee" }, icon: <Coffee className="w-6 h-6" /> },
]

export default function HomePage() {
  const { language, t } = useLanguage()

  return (
    <div className="min-h-screen relative overflow-hidden">
      <GradientBackground />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">
                    {language === "ar" ? "متاح للعمل" : "Available for work"}
                  </span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                  <span className="text-white">{language === "ar" ? "أهلاً، أنا " : "Hi, I'm "}</span>
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {language === "ar" ? "أحمد فايز" : "Ahmed Faiz"}
                  </span>
                </h1>

                <div className="text-2xl md:text-3xl text-gray-300 font-light">
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                    {language === "ar" ? "مطور برمجيات محترف" : "Professional Software Developer"}
                  </motion.span>
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-gray-400 max-w-2xl leading-relaxed"
              >
                {language === "ar"
                  ? "أتخصص في تطوير تطبيقات الويب والموبايل المتطورة باستخدام أحدث التقنيات. أحول الأفكار المبتكرة إلى حلول برمجية متميزة تساعد الشركات على النمو والازدهار."
                  : "I specialize in developing advanced web and mobile applications using cutting-edge technologies. I transform innovative ideas into outstanding software solutions that help businesses grow and thrive."}
              </motion.p>

              {/* Location & Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap items-center gap-4 text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{language === "ar" ? "السودان، الخرطوم" : "Sudan, Khartoum"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>ahmed.faiz@example.com</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white group"
                  asChild
                >
                  <Link href="/contact">
                    {language === "ar" ? "تواصل معي" : "Get In Touch"}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 group bg-transparent"
                >
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  {language === "ar" ? "تحميل السيرة الذاتية" : "Download CV"}
                </Button>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                  {/* Animated Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full p-1 animate-spin-slow">
                    <div className="w-full h-full bg-gray-900 rounded-full"></div>
                  </div>

                  {/* Profile Image */}
                  <div className="absolute inset-2 rounded-full overflow-hidden">
                    <Image
                      src="/images/ahmed-faiz-profile.jpg"
                      alt="Ahmed Faiz"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Status Indicator */}
                  <div className="absolute bottom-6 right-6 w-6 h-6 bg-green-400 rounded-full border-4 border-gray-900 animate-pulse"></div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -top-4 -left-4 bg-blue-500/10 backdrop-blur-lg border border-blue-500/20 rounded-full p-3"
                >
                  <Code2 className="w-6 h-6 text-blue-400" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  className="absolute -bottom-4 -right-4 bg-purple-500/10 backdrop-blur-lg border border-purple-500/20 rounded-full p-3"
                >
                  <Zap className="w-6 h-6 text-purple-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 p-6">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="text-blue-400">{stat.icon}</div>
                    <div className="text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-gray-400 text-center">{stat.label[language]}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Skills Preview */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {language === "ar" ? "مهاراتي التقنية" : "Technical Skills"}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {language === "ar"
                ? "أتقن مجموعة واسعة من التقنيات الحديثة في تطوير البرمجيات"
                : "I master a wide range of modern technologies in software development"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-blue-400">{skill.icon}</div>
                    <h3 className="font-semibold text-white">{skill.name}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{language === "ar" ? "المستوى" : "Level"}</span>
                      <span className="text-white font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/skills">
                {language === "ar" ? "عرض جميع المهارات" : "View All Skills"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* Featured Projects Preview */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {language === "ar" ? "مشاريع مميزة" : "Featured Projects"}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {language === "ar"
                ? "اكتشف مجموعة من أفضل أعمالي في تطوير البرمجيات"
                : "Discover a selection of my best work in software development"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Project Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/icons/water-electricity-system.svg"
                    alt="Smart Meter System"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-green-500/20 text-green-400 border-green-500/30">
                    {language === "ar" ? "مكتمل" : "Completed"}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {language === "ar" ? "نظام العداد الذكي" : "Smart Meter System"}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {language === "ar"
                      ? "نظام متقدم لمراقبة استهلاك المياه والكهرباء"
                      : "Advanced system for monitoring water and electricity consumption"}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs bg-blue-500/10 text-blue-300 border-blue-500/20">
                      React Native
                    </Badge>
                    <Badge variant="outline" className="text-xs bg-purple-500/10 text-purple-300 border-purple-500/20">
                      Firebase
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Add more featured projects... */}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              asChild
            >
              <Link href="/projects">
                {language === "ar" ? "عرض جميع المشاريع" : "View All Projects"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
