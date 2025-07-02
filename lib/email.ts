import { Resend } from "resend"

// Enhanced error handling for Next.js 15.3.4
if (!process.env.RESEND_API_KEY) {
  if (process.env.NODE_ENV === "production") {
    throw new Error("RESEND_API_KEY environment variable is required in production")
  } else {
    console.warn("RESEND_API_KEY not found - email functionality will be disabled in development")
  }
}

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface EmailResponse {
  success: boolean
  error?: string
  data?: any
}

// Enhanced rate limiting
const emailRateLimit = new Map<string, number>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_EMAILS_PER_WINDOW = 3

function checkRateLimit(email: string): boolean {
  const now = Date.now()
  const userRequests = emailRateLimit.get(email) || 0

  // Clean old entries
  for (const [key, timestamp] of emailRateLimit.entries()) {
    if (now - timestamp > RATE_LIMIT_WINDOW) {
      emailRateLimit.delete(key)
    }
  }

  if (userRequests >= MAX_EMAILS_PER_WINDOW) {
    return false
  }

  emailRateLimit.set(email, userRequests + 1)
  return true
}

export async function sendContactEmail(data: ContactFormData): Promise<EmailResponse> {
  try {
    // Check if resend is available
    if (!resend) {
      return {
        success: false,
        error: "Email service is not configured",
      }
    }

    // Rate limiting
    if (!checkRateLimit(data.email)) {
      return {
        success: false,
        error: "تم تجاوز الحد المسموح من الرسائل. يرجى المحاولة لاحقاً",
      }
    }

    // Enhanced email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        error: "البريد الإلكتروني غير صحيح",
      }
    }

    const { data: emailData, error } = await resend.emails.send({
      from: "Contact Form <noreply@yourdomain.com>",
      to: ["engahmedfaiz5@gmail.com"],
      replyTo: data.email,
      subject: `رسالة جديدة من الموقع: ${data.subject}`,
      html: generateContactEmailHTML(data),
      // Enhanced headers for 15.3.4
      headers: {
        "X-Priority": "3",
        "X-Mailer": "Ahmed Faiz Portfolio v2.1.0",
      },
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data: emailData }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "حدث خطأ غير متوقع",
    }
  }
}

export async function sendConfirmationEmail(data: ContactFormData): Promise<EmailResponse> {
  try {
    if (!resend) {
      return { success: false, error: "Email service not configured" }
    }

    const { data: emailData, error } = await resend.emails.send({
      from: "Ahmed Faiz <noreply@yourdomain.com>",
      to: [data.email],
      subject: "تأكيد استلام رسالتك - أحمد فايز مشرح",
      html: generateConfirmationEmailHTML(data),
      headers: {
        "X-Priority": "3",
        "X-Mailer": "Ahmed Faiz Portfolio v2.1.0",
      },
    })

    if (error) {
      console.error("Error sending confirmation email:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data: emailData }
  } catch (error) {
    console.error("Error sending confirmation email:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "حدث خطأ في إرسال رسالة التأكيد",
    }
  }
}

// Enhanced HTML generation with better security
function generateContactEmailHTML(data: ContactFormData): string {
  const safeData = {
    name: escapeHtml(data.name),
    email: escapeHtml(data.email),
    subject: escapeHtml(data.subject),
    message: escapeHtml(data.message),
  }

  return `
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>رسالة جديدة من الموقع</title>
    </head>
    <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f9f9f9;">
      <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">رسالة جديدة من موقعك الشخصي</h1>
        </div>
        
        <div style="padding: 30px;">
          <div style="margin-bottom: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 8px; border-right: 4px solid #667eea;">
            <h3 style="margin: 0 0 10px 0; color: #333; font-size: 18px;">معلومات المرسل</h3>
            <p style="margin: 5px 0; color: #666;"><strong>الاسم:</strong> ${safeData.name}</p>
            <p style="margin: 5px 0; color: #666;"><strong>البريد الإلكتروني:</strong> ${safeData.email}</p>
            <p style="margin: 5px 0; color: #666;"><strong>الموضوع:</strong> ${safeData.subject}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #333; font-size: 18px; margin-bottom: 15px;">الرسالة:</h3>
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border: 1px solid #e9ecef;">
              <p style="color: #333; line-height: 1.6; margin: 0; white-space: pre-wrap;">${safeData.message}</p>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; background-color: #f8f9fa; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              تم إرسال هذه الرسالة من نموذج التواصل في موقعك الشخصي
            </p>
            <p style="margin: 5px 0 0 0; color: #666; font-size: 12px;">
              ${new Date().toLocaleString("ar-SA", {
                timeZone: "Asia/Riyadh",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

function generateConfirmationEmailHTML(data: ContactFormData): string {
  const safeData = {
    name: escapeHtml(data.name),
    email: escapeHtml(data.email),
    subject: escapeHtml(data.subject),
    message: escapeHtml(data.message.substring(0, 150)),
  }

  return `
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>تأكيد استلام رسالتك</title>
    </head>
    <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f9f9f9;">
      <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">شكراً لتواصلك معي!</h1>
        </div>
        
        <div style="padding: 30px;">
          <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            مرحباً <strong>${safeData.name}</strong>،
          </p>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            شكراً لك على تواصلك معي من خلال موقعي الشخصي. لقد استلمت رسالتك بخصوص "<strong>${safeData.subject}</strong>" وسأقوم بالرد عليك في أقرب وقت ممكن.
          </p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-right: 4px solid #667eea; margin: 20px 0;">
            <h3 style="margin: 0 0 10px 0; color: #333;">ملخص رسالتك:</h3>
            <p style="margin: 5px 0; color: #666;"><strong>الموضوع:</strong> ${safeData.subject}</p>
            <p style="margin: 5px 0; color: #666;"><strong>الرسالة:</strong></p>
            <p style="color: #666; font-style: italic; margin: 10px 0; padding: 10px; background: white; border-radius: 4px;">
              "${safeData.message}${data.message.length > 150 ? "..." : ""}"
            </p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://github.com/engahmedfaiz" style="display: inline-block; background: #333; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 0 10px 10px 0;">
              GitHub
            </a>
            <a href="https://engahmedfaiz.github.io/portfoli" style="display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 0 10px 10px 0;">
              Portfolio
            </a>
          </div>
          
          <div style="text-align: center; padding: 20px; background-color: #f8f9fa; border-radius: 8px; margin-top: 30px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              مع أطيب التحيات،<br>
              <strong>أحمد فايز مشرح</strong><br>
              مطور ويب وتطبيقات محمولة
            </p>
            <p style="margin: 10px 0 0 0; color: #666; font-size: 12px;">
              engahmedfaiz5@gmail.com | +(967)780138083
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

// Enhanced HTML escaping
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
    "/": "&#x2F;",
    "`": "&#x60;",
    "=": "&#x3D;",
  }
  return text.replace(/[&<>"'`=/]/g, (s) => map[s])
}
