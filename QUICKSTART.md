# 🚀 Quick Start Guide

## Step 1: Setup Local

```bash
# Clone repository
git clone https://github.com/dondid/dondid.github.io.git
cd dondid.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Deschide: `http://localhost:5173`

## Step 2: Personalizează

### Editează rapid:

1. **Numele și titlul** → `src/components/Hero.jsx` (linia 10-15)
2. **Proiecte** → `src/components/Projects.jsx` (array `projects`)
3. **Skills** → `src/components/Skills.jsx` (array `skillCategories`)
4. **Contact info** → `src/components/Contact.jsx` (array `contactInfo`)
5. **Avatar** → Înlocuiește URL-ul în `Hero.jsx` linia 89

### Culori:

Editează `tailwind.config.js` → secțiunea `colors.primary`

## Step 3: Deploy pe GitHub Pages

### Opțiunea A - Automatic (Recomandat)

1. Push la GitHub:
```bash
git add .
git commit -m "Initial portfolio"
git push origin main
```

2. GitHub Actions va face deploy automat
3. Activează Pages în Settings → Pages → Source: GitHub Actions

### Opțiunea B - Manual

```bash
npm run build
npm run deploy
```

## 📝 Checklist Personalizare

- [ ] Schimbă numele în Hero.jsx
- [ ] Actualizează titlul/poziția
- [ ] Adaugă descrierea personală
- [ ] Schimbă link-urile sociale (GitHub, LinkedIn, etc.)
- [ ] Actualizează proiectele
- [ ] Modifică skills-urile
- [ ] Completează experiența profesională
- [ ] Schimbă informațiile de contact
- [ ] Înlocuiește avatar-ul
- [ ] Customizează culorile (opțional)

## 🎯 După Deploy

Site-ul tău va fi live la: **https://dondid.github.io**

## ⚙️ Comenzi Utile

```bash
npm run dev      # Development mode
npm run build    # Build pentru production
npm run preview  # Preview build local
npm run deploy   # Deploy manual pe GitHub Pages
```

## 🆘 Need Help?

Verifică README.md pentru instrucțiuni complete sau contactează-mă!
