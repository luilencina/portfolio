# ✦ Luiza Lencina — Portfolio

<p align="center">
  <strong>Front-end Developer</strong>
</p>

<p align="center">
  A modern and responsive personal portfolio built to showcase my experience, skills, projects and professional journey as a software developer.
</p>

<p align="center">
  <a href="https://luilencina.github.io/portfolio/">
    <strong>View Portfolio →</strong>
  </a>
</p>

---

## ✨ About the Project

This portfolio was designed and developed from scratch with a focus on **clean architecture, reusable components, responsive design and user experience**.

The project presents my professional experience, technical skills, education, projects and contact information through a modern and interactive interface.

It also includes support for **light and dark themes**, responsive layouts and reusable UI components.

---

## 🚀 Tech Stack

### Front-end

- **React 19**
- **TypeScript**
- **React Router 8**
- **Tailwind CSS 4**
- **Vite**
- **Bootstrap Icons**

### Development & Tooling

- ESLint
- TypeScript
- React Router Dev
- Git & GitHub
- GitHub Pages

### Design

- Responsive Design
- Dark / Light Mode
- Component-based UI
- Custom Design System
- Figma

---

## 🧩 Main Features

- 🌐 Responsive layout for desktop, tablet and mobile
- 🌓 Light and dark theme
- 💼 Professional experience section
- 🎓 Education section
- 🛠️ Technical skills organized by category
- 🚀 Projects showcase
- 🔗 Project and social links
- 📩 Contact section
- 📄 CV download
- ♻️ Reusable UI components
- 🧱 Data-driven sections
- ⚡️ Client-side rendering optimized for static deployment
- 📱 Mobile-friendly navigation

---

## 📁 Project Structure

The project follows a feature-oriented structure designed to keep **pages, components, data and utilities separated**, making the codebase easier to maintain and scale.

```text
portfolio/
│
├── app/
│   │
│   ├── components/
│   │   ├── button/
│   │   │   └── ButtonComponent.tsx
│   │   │
│   │   ├── chips/
│   │   │   └── Chip.tsx
│   │   │
│   │   └── input/
│   │       └── InputComponent.tsx
│   │
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   │
│   ├── data/
│   │   ├── about.ts
│   │   ├── experience.ts
│   │   ├── home.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   │
│   ├── layouts/
│   │   └── LandingLayout.tsx
│   │
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   │
│   ├── routes/
│   │   └── ...
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   └── theme.css
│   │
│   ├── utils/
│   │   ├── helpers/
│   │   │   ├── getImage.ts
│   │   │   └── ...
│   │   │
│   │   └── ...
│   │
│   ├── root.tsx
│   └── routes.ts
│
├── public/
│   └── assets/
│       ├── images/
│       ├── icons/
│       └── ...
│
├── package.json
├── react-router.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🏗️ Architecture

The application is organized around a simple separation of responsibilities.

### `components/`

Contains reusable UI components used throughout the application.

Examples:

- Buttons
- Inputs
- Chips
- Other reusable interface elements

The goal is to avoid duplicating UI logic and keep the pages focused on composition.

---

### `pages/`

Contains the main sections of the portfolio.

Each page/section is responsible for composing its content and presenting it to the user.

Examples:

```text
Home
About
Skills
Experience
Projects
Contact
```

---

### `layouts/`

Contains application-level layouts.

The main `LandingLayout` is responsible for composing the portfolio experience, including shared elements such as the header and the main sections.

```text
LandingLayout
│
├── Header
├── Home
├── About
├── Skills
├── Experience
├── Projects
└── Contact
```

---

### `data/`

The portfolio content is separated from the UI whenever possible.

This allows information such as projects, skills, experience and education to be updated without having to modify the presentation logic.

For example:

```ts
export const projectsData = [
  {
    id: "project-1",
    title: "Project Name",
    description: "Project description",
    technologies: ["React", "TypeScript", "Node.js"],
  },
];
```

This approach makes the interface more **data-driven and maintainable**.

---

### `contexts/`

Application-wide React contexts live here.

Currently, the main example is the theme system:

```text
ThemeContext
```

It controls the application's light and dark modes and persists the selected theme.

---

### `utils/`

Contains reusable functions that are not directly tied to a specific UI component.

Examples include:

- Asset path helpers
- File handling
- Download utilities
- Other shared helpers

---

### `styles/`

Contains the global styling and theme configuration.

The project uses **Tailwind CSS** together with custom CSS variables for colors and theme behavior.

---

## 🎨 Design System

The interface uses a small custom design system based on reusable theme variables.

The main colors and UI behavior are centralized through CSS variables, allowing the entire application to respond to theme changes consistently.

The design focuses on:

- Clean typography
- Generous spacing
- Rounded UI elements
- Subtle borders
- Responsive layouts
- Accessible contrast
- Consistent component styling

---

## 🌓 Theme System

The portfolio supports both **light and dark themes**.

The theme is managed through React Context and persisted on the client side so the user's preference remains between visits.

```text
ThemeContext
      │
      ├── Light Theme
      │
      └── Dark Theme
