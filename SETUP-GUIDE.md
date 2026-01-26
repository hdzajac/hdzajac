# Portfolio Website - Setup Guide

This is your refactored React portfolio website with a clean component architecture.

## 🎯 What's Changed

### 1. **Code Structure Refactored** ✅
The codebase has been reorganized following React best practices:

- **`/pages`** - Individual page components:
  - `HomePage.tsx` - Landing page with overview
  - `ResearchPage.tsx` - Research interests
  - `PublicationsPage.tsx` - Publications loaded from CSV
  - `ProjectsPage.tsx` - Project showcase
  - `AboutPage.tsx` - About me with CV download

- **`/components`** - Reusable UI components:
  - `Sidebar.tsx` - Navigation sidebar
  - `FloatingAscii.tsx` - Decorative floating ASCII elements
  - `Rotating3DMagic.tsx` - 3D ASCII animation background

- **`App.tsx`** - Simplified main component that routes to pages

### 2. **Publications CSV Database** ✅
Created `/public/data/publications.csv` with the following columns:
- Year
- Authors
- Title
- Venue
- Link
- PDF

**To add your publications:**
1. Edit `/public/data/publications.csv`
2. Add your publication PDFs to `/public/data/pdfs/`
3. Update the PDF column with the correct path (e.g., `/data/pdfs/your-paper.pdf`)

### 3. **Downloadable PDFs** ✅
- Publications can have downloadable PDFs
- Place PDF files in `/public/data/pdfs/`
- Update the CSV to reference them

### 4. **Project Images** ✅
- Created `/public/data/project-images/` directory
- Add your project images there (recommended: 800x600px or 4:3 ratio)
- Images are referenced in `constants.tsx` - update the paths to match your files

**Current project image paths:**
- `/data/project-images/neon-mind.jpg`
- `/data/project-images/retro-synth.jpg`
- `/data/project-images/data-monolith.jpg`

### 5. **CV Download on About Page** ✅
- The About page includes a CV download button
- Place your CV as `/public/data/cv.pdf`
- The button automatically links to `/data/cv.pdf`

### 6. **3D Magic ASCII Animation** ✅
- The background animation has been kept (it's already a sophisticated 3D rotating donut/torus)
- It's beautiful and matches the aesthetic of the site

## 📁 File Structure

```
hdzajac/
├── components/
│   ├── AssistantConsole.tsx
│   ├── FloatingAscii.tsx
│   ├── Rotating3DMagic.tsx
│   └── Sidebar.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── ResearchPage.tsx
│   ├── PublicationsPage.tsx
│   ├── ProjectsPage.tsx
│   └── AboutPage.tsx
├── public/
│   └── data/
│       ├── publications.csv
│       ├── cv.pdf (add your CV here)
│       ├── pdfs/
│       │   └── (place publication PDFs here)
│       └── project-images/
│           └── (place project images here)
├── App.tsx
├── constants.tsx
├── types.ts
└── ...
```

## 🚀 Next Steps

1. **Add Your Publications:**
   - Edit `/public/data/publications.csv`
   - Add your publication PDFs to `/public/data/pdfs/`

2. **Add Your CV:**
   - Place your CV as `/public/data/cv.pdf`

3. **Add Project Images:**
   - Add images to `/public/data/project-images/`
   - Update the paths in `constants.tsx` if needed

4. **Update Content:**
   - Edit `constants.tsx` to update projects and other constants
   - Customize pages in the `/pages` directory

## 🧪 Testing

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## 📝 Notes

- The site uses React 19 with TypeScript
- Vite is the build tool
- All navigation is handled through the `Section` enum
- The CSV is loaded client-side in `PublicationsPage.tsx`
- Material Symbols icons are used throughout

Enjoy your refactored, modular portfolio! 🎉
