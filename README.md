# Maninder.co.in - Personal Portfolio

A modern, high-performance personal portfolio website built with Next.js 15, showcasing projects, travel logs, and personal achievements.

![Portfolio Preview](https://maninder.co.in/og-image.png)

## ✨ Features

- **Bento Grid Layout**: A responsive, masonry-style grid for showcasing projects and achievements.
- **Dynamic Content**: Powered by Supabase for real-time updates of projects, travel logs, and running stats.
- **Dark Mode**: Fully supported dark/light theme with system preference detection.
- **Interactive UI**: Smooth animations, glassmorphism effects, and responsive design.
- **Newsletter**: Integrated newsletter subscription with Supabase backend.
- **SEO Optimized**: Built-in SEO best practices with dynamic metadata.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL)
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- A Supabase project

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Maninder-mike/maninder_co_in.git
   cd maninder_co_in
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🗄️ Database Schema

The project uses the following Supabase tables:

- `projects`: Portfolio projects with details and links.
- `travel_logs`: Travel stories and photo galleries.
- `running_logs`: Personal running records and stats.
- `newsletter_subscribers`: Email subscribers list.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by [Maninder](https://maninder.co.in)
