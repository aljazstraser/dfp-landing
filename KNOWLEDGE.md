# KNOWLEDGE.md - DragonFlyPads Next.js Project

## Project Overview

**Project Name:** DragonFlyPads Next.js Template  
**Version:** 0.1.0  
**Framework:** Next.js 16.0.7 with React 19.1.2  
**Template Source:** ThemePure  
**Current Status:** Upgraded to latest stable versions (Dec 2025)

## ⚠️ CRITICAL DEVELOPMENT RULES

### Terminal Command Execution
**NEVER run commands using `&&` or stack multiple commands together. ALWAYS run commands one by one, separately.**

- ❌ **DO NOT**: `cd d:\www_dfp && git status && npm run dev`
- ✅ **DO**: Run each command separately:
  1. `cd d:\www_dfp`
  2. `git status`
  3. `npm run dev`

This rule must be followed at all times to ensure proper command execution and error handling.

## Project Description

This is a modern, responsive business/technology website template built with Next.js. The project appears to be a professional technology services company website featuring multiple pages including home, about, services, portfolio, team, blog, and contact sections.

## Technical Stack

### Core Technologies
- **Next.js 16.0.7** - React framework with App Router (upgraded Dec 2025)
- **React 19.1.2** - Frontend library (upgraded Dec 2025)
- **Bootstrap 5.2.3** - CSS framework
- **Sass** - CSS preprocessor
- **TypeScript Support** - Via jsconfig.json

### Key Dependencies
- **@splidejs/react-splide** (0.7.12) - Slider/carousel functionality
- **react-modal-video** (2.0.0) - Video modal components
- **react-18-image-lightbox** (5.1.4) - Image lightbox functionality
- **react-countup** (6.4.2) - Animated counters
- **react-intersection-observer** (9.4.3) - Scroll-based animations
- **swiper** (9.2.2) - Touch slider
- **wowjs** (1.1.3) - Scroll animations
- **slick-carousel** (1.8.1) - Carousel functionality

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── homes/           # Home page variants (home, home-2, home-3, home-dfp, home-dfp-custom)
│   ├── about/           # About page components
│   ├── blog/            # Blog-related components
│   ├── contact/         # Contact page components
│   ├── portfolio/       # Portfolio components
│   ├── service/         # Service page components
│   └── team/            # Team page components
├── common/              # Shared components
│   ├── blog-area.jsx
│   ├── brand-area.jsx
│   ├── breadcrumb/
│   ├── count.jsx
│   ├── industry-area.jsx
│   ├── seo.jsx
│   ├── social-links.jsx
│   ├── team-area.jsx
│   ├── testimonial-area.jsx
│   └── video-area.jsx
├── data/                # Static data files
│   ├── service-data.js
│   ├── portfolio-data.js
│   ├── team-data.js
│   ├── blog-data.js
│   └── post-data.js
├── forms/               # Form components
│   ├── contact-form.jsx
│   ├── comment-form.jsx
│   └── service-contact-form.jsx
├── hooks/               # Custom React hooks
│   ├── scroll-to-top.js
│   └── use-sticky.js
├── layout/              # Layout components
│   ├── headers/         # Header variants
│   ├── footers/         # Footer variants
│   └── wrapper.jsx      # Main layout wrapper
├── modals/              # Modal components
│   ├── ImagePopup.jsx
│   ├── search-popup.jsx
│   ├── sidebar.jsx
│   └── video-popup.jsx
├── pages/               # Next.js pages
│   ├── _app.jsx         # App wrapper
│   ├── _document.jsx    # Document structure
│   ├── index.jsx        # Main home page (based on home-2, for customization)
│   ├── home-1.jsx       # Original home page (preserved)
│   ├── home-2.jsx       # Alternative home page
│   ├── home-3.jsx       # Alternative home page
│   ├── about.jsx        # About page
│   ├── service.jsx      # Services page
│   ├── portfolio.jsx    # Portfolio page
│   ├── team.jsx         # Team page
│   ├── blog.jsx         # Blog listing
│   ├── contact.jsx      # Contact page
│   └── 404.jsx          # Error page
├── styles/              # Global styles
│   └── index.scss       # Main SCSS entry point
├── svg/                 # SVG icon components
└── utils/               # Utility functions
    └── utils.js         # Animation utilities
