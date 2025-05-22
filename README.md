_Start date 25/04/2025_
<br />

_End date 15/05/2025_

## **Project name: Full-stack Archeology Web Application**

> Permission obtained from the client to share **developmental codebase**. Notice that this repo is not representing the actual _production-ready_ codebase. Typically you might get errors like `Application error: a client-side exception has occurred...` or slow FCP/LCP metrics.

## Project Definition

_A full-stack archeology web app covering end-to-end cutting-edge enterprise development featuring; 25 years company portfolio, media presses, project areas as well as visual excavational fields with mapbox renderers within the bounderies of **no given assets – which was extremely challenging**._

> Due to having literally **no assets** [except the very old website's link](http://izisarcheo.com.pl/index) , I have been forced my imagination limit as hell... So this time I could have chance to give _God-tier-developmental-imagination-I_ badge to myself.

## 📱 App Screenshot

<div align="center">
  <img src="/public/assets/app_screenshot.png" alt="App Screenshot 1" width="300" style="border-radius: 8px; border: 1px solid #eee;">
</div>

<div align="center">
  <img src="/public/assets/app-screenshot-4.png" alt="App Screenshot 3" width="300" style="border-radius: 8px; border: 1px solid #eee;">
</div>

<div align="center">
  <img src="/public/assets/app_screenshot-2.png" alt="App Screenshot 2" width="300" style="border-radius: 8px; border: 1px solid #eee;">
</div>

<div align="center">
  <img src="/public/assets/app_screenshot-3.png" alt="App Screenshot 3" width="300" style="border-radius: 8px; border: 1px solid #eee;">
</div>

---

### Tech stack (MVP)

- System Design +

  - IntentUI(formerly Justd)

- Front-end

  - Next.js 15 – page router
  - React.js 19
  - TailwindCSS v4
  - Typescript
  - Motion
  - Motion Provider (first early-pilot test of my animation library based on motion)
  - Mapbox GL
  - React Aria
  - Recharts
  - Sonner
  - Swiper

- Hosting
  - Netlify

### Hierarchy

I have used classic Next.js recommended directories with **BDD approach** as methodology while developing & designing the product.

```bash
src/
├── components/
├── config/
├── hooks/
├── interfaces/
├── layout/
├── lib/
├── pages/
│   ├── discoveries/
│   │   ├── [city].tsx
│   │   └── index.tsx
│   ├── prasa-o-nas/
│   │   └── [slug].tsx
│   ├── services/
│   │   └── [service].tsx
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── about-us.tsx
│   ├── contact.tsx
│   └── index.tsx
├── providers/
├── sections/
├── styles/
└── utils/
```

As I mentioned earlier, the most challenging part was gathering information about client. After digging a bit, I eventually found some articles for _media press - prasa o nas(in Polish)_ that forced me to scrap client's mentioned articles to speed up then I decided to create a simple JQuery/Node.js bot that fetches each article that the founder's name or any relevant employee name included. Therefore, I could collect all the information without getting stuck into copy/paste hell.

For the early stages of developing the app, I have been using `SSG` features of Next.js 15 to create the pages statically for several page designs shown above. Due to having _page_ router, unfortunately I was not able to use the cutting-edge `ISR` technique that serves datasets via API from the cloud for development.

## For developers

### 🛠️ Installation

Clone the project using CLI:

```bash
gh repo clone Masculinn/izis
```

or

```bash
git clone https://github.com/Masculinn/izis.git
```

then run

```bash
npm install
```

after the steps, the app will work on

```bash
http://localhost:4000
```

---

© 2025 – Burak Bilen
