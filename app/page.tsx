"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { ChevronDown, Github, Linkedin, Mail, Code, Rocket, Users, Globe, Play, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import GradientBackground from "@/components/ui/gradient-background"
import SectionDivider from "@/components/ui/section-divider"

export default function HomePage() {
  const { t, language } = useLanguage()
  const [text, setText] = useState("")
  const fullText = t("subtitle")
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setText("")
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [fullText])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const stats = [
    { icon: Code, value: "15+", label: t("projectsCount"), color: "from-blue-500 to-cyan-500" },
    { icon: Users, value: "25+", label: t("clientsCount"), color: "from-purple-500 to-pink-500" },
    { icon: Rocket, value: "2+", label: t("experienceCount"), color: "from-green-500 to-emerald-500" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/engahmedfaiz", color: "hover:text-gray-300" },
    { icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-400" },
    { icon: Mail, href: "mailto:engahmedfaiz5@gmail.com", color: "hover:text-red-400" },
    { icon: Globe, href: "https://engahmedfaiz.github.io/portfoli", color: "hover:text-green-400" },
  ]

  return (
    <div ref={containerRef} className="relative">
      <GradientBackground />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000" />
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-2000" />
        </motion.div>

        <motion.div
          className="text-center max-w-5xl mx-auto z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="relative w-40 h-40 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse opacity-75" />
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt="Ahmed Faiz Mashrah"
                width={160}
                height={160}
                className="relative rounded-full border-4 border-white/20 shadow-2xl backdrop-blur-sm"
                priority
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                {t("name")}
              </span>
            </h1>
            <div className="h-20 flex items-center justify-center">
              <p className="text-xl md:text-2xl lg:text-3xl font-mono text-blue-300">
                {text}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                  className="text-blue-400"
                >
                  |
                </motion.span>
              </p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {t("description")}
          </motion.p>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} p-0.5`}>
                  <div className="w-full h-full bg-slate-900/50 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
              asChild
            >
              <Link href="/projects">
                <Play className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                {t("viewWork")}
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-blue-400/50 text-blue-400 hover:bg-blue-400/10 hover:border-blue-400 px-8 py-4 rounded-2xl transition-all duration-300 bg-white/5 backdrop-blur-sm"
              asChild
            >
              <Link href="/contact">
                <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                {t("contactMe")}
              </Link>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-16">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-blue-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            />
          </div>
        </motion.div>
      </section>

      <SectionDivider />

      {/* Quick About Section */}
      <section id="about-preview" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === "ar" ? "نبذة سريعة" : "Quick Overview"}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {language === "ar"
                ? "مطور شغوف بالتقنيات الحديثة مع خبرة في بناء حلول مبتكرة"
                : "Passionate developer with expertise in modern technologies and innovative solutions"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: language === "ar" ? "تطوير متقدم" : "Advanced Development",
                description:
                  language === "ar"
                    ? "خبرة في Laravel, Flutter, وتقنيات حديثة"
                    : "Expertise in Laravel, Flutter, and modern technologies",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Rocket,
                title: language === "ar" ? "حلول مبتكرة" : "Innovative Solutions",
                description:
                  language === "ar"
                    ? "بناء تطبيقات عالية الأداء ومتجاوبة"
                    : "Building high-performance and responsive applications",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Star,
                title: language === "ar" ? "جودة عالية" : "High Quality",
                description:
                  language === "ar" ? "التزام بأفضل الممارسات والمعايير" : "Commitment to best practices and standards",
                color: "from-green-500 to-emerald-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} p-0.5`}>
                      <div className="w-full h-full bg-slate-900/50 rounded-2xl flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Featured Projects Preview */}
      <section id="projects-preview" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === "ar" ? "مشاريع مميزة" : "Featured Projects"}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {language === "ar"
                ? "نماذج من أعمالي في تطوير الويب والتطبيقات المحمولة"
                : "Samples of my work in web development and mobile applications"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: language === "ar" ? "منصة إتجر" : "Etjer Platform",
                description: language === "ar" ? "منصة تجارة إلكترونية متكاملة" : "Complete e-commerce platform",
                tech: ["Laravel", "Vue.js", "MySQL"],
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: language === "ar" ? "نظام إدارة المخزون" : "Inventory System",
                description: language === "ar" ? "نظام إدارة مخزون متقدم" : "Advanced inventory management system",
                tech: ["Laravel", "PHP", "Bootstrap"],
                image: "/placeholder.svg?height=300&width=500",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-blue-500/20 text-blue-300 border-0">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-400/50 text-blue-400 hover:bg-blue-400/10 hover:border-blue-400 px-8 py-4 rounded-2xl transition-all duration-300 bg-white/5 backdrop-blur-sm"
              asChild
            >
              <Link href="/projects">
                {language === "ar" ? "عرض جميع المشاريع" : "View All Projects"}
                <ChevronDown className="w-5 h-5 ml-2 rotate-[-90deg]" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
