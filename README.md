# John Lemuel Dalisay Career Portfolio

Digital Health Systems Portfolio for **John Lemuel M. Dalisay**.

Positioning:

```txt
Digital Health | Health Information Systems | Data Analytics | Monitoring & Evaluation | Interoperability
```

This is a static GitHub Pages site built with Vite, React, TypeScript, and Tailwind CSS. It has no backend, database, authentication, analytics script, or paid dependency.

## Current Repository

This checkout is connected to:

```txt
https://github.com/jldalisay95/johnlemueldalisay
```

That means the current GitHub Pages deployment is a project site:

```txt
https://jldalisay95.github.io/johnlemueldalisay/
```

For this project-site deployment, the GitHub Actions repository variable must be:

```txt
VITE_BASE_PATH=/johnlemueldalisay/
```

## Optional User-Site Repository

If you want the portfolio to appear at the root GitHub Pages URL:

```txt
https://jldalisay95.github.io/
```

create or rename the repository to:

```txt
jldalisay95.github.io
```

For a user-site repository, keep the Vite base path as `/`.

If your GitHub username changes, use:

```txt
[MY-GITHUB-USERNAME].github.io
```

## Setup

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Edit Portfolio Content

Edit site content in:

```txt
src/data/portfolio.ts
```

This file contains:

- `personalInfo`
- `hero`
- `featuredWork`
- `projects`
- `dashboards`
- `publications`
- `articles`
- `presentations`
- `skills`
- `experience`
- `training`
- `community`
- `contactLinks`

Use placeholders such as `[INSERT GITHUB PROFILE URL]`, `[INSERT STATUS]`, or `[INSERT PUBLIC LINK IF AVAILABLE]` until details are safe and verified.

## Resume PDF

The resume download button points to:

```txt
public/John_Lemuel_Dalisay_Resume.pdf
```

Place your public-safe resume PDF at:

```txt
/public/John_Lemuel_Dalisay_Resume.pdf
```

Use a 1-page or 2-page public resume. Do not include full home address, private phone number unless approved, references, confidential project details, private dashboards, internal-only links, sensitive identifiers, or non-public government information.

The site labels the button as **Download Resume** and includes this note:

```txt
Public resume version. Full CV available upon request.
```

## Dashboard Links

Dashboard entries are in `portfolio.dashboards`.

Each dashboard has:

- `title`
- `url`
- `type`
- `description`
- `tools`
- `privacyNote`

Dashboard links open in a new tab. Dashboards are not embedded by default because public sharing, archival status, and data privacy should be verified first.

Current dashboard links:

- Provincial Mortality Reporting: `https://bit.ly/socotmortality`
- Provincial Morbidity Reporting: `https://bit.ly/socotmorbidity`
- Provincial Oral Healthcare Reporting: `https://bit.ly/fhsisdentalsocot`
- Chikiting Ligtas 2023 Reporting: `https://bit.ly/socotchikiting`
- Provincial COVID-19 Dashboard: `https://bit.ly/covid19sox`

## Articles, Publications, and Presentations

Edit public writing and presentation entries in:

```txt
portfolio.publications
portfolio.articles
portfolio.presentations
```

Keep placeholders when links are missing or not approved for public sharing.

## GitHub Pages Deployment

The deployment workflow is:

```txt
.github/workflows/deploy.yml
```

It installs dependencies, builds the Vite app, uploads `dist`, and deploys to GitHub Pages.

For the current repository, confirm this repository variable exists:

```txt
VITE_BASE_PATH=/johnlemueldalisay/
```

In GitHub:

1. Open the repository.
2. Go to **Settings**.
3. Go to **Pages**.
4. Set **Source** to **GitHub Actions**.
5. Confirm repository visibility is **Public** if you want the public GitHub Pages site available on the Free plan.
6. Push to `main`.
7. Wait for the **Deploy to GitHub Pages** workflow to finish.
8. Open `https://jldalisay95.github.io/johnlemueldalisay/`.
9. Use HTTPS.

## User Site vs Project Site

For a user site:

```txt
https://jldalisay95.github.io/
```

Keep the Vite base path as `/`. This is the default.

For this project site:

```txt
https://jldalisay95.github.io/johnlemueldalisay/
```

Use:

```txt
VITE_BASE_PATH=/johnlemueldalisay/
```

For any other project site:

```txt
https://[GITHUB_USERNAME].github.io/[REPOSITORY-NAME]/
```

Set a GitHub Actions repository variable:

```txt
VITE_BASE_PATH=/[REPOSITORY-NAME]/
```

Test a project-site build locally:

```bash
npm run build -- --base /[REPOSITORY-NAME]/
```

For this repository:

```bash
npm run build -- --base /johnlemueldalisay/
```

## Optional Custom Domain

Custom domain support is disabled by default.

To enable it:

1. Rename `public/CNAME.example` to `public/CNAME`.
2. Replace `[INSERT CUSTOM DOMAIN]` with the approved domain.
3. Configure DNS records required by GitHub Pages.
4. Enable **Enforce HTTPS** after GitHub verifies the domain.

Do not publish a placeholder `CNAME` file.

## Privacy and Public-Safety Checklist

Before publishing:

- Confirm the resume is public-safe.
- Confirm dashboard links are intentionally public.
- Remove internal-only links.
- Remove non-public reports.
- Remove confidential government data.
- Remove private phone number unless explicitly approved.
- Do not add references.
- Do not add invented metrics, awards, clients, roles, or outcomes.

## QA Checklist

Run:

```bash
npm install
npm run build
```

Check:

- No TypeScript errors.
- No broken imports.
- Resume downloads from `/John_Lemuel_Dalisay_Resume.pdf`.
- Dashboard links open in new tabs.
- Navigation links scroll to existing sections.
- SEO title, description, Open Graph metadata, Twitter metadata, and JSON-LD are present.
- Layout works on mobile, tablet, and desktop.
- Keyboard focus is visible.
- Links have descriptive labels.
