"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

const skillCategories = {
  ar: [
    {
      title: "تطوير الواجهات الأمامية",
      icon: "🎨",
      skills: [
        { name: "HTML", level: 95, color: "from-orange-500 to-red-500" },
        { name: "CSS", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "JavaScript", level: 88, color: "from-yellow-400 to-yellow-600" },
        { name: "Bootstrap", level: 92, color: "from-purple-500 to-pink-500" },
        { name: "Vue.js", level: 85, color: "from-green-400 to-green-600" },
      ],
    },
    {
      title: "تطوير الخلفية",
      icon: "⚙️",
      skills: [
        { name: "PHP", level: 95, color: "from-purple-600 to-blue-600" },
        { name: "Laravel", level: 90, color: "from-red-500 to-red-700" },
        { name: "Python", level: 75, color: "from-yellow-400 to-yellow-600" },
        { name: "SQL", level: 88, color: "from-blue-700 to-indigo-700" },
        { name: "Firebase", level: 82, color: "from-orange-500 to-yellow-500" },
      ],
    },
    {
      title: "تطوير التطبيقات المحمولة",
      icon: "📱",
      skills: [
        { name: "Flutter", level: 85, color: "from-blue-400 to-cyan-400" },
        { name: "C#", level: 70, color: "from-purple-600 to-blue-600" },
        { name: "Dart", level: 85, color: "from-blue-500 to-teal-500" },
      ],
    },
    {
      title: "أدوات وتقنيات أخرى",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", level: 90, color: "from-gray-700 to-gray-900" },
        { name: "Next.js", level: 80, color: "from-gray-800 to-black" },
        { name: "API Integration", level: 88, color: "from-green-500 to-teal-500" },
        { name: "Figma (UI/UX)", level: 85, color: "from-pink-500 to-purple-500" },
      ],
    },
  ],
  en: [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "HTML", level: 95, color: "from-orange-500 to-red-500" },
        { name: "CSS", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "JavaScript", level: 88, color: "from-yellow-400 to-yellow-600" },
        { name: "Bootstrap", level: 92, color: "from-purple-500 to-pink-500" },
        { name: "Vue.js", level: 85, color: "from-green-400 to-green-600" },
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "PHP", level: 95, color: "from-purple-600 to-blue-600" },
        { name: "Laravel", level: 90, color: "from-red-500 to-red-700" },
        { name: "Python", level: 75, color: "from-yellow-400 to-yellow-600" },
        { name: "SQL", level: 88, color: "from-blue-700 to-indigo-700" },
        { name: "Firebase", level: 82, color: "from-orange-500 to-yellow-500" },
      ],
    },
    {
      title: "Mobile Development",
      icon: "📱",
      skills: [
        { name: "Flutter", level: 85, color: "from-blue-400 to-cyan-400" },
        { name: "C#", level: 70, color: "from-purple-600 to-blue-600" },
        { name: "Dart", level: 85, color: "from-blue-500 to-teal-500" },
      ],
    },
    {
      title: "Tools & Other Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", level: 90, color: "from-gray-700 to-gray-900" },
        { name: "Next.js", level: 80, color: "from-gray-800 to-black" },
        { name: "API Integration", level: 88, color: "from-green-500 to-teal-500" },
        { name: "Figma (UI/UX)", level: 85, color: "from-pink-500 to-purple-500" },
      ],
    },
  ],
}

const softSkills = {
  ar: [
    "سرعة التعلم",
    "مهارات التواصل الجيدة",
    "العمل الجماعي الفعال",
    "القدرة على القيادة والتعاون",
    "التفكير الإبداعي",
    "حل المشكلات",
    "إدارة الوقت",
    "التكيف مع التغيير",
  ],
  en: [
    "Learning Speed",
    "Good Communication Skills",
    "Effective Teamwork",
    "Ability to Lead and Collaborate",
    "Creative Thinking",
    "Problem Solving",
    "Time Management",
    "Adaptability",
  ],
}

export default function SkillsPage() {
  const { t, language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState(0)

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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{t("skillsTitle")}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">{t("skillsSubtitle")}</p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories[language].map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === index
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skillCategories[language][activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/10 backdrop-blur-lg border-purple-500/20 hover:bg-white/15 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    <span className="text-purple-400 font-bold">{skill.level}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-3 mb-4 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>

                  {/* Skill Level Badge */}
                  <Badge variant="secondary" className={`bg-gradient-to-r ${skill.color} text-white border-0`}>
                    {skill.level >= 90 ? t("expert") : skill.level >= 80 ? t("advanced") : t("intermediate")}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-white/10 backdrop-blur-lg border-purple-500/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                {language === "ar" ? "المهارات الشخصية" : "Soft Skills"}
              </h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {softSkills[language].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  >
                    <Badge
                      variant="outline"
                      className="px-4 py-2 text-purple-300 border-purple-400 hover:bg-purple-400 hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
