"use server"

import { sendContactEmail, sendConfirmationEmail } from "@/lib/email"
import { z } from "zod"
import { headers } from "next/headers"

// Enhanced schema for Next.js 15.3.4
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "الاسم يجب أن يكون أكثر من حرفين")
    .max(100, "الاسم طويل جداً")
    .regex(/^[a-zA-Zأ-ي\s\u0600-\u06FF]+$/, "الاسم يجب أن يحتوي على أحرف فقط")
    .trim(),
  email: z.string().email("البريد الإلكتروني غير صحيح").max(254, "البريد الإلكتروني طويل جداً").toLowerCase().trim(),
  subject: z.string().min(5, "الموضوع يجب أن يكون أكثر من 5 أحرف").max(200, "الموضوع طويل جداً").trim(),
  message: z.string().min(10, "الرسالة يجب أن تكون أكثر من 10 أحرف").max(2000, "الرسالة طويلة جداً").trim(),
})

export interface ContactFormResult {
  success: boolean
  error?: string
  message?: string
}

// Enhanced rate limiting with IP tracking
const submissionTracker = new Map<string, { count: number; lastSubmission: number }>()
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes
const MAX_SUBMISSIONS = 3

function checkSubmissionRate(identifier: string): boolean {
  const now = Date.now()
  const userSubmissions = submissionTracker.get(identifier)

  if (!userSubmissions) {
    submissionTracker.set(identifier, { count: 1, lastSubmission: now })
    return true
  }

  // Reset if window has passed
  if (now - userSubmissions.lastSubmission > RATE_LIMIT_WINDOW) {
    submissionTracker.set(identifier, { count: 1, lastSubmission: now })
    return true
  }

  // Check if limit exceeded
  if (userSubmissions.count >= MAX_SUBMISSIONS) {
    return false
  }

  // Increment count
  userSubmissions.count++
  userSubmissions.lastSubmission = now
  return true
}

// Enhanced spam detection
function detectSpam(data: { name: string; email: string; subject: string; message: string }): boolean {
  const spamKeywords = [
    "viagra",
    "casino",
    "lottery",
    "winner",
    "congratulations",
    "click here",
    "free money",
    "make money fast",
    "work from home",
    "weight loss",
    "crypto",
    "bitcoin",
    "investment opportunity",
  ]

  const content = `${data.name} ${data.subject} ${data.message}`.toLowerCase()

  // Check for spam keywords
  const hasSpamKeywords = spamKeywords.some((keyword) => content.includes(keyword))

  // Check for excessive links
  const linkCount = (content.match(/https?:\/\//g) || []).length
  const hasExcessiveLinks = linkCount > 2

  // Check for repeated characters
  const hasRepeatedChars = /(.)\1{4,}/.test(content)

  // Check for all caps (more than 50% of message)
  const capsCount = (data.message.match(/[A-Z]/g) || []).length
  const isAllCaps = capsCount > data.message.length * 0.5 && data.message.length > 20

  return hasSpamKeywords || hasExcessiveLinks || hasRepeatedChars || isAllCaps
}

export async function submitContactForm(formData: FormData): Promise<ContactFormResult> {
  try {
    // Get client information for rate limiting
    const headersList = await headers()
    const forwardedFor = headersList.get("x-forwarded-for")
    const realIp = headersList.get("x-real-ip")
    const clientIp = forwardedFor?.split(",")[0] || realIp || "unknown"

    // Extract and validate form data
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Check for required fields
    if (!rawData.name || !rawData.email || !rawData.subject || !rawData.message) {
      return {
        success: false,
        error: "جميع الحقول مطلوبة",
      }
    }

    // Validate data with Zod
    const validatedData = contactSchema.parse(rawData)

    // Rate limiting check
    if (!checkSubmissionRate(clientIp)) {
      return {
        success: false,
        error: "تم تجاوز الحد المسموح من الرسائل. يرجى المحاولة بعد 15 دقيقة",
      }
    }

    // Spam detection
    if (detectSpam(validatedData)) {
      console.warn(`Spam detected from IP: ${clientIp}`, validatedData)
      return {
        success: false,
        error: "تم رفض الرسالة. يرجى التأكد من محتوى الرسالة",
      }
    }

    // Check email service availability
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return {
        success: false,
        error: "خدمة البريد الإلكتروني غير متاحة حالياً. يرجى المحاولة لاحقاً",
      }
    }

    // Send main email
    const emailResult = await sendContactEmail(validatedData)

    if (!emailResult.success) {
      console.error("Failed to send contact email:", emailResult.error)
      return {
        success: false,
        error: emailResult.error || "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى",
      }
    }

    // Send confirmation email (non-blocking)
    try {
      await sendConfirmationEmail(validatedData)
    } catch (confirmationError) {
      console.warn("Failed to send confirmation email:", confirmationError)
      // Don't fail the entire operation if confirmation email fails
    }

    // Log successful submission
    console.log(`Contact form submitted successfully from IP: ${clientIp}, Email: ${validatedData.email}`)

    return {
      success: true,
      message: "تم إرسال رسالتك بنجاح! ستصلك رسالة تأكيد قريباً وسأقوم بالرد عليك في أقرب وقت ممكن.",
    }
  } catch (error) {
    console.error("Contact form submission error:", error)

    if (error instanceof z.ZodError) {
      const firstError = error.errors[0]
      return {
        success: false,
        error: firstError.message,
      }
    }

    return {
      success: false,
      error: "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى أو التواصل معي مباشرة",
    }
  }
}

// Enhanced service health check
export async function checkEmailService(): Promise<{
  success: boolean
  status: string
  error?: string
  timestamp: number
}> {
  try {
    const timestamp = Date.now()

    if (!process.env.RESEND_API_KEY) {
      return {
        success: false,
        status: "error",
        error: "خدمة البريد الإلكتروني غير مكونة",
        timestamp,
      }
    }

    // Additional health checks can be added here
    return {
      success: true,
      status: "operational",
      timestamp,
    }
  } catch (error) {
    return {
      success: false,
      status: "error",
      error: "خدمة البريد الإلكتروني غير متاحة حالياً",
      timestamp: Date.now(),
    }
  }
}

// Cleanup function for rate limiting (can be called periodically)
export function cleanupRateLimitData(): void {
  const now = Date.now()
  for (const [key, data] of submissionTracker.entries()) {
    if (now - data.lastSubmission > RATE_LIMIT_WINDOW) {
      submissionTracker.delete(key)
    }
  }
}