```

## Key Features

### Pages & Sections
1. **Main Home Page (index.jsx)** - Uses home-dfp-custom component with DragonFlyPads content
2. **Original Home Page (home-1.jsx)** - Preserved original template with hero slider, about, features, services, testimonials, FAQ, blog
3. **Alternative Home Pages** - home-2.jsx and home-3.jsx for different layouts
4. **DragonFlyPads Component (home-dfp)** - Independent copy of home-2 for reference
5. **DragonFlyPads Custom (home-dfp-custom)** - Complete DragonFlyPads homepage with dfp-* components
6. **About Page** - Company information, team showcase, support area
7. **Services Page** - Service listings with detailed descriptions
8. **Portfolio Page** - Project showcase with filtering
9. **Team Page** - Team member profiles
10. **Blog Page** - Blog posts with categories and search
11. **Contact Page** - Contact form, map integration, contact information

### Components Architecture
- **Modular Design** - Each page section is a separate component
- **Reusable Components** - Common elements like headers, footers, forms
- **Data-Driven** - Content managed through data files
- **Responsive Design** - Mobile-first approach with Bootstrap

### Styling System
- **SCSS Architecture** - Organized in components, layout, theme, utils
- **Bootstrap Integration** - Custom Bootstrap theme
- **Animation Support** - WOW.js for scroll animations
- **Font Integration** - Google Fonts (DM Sans, Poppins, Raleway)

## Development History & Current State

### Initial Setup (Current Phase)
- ✅ Project structure established
- ✅ Dependencies configured
- ✅ Basic routing implemented
- ✅ Component architecture in place
- ✅ Styling system configured
- ✅ Static data structure created

### Content Structure
The project uses a data-driven approach with static JSON-like data files:
- **Services**: 5 main services (Product Development, VoIP, Cloud Backup, Mobile Networking, Data Backup)
- **Portfolio**: 6 portfolio items across different categories (Marketing, Design, Business, Technology)
- **Team**: 10 team members with various roles (Developers, Designers)
- **Blog**: Structured blog data with categories and tags

### Current Development Status
- **Phase**: Initial development and customization
- **Next Steps**: 
  - Install dependencies (`npm install`)
  - Start development server (`npm run dev`)
  - Customize content and branding
  - Deploy to Vercel

## Configuration Files

### package.json
- Next.js 13.3.0 with React 18.2.0
- Development scripts configured
- All necessary dependencies included

### next.config.js
- React Strict Mode disabled
- Basic Next.js configuration

### jsconfig.json
- Path aliases configured (@/*, @assets/*)
- TypeScript-like path resolution

## Assets & Resources

### Images
- **Organized Structure**: Images categorized by purpose (hero, about, blog, portfolio, etc.)
- **Multiple Formats**: PNG, JPG, SVG support
- **Optimized**: Next.js Image component integration

### Fonts
- **Font Awesome Pro**: Icon library
- **Google Fonts**: DM Sans, Poppins, Raleway
- **Custom Fonts**: Local font files included

### Styling
- **SCSS Architecture**: Component-based styling
- **Bootstrap Integration**: Custom theme
- **Animation Libraries**: WOW.js, custom animations

## Development Workflow

### Getting Started
1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Open browser to `http://localhost:3000`

### Build Process
1. Build for production: `npm run build`
2. Start production server: `npm start`
3. Lint code: `npm run lint`

### Deployment
- **Target Platform**: Vercel (configured for Next.js)
- **Repository**: GitHub - https://github.com/flipsum0/dfp ✅ CONNECTED
- **Domain**: TBD (Vercel will provide)

## Customization Points

### Content Updates
- **Data Files**: Update `src/data/` files for content changes
- **Images**: Replace assets in `public/assets/img/`
- **Text Content**: Update component files directly

### Styling Changes
- **SCSS Files**: Modify `public/assets/scss/` for theme changes
- **Bootstrap Variables**: Override in SCSS files
- **Component Styles**: Update individual component styles

### Functionality Additions
- **New Pages**: Add to `src/pages/`
- **New Components**: Add to `src/components/`
- **New Data**: Add to `src/data/`

## Next Development Steps

1. ✅ **Immediate**: Install dependencies and start dev server
2. **Content Customization**: Update branding, content, and images
3. **Feature Enhancement**: Add new functionality as needed
4. **Testing**: Ensure all pages and components work correctly
5. ✅ **Deployment**: GitHub repo and Vercel deployment CONNECTED
6. **SEO Optimization**: Implement proper meta tags and SEO
7. **Performance**: Optimize images and bundle size
8. **Git Workflow**: Start committing and pushing changes

