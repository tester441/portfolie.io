# 🌟 Modern Portfolio Website

Een volledig responsive, moderne en professionele portfolio website gebouwd met HTML5, CSS3 en JavaScript. Dit project showcaset moderne webontwikkelingspraktijken en is volledig geoptimaliseerd voor alle devices en browsers.

## ✨ Hoofdkenmerken

### 🎨 **Modern & Professioneel Design**
- Elegante gradiënten en schaduwen voor visuele impact
- Catchy animaties en micro-interacties
- Professionele typografie met Poppins font
- Dopamine-triggerende hover effecten
- Consistente kleurenpalet met CSS variabelen

### 📱 **Volledig Responsive Design**
- **Mobile First Approach** - Optimaal voor alle schermformaten
- **Perfect Mobiele Navigatie** - Dark hamburger menu met swipe gestures
- **Touch Optimalisaties** - Grote touch targets (48px+) voor mobiele devices
- **Landscape & Portrait** - Ondersteuning voor alle oriëntaties
- **Cross-Device Compatibility** - iPhone, Android, iPad, tablets, desktops

### 🚀 **Premium Animaties & Interacties**
- **Typing Effect** - Realistische typende tekstanimatie
- **Skill Bars** - Geanimeerde progress bars met cascade effecten
- **Scroll Animations** - Fade-in en slide-in effecten bij scrollen
- **Smooth Transitions** - Cubic-bezier curves voor natuurlijke bewegingen
- **Hover Magic** - Transform effecten op cards, buttons en elementen

### 🎯 **Advanced Mobile Menu**
- Donkere overlay met backdrop blur
- Body scroll lock tijdens menu gebruik
- Swipe gestures voor natuurlijke bediening
- Escape key en click-outside functionaliteit
- Haptic feedback op ondersteunde devices
- Staggered animaties voor menu items

### 💫 **Interactive Skill System**
- Animatie-based skill percentages
- Pulse effecten bij hover
- Glow effecten en transforms
- Cascade loading met delays
- Smooth cubic-bezier transitions

## 🔧 Technische Specificaties

### **Browser Ondersteuning**
- ✅ Chrome (laatste 3 versies)
- ✅ Firefox (laatste 3 versies) 
- ✅ Safari (laatste 3 versies)
- ✅ Edge (laatste 3 versies)
- ✅ Opera (laatste 2 versies)
- ✅ Chrome Android (laatste 3 versies)
- ✅ Safari iOS (laatste 3 versies)
- ✅ Samsung Internet (laatste 2 versies)

### **Device Ondersteuning**
- 📱 **Mobiel**: 320px - 768px (Portrait & Landscape)
- 📱 **Tablets**: 768px - 1024px (Portrait & Landscape)  
- 💻 **Desktop**: 1024px - 1440px
- 🖥️ **Large Desktop**: 1440px+ (tot 4K)
- 📱 **Foldables**: Samsung Galaxy Fold, Surface Duo

### **Responsive Breakpoints**
```css
Mobile Portrait:    320px - 480px
Mobile Landscape:   481px - 767px
Tablet Portrait:    768px - 968px
Tablet Landscape:   969px - 1023px
Desktop:           1024px - 1439px
Large Desktop:     1440px+
```

## 🏗️ Architectuur & Code Kwaliteit

### **HTML5 Semantiek**
- Correcte documentstructuur met `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`
- ARIA labels en roles voor toegankelijkheid
- Schema.org markup voor SEO optimalisatie
- Progressive enhancement principes

### **CSS3 Advanced Features**
- **CSS Custom Properties** - Voor consistente theming
- **CSS Grid & Flexbox** - Voor complexe layouts
- **CSS Transforms** - Voor smooth animaties
- **Backdrop Filter** - Voor glasmorphism effecten
- **Clamp()** - Voor responsive typography
- **Cubic-bezier** - Voor natuurlijke animatie curves

### **JavaScript ES6+**
- **Intersection Observer** - Voor scroll-based animaties
- **Touch Events** - Voor mobile swipe gestures
- **Async/Await** - Voor moderne asynchrone code
- **Event Delegation** - Voor performance optimalisatie
- **Debouncing** - Voor scroll en resize events

## 🎨 Design System

### **Kleurenpalet**
```css
Primary:    #667eea (Modern Blue)
Secondary:  #764ba2 (Rich Purple)
Accent:     #ff6b6b (Vibrant Red)
Text:       #2c3e50 (Dark Blue-Gray)
Light:      #ffffff (Pure White)
Secondary:  #6c757d (Muted Gray)
```

###  **Typography Scale**
```css
h1: clamp(2rem, 5vw, 3.5rem)   /* 32-56px */
h2: clamp(1.5rem, 4vw, 2.5rem) /* 24-40px */
h3: clamp(1.25rem, 3vw, 1.75rem) /* 20-28px */
Body: 16px (1rem)
Small: 14px (0.875rem)
```

### **Shadows & Effects**
```css
Light:  0 5px 15px rgba(0, 0, 0, 0.08)
Medium: 0 10px 30px rgba(0, 0, 0, 0.15)
Heavy:  0 20px 60px rgba(0, 0, 0, 0.25)
Radius: 12px (Consistent border-radius)
```

