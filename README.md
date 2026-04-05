# SScan - Free Website Security Scanner

<p align="center">
  <a href="#">
    <img src="" alt="SScan Logo" width="200" height="200">
  </a>
</p>

<p align="center">
  <strong>Free. Fast. Security for Everyone.</strong>
</p>

<p align="center">
  <a href="#">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/React-18.2+-61DAFB?style=flat&logo=react" alt="React">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/Vite-5.0+-646CFF?style=flat&logo=vite" alt="Vite">
  </a>
</p>

---

## Table of Contents

- [About SScan](#about-sscan)
- [Features](#features)
- [Getting Started](#getting-started)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## About SScan

**SScan** is a free website security scanning platform built with React that enables anyone to scan their websites for security vulnerabilities. Our mission is to make web security accessible to everyone—from individual website owners to small businesses—completely free of charge.

### How It Works

1. **Enter a URL** - Simply input the website URL you want to scan
2. **Initiate Scan** - Our scanner performs security checks
3. **View Results** - Get detailed reports on vulnerabilities found

---

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/nodevid/sscan.git

# Navigate to the project directory
cd sscan

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| Vite | Build Tool |
| React Router | Client-side Routing |
| Axios | HTTP Client |
| TailwindCSS | Styling |
| Zustand | State Management |
| React Query | Server State Management |

---

## Project Structure

```
src/
├── assets/          # Static assets (images, fonts, etc.)
├── components/      # Reusable UI components
│   ├── common/      # Generic components (Button, Input, Modal, etc.)
│   ├── layout/      # Layout components (Header, Footer, Sidebar)
│   └── features/    # Feature-specific components
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── services/        # API services
├── stores/          # Zustand stores
├── styles/          # Global styles
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ for a safer web
</p>
