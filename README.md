# E-Commerce Store (Nuxt 3)

A modern, multilingual e-commerce web application built with Nuxt 3, Pinia, Tailwind CSS, and Vue I18n.

## Features

- 🛒 Product listing and details
- 🛍️ Shopping cart with persistent storage
- 🌐 Multilingual support (English & Arabic)
- 🔒 Login form with validation
- 🎨 Responsive design using Tailwind CSS
- 🗂️ Modular code structure with composables and stores

## Tech Stack

- [Nuxt 3](https://nuxt.com/) (Vue 3 framework)
- [Pinia](https://pinia.vuejs.org/) (state management)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS)
- [@nuxtjs/i18n](https://i18n.nuxtjs.org/) (internationalization)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

- `pages/` — Main app pages (home, cart, login, product details)
- `components/` — Reusable UI components
- `composables/` — Custom composable functions (e.g., useProducts)
- `stores/` — Pinia stores (e.g., cart)
- `locales/` — Translation files (`en.json`, `ar.json`)
- `assets/css/` — Tailwind CSS file

## Customization

- **Add products:** Edit `composables/useProducts.js`.
- **Edit translations:** Update `locales/en.json` and `locales/ar.json`.
- **Change styles:** Edit `assets/css/tailwind.css` or `tailwind.config.js`.

## License

MIT
