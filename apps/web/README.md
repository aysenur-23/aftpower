# AFT Power Website

This is the official website for **AFT Power**, built with **Next.js 14**, **Tailwind CSS**, and **next-intl** for internationalization.

## 🚀 Features

- **Modern UI/UX**: Premium design with glassmorphism, gradients, and micro-animations.
- **Responsive & Adaptive**: Fully optimized for mobile, tablet, and desktop devices.
- **Multilingual Support**: Native support for **English (en)**, **Turkish (tr)**, and **Arabic (ar)** with RTL layout adjustments.
- **Dynamic Product Pages**: Catalog system with detailed specifications, galleries, and filtering.
- **Functional Forms**: Integrated "Contact" and "Get a Quote" forms powered by **Nodemailer** (SMTP).

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/aysenur-23/revtech-website.git
cd revtech-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment
Create a `.env.local` file in the root directory and add your SMTP credentials to enable email functionality:

```env
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=aysenuraslan@aftpowertech.com
SMTP_PASS=YOUR_PASSWORD_HERE
SMTP_FROM_EMAIL=aysenuraslan@aftpowertech.com
SMTP_TO_EMAIL=info@aftpowertech.com
```

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

- **`src/app`**: Next.js App Router structure (Pages & API routes).
- **`src/components`**: Reusable UI components (Hero, Services, Products, etc.).
- **`messages`**: Translation JSON files for i18n (`en.json`, `tr.json`, `ar.json`).
- **`public`**: Static assets (images, logos).

## 📦 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Email**: Nodemailer

## 📝 License

© 2024 AFT Power. All rights reserved.
