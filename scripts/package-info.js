const fs = require("fs")
const path = require("path")

console.log("📊 معلومات المشروع")
console.log("==================")

// قراءة package.json
const packagePath = path.join(process.cwd(), "package.json")
const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"))

console.log(`📦 اسم المشروع: ${packageJson.name}`)
console.log(`🔢 الإصدار: ${packageJson.version}`)
console.log(`📝 الوصف: ${packageJson.description || "غير محدد"}`)

// إحصائيات التبعيات
const deps = Object.keys(packageJson.dependencies || {})
const devDeps = Object.keys(packageJson.devDependencies || {})

console.log(`\n📚 التبعيات:`)
console.log(`   - الإنتاج: ${deps.length}`)
console.log(`   - التطوير: ${devDeps.length}`)
console.log(`   - المجموع: ${deps.length + devDeps.length}`)

// إحصائيات الملفات
function countFiles(dir, extensions = [".js", ".ts", ".tsx", ".jsx"]) {
  let count = 0

  if (!fs.existsSync(dir)) return 0

  const files = fs.readdirSync(dir, { withFileTypes: true })

  for (const file of files) {
    if (file.isDirectory() && !file.name.startsWith(".") && file.name !== "node_modules") {
      count += countFiles(path.join(dir, file.name), extensions)
    } else if (file.isFile()) {
      const ext = path.extname(file.name)
      if (extensions.includes(ext)) {
        count++
      }
    }
  }

  return count
}

console.log(`\n📁 إحصائيات الملفات:`)
console.log(`   - ملفات React/Next.js: ${countFiles(".", [".tsx", ".jsx"])}`)
console.log(`   - ملفات TypeScript: ${countFiles(".", [".ts"])}`)
console.log(`   - ملفات CSS: ${countFiles(".", [".css"])}`)
console.log(`   - ملفات JSON: ${countFiles(".", [".json"])}`)

// حجم المجلدات
function getFolderSize(dir) {
  if (!fs.existsSync(dir)) return 0

  let size = 0
  const files = fs.readdirSync(dir, { withFileTypes: true })

  for (const file of files) {
    const filePath = path.join(dir, file.name)
    if (file.isDirectory()) {
      size += getFolderSize(filePath)
    } else {
      size += fs.statSync(filePath).size
    }
  }

  return size
}

function formatBytes(bytes) {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
}

console.log(`\n💾 أحجام المجلدات:`)
console.log(`   - app/: ${formatBytes(getFolderSize("app"))}`)
console.log(`   - components/: ${formatBytes(getFolderSize("components"))}`)
console.log(`   - public/: ${formatBytes(getFolderSize("public"))}`)
console.log(`   - scripts/: ${formatBytes(getFolderSize("scripts"))}`)

// معلومات Git
try {
  const { execSync } = require("child_process")
  const gitBranch = execSync("git branch --show-current", { encoding: "utf8" }).trim()
  const gitCommits = execSync("git rev-list --count HEAD", { encoding: "utf8" }).trim()

  console.log(`\n🔀 معلومات Git:`)
  console.log(`   - الفرع الحالي: ${gitBranch}`)
  console.log(`   - عدد الكوميتات: ${gitCommits}`)
} catch (error) {
  console.log(`\n🔀 Git غير متاح أو المشروع ليس مستودع Git`)
}

// الأوامر المتاحة
console.log(`\n🛠️  الأوامر المتاحة:`)
const scripts = packageJson.scripts || {}
Object.keys(scripts).forEach((script) => {
  console.log(`   - npm run ${script}`)
})

console.log(`\n✨ معلومات إضافية:`)
console.log(`   - Node.js المطلوب: ${packageJson.engines?.node || "غير محدد"}`)
console.log(`   - npm المطلوب: ${packageJson.engines?.npm || "غير محدد"}`)
console.log(`   - الترخيص: ${packageJson.license || "غير محدد"}`)
console.log(`   - المؤلف: ${packageJson.author || "غير محدد"}`)

console.log(`\n🎯 تم إنشاء التقرير بنجاح!`)