## Notes for Future Development

- The project uses a template-based approach, so customization should focus on content and styling
- All components are functional and ready for customization
- The data structure is flexible and can be easily extended
- The styling system is well-organized and maintainable
- Ready for production deployment with minimal configuration

---

**Last Updated**: Initial project setup complete - Git repository initialized and pushed to GitHub  
**Next Update**: After first customization phase

## DragonFlyPads Customization Phase ✅

### Homepage Restructuring
- ✅ **Original Template Preserved**: `index.jsx` renamed to `home-1.jsx`
- ✅ **New Homepage**: `index.jsx` now uses `home-dfp-custom` component
- ✅ **DragonFlyPads Components**: Created `dfp-*` prefixed components
- ✅ **Clean Architecture**: Original files untouched, custom components separate

### Global Theme Customization
- ✅ **Primary Color**: Changed to `#0f2945` (DragonFlyPads blue)
- ✅ **Secondary Color**: Changed to `#16a2ae` (DragonFlyPads teal)
- ✅ **Color Variants**: Updated lighter/darker variants across all SCSS files
- ✅ **Hardcoded Colors**: Systematically replaced in all component files

### Header Customization
- ✅ **Contact Information**: Updated to DragonFlyPads details
  - Location: "Bureau 46128 rue de la Boétie, 75008 Paris, France"
  - Email: `contact@dragonflypads.com`
  - Phone: `+33 (0) 6 16646885`
- ✅ **Social Media Links**: Updated with DragonFlyPads profiles
  - Facebook: `https://www.facebook.com/Dragonflypads`
  - LinkedIn: `linkedin.com/company/dragonflypads`
  - X (Twitter): `https://x.com/dragonflypads` (custom SVG icon)
  - Telegram: `https://wa.me/+33%20616%20646885`
- ✅ **Logo Sizing**: Fixed to 46px height across all screen sizes
- ✅ **Navigation**: Custom DFP header with scroll-to-section functionality
  - Menu items: Home, Mission, Vertipads, UAS Infrastructure, Team, PoC, Contact
  - Scroll offsets: 160px for most sections, 80px for Vertipads
  - Menu spacing: 32px between buttons (reduced from 42px)
  - Padding override: Removed global 32px padding from header menu

### Hero Section Transformation
- ✅ **Background Images**: Implemented CSS-only crossfade animation
  - Image 1 (`hero-1-dfp.png`): Visible 5s → Fade out 1s → Hidden 10s → Fade in 1s
  - Image 2 (`hero-1-dfp-dark.jpg`): Visible 10s → Fade out 1s → Hidden 6s → Fade in 0s
  - Image 3 (`hero-1.jpg`): Always visible as base layer
- ✅ **Content Updates**: 
  - Title: "Agnostic, Mobile Ground Infrastructure for Commercial Drones"
  - Subtext: "Build your UAS network, not just flight plans."
  - Experience: "370+ Qualified Flights" (3em font size)
- ✅ **Floating Shapes**: Replaced with drone images (32x32px)
  - Turquoise, green, white, yellow drone icons
  - Proper positioning and animations
- ✅ **Video Integration**: Local MP4 video popup (`/assets/vid/dfp-video-001.mp4`)
- ✅ **Service Box**: "Turn‑key vertipads that enable BVLOS operations, safer flights, and scalable UAS logistics."

### Business Area Integration
- ✅ **Title**: "The missing layer between airspace and ground logistics"
- ✅ **Description**: Updated with DragonFlyPads value proposition
- ✅ **Images**: Circular cropped vertipad images
  - Field, mobile, and city vertipad scenarios
- ✅ **Floating Elements**: Drone icons with proper positioning

### Service Area (Agnostic Vertipads)
- ✅ **Title**: "Agnostic Vertipads" + "Hardware + Software"
- ✅ **Service Boxes**: 4 core capabilities
  - Smart Power & Recharging
  - Ground Surveillance & Low Altitude Weather
  - Secure Parking & Cargo
  - UTM & Data Integration
- ✅ **Icons**: Custom SVG icons (recharge, weather, cargo, data)
- ✅ **Styling**: Fixed circle backgrounds to appear behind icons (::after)

