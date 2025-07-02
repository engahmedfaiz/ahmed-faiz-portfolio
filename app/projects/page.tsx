"use client"

import { motion } from "framer-motion"
import { Users, Star, GitFork } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

interface Project {
  id: string
  title: {
    ar: string
    en: string
  }
  description: {
    ar: string
    en: string
  }
  longDescription: {
    ar: string
    en: string
  }
  image: string
  icon: string
  technologies: string[]
  category: {
    ar: string
    en: string
  }
  status: "completed" | "in-progress" | "planned"
  year: string
  github?: string
  demo?: string
  features: {
    ar: string[]
    en: string[]
  }
  stats?: {
    users?: number
    downloads?: number
    stars?: number
    forks?: number
  }
}

const projects: Project[] = [
  {
    id: "water-electricity-system",
    title: {
      ar: "نظام عداد المياه والكهرباء",
      en: "Water & Electricity Meter System",
    },
    description: {
      ar: "نظام ذكي لإدارة عدادات المياه والكهرباء مع واجهة إدارية متقدمة",
      en: "Smart system for managing water and electricity meters with advanced admin interface",
    },
    longDescription: {
      ar: "نظام شامل لإدارة عدادات المياه والكهرباء يتضمن تتبع الاستهلاك، إنتاج الفواتير التلقائية، وإدارة العملاء. النظام مصمم لتسهيل عمل شركات المرافق العامة وتحسين خدمة العملاء.",
      en: "Comprehensive system for managing water and electricity meters including consumption tracking, automatic billing, and customer management. The system is designed to facilitate utility companies' operations and improve customer service.",
    },
    image: "/icons/water-electricity-system.svg",
    icon: "/icons/water-electricity-system.svg",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "Chart.js"],
    category: {
      ar: "أنظمة إدارية",
      en: "Management Systems",
    },
    status: "completed",
    year: "2023",
    github: "https://github.com/engahmedfaiz/water-electricity-system",
    demo: "https://water-system-demo.com",
    features: {
      ar: [
        "إدارة العملاء والعدادات",
        "تتبع الاستهلاك الشهري",
        "إنتاج الفواتير التلقائية",
        "تقارير مفصلة ورسوم بيانية",
        "نظام إشعارات للعملاء",
        "واجهة إدارية متقدمة",
      ],
      en: [
        "Customer and meter management",
        "Monthly consumption tracking",
        "Automatic bill generation",
        "Detailed reports and charts",
        "Customer notification system",
        "Advanced admin interface",
      ],
    },
    stats: {
      users: 500,
      stars: 15,
    },
  },
  {
    id: "inventory-management",
    title: {
      ar: "نظام إدارة المخزون",
      en: "Inventory Management System",
    },
    description: {
      ar: "نظام شامل لإدارة المخزون والمبيعات مع تتبع المنتجات والموردين",
      en: "Comprehensive inventory and sales management system with product and supplier tracking",
    },
    longDescription: {
      ar: "نظام متكامل لإدارة المخزون يشمل تتبع المنتجات، إدارة الموردين، معالجة المبيعات، وإنتاج التقارير المالية. يساعد الشركات على تحسين كفاءة إدارة المخزون وزيادة الأرباح.",
      en: "Integrated inventory management system including product tracking, supplier management, sales processing, and financial reporting. Helps companies improve inventory management efficiency and increase profits.",
    },
    image: "/icons/inventory-management.svg",
    icon: "/icons/inventory-management.svg",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "jQuery", "Chart.js"],
    category: {
      ar: "أنظمة إدارية",
      en: "Management Systems",
    },
    status: "completed",
    year: "2023",
    github: "https://github.com/engahmedfaiz/inventory-system",
    features: {
      ar: [
        "إدارة المنتجات والفئات",
        "تتبع مستويات المخزون",
        "إدارة الموردين والعملاء",
        "معالجة المبيعات والمشتريات",
        "تقارير مالية مفصلة",
        "تنبيهات نفاد المخزون",
      ],
      en: [
        "Product and category management",
        "Inventory level tracking",
        "Supplier and customer management",
        "Sales and purchase processing",
        "Detailed financial reports",
        "Low stock alerts",
      ],
    },
    stats: {
      users: 200,
      stars: 8,
    },
  },
  {
    id: "etjer-platform",
    title: {
      ar: "منصة إتجر",
      en: "Etjer E-commerce Platform",
    },
    description: {
      ar: "منصة تجارة إلكترونية متكاملة مع نظام دفع آمن وإدارة متقدمة",
      en: "Comprehensive e-commerce platform with secure payment system and advanced management",
    },
    longDescription: {
      ar: "منصة تجارة إلكترونية حديثة تتضمن واجهة متجر جذابة، نظام دفع آمن، إدارة المنتجات، تتبع الطلبات، وأدوات تسويقية متقدمة. مصممة لتوفير تجربة تسوق ممتازة للعملاء وأدوات إدارية قوية للتجار.",
      en: "Modern e-commerce platform featuring attractive storefront, secure payment system, product management, order tracking, and advanced marketing tools. Designed to provide excellent shopping experience for customers and powerful management tools for merchants.",
    },
    image: "/icons/etjer-platform.svg",
    icon: "/icons/etjer-platform.svg",
    technologies: ["Laravel", "Vue.js", "MySQL", "Stripe", "Redis", "Tailwind CSS"],
    category: {
      ar: "تجارة إلكترونية",
      en: "E-commerce",
    },
    status: "completed",
    year: "2024",
    github: "https://github.com/engahmedfaiz/etjer-platform",
    demo: "https://etjer-platform.com",
    features: {
      ar: [
        "واجهة متجر حديثة ومتجاوبة",
        "نظام دفع آمن متعدد الطرق",
        "إدارة المنتجات والفئات",
        "تتبع الطلبات والشحن",
        "نظام تقييم المنتجات",
        "أدوات تسويقية وكوبونات خصم",
      ],
      en: [
        "Modern responsive storefront",
        "Secure multi-payment system",
        "Product and category management",
        "Order and shipping tracking",
        "Product review system",
        "Marketing tools and discount coupons",
      ],
    },
    stats: {
      users: 1200,
      stars: 25,
      forks: 8,
    },
  },
  {
    id: "news-platform",
    title: {
      ar: "منصة الأخبار الرقمية",
      en: "Digital News Platform",
    },
    description: {
      ar: "منصة أخبار حديثة مع نظام إدارة المحتوى وتفاعل القراء",
      en: "Modern news platform with content management system and reader interaction",
    },
    longDescription: {
      ar: "منصة أخبار رقمية شاملة تتضمن نظام إدارة المحتوى، تصنيف الأخبار، تعليقات القراء، ونظام اشتراكات. تدعم النشر المتعدد الوسائط وتوفر تجربة قراءة ممتازة على جميع الأجهزة.",
      en: "Comprehensive digital news platform including content management system, news categorization, reader comments, and subscription system. Supports multimedia publishing and provides excellent reading experience across all devices.",
    },
    image: "/icons/news-platform.svg",
    icon: "/icons/news-platform.svg",
    technologies: ["Laravel", "React", "MySQL", "Redis", "Elasticsearch", "AWS S3"],
    category: {
      ar: "إعلام ومحتوى",
      en: "Media & Content",
    },
    status: "completed",
    year: "2024",
    github: "https://github.com/engahmedfaiz/news-platform",
    demo: "https://news-platform-demo.com",
    features: {
      ar: [
        "نظام إدارة المحتوى المتقدم",
        "تصنيف وتنظيم الأخبار",
        "نظام تعليقات تفاعلي",
        "اشتراكات ونشرة إخبارية",
        "بحث متقدم في المحتوى",
        "تحليلات وإحصائيات مفصلة",
      ],
      en: [
        "Advanced content management system",
        "News categorization and organization",
        "Interactive comment system",
        "Subscriptions and newsletter",
        "Advanced content search",
        "Detailed analytics and statistics",
      ],
    },
    stats: {
      users: 800,
      stars: 18,
      forks: 5,
    },
  },
  {
    id: "ecommerce-store",
    title: {
      ar: "متجر إلكتروني متخصص",
      en: "Specialized E-commerce Store",
    },
    description: {
      ar: "متجر إلكتروني مخصص للمنتجات المحلية مع نظام توصيل متقدم",
      en: "Specialized e-commerce store for local products with advanced delivery system",
    },
    longDescription: {
      ar: "متجر إلكتروني متخصص في بيع المنتجات المحلية مع نظام توصيل ذكي، إدارة المخزون، ونظام ولاء العملاء. يدعم الدفع النقدي والإلكتروني ويوفر تتبع دقيق للطلبات.",
      en: "Specialized e-commerce store for local products with smart delivery system, inventory management, and customer loyalty program. Supports both cash and electronic payments with accurate order tracking.",
    },
    image: "/icons/ecommerce-store.svg",
    icon: "/icons/ecommerce-store.svg",
    technologies: ["Laravel", "Flutter", "MySQL", "Firebase", "Google Maps API"],
    category: {
      ar: "تجارة إلكترونية",
      en: "E-commerce",
    },
    status: "in-progress",
    year: "2024",
    github: "https://github.com/engahmedfaiz/local-ecommerce",
    features: {
      ar: [
        "تطبيق جوال للعملاء",
        "نظام توصيل ذكي",
        "إدارة المخزون المحلي",
        "نظام ولاء العملاء",
        "دعم الدفع النقدي والإلكتروني",
        "تتبع الطلبات في الوقت الفعلي",
      ],
      en: [
        "Mobile app for customers",
        "Smart delivery system",
        "Local inventory management",
        "Customer loyalty program",
        "Cash and electronic payment support",
        "Real-time order tracking",
      ],
    },
    stats: {
      users: 300,
      stars: 12,
    },
  },
]

