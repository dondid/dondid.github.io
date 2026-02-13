# 🚀 Portfolio Personal - React + Vite + TailwindCSS

Portfolio profesional modern built cu React, Vite și TailwindCSS. Design corporate clean, responsive și optimizat pentru performanță.

## ✨ Features

- ⚡️ **Vite** - Super-fast build tool
- ⚛️ **React 18** - Latest React features
- 🎨 **TailwindCSS** - Utility-first CSS framework
- 📱 **Responsive Design** - Mobile-first approach
- 🎭 **Smooth Animations** - Professional transitions
- 🎯 **SEO Optimized** - Meta tags și semantic HTML
- 📦 **Easy Deployment** - GitHub Pages ready

## 🛠️ Tech Stack

- React 18.3
- Vite 5.1
- TailwindCSS 3.4
- React Icons
- Framer Motion (optional animations)

## 📋 Cerințe

- Node.js 18+ 
- npm sau yarn

## 🚀 Instalare și Rulare Locală

### 1. Clone Repository

```bash
git clone https://github.com/dondid/dondid.github.io.git
cd dondid.github.io
```

### 2. Instalează Dependințele

```bash
npm install
```

### 3. Rulează în Development Mode

```bash
npm run dev
```

Site-ul va fi disponibil la `http://localhost:5173`

### 4. Build pentru Production

```bash
npm run build
```

Fișierele optimizate vor fi în folder-ul `dist/`

### 5. Preview Production Build

```bash
npm run preview
```

## 📝 Personalizare

### 1. Informații Personale

Editează fișierele din `src/components/`:

**Hero.jsx** - Numele, titlul, descrierea
```jsx
<h1>Your Name</h1>
<h2>Full Stack Developer</h2>
```

**About.jsx** - Despre tine
```jsx
<p>I'm a passionate Full Stack Developer...</p>
```

**Skills.jsx** - Tehnologiile tale
```jsx
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      // Adaugă sau modifică skills
    ]
  }
]
```

**Projects.jsx** - Proiectele tale
```jsx
const projects = [
  {
    title: 'Project Name',
    description: 'Project description',
    tech: ['React', 'Laravel'],
    github: 'https://github.com/user/repo',
    live: 'https://demo.com'
  }
]
```

**Experience.jsx** - Experiența profesională
```jsx
const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Company Name',
    period: '2023 - Present',
    description: ['Achievement 1', 'Achievement 2']
  }
]
```

**Contact.jsx** - Informații de contact
```jsx
const contactInfo = [
  {
    title: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com'
  }
]
```

### 2. Culori și Styling

Editează `tailwind.config.js`:

```js
colors: {
  primary: {
    500: '#0ea5e9', // Culoarea principală
    600: '#0284c7',
    // ...
  }
}
```

### 3. Fonts

Schimbă fonturile în `tailwind.config.js` și în `index.html`:

```js
fontFamily: {
  'display': ['Your Display Font', 'serif'],
  'body': ['Your Body Font', 'sans-serif'],
}
```

### 4. Avatar/Poză

Înlocuiește URL-ul imaginii în `Hero.jsx`:

```jsx
<img src="https://avatars.githubusercontent.com/u/64099001?v=4" />
```

Cu o imagine personală din folder-ul `public/`:

```jsx
<img src="/avatar.jpg" />
```

## 🌐 Deploy pe GitHub Pages

### Metoda 1: Manual

1. **Build proiectul:**
```bash
npm run build
```

2. **Instalează gh-pages:**
```bash
npm install -D gh-pages
```

3. **Deploy:**
```bash
npm run deploy
```

### Metoda 2: GitHub Actions (Automated)

1. **Creează `.github/workflows/deploy.yml`:**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

2. **Push la GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

3. **Activează GitHub Pages:**
   - Mergi la Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages / root
   - Save

Site-ul va fi live la: `https://dondid.github.io`

## 📁 Structura Proiectului

```
dondid-portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles + Tailwind
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── README.md           # Acest fișier
```

## 🎨 Customization Tips

### Adaugă mai multe secțiuni

1. Creează un component nou în `src/components/`
2. Importă-l în `App.jsx`
3. Adaugă-l în navbar

### Schimbă animațiile

Modifică clasele din `tailwind.config.js`:

```js
animation: {
  'fade-in': 'fadeIn 0.6s ease-out',
}
```

### Adaugă dark mode

Folosește `dark:` prefix în Tailwind:

```jsx
<div className="bg-white dark:bg-dark-900">
```

## 🐛 Troubleshooting

### Build errors

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Paths nu funcționează după deploy

Verifică `vite.config.js`:
```js
base: '/' // Pentru username.github.io
// SAU
base: '/repo-name/' // Pentru username.github.io/repo-name
```

## 📄 License

MIT License - Feel free to use this template!

## 🤝 Contributing

Pull requests sunt binevenite! Pentru schimbări majore, deschide mai întâi un issue.

## 📧 Contact

- Email: your.email@example.com
- GitHub: [@dondid](https://github.com/dondid)
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)

---

**Made with ❤️ using React + Vite + TailwindCSS**
#dondid.github.io
