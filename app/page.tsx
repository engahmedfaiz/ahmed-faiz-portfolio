"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { smoothScrollTo } from "@/lib/smooth-scroll"
import { useState, useEffect } from "react"

interface GitHubStats {
  public_repos: number
  followers: number
  following: number
}

export default function HomePage() {
  const { language, t, isRTL } = useLanguage()
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null)

  useEffect(() => {
    // Fetch GitHub stats
    fetch("https://api.github.com/users/engahmedfaiz")
      .then((res) => res.json())
      .then((data) => setGithubStats(data))
      .catch((err) => console.log("GitHub API error:", err))
  }, [])

  const scrollToAbout = () => {
    smoothScrollTo("about")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="relative mb-8 mx-auto w-32 h-32 md:w-40 md:h-40">
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <Image
                src="/images/ahmed-faiz-profile.jpg"
                alt="Ahmed Faiz Mashrah"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Status Indicator */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white/20 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {language === "ar" ? (
              <>
                مرحباً، أنا{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  أحمد فايز
                </span>
              </>
            ) : (
              <>
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ahmed Faiz
                </span>
              </>
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {language === "ar"
              ? "مطور ويب ومطبقات جوال محترف متخصص في Laravel و Flutter وتقنيات الويب الحديثة"
              : "Professional Web & Mobile Developer specializing in Laravel, Flutter, and modern web technologies"}
          </motion.p>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-white/20">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-white text-sm">{language === "ar" ? "صنعاء، اليمن" : "Sana'a, Yemen"}</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-white/20">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-green-400" />
                <span className="text-white text-sm">
                  {language === "ar" ? "2+ سنوات خبرة" : "2+ Years Experience"}
                </span>
              </div>
            </div>
            {githubStats && (
              <div className="bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-white/20">
                <div className="flex items-center space-x-2">
                  <Github className="w-4 h-4 text-purple-400" />
                  <span className="text-white text-sm">
                    {githubStats.public_repos} {language === "ar" ? "مشروع" : "Projects"}
                  </span>
                </div>
              </div>
            )}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/projects">{language === "ar" ? "استعرض أعمالي" : "View My Work"}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full backdrop-blur-lg transition-all duration-300 transform hover:scale-105 bg-transparent"
              asChild
            >
              <Link href="/contact">{language === "ar" ? "تواصل معي" : "Get In Touch"}</Link>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-12">
            <Link
              href="https://github.com/engahmedfaiz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/engahmedfaiz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:engahmedfaiz@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <p className="text-gray-400 text-sm mb-4">{language === "ar" ? "اكتشف المزيد" : "Discover More"}</p>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToAbout}
              className="text-gray-400 hover:text-white animate-bounce"
            >
              <ArrowDown className="w-6 h-6" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {language === "ar" ? "نبذة عني" : "About Me"}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {language === "ar"
                ? "مطور ويب ومطبقات جوال محترف مع أكثر من سنتين من الخبرة في تطوير حلول رقمية مبتكرة. متخصص في Laravel و Flutter و PHP وتقنيات الويب الحديثة."
                : "Professional web and mobile developer with over 2 years of experience creating innovative digital solutions. Specialized in Laravel, Flutter, PHP, and modern web technologies."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2+</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {language === "ar" ? "سنوات الخبرة" : "Years Experience"}
                  </h3>
                  <p className="text-gray-300">
                    {language === "ar" ? "في تطوير الويب والتطبيقات" : "In web and mobile development"}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">10+</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {language === "ar" ? "مشاريع مكتملة" : "Projects Completed"}
                  </h3>
                  <p className="text-gray-300">
                    {language === "ar" ? "مشاريع ويب وتطبيقات ناجحة" : "Successful web and mobile projects"}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">5+</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {language === "ar" ? "تقنيات متقنة" : "Technologies Mastered"}
                  </h3>
                  <p className="text-gray-300">
                    {language === "ar" ? "Laravel, Flutter, PHP, React" : "Laravel, Flutter, PHP, React"}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full backdrop-blur-lg bg-transparent"
              asChild
            >
              <Link href="/about">{language === "ar" ? "اقرأ المزيد عني" : "Learn More About Me"}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {language === "ar" ? "مشاريع مميزة" : "Featured Projects"}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {language === "ar"
                ? "استعرض بعض من أحدث أعمالي في تطوير الويب والتطبيقات"
                : "Explore some of my latest work in web and mobile development"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/icons/water-electricity-system.svg"
                    alt="Water & Electricity System"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {language === "ar" ? "نظام عداد المياه والكهرباء" : "Water & Electricity System"}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {language === "ar"
                      ? "نظام ذكي لإدارة عدادات المياه والكهرباء"
                      : "Smart system for managing water and electricity meters"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                      Laravel
                    </Badge>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                      MySQL
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/icons/etjer-platform.svg"
                    alt="Etjer Platform"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {language === "ar" ? "منصة إتجر" : "Etjer Platform"}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {language === "ar" ? "منصة تجارة إلكترونية متكاملة" : "Comprehensive e-commerce platform"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                      Laravel
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                      Vue.js
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/icons/inventory-management.svg"
                    alt="Inventory Management"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {language === "ar" ? "نظام إدارة المخزون" : "Inventory Management"}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {language === "ar"
                      ? "نظام شامل لإدارة المخزون والمبيعات"
                      : "Comprehensive inventory and sales management system"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-red-500/20 text-red-300">
                      PHP
                    </Badge>
                    <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300">
                      JavaScript
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/projects">{language === "ar" ? "عرض جميع المشاريع" : "View All Projects"}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
