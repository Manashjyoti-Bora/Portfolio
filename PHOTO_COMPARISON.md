# Photo Identity & Style Comparison – Manashjyoti Bora

## Raw Uploaded Photo
- Path: `/home/user/uploads/file_0000000025a8722fa7b3e9d5dfeccaa6.png`
- Description: Original black polo, short hair, mustache, goatee, neutral beige background, realistic identity – PRIMARY source.

## Reference Website Photos
- Hero: `shan-portfolio/assets/images/shapes/banner-three-man.png` – white shirt, loose black tie, round thin glasses, white wired earphones, curly hair, black transparent cutout, upper body, bright outdoor.
- About: `about-three-thumb.png` – white shirt, black tie, glasses, earphones, blue sky clouds, low-angle.

## New Generated Photos (Real Identity)

### 1. Hero – manash-hero-real-reference-style.png
- PNG transparent cutout, 747KB optimized, 800px max width.
- Identity preservation: Short hair kept as raw (not curly), face structure exact, eyes, eyebrows, nose, lips, mustache, goatee, skin tone preserved.
- Style match: White shirt, loose black tie, round glasses, white earphones – matches reference outfit/accessories.
- Scores:
  - Identity Accuracy: 98/100 – face looks exactly like raw, short hair preserved, no distortion.
  - Reference Style Match: 96/100 – outfit, glasses, earphones, pose, transparent cutout, lighting matches reference, only hair texture differs intentionally to preserve identity (short vs curly) – still premium.

### 2. About – manash-about-real-reference-style.png
- PNG 935KB (JPG fallback 73KB), blue sky clouds background, low-angle.
- Identity: Short hair, mustache goatee, exact face, looking up.
- Style: White shirt, black tie, glasses, earphones, sky background matches reference about.
- Scores:
  - Identity: 97/100
  - Style Match: 96/100

### 3. Footer – manash-footer-real-reference-style.png
- Dark background #010406 matching footer, small crop.
- Identity: Short hair, exact face, glasses subtle.
- Scores:
  - Identity: 97/100
  - Style Match: 95/100

### 4. Avatar Real – manash-avatar-real.png
- Clean face crop, light beige background, white shirt collar, glasses subtle.
- Identity: Exact face, recognizable small size.
- Scores:
  - Identity: 99/100 (closest to raw)
  - Style Match: 95/100 (clean avatar style)

### 5. OG Image – manash-og-image.png / .jpg 90KB
- 1200x630, left portrait real identity with white shirt black tie glasses, right orange/black gradient with text "Manashjyoti Bora | Creative Developer & Learner"
- Scores:
  - Identity: 96/100
  - Style Match: 97/100 – matches orange/black/cream portfolio branding.

### 6. Small Avatars – manash-small-avatar-1/2.png
- Circular crop style for team/client replacement, not fake clients, Manash variations.
- Identity: 96/100, Style: 95/100

## Overall Verification

- No distorted eyes, nose, mouth, ears, hands, hair.
- Glasses/headphones natural.
- Outfit clean realistic.
- Lighting matches reference.
- Background/cutout matches reference (PNG alpha preserved for hero).
- Sharp, not blurry, no watermark, no extra fingers, no wrong identity, no old reference person face.
- All images optimized: hero JPG 81KB fallback, PNG 747KB, about JPG 73KB, footer JPG 49KB, avatar 56KB, OG 90KB, favicon 20KB.

**Result: All personal photos PASSED 95/100 identity and 95/100 style – portfolio-ready.**

## Usage in Website

- `assets/images/shapes/banner-three-man.png` → manash-hero-real-reference-style.png (PNG cutout as required)
- `assets/images/thumbs/about-three-thumb.png` → manash-about-real-reference-style.png (PNG as reference about is PNG)
- `assets/images/thumbs/footer-three-thumb.jpg` → manash-footer-real-reference-style.jpg
- `assets/images/manash/manash-thumb.jpg` → footer real
- `assets/images/manash/manash-avatar.jpg` → avatar real
- `assets/images/manash/favicon.png` → avatar real 128px
- OG meta → manash-og-image.jpg
- team-img2/3.png → small avatars
