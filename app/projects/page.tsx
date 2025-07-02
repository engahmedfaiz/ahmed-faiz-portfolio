"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, Users, Award } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import GradientBackground from "@/components/ui/gradient-background"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: {
      ar: "نظام عداد المياه والكهرباء الذكي",
      en: "Smart Water & Electricity Meter System",
    },
    description: {
      ar: "نظام ذكي لمراقبة استهلاك المياه والكهرباء باستخدام React Native وقاعدة بيانات Firebase مع واجهة إدارية متقدمة",
      en: "Smart system for monitoring water and electricity consumption using React Native and Firebase database with advanced admin interface",
    },
    image: "/icons/water-electricity-system.svg",
    technologies: ["React Native", "Firebase", "IoT", "Real-time Database"],
    status: {
      ar: "مكتمل",
      en: "Completed",
    },
    date: "2024",
    team: 4,
    highlights: {
      ar: ["مراقبة فورية للاستهلاك", "تنبيهات ذكية", "تحليلات متقدمة"],
      en: ["Real-time consumption monitoring", "Smart alerts", "Advanced analytics"],
    },
  },
  {
    id: 2,
    title: {
      ar: "نظام إدارة المخزون",
      en: "Inventory Management System",
    },
    description: {
      ar: "نظام شامل لإدارة المخزون والمبيعات مع تتبع دقيق للمنتجات وإنشاء التقارير التفصيلية",
      en: "Comprehensive inventory and sales management system with precise product tracking and detailed reporting",
    },
    image: "/icons/inventory-management.svg",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "Chart.js"],
    status: {
      ar: "مكتمل",
      en: "Completed",
    },
    date: "2023",
    team: 3,
    highlights: {
      ar: ["تتبع المخزون المباشر", "تقارير مفصلة", "إدارة الموردين"],
      en: ["Real-time inventory tracking", "Detailed reports", "Supplier management"],
    },
  },
  {
    id: 3,
    title: {
      ar: "منصة إتجر للتجارة الإلكترونية",
      en: "Etjer E-commerce Platform",
    },
    description: {
      ar: "منصة متكاملة للتجارة الإلكترونية مع نظام دفع آمن ولوحة تحكم شاملة للتجار",
      en: "Integrated e-commerce platform with secure payment system and comprehensive merchant dashboard",
    },
    image: "/icons/etjer-platform.svg",
    technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    status: {
      ar: "قيد التطوير",
      en: "In Development",
    },
    date: "2024",
    team: 5,
    highlights: {
      ar: ["دفع آمن", "إدارة شاملة", "تجربة مستخدم متميزة"],
      en: ["Secure payments", "Comprehensive management", "Excellent UX"],
    },
  },
  {
    id: 4,
    title: {
      ar: "منصة الأخبار الرقمية",
      en: "Digital News Platform",
    },
    description: {
      ar: "منصة إخبارية تفاعلية مع نظام إدارة المحتوى وخصائص التفاعل الاجتماعي",
      en: "Interactive news platform with content management system and social interaction features",
    },
    image: "/icons/news-platform.svg",
    technologies: ["Laravel", "MySQL", "Redis", "Bootstrap"],
    status: {
      ar: "مكتمل",
      en: "Completed",
    },
    date: "2023",
    team: 6,
    highlights: {
      ar: ["محتوى تفاعلي", "إدارة متقدمة", "تحسين لمحركات البحث"],
      en: ["Interactive content", "Advanced management", "SEO optimized"],
    },
  },
  {
    id: 5,
    title: {
      ar: "متجر إلكتروني متكامل",
      en: "Complete E-commerce Store",
    },
    description: {
      ar: "متجر إلكتروني كامل الميزات مع نظام الطلبات والدفع والشحن المتكامل",
      en: "Full-featured e-commerce store with integrated ordering, payment, and shipping system",
    },
    image: "/icons/ecommerce-store.svg",
    technologies: ["React", "Express.js", "MySQL", "PayPal API"],
    status: {
      ar: "مكتمل",
      en: "Completed",
    },
    date: "2023",
    team: 4,
    highlights: {
      ar: ["متجر متكامل", "دفع متعدد", "إدارة الشحن"],
      en: ["Complete store", "Multiple payments", "Shipping management"],
    },
  },
]

export default function ProjectsPage() {
  const { language, t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen relative">
      <GradientBackground />

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {t("projects")}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {language === "ar"
              ? "مجموعة من المشاريع التقنية المتنوعة التي قمت بتطويرها باستخدام أحدث التقنيات"
              : "A collection of diverse technical projects I've developed using the latest technologies"}
          </p>

          {/* Stats */}
          <div className="flex justify-center items-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">{projects.length}+</div>
              <div className="text-sm text-gray-400">{language === "ar" ? "مشروع" : "Projects"}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">15+</div>
              <div className="text-sm text-gray-400">{language === "ar" ? "تقنية" : "Technologies"}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">3+</div>
              <div className="text-sm text-gray-400">{language === "ar" ? "سنوات خبرة" : "Years Experience"}</div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="h-full bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 group overflow-hidden">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title[language]}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={
                        project.status[language] === "مكتمل" || project.status[language] === "Completed"
                          ? "default"
                          : "secondary"
                      }
                      className="bg-black/50 text-white border-white/20"
                    >
                      {project.status[language]}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-white text-lg group-hover:text-blue-400 transition-colors">
                      {project.title[language]}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-300 text-sm leading-relaxed">
                    {project.description[language]}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Project Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {project.team} {language === "ar" ? "أعضاء" : "members"}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-white flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {language === "ar" ? "المميزات الرئيسية" : "Key Features"}
                    </h4>
                    <div className="space-y-1">
                      {project.highlights[language].map((highlight, index) => (
                        <div key={index} className="text-xs text-gray-300 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {language === "ar" ? "معاينة" : "Preview"}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              {language === "ar" ? "هل لديك مشروع في ذهنك؟" : "Have a project in mind?"}
            </h3>
            <p className="text-gray-300 mb-6">
              {language === "ar"
                ? "دعنا نتعاون لتحويل فكرتك إلى واقع رقمي متميز"
                : "Let's collaborate to turn your idea into an outstanding digital reality"}
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              {language === "ar" ? "تواصل معي" : "Contact Me"}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
