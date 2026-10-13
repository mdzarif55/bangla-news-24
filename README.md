
# 📰 Bangla News 24

A modern, responsive Bangla news website built with Next.js, React, TypeScript, and Tailwind CSS. Browse the latest news, explore categories, read full articles, and discover the most-read stories in one place.

## 🌐 Live Website

**Live Demo:** [Add your deployed website URL here]

## ✨ Features

- **Latest News:** Display the latest headlines in a scrolling news ticker.
- **Category-Based News:** Browse news by categories such as Bangladesh, World, Politics, Sports, and more, depending on the API data.
- **News Details:** Read full articles with images, publication information, and article content.
- **Most-Read News:** Discover popular articles through a dedicated most-read section.
- **Responsive Design:** Optimized layouts for mobile, tablet, and desktop.
- **Interactive UI:** Smooth hover effects, animated news cards, and clickable headlines.
- **Dynamic Navigation:** Navigate between the homepage, categories, and article details.
- **Bengali Interface:** Designed for Bangla-speaking readers.

## 🛠️ Technologies Used

- **Next.js** — React framework and App Router
- **React** — UI components
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling and responsive layouts
- **DaisyUI** — UI components and themes
- **Next.js Image** — Image optimization
- **React Marquee Text** — Scrolling news headlines
- **News API** — External news data source

## 📡 API

This project uses the following API endpoints:

| Endpoint | Purpose |
|---|---|
| `/api/news?limit=10` | Latest news headlines |
| `/api/news/sections` | Homepage news sections |
| `/api/news/most-read` | Most-read news |
| `/api/categories` | News categories |
| `/api/category/{categoryId}` | Category-specific news |
| `/api/article/{newsId}` | Full article details |

**API Base URL:** `https://news-api-v2.vercel.app`

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm
- Git

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd YOUR_PROJECT_FOLDER
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the website

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```text
src/
└── app/
    ├── components/
    │   ├── Header.tsx
    │   ├── NavLinks.tsx
    │   ├── Marquee.tsx
    │   ├── MainNews.tsx
    │   ├── NewsCard.tsx
    │   ├── MostRead.tsx
    │   └── Footer.tsx
    ├── category/
    │   └── [categoryId]/
    │       └── page.tsx
    ├── news/
    │   └── [newsId]/
    │       └── page.tsx
    ├── layout.tsx
    ├── page.tsx
    └── globals.css
```

*Note: The structure above represents the main files used in the project. Your actual folder structure may vary.*

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## ☁️ Deployment

This project can be deployed on [Vercel](https://bangla-news-24.vercel.app).

1. Push your project to GitHub.
2. Import the repository into Vercel.
3. Configure any required environment variables.
4. Deploy the project.
5. Open the generated deployment URL.

## 👨‍💻 Author

**Your Name**

- GitHub: [Your GitHub Profile](https://github.com/mdzarif55)

## 📄 License

This project is intended for learning and portfolio purposes. Add a license file if you plan to distribute it under a specific open-source license.
