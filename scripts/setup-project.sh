#!/bin/bash

echo "🚀 إعداد مشروع Ahmed Faiz Portfolio"
echo "===================================="

# التحقق من Node.js
echo "🔍 فحص Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js غير مثبت! يرجى تثبيت Node.js 22.11.0 أو أحدث"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2)
echo "✅ Node.js version: $NODE_VERSION"

# التحقق من npm
echo "🔍 فحص npm..."
if ! command -v npm &> /dev/null; then
    echo "❌ npm غير مثبت!"
    exit 1
fi

NPM_VERSION=$(npm -v)
echo "✅ npm version: $NPM_VERSION"

# تثبيت التبعيات
echo "📦 تثبيت التبعيات..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ فشل في تثبيت التبعيات!"
    exit 1
fi

# إنشاء ملف البيئة
echo "🔧 إعداد متغيرات البيئة..."
if [ ! -f ".env.local" ]; then
    cp .env.example .env.local
    echo "✅ تم إنشاء .env.local"
    echo "⚠️  يرجى تعديل .env.local وإضافة RESEND_API_KEY"
else
    echo "✅ .env.local موجود بالفعل"
fi

# تحميل الخطوط
echo "📥 تحميل الخطوط محلياً..."
npm run download-fonts

if [ $? -ne 0 ]; then
    echo "❌ فشل في تحميل الخطوط!"
    exit 1
fi

# فحص المشروع
echo "🔍 فحص المشروع..."
npm run check

if [ $? -ne 0 ]; then
    echo "⚠️  توجد تحذيرات في المشروع"
fi

# إنشاء مجلدات إضافية
echo "📁 إنشاء المجلدات..."
mkdir -p public/images
mkdir -p public/icons
mkdir -p logs

echo ""
echo "🎉 تم إعداد المشروع بنجاح!"
echo ""
echo "📝 الخطوات التالية:"
echo "1. تعديل .env.local وإضافة RESEND_API_KEY"
echo "2. تشغيل المشروع: npm run dev"
echo "3. فتح المتصفح: http://localhost:3000"
echo ""
echo "🔗 روابط مفيدة:"
echo "- الوثائق: README.md"
echo "- Resend API: https://resend.com"
echo "- GitHub: https://github.com/engahmedfaiz"
echo ""
echo "✨ استمتع بالتطوير!"