## ⚡ Performance Optimalisaties

### **Loading Performance**
- ⚡ **Critical CSS** - Above-the-fold styling inline
- 🖼️ **Image Optimization** - WebP format met fallbacks
- 📦 **Resource Hints** - Preload, prefetch, preconnect
- 🚀 **Font Loading** - font-display: swap voor snellere rendering
- 📱 **Mobile Optimalisatie** - Kleinere assets voor mobiel

### **Runtime Performance**  
- 🎯 **Hardware Acceleration** - transform3d, will-change
- 📊 **Efficient Animations** - transform en opacity alleen
- 🔄 **Event Optimalisatie** - Debounced scroll/resize handlers
- 💾 **Memory Management** - Cleanup van event listeners
- 🎨 **Paint Optimalisatie** - Minimale repaints en reflows

### **Core Web Vitals**
- 🟢 **LCP (Largest Contentful Paint)**: < 2.5s
- 🟢 **FID (First Input Delay)**: < 100ms  
- 🟢 **CLS (Cumulative Layout Shift)**: < 0.1
- 🟢 **FCP (First Contentful Paint)**: < 1.8s

## 🛡️ Toegankelijkheid (WCAG 2.1 AA)

### **Keyboard Navigation**
- ✅ Tab-order logisch en consistent
- ✅ Zichtbare focus indicators
- ✅ Skip-to-content link
- ✅ Escape key functionaliteit

### **Screen Reader Support**
- ✅ ARIA labels en descriptions
- ✅ Semantische HTML structuur  
- ✅ Alt-text voor alle afbeeldingen
- ✅ Live regions voor dynamische content

### **Color & Contrast**
- ✅ WCAG AA contrast ratios (4.5:1)
- ✅ Geen kleur-alleen informatie
- ✅ Dark mode ondersteuning
- ✅ High contrast mode compatible

### **Motion & Animation**
- ✅ Prefers-reduced-motion ondersteuning
- ✅ Optionele animatie toggles
- ✅ Geen flitsende content
- ✅ Vestibular disorder friendly

## 📱 Mobile-Specific Features

### **Touch Optimalisaties**
- 👆 **Touch Targets**: Minimaal 48x48px
- 📱 **Swipe Gestures**: Natuurlijke navigatie
- 🎯 **Tap Highlights**: Custom tap colors
- 🔒 **Scroll Lock**: Body scroll prevention tijdens menu

### **iOS Safari Fixes**
- 🍎 **Viewport Units**: 100vh fallbacks
- 🔧 **Appearance Reset**: Input styling normalisatie  
- 📱 **Safe Areas**: Notch en home indicator ondersteuning
- ⚡ **Hardware Acceleration**: Smooth scrolling optimalisatie

### **Android Chrome Fixes**
- 🤖 **High DPI**: Pixel density optimalisaties
- 🎨 **Backface Visibility**: Transform glitch fixes
- 📱 **Address Bar**: Dynamic viewport compensation
- ⚡ **GPU Layers**: Transform3d optimalisaties

## 🚀 Installatie & Gebruik

### **Lokale Development**
```bash
# Repository klonen (vervang met jouw GitHub URL)
git clone https://github.com/username/modern-portfolio.git
cd modern-portfolio

# Direct openen in browser
open index.html

# Of gebruik Live Server in VS Code
code .
# Rechtermuisknop op index.html → "Open with Live Server"
```

### **Deployment Opties**

#### **GitHub Pages** (Aanbevolen)
```bash
# Push naar GitHub repository
git add .
git commit -m "Initial portfolio setup"
git push origin main

# GitHub Pages activeren:
# 1. Ga naar Settings → Pages
# 2. Source: Deploy from branch
# 3. Branch: main / root
# 4. Save
```

