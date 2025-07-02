#!/bin/bash

echo "🏗️  فحص البناء الشامل"
echo "====================="

# تنظيف الملفات السابقة
echo "🧹 تنظيف الملفات المؤقتة..."
rm -rf .next
rm -rf out
rm -rf dist
rm -rf node_modules/.cache

# فحص package.json
echo "📦 فحص package.json..."
if [ ! -f "package.json" ]; then
    echo "❌ ملف package.json غير موجود!"
    exit 1
fi

# فحص الملفات المطلوبة
echo "📁 فحص الملفات المطلوبة..."
required_files=(
    "app/layout.tsx"
    "app/page.tsx"
    "app/globals.css"
    "next.config.mjs"
    "tailwind.config.js"
    "tsconfig.json"
)

for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ الملف المطلوب غير موجود: $file"
        exit 1
    fi
    echo "✅ $file"
done

# تثبيت التبعيات
echo "📥 تثبيت التبعيات..."
npm ci --silent

if [ $? -ne 0 ]; then
    echo "❌ فشل في تثبيت التبعيات!"
    exit 1
fi

# فحص TypeScript
echo "🔍 فحص TypeScript..."
npx tsc --noEmit

if [ $? -ne 0 ]; then
    echo "❌ أخطاء TypeScript موجودة!"
    exit 1
fi

# فحص ESLint
echo "🔍 فحص ESLint..."
npm run lint:check

if [ $? -ne 0 ]; then
    echo "⚠️  تحذيرات ESLint موجودة (لن توقف البناء)"
fi

# فحص الخطوط
echo "📝 فحص الخطوط..."
if [ ! -d "public/fonts" ]; then
    echo "⚠️  مجلد الخطوط غير موجود، سيتم إنشاؤه..."
    mkdir -p public/fonts
fi

if [ ! -f "app/fonts.css" ]; then
    echo "⚠️  ملف fonts.css غير موجود، سيتم تحميل الخطوط..."
    npm run download-fonts
fi

# بناء المشروع
echo "🏗️  بناء المشروع..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ فشل في بناء المشروع!"
    exit 1
fi

# فحص ملفات البناء
echo "📊 فحص ملفات البناء..."
if [ ! -d ".next" ]; then
    echo "❌ مجلد .next غير موجود!"
    exit 1
fi

# حساب حجم البناء
build_size=$(du -sh .next 2>/dev/null | cut -f1)
echo "📏 حجم البناء: $build_size"

# اختبار التشغيل
echo "🚀 اختبار التشغيل..."
timeout 10s npm start &
server_pid=$!

sleep 5

# فحص إذا كان الخادم يعمل
if kill -0 $server_pid 2>/dev/null; then
    echo "✅ الخادم يعمل بنجاح"
    kill $server_pid
else
    echo "❌ فشل في تشغيل الخادم"
    exit 1
fi

echo ""
echo "🎉 نجح فحص البناء الشامل!"
echo "📊 ملخص النتائج:"
echo "   ✅ TypeScript صحيح"
echo "   ✅ البناء نجح"
echo "   ✅ الخادم يعمل"
echo "   📏 حجم البناء: $build_size"
echo ""
echo "🚀 المشروع جاهز للنشر!"
