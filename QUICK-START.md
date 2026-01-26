# Quick Start - Adding Your Content

## 1. Add Publications (2 minutes)

Edit `/public/data/publications.csv`:
```csv
Year,Authors,Title,Venue,Link,PDF
2025,Your Name et al.,Your Paper Title,Conference Name,https://link-to-paper.com,/data/pdfs/paper1.pdf
2024,Your Name,Another Paper,Journal Name,https://another-link.com,/data/pdfs/paper2.pdf
```

Then add your PDFs to `/public/data/pdfs/`

## 2. Add Your CV (1 minute)

Simply place your CV as:
```
/public/data/cv.pdf
```

The download button on the About page is already configured!

## 3. Add Project Images (2 minutes)

1. Place images in `/public/data/project-images/`:
   - `neon-mind.jpg`
   - `retro-synth.jpg`
   - `data-monolith.jpg`

2. If using different filenames, update `constants.tsx`:
```typescript
export const PROJECTS: Project[] = [
    {
        id: 'PR01',
        title: 'NEON-MIND',
        description: '...',
        icon: 'memory',
        image: '/data/project-images/your-image.jpg',  // ← Update this
        action: 'Launch Viewer',
        specs: ['Baud: 9600', 'Latency: 12ms', 'Freq: 4.2Hz']
    },
    // ... more projects
];
```

## 4. Customize Project Descriptions

Edit `/constants.tsx` to update:
- Project titles
- Descriptions
- Icons
- Specs

## 5. Update Research Content

Edit `/pages/ResearchPage.tsx` to customize:
- Research statement
- Methodology points
- Any additional research information

---

That's it! Your portfolio is ready to go. 🚀

**Development:** `npm run dev`
**Build:** `npm run build`
**Deploy:** `npm run deploy`