### Technical Implementation
- ✅ **CSS Crossfade**: Pure CSS animation system (no JavaScript)
- ✅ **Z-Index Management**: Proper layering of backgrounds, shapes, and content
- ✅ **Responsive Design**: Maintained across all screen sizes
- ✅ **Performance**: Optimized animations and transitions

## Current Status ✅

- ✅ **Project Analysis**: Complete codebase analysis and documentation
- ✅ **Dependencies**: All packages installed (1,051 packages)
- ✅ **Development Server**: Running on http://localhost:3004
- ✅ **Git Repository**: Initialized and connected to https://github.com/flipsum0/dfp
- ✅ **Vercel Integration**: Repository connected to Vercel for deployment
- ✅ **DragonFlyPads Branding**: Complete theme and content customization
- ✅ **Hero Animation**: Advanced CSS-only crossfade system
- ✅ **Component Architecture**: Clean separation of custom components

### Brand & Team Areas Added ✅

- ✅ **Partner Logos**: Updated brand area with 9 partner logos from `/public/assets/img/partners/`
- ✅ **Fixed Height**: All logos standardized to 52px height with proper aspect ratio
- ✅ **Linear Flow**: Automatic continuous scrolling with 3-second speed
- ✅ **Hover Effects**: Grayscale to color transition on hover
- ✅ **Team Carousel**: Team member showcase with navigation controls
- ✅ **Responsive Design**: Adapts to different screen sizes (6→5→4→3→2→1 logos)

### Technical Implementation
- **Swiper Autoplay**: Continuous linear movement with `delay: 0` and `speed: 3000`
- **Logo Optimization**: Fixed height with `objectFit: 'contain'` for consistent display
- **Seamless Loop**: Duplicated logos for infinite scrolling
- **Interactive Effects**: Hover states with smooth transitions

### Recent Updates ✅

- ✅ **UAS Infrastructure Section**: Added "UAS Infrastructure and Deployment Scenarios" with 4 deployment cards
  - Public Vertipads (Your city)
  - Agricultural Vertipads (Your fields) 
  - Residential Vertipads (Your home)
  - Urban Vertipads (Your streets)
- ✅ **Content Optimization**: Streamlined business area text for better readability
- ✅ **Color Consistency**: Applied #5989a3 color to all grey text elements
- ✅ **Section Reordering**: Moved UAS Infrastructure before partner logos for better flow
- ✅ **Button Removal**: Hidden buttons in Proof of Execution section
- ✅ **Background Consistency**: Applied matching backgrounds across sections
- ✅ **Text Improvements**: Updated call-to-action text and card pretitles
- ✅ **Partner Section Redesign**: Converted carousel to static grid layout
  - 2 rows on desktop, 4 rows max on mobile
  - Smaller logos (40px) with grey base and blue saturation
  - Maintained hover effects and professional appearance
- ✅ **Font Configuration**: Fixed Public Sans font loading
  - Updated Google Fonts URL with variable weights
  - Added preconnect links for performance
  - Applied font-optical-sizing for better rendering

### Technical Enhancements
- **Card Layout**: 4 cards in a row on desktop with consistent image heights (280px)
- **Hover Effects**: Description text fades to white on card hover
- **Responsive Design**: Maintains layout across all screen sizes
- **Color Scheme**: Consistent #5989a3 for all descriptive text
- **Section Flow**: Logical progression from services → deployment → partners → team

### Header Menu Optimization ✅
- ✅ **Column Layout**: Updated top header to 8:4 ratio (col-xxl-8, col-xxl-4)
- ✅ **Menu Spacing**: Reduced button spacing from 42px to 32px
- ✅ **Padding Override**: Removed global 32px padding from header menu containers
- ✅ **Scroll Functionality**: All menu items scroll to correct sections with proper offsets
- ✅ **Logo Consistency**: Fixed 46px height across all screen sizes
- ✅ **Responsive Design**: Maintains functionality across all breakpoints

## Security Status ✅

### CVE-2025-55182 Analysis (Dec 2025)

**Status:** ✅ **NOT AFFECTED**

**Current Versions:**
- Next.js: 16.0.7 ✅ (patched)
- React: 19.1.2 ✅ (patched)
- react-dom: 19.1.2 ✅ (patched)

**Vulnerability Details:**
- **CVE-2025-55182**: Critical-severity vulnerability in React Server Components
- **Affected Versions:**
  - React 19 (19.0, 19.1.0, 19.1.1, 19.2.0)
  - Next.js ≥14.3.0-canary.77, ≥15, ≥16
