# Project Structure & Organization

## Directory Structure
```
src/
├── Components/          # Reusable UI components
│   ├── Accordion/      # Accordion components
│   ├── Button/         # Button components
│   ├── Layout/         # Layout wrapper components
│   ├── Nav/            # Navigation components (Navbar, Footer)
│   ├── Provider/       # Context providers
│   ├── Section/        # Page section components
│   ├── Slide/          # Slider/carousel components
│   └── svg/            # SVG icon components
├── pages/              # Next.js pages (file-based routing)
│   ├── api/            # API routes
│   ├── blog/           # Blog pages
│   ├── case-study/     # Case study pages
│   ├── podcast/        # Podcast pages
│   ├── webinar/        # Webinar pages
│   ├── _app.js         # App wrapper
│   ├── _document.js    # Document wrapper
│   └── [feature].jsx   # Feature pages
└── styles/             # Global styles
    ├── font.css        # Font definitions
    └── globals.css     # Global CSS + Tailwind

public/
├── images/             # Static images and SVGs
├── videos/             # Video assets
└── [icons]             # Favicon and brand icons
```

## Naming Conventions
- **Components**: PascalCase (e.g., `ActionBtn`, `SecSlideStep`)
- **Files**: PascalCase for components, kebab-case for pages
- **CSS Classes**: Tailwind utilities + custom classes with descriptive names
- **Images**: Descriptive names, often with spaces or parentheses (legacy naming)

## Component Architecture
- **Layout Component**: Wraps pages with common elements (navbar, footer, head)
- **Provider Pattern**: Uses React Context (e.g., `HostnameProvider`)
- **Compound Components**: Complex UI broken into smaller, focused components
- **Fragment Usage**: Extensive use of React.Fragment for clean JSX

## Styling Approach
- **Hybrid CSS**: Tailwind utilities + Bootstrap grid + custom CSS
- **Custom Color System**: Brand-specific color palette (Mbrand*, Msecondary*, etc.)
- **Responsive Design**: Mobile-first with custom breakpoints (xxs, xx, ss, xs)
- **Component-Scoped Styles**: CSS classes often tied to specific component behavior

## File Organization Rules
- Components grouped by functionality in dedicated folders
- Each major component type has its own directory
- Pages follow Next.js file-based routing conventions
- Static assets organized by type (images, videos)
- Shared utilities and providers in dedicated folders