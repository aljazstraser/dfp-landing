# Upgrade Plan: Next.js 13.3.0 → Next.js 15/16 & React 18.2.0 → React 19

## Current Status

- **Next.js**: 13.3.0
- **React**: 18.2.0
- **react-dom**: 18.2.0
- **Status**: ✅ Not affected by CVE-2025-55182

## Upgrade Path Options

### Option 1: Next.js 14 (Recommended Intermediate Step)
**Why**: Gradual migration path with fewer breaking changes

**Target Versions:**
- Next.js: 14.2.x (latest stable 14.x)
- React: 18.2.0 (no change)
- react-dom: 18.2.0 (no change)

**Benefits:**
- Fewer breaking changes
- Maintains React 18 compatibility
- Easier rollback if issues occur
- Good testing ground for Next.js App Router features

**Steps:**
1. Update `package.json`: `"next": "^14.2.0"`
2. Run `npm install`
3. Review Next.js 14 migration guide
4. Test all pages and components
5. Update any deprecated APIs

### Option 2: Next.js 15 + React 19 (Latest Stable)
**Why**: Latest features and security patches

**Target Versions:**
- Next.js: 15.5.7 (patched for CVE-2025-55182)
- React: 19.1.2 (patched for CVE-2025-55182)
- react-dom: 19.1.2

**Breaking Changes to Address:**
1. **React 19 Changes:**
   - New JSX transform (automatic)
   - Changes to `useFormStatus` and `useFormState`
   - Updated `ref` prop behavior
   - Changes to context API
   - New `use()` hook for promises

2. **Next.js 15 Changes:**
   - React 19 required
   - Turbopack as default (optional)
   - Updated caching behavior
   - Changes to `next/image` component
   - Updated routing and navigation
   - Server Actions changes

**Migration Steps:**
1. **Phase 1: Preparation**
   - Create feature branch: `git checkout -b upgrade/next15-react19`
   - Review all dependencies for React 19 compatibility
   - Document current functionality

2. **Phase 2: Dependency Updates**
   ```json
   {
     "next": "15.5.7",
     "react": "19.1.2",
     "react-dom": "19.1.2"
   }
   ```

3. **Phase 3: Code Updates**
   - Update deprecated React APIs
   - Review and update Server Components usage
   - Update `next/image` usage if needed
   - Test all forms and form actions
   - Update context providers if needed

4. **Phase 4: Testing**
   - Run `npm run build` and fix build errors
   - Test all pages manually
   - Test all interactive components
   - Test forms and form submissions
   - Test navigation and routing
   - Test Server Components (if used)
   - Test API routes

5. **Phase 5: Deployment**
   - Deploy to staging environment
   - Monitor for errors
   - Performance testing
   - Final review before production

### Option 3: Next.js 16 + React 19 (Latest)
**Why**: Cutting-edge features

**Target Versions:**
- Next.js: 16.0.7 (patched for CVE-2025-55182)
- React: 19.1.2 (patched for CVE-2025-55182)
- react-dom: 19.1.2

**Additional Considerations:**
- May have more experimental features
- Less stable than Next.js 15
- More breaking changes from Next.js 15

## Dependency Compatibility Check

Before upgrading, verify these dependencies support React 19:

### Current Dependencies to Check:
- [ ] `@splidejs/react-splide` (^0.7.12)
- [ ] `react-18-image-lightbox` (^5.1.4) - **May need update**
- [ ] `react-circular-progressbar` (^2.1.0)
- [ ] `react-countup` (^6.4.2)
- [ ] `react-intersection-observer` (^9.4.3)
- [ ] `react-modal-image` (^2.6.0)
- [ ] `react-modal-video` (^2.0.0)
- [ ] `react-slick` (^0.29.0)
- [ ] `swiper` (^9.2.2)

**Note**: `react-18-image-lightbox` may need to be replaced with a React 19 compatible alternative.

## Key Areas to Test After Upgrade

1. **Hero Section**
   - Background animations
   - Video popup functionality
   - Floating shapes

2. **Navigation**
   - Header menu scroll functionality
   - Mobile menu
   - Footer links

3. **Components**
   - Swiper carousels (brand area, team area)
   - Image lightboxes
   - Modal videos
   - Forms (contact, comment)

4. **Pages**
   - Homepage (all sections)
   - About page
   - Services page
   - Portfolio page
   - Blog pages
   - Contact page

5. **Server-Side Features**
   - API routes (if any)
   - Server Components (if used)
   - Static generation
   - Image optimization

## Recommended Timeline

### For Next.js 14 Upgrade:
- **Week 1**: Preparation and dependency check
- **Week 2**: Update and test in development
- **Week 3**: Staging deployment and testing
- **Week 4**: Production deployment

### For Next.js 15/16 + React 19 Upgrade:
- **Week 1-2**: Preparation, dependency compatibility check
- **Week 3-4**: Code updates and initial testing
- **Week 5**: Comprehensive testing
- **Week 6**: Staging deployment and monitoring
- **Week 7**: Production deployment

## Rollback Plan

If issues occur:
1. Revert to previous commit: `git revert <commit-hash>`
2. Restore `package.json` and `package-lock.json`
3. Run `npm install`
4. Verify functionality restored

## Resources

- [Next.js 15 Upgrade Guide](https://nextjs.org/docs/app/building-your-application/upgrading/version-15)
- [React 19 Upgrade Guide](https://react.dev/blog/2024/12/05/react-19)
- [Next.js 14 Migration Guide](https://nextjs.org/docs/app/building-your-application/upgrading/version-14)
- [CVE-2025-55182 Details](https://vercel.com/security)

## Decision Matrix

| Factor | Next.js 14 | Next.js 15 | Next.js 16 |
|--------|-----------|------------|------------|
| Breaking Changes | Low | Medium | High |
| Security Patches | ✅ | ✅ | ✅ |
| Stability | High | High | Medium |
| New Features | Medium | High | Very High |
| Migration Effort | Low | Medium | High |
| Recommended For | Conservative | Balanced | Cutting-edge |

## Recommendation

**For Production Stability**: Upgrade to Next.js 14 first, then plan Next.js 15 upgrade later.

**For Latest Features**: Direct upgrade to Next.js 15.5.7 + React 19.1.2 with thorough testing.

---

**Last Updated**: December 2025  
**Next Review**: When planning major version upgrade