#### **Netlify** (Drag & Drop)
1. Zip de projectfolder
2. Ga naar [netlify.com](https://netlify.com)
3. Sleep de zip naar Netlify
4. Automatische deployment!

#### **Vercel** (Git Integration)
```bash
# Installeer Vercel CLI
npm i -g vercel

# Deploy vanuit projectfolder
vercel

# Volg de setup wizard
```

## 🎨 Customisatie Guide

### **1. Kleuren Aanpassen**
```css
/* Pas de CSS variabelen aan in styles.css */
:root {
  --primary-color: #667eea;     /* Jouw brand kleur */
  --secondary-color: #764ba2;   /* Accent kleur */
  --accent-color: #ff6b6b;      /* Highlight kleur */
  --text-primary: #2c3e50;      /* Hoofdtekst */
  --bg-primary: #ffffff;        /* Achtergrond */
}
```

### **2. Content Updaten**
```html
<!-- Update in index.html -->
<h1>Jouw Naam</h1>
<p>Jouw beschrijving...</p>

<!-- Voeg projecten toe -->
<div class="project-card">
  <div class="project-info">
    <h3>Project Naam</h3>
    <p>Project beschrijving...</p>
  </div>
</div>
```

### **3. Skills Aanpassen**
```html
<!-- Voeg nieuwe skills toe -->
<div class="skill-item">
  <div class="skill-name" data-level="85%">JavaScript</div>
  <div class="skill-bar">
    <div class="skill-level" data-width="85"></div>
  </div>
</div>
```

### **4. Contact Info Bijwerken**
```html
<!-- Update contact gegevens -->
<div class="contact-item">
  <i class="fas fa-envelope"></i>
  <div>
    <h3>Email</h3>
    <p>jouw@email.com</p>
  </div>
</div>
```

### **5. Social Links Toevoegen**
```html
<!-- Voeg social media links toe -->
<div class="social-links">
  <a href="https://github.com/username" class="social-link">
    <i class="fab fa-github"></i>
  </a>
  <a href="https://linkedin.com/in/username" class="social-link">
    <i class="fab fa-linkedin"></i>
  </a>
</div>
```

## 📁 Project Structuur
```
portfolio/
├── index.html              # Hoofdpagina
├── styles.css              # Alle styling (modern, responsive)
├── script.js               # Interacties en animaties
├── README.md               # Deze documentatie
├── robots.txt              # SEO crawler instructies
├── sitemap.xml             # SEO sitemap
├── sitemap.html            # Menselijke sitemap
├── 404.html                # Error pagina
├── assets/                 # Bestanden en media
│   └── resume.pdf          # CV download
└── scss/                   # SCSS source files (optioneel)
    ├── main.scss
    ├── _variables.scss
    ├── _mixins.scss
    └── _animations.scss
```

## 🔧 Development Tips

### **CSS Variabelen Gebruiken**
```css
/* Consistent gebruik van variabelen */
.custom-element {
  color: var(--primary-color);
  font-family: var(--font-primary);
  border-radius: var(--border-radius);
  transition: var(--transition-fast);
}
```

### **Responsive Testing**
```bash
# Test op verschillende schermformaten:
# Chrome DevTools: F12 → Device Toggle
# Populaire formaten:
# - iPhone 13: 390x844
# - iPad: 768x1024  
# - Desktop: 1920x1080
```

### **Performance Monitoring**
```bash
# Gebruik Lighthouse voor performance audit:
# Chrome DevTools → Lighthouse tab
# Check Core Web Vitals:
# - LCP < 2.5s
# - FID < 100ms
# - CLS < 0.1
```

## 🐛 Troubleshooting

### **Hamburger Menu Werkt Niet**
```javascript
// Check of script.js correct is gelinked
console.log('Script loaded'); // Voeg toe aan script.js

// Controleer event listeners
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM ready');
  // Menu code hier...
});
```

### **Animaties Zijn Te Langzaam**
```css
/* Versnel animaties door transition-duration aan te passen */
.element {
  transition-duration: 0.2s; /* Was 0.6s */
}
```

### **Mobile Menu Overlapped Content**
```css
/* Verhoog z-index als menu onder content verdwijnt */
.nav-links {
  z-index: 9999; /* Verhoog indien nodig */
}
```

### **Images Laden Niet**
```html
<!-- Check image paths -->
<img src="./assets/profile.jpg" alt="Profile"> <!-- Relatief pad -->
<img src="/assets/profile.jpg" alt="Profile">  <!-- Absoluut pad -->
```

## 📈 SEO Optimalisatie

### **Meta Tags** (Voeg toe aan `<head>`)
```html
<meta name="description" content="Professional portfolio of [Jouw Naam] - Web Developer specializing in modern JavaScript frameworks">
<meta name="keywords" content="web developer, javascript, html, css, portfolio">
<meta name="author" content="Jouw Naam">

<!-- Open Graph voor social media -->
<meta property="og:title" content="Jouw Naam - Portfolio">
<meta property="og:description" content="Professional web developer portfolio">
<meta property="og:image" content="./assets/og-image.jpg">
<meta property="og:url" content="https://jouwdomain.com">
```

### **Schema Markup**
```html
<!-- Voeg structured data toe voor betere SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jouw Naam",
  "jobTitle": "Web Developer",
  "url": "https://jouwdomain.com",
  "sameAs": [
    "https://github.com/username",
    "https://linkedin.com/in/username"
  ]
}
</script>
```

## 📞 Support & Contact

Voor vragen over dit portfolio project:

- 🐛 **Bug Reports**: Open een issue op GitHub
- 💡 **Feature Requests**: Suggesties zijn welkom!
- 📧 **Contact**: [jouw-email@example.com]
- 🌐 **Live Demo**: [https://jouw-username.github.io/portfolio]
- 📚 **Documentation**: Zie deze README voor alle details

---

## 📄 Licentie

Dit project is open source en beschikbaar onder de [MIT License](LICENSE).

### MIT License
```
Copyright (c) 2025 [Mahir Gulec]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.
```

---

**Gemaakt met ❤️ en moderne web technologieën**

*Portfolio laatste update: Juni 2025*
*Responsive design getest op 15+ devices*
*Performance optimized voor Core Web Vitals*
