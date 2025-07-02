"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Globe,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useLanguage } from "@/contexts/language-context"
import { submitContactForm } from "@/app/actions/contact"

export default function ContactPage() {
  const { t, language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: t("email"),
      value: "engahmedfaiz5@gmail.com",
      href: "mailto:engahmedfaiz5@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t("phone"),
      value: "+(967)780138083",
      href: "tel:+967780138083",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t("location"),
      value: language === "ar" ? "صنعاء، اليمن" : "Sana'a, Yemen",
      href: "#",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t("website"),
      value: "engahmedfaiz.github.io",
      href: "https://engahmedfaiz.github.io/portfoli",
    },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/engahmedfaiz",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      href: "https://twitter.com",
      color: "hover:text-sky-400",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-6 h-6" />,
      href: "https://wa.me/967780138083",
      color: "hover:text-green-400",
    },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const formData = new FormData(e.currentTarget)
      const result = await submitContactForm(formData)

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message || (language === "ar" ? "تم إرسال رسالتك بنجاح!" : "Message sent successfully!"),
        })

        // إعادة تعيين النموذج
        e.currentTarget.reset()
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || (language === "ar" ? "حدث خطأ في إرسال الرسالة" : "Failed to send message"),
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus({
        type: "error",
        message: language === "ar" ? "حدث خطأ غير متوقع" : "An unexpected error occurred",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{t("contactTitle")}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">{t("contactSubtitle")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">{t("sendMessage")}</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Status Alert */}
                {submitStatus.type && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                    <Alert
                      className={`${
                        submitStatus.type === "success"
                          ? "border-green-500/50 bg-green-500/10"
                          : "border-red-500/50 bg-red-500/10"
                      }`}
                    >
                      {submitStatus.type === "success" ? (
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-red-400" />
                      )}
                      <AlertDescription
                        className={`${submitStatus.type === "success" ? "text-green-300" : "text-red-300"}`}
                      >
                        {submitStatus.message}
                      </AlertDescription>
                    </Alert>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">
                        {t("fullName")} <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        minLength={2}
                        maxLength={100}
                        className="bg-white/5 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400"
                        placeholder={language === "ar" ? "أدخل اسمك الكامل" : "Enter your full name"}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">
                        {t("email")} <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-white/5 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400"
                        placeholder="your@email.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-300">
                      {t("subject")} <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      minLength={5}
                      maxLength={200}
                      className="bg-white/5 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400"
                      placeholder={language === "ar" ? "موضوع الرسالة" : "Message subject"}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">
                      {t("message")} <span className="text-red-400">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      minLength={10}
                      maxLength={2000}
                      rows={6}
                      className="bg-white/5 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 resize-none"
                      placeholder={language === "ar" ? "اكتب رسالتك هنا..." : "Write your message here..."}
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        {t("sending")}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        {t("sendButton")}
                      </div>
                    )}
                  </Button>

                  <p className="text-sm text-gray-400 text-center">
                    <span className="text-red-400">*</span> {language === "ar" ? "الحقول المطلوبة" : "Required fields"}
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <Card className="bg-white/10 backdrop-blur-lg border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">{t("contactInfo")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 transition-colors group cursor-pointer"
                  >
                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold text-white">{info.title}</h3>
                      <p className="text-gray-300 group-hover:text-white transition-colors">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-white/10 backdrop-blur-lg border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">{t("followMe")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                      className={`flex items-center justify-center space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 text-gray-300 ${social.color} group`}
                    >
                      <div className="group-hover:scale-110 transition-transform">{social.icon}</div>
                      <span className="font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-white/10 backdrop-blur-lg border-purple-500/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold">{t("availableForWork")}</span>
                </div>
                <p className="text-gray-300 leading-relaxed">{t("availabilityText")}</p>
              </CardContent>
            </Card>

            {/* Response Time Info */}
            <Card className="bg-white/10 backdrop-blur-lg border-purple-500/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-semibold">
                    {language === "ar" ? "وقت الاستجابة" : "Response Time"}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {language === "ar"
                    ? "عادة ما أرد على الرسائل خلال 24 ساعة. للمشاريع العاجلة، يمكنك التواصل معي عبر WhatsApp."
                    : "I usually respond to messages within 24 hours. For urgent projects, you can contact me via WhatsApp."}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