export default function ProjectsPage() {
  const { language, t, isRTL } = useLanguage()

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      case "in-progress":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      case "planned":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return language === "ar" ? "مكتمل" : "Completed"
      case "in-progress":
        return language === "ar" ? "قيد التطوير" : "In Progress"
      case "planned":
        return language === "ar" ? "مخطط" : "Planned"
      default:
        return status
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {language === "ar" ? "مشاريعي" : "My Projects"}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {language === "ar"
              ? "مجموعة من المشاريع التي طورتها باستخدام أحدث التقنيات في تطوير الويب والتطبيقات"
              : "A collection of projects I've developed using the latest technologies in web and mobile development"}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 && !isRTL ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 && !isRTL ? "lg:col-start-2" : ""}`}>
                <Card className="bg-white/5 backdrop-blur-lg border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-300">
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title[language]}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge className={`${getStatusColor(project.status)} border`}>
                        {getStatusText(project.status)}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 && !isRTL ? "lg:col-start-1" : ""}`}>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <Image
                        src={project.icon || "/placeholder.svg"}
                        alt={project.title[language]}
                        width={24}
                        height={24}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <Badge variant="outline" className="text-gray-300 border-gray-600">
                        {project.category[language]}
                      </Badge>
                      <p className="text-sm text-gray-400 mt-1">{project.year}</p>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {project.title[language]}
                  </h2>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {project.longDescription[language]}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {language === "ar" ? "التقنيات المستخدمة" : "Technologies Used"}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {language === "ar" ? "المميزات الرئيسية" : "Key Features"}
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features[language].slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                {project.stats && (
                  <div className="flex gap-6">
                    {project.stats.users && (
                      <div className="flex items-center text-gray-300">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="text-sm">
                          {project.stats.users} {language === "ar" ? "مستخدم" : "Users"}
                        </span>
                      </div>
                    )}
                    {project.stats.stars && (
                      <div className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 mr-2" />
                        <span className="text-sm">
                          {project.stats.stars} {language === "ar" ? "نجمة" : "Stars"}
                        </span>
                      </div>
                    )}
                    {project.stats.forks && (
                      <div className="flex items-center text-gray-300">
                        <GitFork className="w-4 h-4 mr-2" />
                        <span className="text-sm">
                          {project.stats.forks} {language === "ar" ? "فرع" : "Forks"}
                        </span>
                      \
