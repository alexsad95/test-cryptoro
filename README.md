# CRYPTORO - Cryptocurrency Platform

Modern web platform for cryptocurrency trading, built with React using Vite and Zustand.

## 🚀 Technologies

- **React 18** - Main framework
- **Vite** - Bundler and dev server
- **Zustand** - State management
- **CSS3** - Styling with CSS variables
- **Responsive Design** - Adaptive layout

## 📦 Installation and Setup

### Prerequisites
- Node.js 18+ 
- pnpm, yarn, npm

### Install dependencies
```bash
pnpm install
```

### Run in development mode
```bash
pnpm run dev
```

### Build for production
```bash
pnpm run build
```

### Preview build
```bash
pnpm run preview
```

## 🏗️ Project Structure

```
src/
├── components/                     # React components
│   ├── Header/                     # Site header
│   ├── Hero/                       # Main screen
│   ├── PopularProducts/            # Popular products
│   └── UI/                         # UI components
│       ├── CardButton/             # Card button
│       └── ProductCard/            # Product card
├── hooks/                          # React hooks
│   └── useIntersectionObserver.js  # Visibility tracking hook
├── stores/                         # Zustand stores
│   └── appStore.js                 # Static data store
├── styles/                         # Global styles
│   ├── global.css                  # Main styles
│   └── fonts.css                   # Font styles
├── App.jsx                         # Main component
└── main.jsx                        # Entry point
```


## 📄 License

MIT License
