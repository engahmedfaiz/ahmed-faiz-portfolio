"use client"

import { motion } from "framer-motion"
import { Calendar, Award, BookOpen, Code2, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

const experiences = {
  ar: [
    {
      year: "2022 - الحاضر",
      title: "مطور ويب مستقل",
      company: "العمل الحر",
      description:
        "بناء نظام إدارة المخزون لورشة النجمة، العمل على مشروع موقع مطعم في السعودية، العمل على مشروع موقع أخبار",
      icon: <Code2 className="w-5 h-5" />,
    },
    {
      year: "2022 - الحاضر",
      title: "مطور تطبيقات مستقل",
      company: "العمل الحر",
      description: "نظام لعداد المياه والكهرباء لابن مشرح",
      icon: <BookOpen className="w-5 h-5" />,
    },
  ],
  en: [
    {
      year: "2022 - Present",
      title: "Freelance Web Developer",
      company: "Freelance",
      description:
        "Building Inventory Management System for The Star Workshop, Work on The Restaurant Site Project in Saudi Arabia, Work on a News Website Project",
      icon: <Code2 className="w-5 h-5" />,
    },
    {
      year: "2022 - Present",
      title: "Freelance Applications Developer",
      company: "Freelance",
      description: "A System for The Water and Electricity Meter the Ibn Mashrah",
      icon: <BookOpen className="w-5 h-5" />,
    },
  ],
}

const education = {
  ar: [
    {
      title: "بكالوريوس تقنية المعلومات",
      institution: "جامعة الرازي",
      year: "2024",
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ],
  en: [
    {
      title: "Bachelor of Information Technology",
      institution: "Razi University",
      year: "2024",
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ],
}

const courses = {
  ar: [
    "تصميم واجهة المستخدم وتجربة المستخدم (UI/UX) (2023)",
    "تطوير تطبيقات الهاتف المحمول (2023)",
    "إطار عمل Laravel (2023)",
    "إطار عمل Laravel المتقدم (2023)",
  ],
  en: [
    "User Interface and User Experience Design (UI/UX) (2023)",
    "Mobile App Development (2023)",
    "Laravel Framework (2023)",
    "Advanced Laravel Framework (2023)",
  ],
}

export default function AboutPage() {
  const { t, language } = useLanguage()

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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{t("aboutTitle")}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">{t("aboutSubtitle")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-purple-500/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">{t("myStory")}</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>{t("aboutText1")}</p>
                  <p>{t("aboutText2")}</p>
                  <p>{t("aboutText3")}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-purple-500/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">{t("education")}</h2>
                <div className="space-y-4">
                  {education[language].map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 transition-colors"
                    >
                      <div className="text-purple-400 flex-shrink-0 mt-1">{edu.icon}</div>
                      <div>
                        <h3 className="font-semibold text-white">{edu.title}</h3>
                        <p className="text-purple-300">{edu.institution}</p>
                        <p className="text-gray-400 text-sm">{edu.year}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Training Courses */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-white/10 backdrop-blur-lg border-purple-500/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">{t("courses")}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {courses[language].map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 transition-colors"
                  >
                    <Award className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{course}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">{t("experience")}</h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>

            <div className="space-y-8">
              {experiences[language].map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.2 }}
                  className="relative flex items-start space-x-6"
                >
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    {exp.icon}
                  </div>

                  {/* Content */}
                  <Card className="flex-1 bg-white/10 backdrop-blur-lg border-purple-500/20 hover:bg-white/15 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-400 font-semibold">{exp.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-purple-300 font-medium mb-3">{exp.company}</p>
                      <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
