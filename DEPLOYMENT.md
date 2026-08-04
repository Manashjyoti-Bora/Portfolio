# Deployment Guide – Manashjyoti Bora Portfolio

## Quick Deploy – No Build Needed (Static)

This portfolio is a static HTML/CSS/JS site. You can deploy the **root folder** directly.

### Netlify
1. Go to https://app.netlify.com/drop – drag & drop the folder `manash-portfolio` (or zip)
2. Or connect GitHub:
   - Repo: `Manashjyoti-Bora/portfolio` (create)
   - Build command: (leave empty)
   - Publish directory: `/` or `.`
   - Deploys instantly

### Vercel
1. Import GitHub repo
2. Framework: Other
3. Build command: empty
4. Output dir: `.`
5. Deploy

### GitHub Pages
- Push this folder to `main` branch
- Settings → Pages → Source: main / root

---

## Optional – Vite Build

`package.json` includes Vite for local DX and optimized build.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/ (legacy scripts warnings are expected, they still work)
npm run preview
```

**Note:** `vite build` warns about legacy non-module scripts (`type="module"` missing). This is expected because the template uses jQuery/GSAP legacy pattern. The original static files in root are production-ready without build. If you want to deploy `dist/`, configure Vite to copy `assets/js` manually or keep deploying root.

### Why warnings?
- `assets/js/*.js` are IIFE/legacy scripts, not ESM
- Vite best handles ESM. Warnings don't break functionality when deploying root folder.
- For a pure Vite ESM refactor, you'd need to convert main.js to modules – out of scope for 100/100 visual clone.

---

## Contact Form – Enable Auto-Send

Current form uses client validation + mailto fallback + toast.

To enable real sending:

### Formspree (easiest, free tier)
- Sign up https://formspree.io
- Create form, get endpoint `https://formspree.io/f/xxxxx`
- In `index.html` ~ line 810, replace simulated fetch with:
```js
const res = await fetch('https://formspree.io/f/xxxxx', {method:'POST', body: new FormData(form), headers:{'Accept':'application/json'}});
if(res.ok) showToast('Message sent!', 'success');
```

### EmailJS
- https://emailjs.com – get serviceID, templateID, publicKey
- Add SDK before `</body>`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>emailjs.init('YOUR_PUBLIC_KEY');</script>
```
- In submit handler:
```js
await emailjs.send('service_id','template_id',{name,email,subject,message});
```

### Netlify Forms
- Add attributes to form:
```html
<form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
  <input type="hidden" name="form-name" value="contact" />
```
- Deploy to Netlify – submissions show in dashboard
- Add `<div data-netlify-recaptcha="true"></div>` for spam protection

---

## Resume

- PDF: `assets/resume/Manashjyoti_Bora_Resume.pdf`
- DOCX: `assets/resume/Manashjyoti_Bora_Resume.docx`
- Download button: Already points to PDF with `download` attribute
- Update resume by replacing those files (keep same name for link stability)

---

## SEO Checklist After Deploy

- Update canonical URL in `<head>` to your actual domain
- Update `og:url` and `og:image` to absolute URLs
- Submit `sitemap.xml` to Google Search Console
- Check Lighthouse in Chrome DevTools (target 95+)
- Test `robots.txt` reachable at `/robots.txt`

---

## Custom Domain (Netlify)

1. Domain settings → Add custom domain
2. Update DNS (CNAME or A record)
3. Enable HTTPS (Let's Encrypt auto)

---

## Final Output

- `index.html` – main portfolio
- `assets/` – css, js, images, resume
- `robots.txt`, `sitemap.xml`, `README.md`, `DEPLOYMENT.md`
- Zero exposed secrets, no console errors on load (check DevTools)

Deploy root folder – you are live!
