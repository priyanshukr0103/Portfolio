# Portfolio

## 📌 Overview
This is a portfolio project built with **Next.js** and **TypeScript**, featuring a structured and modular component-based architecture. It includes various UI components, layouts, pages, assets, and utility functions.

## 🏗️ Project Structure

```
portfolio_Tarang/
├── app/
│   ├── components/
│   │   ├── card-item.tsx
│   │   ├── project-card.tsx
│   │   ├── navbar.tsx
│   │   ├── index.tsx
│   │   ├── layout.tsx
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── page.tsx
│
├── components/
│   ├── ui/
│   │   ├── accordion.tsx
│   │   ├── alert-dialog.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── calendar.tsx
│   │   ├── dialog.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── progress.tsx
│   │   ├── select.tsx
│   │   ├── slider.tsx
│   │   ├── table.tsx
│   │   ├── toast.tsx
│   │   ├── toggle.tsx
│
├── hooks/
│   ├── use-toast.ts
│   ├── use-modal.ts
│
├── public/
│   ├── assets/
│   │   ├── placeholder-logo.png
│   │   ├── placeholder-img.png
│   │   ├── project-image.png
│   │   ├── resume.pdf
│
├── styles/
│   ├── globals.css
│   ├── theme.css
│
├── .gitignore
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
└── README.md
```

## 🚀 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/tarang07q/Portfolio.git
   ```
2. Navigate to the project directory:
   ```sh
   cd portfolio_Tarang
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📂 Key Features
- **Modular Component Design**: UI elements are reusable and well-structured.
- **Next.js Integration**: Server-side rendering and static generation.
- **Tailwind CSS**: Responsive and modern UI styling.
- **Custom Hooks**: Enhanced functionality using React hooks.
- **Assets Management**: Organized storage for images and documents.
- **Dark/Light Mode**: Theme toggle for better user experience.
- **Responsive Design**: Works on all device sizes.

## 🚢 Deployment

### Deploying to Vercel

The easiest way to deploy this portfolio is to use the [Vercel Platform](https://vercel.com).

1. Push your code to a GitHub repository.
2. Import your project to Vercel:
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and use the optimal build settings
   - Click "Deploy"

3. Your site will be deployed to a URL like `https://your-portfolio.vercel.app`

### Environment Variables

Make sure to set up the following environment variables in your Vercel project:

- `MONGODB_URI`: Your MongoDB connection string
- `NEXT_PUBLIC_BASE_URL`: The base URL of your deployed application
