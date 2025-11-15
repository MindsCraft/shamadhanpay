# Technology Stack

## Framework & Core Technologies
- **Next.js 14.2.5** - React framework with SSR/SSG capabilities
- **React 18.3.1** - UI library
- **Bootstrap 5.3.3** + **React Bootstrap 2.10.2** - Component library and responsive grid
- **Tailwind CSS 3.4.1** - Utility-first CSS framework

## Key Dependencies
- **Axios 1.6.8** - HTTP client for API requests
- **Chart.js 4.4.3** + **React-ChartJS-2 5.2.0** + **Recharts 2.12.7** - Data visualization
- **React Player 2.16.0** - Video/media player
- **Swiper 11.1.9** + **React Slick 0.30.2** - Carousel/slider components
- **React Table 7.8.0** - Table management
- **React Circular Progressbar 2.1.0** - Progress indicators

## Build System & Development
- **PostCSS** - CSS processing
- **ESLint** - Code linting via Next.js

## Common Commands
```bash
# Development
npm run dev          # Start development server on localhost:3000

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint checks
```

## Configuration Notes
- Uses `jsconfig.json` with path mapping (`@/*` → `./src/*`)
- React Strict Mode enabled
- Custom Tailwind color palette with brand-specific colors (Mbrand*, Msecondary*, etc.)
- Bootstrap and Tailwind CSS coexist in the project