# GetJob.co — Job Hiring & Recruitment Portal Dashboard

A modern, fast, and fully responsive job hiring and recruitment dashboard built with pure HTML5, CSS3, and Vanilla JavaScript. The portal provides job seekers and employers with an intuitive interface to browse, search, filter, and review career opportunities with real-time interactivity.

---

## 🚀 Features

- **Full-Width Edge-to-Edge Layout**: Optimized full-screen dashboard without awkward outer margins or letterboxing.
- **High-Contrast & Legible Typography**: WCAG-compliant slate color palette (`#0f172a`, `#334155`) and scalable font sizes ensuring readability across all screen resolutions.
- **Expandable Search Bar with Placeholder**:
  - Clicking the search icon (`⌕`) in the header slides out a dedicated search input with an autofocus placeholder (`"Search jobs, skills, or companies..."`).
  - Automatically synchronizes with the main keyword filter in real time.
  - Supports keyboard shortcuts (<kbd>Enter</kbd> to search & scroll, <kbd>Esc</kbd> to collapse).
- **Dynamic Job Filtering & Real-Time Search**:
  - Filter by keyword, location, job type (Full-time, Intern, Part-time, Contract), industry, and experience level.
  - Live result counter updating dynamically based on search criteria.
  - Built-in empty state when no job matches the search terms.
- **Interactive Job Details Panel**:
  - Clicking any job card instantly updates the active detail view with matching company logo, brand color, title, and overview.
- **A–Z & Relevance Sorting**: Sort job listings alphabetically by company name or by relevance.
- **Save to Favorites**: Bookmark job positions with visual state persistence and feedback toast messages.
- **Company Follow System**: Interactive follow/unfollow toggle with status updates.
- **Fully Responsive**: Mobile-first media queries tailored for desktops, tablets, and smartphones.
- **Zero Dependencies**: Lightweight, lightning-fast loading without any external frameworks or libraries.

---

## 📁 Project Structure

```text
portal_hiring/
├── css/
│   └── style.css       # Complete modular styles, design system, and responsive breakpoints
├── js/
│   └── script.js       # Core interactivity, search expansion, filtering, and event listeners
├── index.html          # Semantic HTML5 recruitment portal dashboard
└── README.md           # Project documentation and repository overview
```

---

## 🛠️ Built With

- **HTML5**: Semantic markup (`<header>`, `<main>`, `<section>`, `<aside>`, `<article>`) with accessibility attributes (`aria-label`, `aria-live`, `role="status"`).
- **CSS3**:
  - CSS Custom Properties (`--blue`, `--ink`, `--text-body`, `--line`, etc.) for centralized theming.
  - Modern layout techniques: CSS Grid and Flexbox.
  - Fluid typography and spacing using `clamp()`.
  - Media queries for smooth breakpoints across desktop, tablet, and mobile.
- **JavaScript (ES6+)**:
  - Pure Vanilla JS without external dependencies.
  - Event delegation and DOM manipulation.
  - Dynamic template literal rendering and attribute syncing.

---

## 💻 Getting Started / Running Locally

### Option 1: Using XAMPP / Apache (Recommended)

1. Ensure the project is located inside your XAMPP web root:
   ```text
   C:\xampp\htdocs\portal_hiring\
   ```
2. Start the **Apache** module from the XAMPP Control Panel.
3. Open your web browser and navigate to:
   ```text
   http://localhost/portal_hiring/
   ```

### Option 2: Direct File Execution

Simply double-click [`index.html`](index.html) or open it directly in any modern browser (Chrome, Edge, Firefox, Safari):
```text
file:///C:/xampp/htdocs/portal_hiring/index.html
```

---

## 🎯 Usage Guide

1. **Header Search**:
   - Click the search icon (`⌕`) on the top-right next to the profile.
   - An input field slides open with the placeholder `"Search jobs, skills, or companies..."` and focuses automatically.
   - Type your search query to filter jobs instantly.
2. **Browsing & Inspecting Jobs**:
   - Click any job card in the results list to view its comprehensive job overview, responsibilities, requirements, and company profile.
3. **Saving a Job**:
   - Click the bookmark icon (`♧`) on any card or the **Save** button in the detail view to toggle favorites.
4. **Sorting**:
   - Use the dropdown in the results header to sort listings by **Relevance** or **Name: A–Z**.

---

## 👤 Author

- **Maintainer**: Joselito Pasculado
- **Project**: Portal Hiring Dashboard (`GetJob.co`)

---

## 📄 License

This project is open-source and available for educational and recruitment dashboard development.
