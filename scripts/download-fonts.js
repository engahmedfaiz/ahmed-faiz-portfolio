const https = require("https")
const fs = require("fs")
const path = require("path")

console.log("📥 تحميل الخطوط محلياً...")

// إنشاء مجلد الخطوط
const fontsDir = path.join(process.cwd(), "public", "fonts")
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true })
}

// روابط الخطوط
const fonts = [
  // Cairo Font
  {
    name: "cairo-400",
    url: "https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvalIhTp2mxdt0UX8gO3BP.woff2",
    weight: "400",
  },
  {
    name: "cairo-500",
    url: "https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvalIkTJ2mxdt0UX8gO3BP.woff2",
    weight: "500",
  },
  {
    name: "cairo-600",
    url: "https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvalIvQp2mxdt0UX8gO3BP.woff2",
    weight: "600",
  },
  {
    name: "cairo-700",
    url: "https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvalIuQZ2mxdt0UX8gO3BP.woff2",
    weight: "700",
  },
  // Inter Font
  {
    name: "inter-400",
    url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2",
    weight: "400",
  },
  {
    name: "inter-500",
    url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiJ-Ek-_EeA.woff2",
    weight: "500",
  },
  {
    name: "inter-600",
    url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hiJ-Ek-_EeA.woff2",
    weight: "600",
  },
  {
    name: "inter-700",
    url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hiJ-Ek-_EeA.woff2",
    weight: "700",
  },
]

// دالة تحميل الخط
function downloadFont(font) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(fontsDir, `${font.name}.woff2`)

    // تحقق من وجود الملف
    if (fs.existsSync(filePath)) {
      console.log(`✅ ${font.name} موجود بالفعل`)
      resolve()
      return
    }

    const file = fs.createWriteStream(filePath)

    https
      .get(font.url, (response) => {
        if (response.statusCode !== 200) {
          reject(new Error(`فشل تحميل ${font.name}: ${response.statusCode}`))
          return
        }

        response.pipe(file)

        file.on("finish", () => {
          file.close()
          console.log(`✅ تم تحميل ${font.name}`)
          resolve()
        })
      })
      .on("error", (err) => {
        fs.unlink(filePath, () => {}) // حذف الملف في حالة الخطأ
        reject(err)
      })
  })
}

// تحميل جميع الخطوط
async function downloadAllFonts() {
  try {
    console.log(`📦 بدء تحميل ${fonts.length} خط...`)

    for (const font of fonts) {
      await downloadFont(font)
    }

    console.log("🎉 تم تحميل جميع الخطوط بنجاح!")
    console.log(`📁 الخطوط محفوظة في: ${fontsDir}`)

    // إنشاء ملف CSS
    generateFontCSS()
  } catch (error) {
    console.error("❌ خطأ في تحميل الخطوط:", error.message)
    process.exit(1)
  }
}

// إنشاء ملف CSS للخطوط
function generateFontCSS() {
  const cssContent = `
/* Cairo Font - Local */
@font-face {
  font-family: 'Cairo';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/cairo-400.woff2') format('woff2');
  unicode-range: U+0600-06FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE80-FEFC;
}

@font-face {
  font-family: 'Cairo';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('/fonts/cairo-500.woff2') format('woff2');
  unicode-range: U+0600-06FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE80-FEFC;
}

@font-face {
  font-family: 'Cairo';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('/fonts/cairo-600.woff2') format('woff2');
  unicode-range: U+0600-06FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE80-FEFC;
}

@font-face {
  font-family: 'Cairo';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/fonts/cairo-700.woff2') format('woff2');
  unicode-range: U+0600-06FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE80-FEFC;
}

/* Inter Font - Local */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/inter-400.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('/fonts/inter-500.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('/fonts/inter-600.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/fonts/inter-700.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* Font Variables */
:root {
  --font-cairo: 'Cairo', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --font-inter: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Fallback for older browsers */
.font-cairo {
  font-family: var(--font-cairo);
}

.font-inter {
  font-family: var(--font-inter);
}
`

  const cssPath = path.join(process.cwd(), "app", "fonts.css")
  fs.writeFileSync(cssPath, cssContent.trim())
  console.log("✅ تم إنشاء ملف fonts.css")
}

// تشغيل التحميل
downloadAllFonts()
