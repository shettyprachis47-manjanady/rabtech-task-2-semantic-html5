# ClearView Dashboard — Semantic HTML5 & Accessible Component Architecture

**Internship task:** RabTech Academy — Full Stack Web Development

## Overview

ClearView is a small, responsive enterprise dashboard demonstration built with semantic HTML5, CSS, and vanilla JavaScript. It demonstrates landmarks, navigation, accessible tables, form labels and validation, keyboard focus styling, and a native HTML dialog.

## Project structure

```text
rabtech-task-2/
├── index.html
├── pages/
│   └── reports.html
├── components/
│   ├── header.html
│   ├── sidebar.html
│   ├── dashboard-table.html
│   ├── accessible-form.html
│   └── modal.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## Run locally

1. Open this folder in Visual Studio Code.
2. Open `index.html` in a browser, or use the VS Code Live Server extension.
3. Open **Reports** from the sidebar to test the second page.
4. Try navigating with Tab and Shift+Tab. Activate Help, then close the dialog using its button or Escape.
5. Submit the support form with missing or invalid fields to test browser validation.

## Semantic and accessibility features

- `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer` landmarks/structure.
- Skip link to main content and visible keyboard focus indicators.
- Descriptive page titles, headings, table captions, column headers, and row headers.
- Explicit form labels, fieldset/legend grouping, autocomplete, required fields, length limits, and help text.
- Native `<dialog>` with a clear title, description, keyboard dismissal, and focus return.
- Responsive layout and reduced-motion preference support.

## Validation checklist

- [ ] Validate `index.html` at https://validator.w3.org/
- [ ] Validate `pages/reports.html` at https://validator.w3.org/
- [ ] Fix all reported errors and review warnings.
- [ ] Test the site using keyboard only.
- [ ] Check color contrast and accessibility with browser developer tools or Lighthouse.
- [ ] Capture screenshots of the dashboard, form validation, modal, and validation results.

HTML validation is not a complete WCAG audit. Keyboard and assistive-technology checks are also needed. The sample data and form are for demonstration; the form does not send data to a server.

## Suggested screenshots for submission

Save screenshots in a `docs/screenshots/` folder if you create one:
1. Dashboard page showing the sidebar, summary cards, and table.
2. Support form showing labels and fields.
3. Help dialog open.
4. W3C validator result after resolving all errors.
5. Keyboard focus visible on a navigation link or button.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- W3C Markup Validation Service
