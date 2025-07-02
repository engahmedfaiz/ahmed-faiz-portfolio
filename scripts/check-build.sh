#!/bin/bash

echo "🚀 بدء فحص المشروع..."
echo "================================"

# تنظيف الملفات المؤقتة
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

# تثبيت التبعيات
echo "📥 تثبيت التبعيات..."
npm install

# فحص TypeScript
echo "🔍 فحص TypeScript..."
npm run type-check
if [ $? -ne 0 ]; then
    echo "❌ خطأ في TypeScript!"
    exit 1
fi

# فحص ESLint
echo "🔍 فحص ESLint..."
npm run lint:check
if [ $? -ne 0 ]; then
    echo "⚠️  تحذيرات ESLint موجودة"
fi

# بناء المشروع
echo "🏗️  بناء المشروع..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ فشل في بناء المشروع!"
    exit 1
fi

echo "✅ تم فحص المشروع بنجاح!"
echo "🎉 المشروع جاهز للتشغيل!"
