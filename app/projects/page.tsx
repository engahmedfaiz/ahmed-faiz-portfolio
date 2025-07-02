"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Github, Star, GitFork, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

// Real projects based on CV
const projects = {
  ar: [
    {
      id: 1,
      name: "نظام عداد المياه والكهرباء",
      description: "نظام محاسبي متكامل يعمل على إدارة العملاء وكذلك إدارة شجرة الحسابات",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Flutter", "Firebase", "Dart"],
      github: "https://github.com/engahmedfaiz",
      demo: "#",
      stars: 15,
      forks: 8,
      language: "Dart",
      featured: true,
    },
    {
      id: 2,
      name: "نظام إدارة المخزون",
      description: "نظام إدارة المخزون يساعد الشركات على تتبع مخزونها",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      github: "https://github.com/engahmedfaiz",
      demo: "#",
      stars: 22,
      forks: 12,
      language: "PHP",
      featured: true,
    },
    {
      id: 3,
      name: "منصة إتجر",
      description: "منصة سحابية تمكن التجار اليمنيين من إنشاء وإدارة متاجر إلكترونية",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Laravel", "Vue.js", "MySQL", "Stripe"],
      github: "https://github.com/engahmedfaiz",
      demo: "https://www.etjer.store",
      stars: 35,
      forks: 18,
      language: "PHP",
      featured: true,
    },
    {
      id: 4,
      name: "منصة الأخبار",
      description: "منصة رقمية لنشر وإدارة المقالات الإخبارية",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      github: "https://github.com/engahmedfaiz",
      demo: "#",
      stars: 18,
      forks: 9,
      language: "PHP",
      featured: false,
    },
    {
      id: 5,
      name: "متجر إلكتروني",
      description: "متجر إلكتروني متكامل لبيع المنتجات مع نظام دفع متكامل",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Laravel", "Vue.js", "Stripe", "MySQL"],
      github: "https://github.com/engahmedfaiz",
      demo: "#",
      stars: 28,
      forks: 15,
      language: "PHP",
      featured: false,
    },
  ],
  en: [
    {
      id: 1,
      name: "Water and Electricity Meter System",
      description: "Integrated accounting system that works on customer management as well as account tree management",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Flutter", "Firebase", "Dart"],
      github: "https://github.com/engahmedfaiz",
      demo: "#",
      stars: 15,
      forks: 8,
      language: "Dart",
      featured: true,
    },
    {
      id: 2,
      name: "Inventory Management System",
      description: "A stock management system that helps businesses track their inventory",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      github: "https://github.com/engahmedfaiz",
      demo: "#",
      stars: 22,
      forks: 12,
      language: "PHP",
      featured: true,
    },
    {
      id: 3,
      name: "Etjer Platform",
      description: "A cloud-based platform enabling Yemeni merchants to create and manage online stores",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Laravel", "Vue.js", "MySQL", "Stripe"],
      github: "https://github.com/engahmedfaiz",
      demo: "https://www.etjer.store",
      stars: 35,
      forks: 18,
      language: "PHP",
      featured: true,
    },
    {
      id: 4,
      name: "News Platform",
      description: "A digital platform for publishing and managing news articles",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      github: "https://github.com/engahmedfaiz",
      demo: "#",
      stars: 18,
      forks: 9,
      language: "PHP",
      featured: false,
    },
    {
      id: 5,
      name: "E-commerce Store",
      description: "A fully functional online store for selling products with an integrated payment system",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Laravel", "Vue.js", "Stripe", "MySQL"],
      github: "https://github.com/engahmedfaiz",
      demo: "#",
      stars: 28,
      forks: 15,
      language: "PHP",
      featured: false,
    },
  ],
}

const githubStats = {
  totalRepos: 25,
  totalStars: 118,
  totalForks: 62,
  contributions: 847,
}

export default function ProjectsPage() {
  const { t, language } = useLanguage()
  const [filter, setFilter] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState(projects[language])

  useEffect(() => {
    const currentProjects = projects[language]
    if (filter === "all") {
      setFilteredProjects(currentProjects)
    } else if (filter === "featured") {
      setFilteredProjects(currentProjects.filter((project) => project.featured))
    } else {
      setFilteredProjects(
        currentProjects.filter((project) =>
          project.technologies.some((tech) => tech.toLowerCase().includes(filter.toLowerCase())),
        ),
      )
    }
  }, [filter, language])

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{t("projectsTitle")}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">{t("projectsSubtitle")}</p>

          {/* GitHub Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-purple-500/20">
              <div className="text-2xl font-bold text-white">{githubStats.totalRepos}</div>
              <div className="text-sm text-gray-400">{t("repositories")}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-purple-500/20">
              <div className="text-2xl font-bold text-white">{githubStats.totalStars}</div>
              <div className="text-sm text-gray-400">{t("stars")}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-purple-500/20">
              <div className="text-2xl font-bold text-white">{githubStats.totalForks}</div>
              <div className="text-sm text-gray-400">{t("forks")}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-purple-500/20">
              <div className="text-2xl font-bold text-white">{githubStats.contributions}</div>
              <div className="text-sm text-gray-400">{t("contributions")}</div>
            </div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {["all", "featured", "Laravel", "Flutter", "PHP", "Vue.js"].map((filterOption) => (
            <Button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              variant={filter === filterOption ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === filterOption
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "bg-white/10 text-gray-300 border-purple-500/30 hover:bg-white/20"
              }`}
            >
              {filterOption === "all" ? t("all") : filterOption === "featured" ? t("featured") : filterOption}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="bg-white/10 backdrop-blur-lg border-purple-500/20 hover:bg-white/15 transition-all duration-300 group h-full">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {project.featured && (
                      <Badge className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                        {t("featured")}
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="p-6 flex flex-col h-full">
                  <CardTitle className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {project.name}
                  </CardTitle>

                  <p className="text-gray-300 mb-4 flex-grow leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-purple-600/20 text-purple-300 border-purple-500/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {project.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {project.forks}
                    </div>
                    <div className="flex items-center gap-1">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          project.language === "PHP"
                            ? "bg-purple-500"
                            : project.language === "Dart"
                              ? "bg-blue-500"
                              : "bg-yellow-500"
                        }`}
                      ></div>
                      {project.language}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    {project.demo !== "#" && (
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t("preview")}
                        </a>
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-500/30 text-purple-300 hover:bg-purple-600 hover:text-white bg-transparent"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Card className="bg-white/10 backdrop-blur-lg border-purple-500/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Github className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">{t("moreOnGithub")}</h3>
              <p className="text-gray-300 mb-6">
                {language === "ar"
                  ? "اكتشف المزيد من مشاريعي ومساهماتي في المجتمع التقني"
                  : "Discover more of my projects and contributions to the tech community"}
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                asChild
              >
                <a href="https://github.com/engahmedfaiz" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  {t("visitGithub")}
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
