# John Lemuel Dalisay Career Portfolio

Digital Health Systems Portfolio for **John Lemuel M. Dalisay**.

Positioning:

```txt
Digital Health | Health Information Systems | Data Analytics | Monitoring & Evaluation | Interoperability
```

This is a static GitHub Pages site built with Vite, React, TypeScript, and Tailwind CSS. It has no backend, database, authentication, contact form, or paid dependency. Optional Google Analytics 4 tracking loads only when a valid measurement ID is configured.

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

## Analytics Setup

This site supports Google Analytics 4 through a direct `gtag.js` implementation in `src/lib/analytics.ts`.

Privacy note:

```txt
This site uses Google Analytics to understand aggregate portfolio traffic and improve content. No contact forms, accounts, or sensitive personal data are collected.
```

The analytics code:

- Loads only when `VITE_GA_MEASUREMENT_ID` is present and matches the GA4 measurement ID format.
- Does nothing safely when the measurement ID is missing.
- Tracks the initial page view with `gtag("config", ...)` after the tag is initialized.
- Tracks section navigation as `section_view`.
- Tracks resume downloads as `resume_download`.
- Tracks dashboard links as `dashboard_click`.
- Tracks LinkedIn, GitHub, and Google Scholar links as `profile_link_click`.
- Tracks PeReF / FHIR IG links as `project_link_click`.
- Tracks public articles, publications, and presentations as `content_click`.
- Tracks email link clicks as `contact_email_click` without sending the email address.
- Does not configure advertising signals, remarketing, user ID tracking, form tracking, heatmaps, or session recordings.

Setup:

1. Create a Google Analytics 4 property.
2. Create a Web data stream for the GitHub Pages URL:

```txt
https://jldalisay95.github.io/johnlemueldalisay/
```

3. Copy the Measurement ID:

```txt
G-T3Z0B6JBXK
```

4. Create a local `.env` file:

```txt
VITE_GA_MEASUREMENT_ID=G-T3Z0B6JBXK
```

5. For GitHub Pages deployment using GitHub Actions, add the Measurement ID as a repository variable:

```txt
GitHub Repository -> Settings -> Secrets and variables -> Actions -> Variables
```

Add:

```txt
VITE_GA_MEASUREMENT_ID
```

Use this value:

```txt
G-T3Z0B6JBXK
```

6. The GitHub Actions workflow exposes the variable during build:

```yaml
- name: Build
  run: npm run build -- --base "$VITE_BASE_PATH"
  env:
    VITE_GA_MEASUREMENT_ID: ${{ vars.VITE_GA_MEASUREMENT_ID }}
```

7. Build locally:

```bash
npm run build
```

8. Deploy through GitHub Actions.
9. Verify the deployed installation:

### Verify with page source and DevTools

1. Open `https://jldalisay95.github.io/johnlemueldalisay/`.
2. Open **View Page Source** and confirm the source contains:

```txt
gtag/js?id=G-T3Z0B6JBXK
```

3. Confirm the app also loads a JavaScript file from `/johnlemueldalisay/assets/`.
4. Open browser **DevTools -> Network**.
5. Reload the page.
6. Search the Network panel for:

```txt
gtag/js?id=G-T3Z0B6JBXK
```

7. Also search for GA4 collection requests containing:

```txt
g/collect
G-T3Z0B6JBXK
```

The Google tag bootstrap is included in `index.html` so Google Tag Assistant can detect it early. The Measurement ID is still supplied by `VITE_GA_MEASUREMENT_ID` at build time. If the variable is missing, the bootstrap validates the value and exits without loading GA.

### Verify with Google Tag Assistant

1. Open `https://tagassistant.google.com/`.
2. Add this site URL:

```txt
https://jldalisay95.github.io/johnlemueldalisay/
```

3. Connect Tag Assistant to the site.
4. Confirm that Google tag `G-T3Z0B6JBXK` is detected.
5. Click portfolio links such as **Download Resume**, dashboard links, and profile links.
6. Confirm events appear for page views and tracked link interactions.

If Tag Assistant times out:

- Click **Retry** once after the page has fully loaded.
- Disable ad blockers or privacy extensions for the test.
- Confirm the Tag Assistant extension can read and change site data for `jldalisay95.github.io`.
- Try entering the exact project-site URL with the trailing slash: `https://jldalisay95.github.io/johnlemueldalisay/`.
- If Tag Assistant adds a debug parameter that changes page behavior, edit the Tag Assistant connection and turn off the debug signal in the URL.

### Verify with Google Analytics Realtime

- Open **Reports -> Realtime**.
- Open the GitHub Pages site in another browser or incognito window.
- Disable ad blockers for the test browser if Realtime does not update.
- Click through the portfolio for 30-60 seconds.
- Confirm that a visit appears. GA4 setup checks and standard reports can lag behind Realtime.

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

If Google Analytics is enabled, also confirm:

```txt
VITE_GA_MEASUREMENT_ID=G-T3Z0B6JBXK
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
- Do not send email addresses, phone numbers, names, or sensitive personal data as analytics event parameters.

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
- Site still builds and works if `VITE_GA_MEASUREMENT_ID` is missing.
- GA4 script loads only when a valid `VITE_GA_MEASUREMENT_ID` is configured.
