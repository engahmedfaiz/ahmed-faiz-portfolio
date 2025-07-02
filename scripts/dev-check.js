const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

console.log("🔍 فحص المشروع قبل التشغيل...\n")

// فحص الملفات المطلوبة
const requiredFiles = [
  "package.json",
  "next.config.mjs",
  "tailwind.config.js",
  "tsconfig.json",
  "app/layout.tsx",
  "app/page.tsx",
  "app/globals.css",
]

console.log("📁 فحص الملفات المطلوبة...")
for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    console.error(`❌ الملف المطلوب غير موجود: ${file}`)
    process.exit(1)
  }
  console.log(`✅ ${file}`)
}

// فحص المتغيرات البيئية
console.log("\n🔧 فحص المتغيرات البيئية...")
if (!fs.existsSync(".env.local") && !fs.existsSync(".env")) {
  console.log("⚠️  لا يوجد ملف .env - سيتم استخدام القيم الافتراضية")
  console.log("💡 انسخ .env.example إلى .env.local لتخصيص الإعدادات")
}

// فحص التبعيات
console.log("\n📦 فحص التبعيات...")
try {
  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"))
  const requiredDeps = ["next", "react", "react-dom", "framer-motion", "lucide-react", "tailwindcss"]

  for (const dep of requiredDeps) {
    if (!packageJson.dependencies[dep] && !packageJson.devDependencies[dep]) {
      console.error(`❌ التبعية المطلوبة غير موجودة: ${dep}`)
      process.exit(1)
    }
    console.log(`✅ ${dep}`)
  }
} catch (error) {
  console.error("❌ خطأ في قراءة package.json:", error.message)
  process.exit(1)
}

// فحص TypeScript
console.log("\n🔍 فحص TypeScript...")
try {
  execSync("npx tsc --noEmit", { stdio: "pipe" })
  console.log("✅ TypeScript صحيح")
} catch (error) {
  console.error("❌ أخطاء TypeScript:")
  console.error(error.stdout?.toString() || error.message)
  process.exit(1)
}

// فحص Next.js config
console.log("\n⚙️  فحص إعدادات Next.js...")
try {
  const nextConfig = require("./next.config.mjs")
  console.log("✅ إعدادات Next.js صحيحة")
} catch (error) {
  console.error("❌ خطأ في next.config.mjs:", error.message)
  process.exit(1)
}

console.log("\n🎉 جميع الفحوصات نجحت!")
console.log("🚀 يمكنك الآن تشغيل المشروع بأمان")
console.log("\n📝 أوامر التشغيل:")
console.log("   npm run dev     - تشغيل التطوير")
console.log("   npm run build   - بناء الإنتاج")
console.log("   npm run start   - تشغيل الإنتاج")