- **Impact:** Remote code execution under certain conditions

**Assessment:**
The project has been upgraded to Next.js 16.0.7 and React 19.1.2, which are **patched versions** that address CVE-2025-55182. The upgrade was completed in December 2025.

**Action Required:** ✅ Upgraded to patched versions - secure.

**Last Security Check:** December 2025

### Future Upgrade Path

If upgrading to Next.js 15/16 or React 19 in the future, use these patched versions:

**Safe React Versions:**
- React: 19.0.1, 19.1.2, or 19.2.1
- react-dom: 19.0.1, 19.1.2, or 19.2.1

**Safe Next.js Versions:**
- Next.js 15: 15.0.5, 15.1.9, 15.2.6, 15.3.6, 15.4.8, 15.5.7
- Next.js 16: 16.0.7 or later

**Upgrade Considerations:**
1. **Breaking Changes**: Next.js 15+ and React 19 include breaking changes
2. **Testing Required**: Comprehensive testing of all components and features
3. **Dependencies**: Check all dependencies for React 19 compatibility
4. **Migration Guide**: Review Next.js 15 migration guide and React 19 upgrade guide
5. **Server Components**: If using Server Components, ensure proper input validation

**Recommended Upgrade Strategy:**
1. Test upgrade in a separate branch
2. Update dependencies incrementally (React first, then Next.js)
3. Run full test suite and manual testing
4. Check for deprecated APIs and update accordingly
5. Monitor for any runtime issues

### Mobile Optimization & Bug Fixes ✅ (Latest Updates)

- ✅ **Mobile Menu Positioning**: Fixed mobile menu to be completely hidden until activated
  - Changed from `top: -100%` to `top: -100vh` with `transform: translateY(-100%)`
  - Menu now fully hidden off-screen until hamburger button is clicked
  - No visible pixels at top when menu is closed
- ✅ **Header Fixed Positioning**: Fixed header to stay at 0px top on mobile
  - Added explicit `top: 0 !important` and `transform: none !important` to header bottom
  - Removed transitions that caused header movement on scroll
  - Header now stays fixed at top without shifting
- ✅ **Hero Video Spacing**: Fixed hero video to start directly under header on mobile
  - Removed top spacing and margins from hero section
  - Video background positioned at `top: 0` on mobile
  - Adjusted main content padding to 100px (header height only)
  - Pulled hero section 80px higher on mobile for better positioning
- ✅ **Horizontal Scrolling Fix**: Eliminated 10px white spacing on right side
  - Added `overflow-x: hidden` and `max-width: 100vw` to `html`, `body`, `#__next`, and `main`
  - Ensured all header elements respect width constraints
  - No horizontal scrolling on any screen size
- ✅ **Business Area Box Styling**: Added borders to module boxes
  - Default state: `1px solid #e6edf2` (light grey border)
  - Hover state: `2px solid #48ba4e` (green border)
  - Smooth transition between states
- ✅ **Video Cache Busting**: Added version parameter to hero video
  - Video source: `/assets/vid/hero-01-loop.mp4?v=2`
  - Forces browser to reload video when file is replaced
  - Version can be incremented for future updates

### Technical Implementation Details

**Mobile Header Fixes:**
- Header uses `position: fixed !important` with `top: 0 !important`
- No transforms or transitions on header bottom section
- Body padding adjusts dynamically based on header visibility
- Mobile-specific styles override desktop styles

**Hero Section Mobile Optimization:**
- Negative margin (`-80px`) pulls hero section higher on mobile
- Video background moves with section using matching negative margin
- Container padding adjusted for proper content positioning
- Maintains 100vh/100dvh height for full-screen experience

**Overflow Prevention:**
- Global overflow-x hidden on html, body, and main containers
- Max-width constraints on all wrapper elements
- Header and child elements respect viewport width limits

## Ready for Production! 🚀

The DragonFlyPads website is now fully customized and ready for deployment:
1. Complete DragonFlyPads branding and content
2. Advanced hero section with crossfading backgrounds
3. Professional service and business sections
4. **UAS Infrastructure deployment scenarios**
5. **Partner showcase with automatic scrolling**
6. **Team member carousel**
7. **Optimized content and user experience**
8. **Mobile-optimized with all bugs fixed**
9. All original template functionality preserved
10. Ready for GitHub commit and Vercel deployment
