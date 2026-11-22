# Pamzz Gold Store – Luxury Gold Jewelry Website

A stunning, premium, fully responsive single-page landing website for **Pamzz Gold Store**, based in Kubwa, Abuja, Federal Capital Territory, Nigeria.

## Technology Stack
- **React 19**
- **Vite**
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React** (Icons)

## Project Structure
```text
├── public/
│   └── assets/
│       └── aistudio/        # Authentic store product images
├── src/
│   ├── App.tsx              # Main application component with all 7 sections
│   ├── index.css            # Tailwind & global styling
│   └── main.tsx             # React DOM entry point
├── index.html               # HTML entry point with SEO & OpenGraph meta tags
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite bundler configuration
└── vercel.json              # Vercel deployment configuration
```

## Getting Started

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Development Server
Run the local development server on port 3000:
```bash
npm run dev
```

### 3. Production Build
Build the project for production:
```bash
npm run build
```

## Vercel Deployment Instructions
1. Push your complete project repository to GitHub.
2. Log in to [Vercel](https://vercel.com) and click **New Project**.
3. Import your GitHub repository.
4. Vercel will automatically detect **Vite** as the Framework Preset:
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**.
