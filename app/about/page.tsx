"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Code2, Award, BookOpen, Users, Download, Calendar, MapPin, Mail, Phone, Linkedin, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import GradientBackground from "@/components/ui/gradient-background"
import Image from "next/image"

const personalInfo = {
  ar: {
    name: "أحمد فايز",
    title: "مطور برمجيات محترف",
    bio: "مطور برمجيات شغوف بأكثر من 3 سنوات من الخبرة في تطوير التطبيقات والمواقع الإلكترونية. أتخصص في تقنيات الويب الحديثة وتطوير تطبيقات الهاتف المحمول. أسعى دائماً لتقديم حلول برمجية مبتكرة وعالية الجودة.",
    location: "السودان، الخرطوم",
    experience: "3+ سنوات",
    projects: "15+ مشروع",
  },
  en: {
    name: "Ahmed Faiz",
    title: "Professional Software Developer",
    bio: "Passionate software developer with over 3 years of experience in developing applications and websites. I specialize in modern web technologies and mobile app development. I always strive to deliver innovative and high-quality software solutions.",
    location: "Sudan, Khartoum",
    experience: "3+ Years",
    projects: "15+ Projects",
  },
}

const skills = [
  { name: "JavaScript & TypeScript", level: 95, category: "Frontend" },
  { name: "React & Next.js", level: 92, category: "Frontend" },
  { name: "React Native", level: 88, category: "Mobile" },
  { name: "Node.js & Express", level: 85, category: "Backend" },
  { name: "Python & Django", level: 80, category: "Backend" },
  { name: "PHP & Laravel", level: 82, category: "Backend" },
  { name: "MongoDB & MySQL", level: 78, category: "Database" },
  { name: "Firebase", level: 85, category: "Database" },
  { name: "Git & GitHub", level: 90, category: "Tools" },
  { name: "Docker", level: 75, category: "Tools" },
]

const experience = [
  {
    title: { ar: "مطور Full Stack", en: "Full Stack Developer" },
    company: "Freelance",
    period: "2022 - Present",
    description: {
      ar: "تطوير تطبيقات ويب ومحمول متكاملة للعملاء باستخدام أحدث التقنيات",
      en: "Developing comprehensive web and mobile applications for clients using the latest technologies",
    },
    technologies: ["React", "Node.js", "React Native", "Firebase"],
  },
  {
    title: { ar: "مطور ويب", en: "Web Developer" },
    company: "Tech Solutions",
    period: "2021 - 2022",
    description: {
      ar: "تطوير وصيانة مواقع إلكترونية ديناميكية وتطبيقات ويب تفاعلية",
      en: "Developing and maintaining dynamic websites and interactive web applications",
    },
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
  },
]

const education = [
  {
    degree: { ar: "بكالوريوس علوم الحاسوب", en: "Bachelor of Computer Science" },
    school: { ar: "جامعة السودان للعلوم والتكنولوجيا", en: "Sudan University of Science & Technology" },
    period: "2018 - 2022",
    gpa: "3.8/4.0",
  },
]

const certifications = [
  {
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2023",
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
  },
  {
    name: "Mobile App Development",
    issuer: "Google",
    date: "2022",
  },
]

export default function AboutPage() {
  const { language, t } = useLanguage()

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
            {t("about")}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {language === "ar"
              ? "تعرف عليّ أكثر، خبراتي، مهاراتي، والرحلة التقنية التي أخوضها"
              : "Get to know me better, my experiences, skills, and the technical journey I'm on"}
          </p>
        </motion.div>

        {/* Personal Info Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <Card className="bg-white/5 backdrop-blur-lg border-white/10 overflow-hidden">
                <div className="relative">
                  <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                    <div className="w-32 h-32 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full p-1">
                        <div className="w-full h-full bg-gray-900 rounded-full overflow-hidden">
                          <Image src="/images/ahmed-faiz-profile.jpg" alt="Ahmed Faiz" fill className="object-cover" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-gray-900"></div>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-20 pb-6 text-center">
                  <h2 className="text-2xl font-bold text-white mb-2">{personalInfo[language].name}</h2>
                  <p className="text-blue-400 mb-4">{personalInfo[language].title}</p>

                  {/* Contact Info */}
                  <div className="space-y-3 text-sm text-gray-400">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {personalInfo[language].location}
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      ahmed.faiz@example.com
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      +249 123 456 789
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-4 mt-6">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Download CV */}
                  <Button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    <Download className="w-4 h-4 mr-2" />
                    {language === "ar" ? "تحميل السيرة الذاتية" : "Download CV"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Bio & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Bio */}
              <Card className="bg-white/5 backdrop-blur-lg border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    {language === "ar" ? "نبذة عني" : "About Me"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed text-lg">{personalInfo[language].bio}</p>
                </CardContent>
              </Card>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-white/5 backdrop-blur-lg border-white/10 text-center p-4">
                  <div className="text-2xl font-bold text-blue-400 mb-1">3+</div>
                  <div className="text-sm text-gray-400">{language === "ar" ? "سنوات خبرة" : "Years Experience"}</div>
                </Card>
                <Card className="bg-white/5 backdrop-blur-lg border-white/10 text-center p-4">
                  <div className="text-2xl font-bold text-green-400 mb-1">15+</div>
                  <div className="text-sm text-gray-400">
                    {language === "ar" ? "مشروع مكتمل" : "Projects Completed"}
                  </div>
                </Card>
                <Card className="bg-white/5 backdrop-blur-lg border-white/10 text-center p-4">
                  <div className="text-2xl font-bold text-purple-400 mb-1">50+</div>
                  <div className="text-sm text-gray-400">{language === "ar" ? "عميل راضي" : "Happy Clients"}</div>
                </Card>
                <Card className="bg-white/5 backdrop-blur-lg border-white/10 text-center p-4">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">24/7</div>
                  <div className="text-sm text-gray-400">{language === "ar" ? "دعم متاح" : "Support Available"}</div>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Card className="bg-white/5 backdrop-blur-lg border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                {language === "ar" ? "المهارات التقنية" : "Technical Skills"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <Badge variant="outline" className="text-xs bg-blue-500/10 text-blue-300 border-blue-500/20">
                        {skill.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <Progress value={skill.level} className="flex-1 h-2 bg-gray-700" />
                      <span className="text-sm text-gray-400 min-w-[3rem]">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Card className="bg-white/5 backdrop-blur-lg border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Award className="w-5 h-5" />
                {language === "ar" ? "الخبرة العملية" : "Work Experience"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="border-l-2 border-blue-500/30 pl-6 relative"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-4">
                        <h3 className="text-lg font-semibold text-white">{exp.title[language]}</h3>
                        <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">{exp.company}</Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <p className="text-gray-300">{exp.description[language]}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs bg-purple-500/10 text-purple-300 border-purple-500/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/5 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  {language === "ar" ? "التعليم" : "Education"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {education.map((edu, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="text-lg font-semibold text-white">{edu.degree[language]}</h3>
                    <p className="text-blue-400">{edu.school[language]}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">GPA: {edu.gpa}</Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/5 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  {language === "ar" ? "الشهادات" : "Certifications"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start justify-between p-3 rounded-lg bg-white/5 border border-white/10"
                    >
                      <div className="space-y-1">
                        <h4 className="font-medium text-white">{cert.name}</h4>
                        <p className="text-sm text-gray-400">{cert.issuer}</p>
                      </div>
                      <Badge
                        variant="outline"
                        className="text-xs bg-yellow-500/10 text-yellow-300 border-yellow-500/20"
                      >
                        {cert.date}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
