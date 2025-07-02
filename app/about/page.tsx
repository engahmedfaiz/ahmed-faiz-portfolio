"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  User,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Award,
  Code,
  Heart,
  Coffee,
  Music,
  Download,
  Eye,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const { t, language } = useLanguage()
  const [activeTab, setActiveTab] = useState("about")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const experiences = [
    {
      title: language === "ar" ? "مطور تطبيقات فلوتر" : "Flutter Developer",
      company: language === "ar" ? "مستقل" : "Freelance",
      period: "2019 - " + (language === "ar" ? "الحاضر" : "Present"),
      description:
        language === "ar"
          ? "تطوير تطبيقات الهاتف المحمول باستخدام Flutter وDart مع التكامل مع Firebase"
          : "Developing mobile applications using Flutter and Dart with Firebase integration",
      skills: ["Flutter", "Dart", "Firebase", "Android", "iOS"],
    },
    {
      title: language === "ar" ? "مطور ويب - Laravel" : "Web Developer - Laravel",
      company: language === "ar" ? "مستقل" : "Freelance",
      period: "2018 - " + (language === "ar" ? "الحاضر" : "Present"),
      description:
        language === "ar"
          ? "تطوير مواقع ومنصات ويب باستخدام Laravel و PHP مع قواعد بيانات MySQL"
          : "Developing websites and web platforms using Laravel and PHP with MySQL databases",
      skills: ["Laravel", "PHP", "MySQL", "Vue.js", "Bootstrap"],
    },
  ]

  const education = [
    {
      degree: language === "ar" ? "بكالوريوس هندسة الحاسوب" : "Bachelor of Computer Engineering",
      school: language === "ar" ? "جامعة صنعاء" : "Sana'a University",
      period: "2015 - 2020",
      grade: language === "ar" ? "امتياز" : "Excellent",
      description:
        language === "ar"
          ? "تخصص في هندسة الحاسوب والبرمجة مع التركيز على تطوير البرمجيات"
          : "Specialized in Computer Engineering and Programming with focus on software development",
    },
  ]

  const achievements = [
    {
      title: language === "ar" ? "منصة إتجر للتجارة الإلكترونية" : "Etjer E-commerce Platform",
      description:
        language === "ar"
          ? "تطوير منصة متكاملة للتجارة الإلكترونية للتجار اليمنيين"
          : "Developed integrated e-commerce platform for Yemeni merchants",
      year: "2023",
      icon: Award,
    },
    {
      title: language === "ar" ? "نظام عداد المياه والكهرباء" : "Water & Electricity Meter System",
      description:
        language === "ar"
          ? "تطوير نظام محاسبي متكامل لإدارة العملاء والحسابات"
          : "Developed integrated accounting system for customer and account management",
      year: "2022",
      icon: Code,
    },
    {
      title: language === "ar" ? "مطور مستقل محترف" : "Professional Freelance Developer",
      description:
        language === "ar"
          ? "خبرة أكثر من 5 سنوات في تطوير التطبيقات والمواقع"
          : "Over 5 years of experience in application and website development",
      year: "2019-2024",
      icon: Briefcase,
    },
  ]

  const interests = [
    { name: language === "ar" ? "البرمجة" : "Programming", icon: Code },
    { name: language === "ar" ? "القهوة" : "Coffee", icon: Coffee },
    { name: language === "ar" ? "الموسيقى" : "Music", icon: Music },
    { name: language === "ar" ? "التعلم" : "Learning", icon: Heart },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="relative flex-shrink-0">
              <Image
                src="/images/ahmed-faiz-profile.jpg"
                alt="Ahmed Faiz"
                width={200}
                height={200}
                className="rounded-full border-4 border-purple-500/30 shadow-2xl"
                priority
              />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="text-center md:text-right flex-1">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{t("aboutTitle")}</h1>
              <p className="text-xl text-purple-300 mb-4">{t("title")}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-300 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{t("location")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{language === "ar" ? "29 سنة" : "29 years old"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{language === "ar" ? "مطور برمجيات" : "Software Developer"}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  asChild
                >
                  <a href="/cv-ahmed-faiz.pdf" download>
                    <Download className="w-5 h-5 mr-2" />
                    {t("downloadCV")}
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-500/30 text-purple-300 hover:bg-purple-600 hover:text-white bg-transparent"
                  asChild
                >
                  <a href="/projects">
                    <Eye className="w-5 h-5 mr-2" />
                    {t("viewProjects")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto mb-12 bg-white/10 backdrop-blur-lg border border-purple-500/20">
            <TabsTrigger
              value="about"
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-300"
            >
              {t("about")}
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-300"
            >
              {t("experience")}
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-300"
            >
              {t("education")}
            </TabsTrigger>
            <TabsTrigger
              value="achievements"
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-300"
            >
              {t("achievements")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 gap-8"
            >
              <motion.div variants={itemVariants}>
                <Card className="bg-white/10 backdrop-blur-lg border-purple-500/20 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                      <User className="w-6 h-6 text-purple-400" />
                      {t("personalInfo")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-gray-300">
                    <p className="leading-relaxed">
                      {language === "ar"
                        ? "مطور برمجيات شغوف بخبرة أكثر من 5 سنوات في تطوير التطبيقات والمواقع الإلكترونية. أتخصص في تطوير تطبيقات الهاتف المحمول باستخدام Flutter ومواقع الويب باستخدام Laravel."
                        : "Passionate software developer with over 5 years of experience in developing applications and websites. I specialize in mobile app development using Flutter and web development using Laravel."}
                    </p>
                    <p className="leading-relaxed">
                      {language === "ar"
                        ? "أؤمن بأن التكنولوجيا يمكنها تحسين حياة الناس، ولذلك أسعى دائماً لتطوير حلول برمجية مبتكرة وعملية تلبي احتياجات المستخدمين."
                        : "I believe that technology can improve people's lives, so I always strive to develop innovative and practical software solutions that meet users' needs."}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="bg-white/10 backdrop-blur-lg border-purple-500/20 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                      <Heart className="w-6 h-6 text-purple-400" />
                      {t("interests")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {interests.map((interest, index) => (
                        <div
                          key={interest.name}
                          className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-purple-500/10"
                        >
                          <interest.icon className="w-5 h-5 text-purple-400" />
                          <span className="text-gray-300">{interest.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="experience">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-white/10 backdrop-blur-lg border-purple-500/20">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                          <p className="text-purple-300 font-medium">{exp.company}</p>
                        </div>
                        <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 w-fit">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="border-purple-500/30 text-purple-300">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="education">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
              {education.map((edu, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-white/10 backdrop-blur-lg border-purple-500/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                            <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 w-fit">
                              {edu.period}
                            </Badge>
                          </div>
                          <p className="text-purple-300 font-medium mb-2">{edu.school}</p>
                          <p className="text-gray-300 mb-2">{edu.description}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-400">{language === "ar" ? "التقدير:" : "Grade:"}</span>
                            <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                              {edu.grade}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="achievements">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-white/10 backdrop-blur-lg border-purple-500/20 h-full hover:bg-white/15 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full w-fit mx-auto mb-4">
                        <achievement.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                      <p className="text-gray-300 text-sm mb-3 leading-relaxed">{achievement.description}</p>
                      <Badge variant="secondary" className="bg-purple-600/20 text-purple-300">
                        {achievement.year}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