```

---

## 📱 Responsive Design

The portfolio was designed with a mobile-first mindset and adapts to different screen sizes.

```text
Mobile
   ↓
Tablet
   ↓
Desktop
```

Layouts, grids, typography and navigation adjust according to the available screen width.

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/luilencina/portfolio.git
```

Navigate to the project:

```bash
cd portfolio
```

Install dependencies:

```bash
npm install
```

---

## 💻 Development

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 🏭 Production Build

Create an optimized production build:

```bash
npm run build
```

Run the production application locally:

```bash
npm run start
```

Type-check the project:

```bash
npm run typecheck
```

---

## 🌐 Deployment

The portfolio is deployed using **GitHub Pages**.

Live version:

**[luilencina.github.io/portfolio](https://luilencina.github.io/portfolio/)**

The application is configured with a `/portfolio` base path to correctly serve assets and routes from GitHub Pages.

---

## 🗂️ Asset Management

Static assets are stored inside the public assets directory.

```text
public/
└── assets/
    ├── images/
    ├── icons/
    └── ...
```

Because the application is deployed under a subpath, asset URLs are handled through a helper:

```ts
getAssetPath();
```

This ensures assets are correctly resolved both during local development and on GitHub Pages.

---

## 📌 Sections

The portfolio currently contains:

| Section       | Description                              |
| ------------- | ---------------------------------------- |
| 🏠 Home       | Introduction and professional overview   |
| 👩🏻‍💻 About      | Personal information and education       |
| 🛠️ Skills     | Technical skills organized by category   |
| 💼 Experience | Professional experience and technologies |
| 🚀 Projects   | Selected projects and technologies       |
| 📩 Contact    | Contact form and social links            |

---

## 🧠 Development Principles

This project was built with a few principles in mind:

**Component Reusability**
UI elements should be reusable instead of duplicated.

**Separation of Concerns**
Content, presentation, application logic and utilities are kept separated whenever possible.

**Maintainability**
The structure should make it easy to add new projects, skills or experiences without changing unrelated components.

**Responsive Design**
The interface should provide a good experience regardless of screen size.

**User Experience**
Animations, spacing, themes and interactions are designed to make the portfolio pleasant and intuitive to navigate.

---

## 👩🏻‍💻 About Me

I'm **Luiza Lencina**, a Software Engineer and Front-end Developer with experience building web applications and working across the full-stack.

My main focus is front-end development, with experience in technologies such as:

```text
React
Angular
Vue
TypeScript
JavaScript
HTML
SCSS / SASS
Node.js
C#
SQL
MongoDB
Docker
```

I'm particularly interested in building applications that combine **good engineering practices, clean interfaces and a strong user experience**.

---

## 📬 Contact

Interested in working together or just want to say hello?

Feel free to reach out through the contact section of my portfolio.

**Portfolio:**
https://luilencina.github.io/portfolio/

---

<p align="center">
  Built with ☕, 💜 and a lot of code by <strong>Luiza Lencina</strong>
</p>
