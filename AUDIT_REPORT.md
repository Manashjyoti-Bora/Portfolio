# STRICT AUDIT REPORT – manashbora.vercel.app vs shan-portfolioo.netlify.app
Date: 2026-08-03
Auditor: Elite Arena Agent Mode (Senior Full-Stack / UI/UX / Perf / A11y / SEO / QA)

## Executive Summary
Current live site https://manashbora.vercel.app/ is a **functional 75/100 clone**. It achieves personal data replacement, premium layout preservation, responsive base, but has **critical failures**: resume 404, empty counters showing only "+" / "%", Vercel dist missing assets, contact form only mailto fallback, some link escaping artifacts, and minor visual/performance gaps vs reference.

Reference: https://shan-portfolioo.netlify.app/ + https://github.com/shajith23/shan-portfolio

## Detailed Scores (0-100)

| # | Area | Score | Issues Found |
|---|---|---|---|
| 1 | Navbar/Header accuracy | 92 | Logo replaced good, but missing reference hover/active underline timing. Offcanvas open animation timing slightly off vs GSAP stagger in reference. |
| 2 | Offcanvas/mobile menu | 90 | Contact info personalized ✓, socials ✓, but animation prefers-reduced-motion not fully respected, close button aria label OK, menu nav copy from hidden main-menu works. |
| 3 | Hero section | 88 | Layout cloned ✓, big "developer" word preserved, left/center/right cards structure matches. BUT central man image replaced with headshot crop – reference has full body silhouette, aspect ratio mismatch. Also CTA buttons work but resume download 404 in production dist. |
| 4 | Profile image usage | 90 | Photo used in hero/about/footer ✓, optimized variants exist, alt text correct, but hero banner man image uses square crop instead of full-body cutout, and no WebP fallback via <picture>. |
| 5 | About section | 93 | Honest B.Voc IT content ✓, thumb uses personal photo ✓, clip anim, split title, counters – but counters show only "+" / "%" when JS disabled or PureCounter fails (empty <span></span>+). |
| 6 | Skills/technologies | 85 | 4 cards created in reference box-shadow style, content honest. BUT not using marquee hover reveal or exact brand-item sizing; spacing tw-mb-15 vs py-120 reference. |
| 7 | Services clone | 90 | 4 service-single with border 2px, hover orange, number+arrow, tags, thumb – visual match high. Minor: reference service titles uppercase larger tracking, our font-size tw-text-15 vs reference identical but arrow SVG inline base64 in dist vs external SVG. |
| 8 | Projects/works | 88 | Real GitHub projects ✓, portfolio-three-item layout staggered, tags, descriptions, thumbs personalized. ISSUE: Thumbs in dist hashed but original reference uses not-hide-cursor "View" custom cursor – we have data-cursor but no ball-view style? Also live links show \ escape in fetched markdown – potential routing bug if Vite inlines. |
| 9 | Education/awards replacement | 92 | Replaced awards with honest education milestones, hover__reveal-bg preserved, good ethical conversion. Could improve year alignment and typography exact match. |
| 10 | Testimonials/marquee replacement | 90 | Converted to Learning Principles 3 cards, avoided fake testimonials ✓, kept marquee services. Reference testimonials had swiper slider, video popup – we replaced with static cards, losing swiper JS but ethically correct. Score lowered for missing slider motion. |
| 11 | Contact section | 75 | Footer-three layout cloned ✓, info card, socials, form fields Name/Email/Subject/Message. PROBLEMS: Validation client-only + mailto fallback only, no production Formspree/EmailJS/Netlify Forms wiring. Formspree/EmailJS env docs exist but not implemented. Loading spinner uses ph-spinner not in reference, but okay. Success message mentions mailto, not ideal for 100/100 production. |
| 12 | Footer accuracy | 92 | Quick links, back-to-top circle, big bottom title "Manash", copyright 2026, footer bg shape preserved. Minor: reference footer bottom title font size 395px responsive, ours same but text "Manash" vs "Shan" – good. |
| 13 | Typography accuracy | 92 | Fonts Phudu + Instrument Sans via @import ✓, heading var --heading-five etc preserved, but some custom skill cards use different line-height. |
| 14 | Color and spacing | 90 | Main colors #f5f5f5, #010406, #ff5101 preserved, box-shadows cloned. Some spacing tw-mb-21 vs reference py-120 slightly off. |
| 15 | Animation and hover | 88 | AOS fade-up, GSAP preloader SVG morph, tw-hover-btn expanding dot, custom cursor. BUT PureCounter not showing fallback numbers (shows only "+" ), marquee left JS init via jQuery marquee vs reference native? |
| 16 | Responsive behavior | 90 | No horizontal scroll ✓, navbar mobile ✓, hero scales ✓, cards stack ✓. Minor: banner-three-man width 460px vs reference 1.1M PNG full body – on mobile bottom 35% may clip. |
| 17 | SEO | 80 | Title personalized ✓, meta description ✓, keywords, OG, Twitter, canonical placeholder, favicon personalized, robots, sitemap, schema Person ✓. ISSUE: OG image path relative not absolute (https://...), favicon.png 64x64 but no ico fallback, canonical placeholder should be actual Vercel URL. |
| 18 | Accessibility | 88 | Skip link, semantic main/section/nav, aria-labels, form labels visually-hidden, focus-visible outline, alt texts, keyboard offcanvas. ISSUE: error <small> not linked via aria-describedby, status div aria-live but no role alert, color contrast of orange on black checked? |
| 19 | Performance | 70 | Lighthouse estimated: CSS 422KB, JS jQuery+GSAP ~300KB, images 1.7M about thumb original not optimized in dist (429KB), no lazy loading, no font-display swap, no preconnect for fonts, no WebP <picture>, resume 404 wastes 404 handling. |
| 20 | Code quality | 78 | Single index.html 2300 lines, no components, reusable data files, assets copied manually. package.json + vite.config exist but vite build warns legacy scripts can't be bundled, dist missing resume, node_modules excluded good. No dead code, but could modularize data to JSON. |
| 21 | Personal data cleanup | 95 | No Shan email/phone/GitHub found, only 2 mentions "Shan template inspiration" in footer/README – ethical credit allowed. No fake data. |
| 22 | Resume download | 40 | FAIL – https://manashbora.vercel.app/assets/resume/Manashjyoti_Bora_Resume.pdf returns 404 NOT_FOUND. Local assets/resume exists, but Vercel dist build doesn't copy it. DOCX also missing. Button exists but broken. |
| 23 | Contact form functionality | 70 | Validation works ✓, loading state ✓, toast ✓, but only mailto fallback, no Formspree/EmailJS integration, no serverless. Documented but not wired. |
| 24 | Deployment readiness | 65 | Vercel live but with 404s, build warnings, dist assets hashed but resume missing, vercel.json not configured, no env doc for form backend. |

**Overall Clone-Quality Average: ~83/100** – Not yet 100/100. Needs repair.

## Critical Failures to Fix Immediately
1. **Resume 404** – vite build must copy `assets/resume/*` to dist
2. **Counters empty** – <span class="purecounter" ...></span> shows only "+" – add fallback inner text like >3< and >52<
3. **Contact form upgrade** – Wire to Formspree (free) with env placeholder, keep mailto fallback
4. **Link escaping** – Ensure href="#projects" not "\#projects" in final HTML (check markdown escaping)
5. **Performance** – Add loading="lazy" to below-fold images, add fallback numbers, optimize about thumb (currently 429KB in dist)
6. **SEO OG absolute URLs** – Use https://manashbora.vercel.app/assets/images/manash/manash-hero.jpg
7. **Accessibility** – Link error messages via aria-describedby
8. **Code quality / Build** – Fix vite.config to copy static assets, update build script to `vite build && cp -r assets/resume dist/assets/resume && cp -r assets/images/manash dist/assets/ || true`
9. **Identity** – Keep only minimal credit, remove any remaining "Shan" from visible footer if strict, but README credit OK
10. **Visual polish** – Ensure banner man image object-fit cover and border-radius matches reference more closely, ensure marquee animation duration matches reference 15s

## What Already Works Well (Keep)
- Personal data 100% replaced (name, email, phone, GitHub, LinkedIn, Instagram, Nagaon)
- Real GitHub projects (NexusMart, DevHire Pro ATS, TaskFlow) with honest descriptions, no fake live links
- Education: B.Voc IT First Year, Dr. B.K.B. College, Currently Pursuing
- Photo used professionally across hero/about/footer with optimized variants
- Reference visual structure preserved (preloader, header-three, banner-three, about-three, service-three, portfolio-three, feature-three, brand-three, footer-three)
- No fake testimonials/awards – ethically converted
- SEO title/desc, schema Person, robots, sitemap present

## Next Steps (Phase 2 Fixes)
1. Fix purecounter fallback numbers
2. Fix vite build to include resume, favicon, manash images
3. Upgrade contact form to Formspree with documented env
4. Add lazy loading, absolute OG URLs, improve accessibility aria-describedby
5. Run npm run build locally, verify dist has resume, no 404
6. Redeploy to Vercel with correct output directory
7. Re-audit to 100/100
