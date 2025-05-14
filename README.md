# Sintesia Landing Page

## Description

Sintesia is an independent research and development lab focused on creating intelligent agents and automated workflows. This project is the landing page for Sintesia, designed to communicate our vision, mission, and current research.

## Technologies Used

- **Astro**: Framework for building fast and modern websites.
- **Tailwind CSS**: Utility-first CSS framework for rapid and responsive design.
- **@astrojs/sitemap**: Automatic sitemap generation.
- **astro-robots-txt**: Robots.txt configuration for SEO.
- **astro-seo**: Metadata and SEO tag management.

## Project Structure

```
astro.config.mjs
package.json
pnpm-lock.yaml
README.md
tailwind.config.cjs
tsconfig.json
public/
  logo.svg
src/
  components/
    ContentSection.astro
    ResearchCard.astro
  content/
    config.ts
    research/
      post-1.md
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    research/
      [slug].astro
  styles/
    global.css
```

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/dalvinsegura/sintesia-landingpage.git
   ```

2. Navigate to the project directory:
   ```bash
   cd sintesia-landingpage
   ```

3. Install dependencies using pnpm:
   ```bash
   pnpm install
   ```

## Available Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Builds the project for production.
- `pnpm preview`: Previews the built site.

## Contribution

If you want to contribute to this project, please open an issue or submit a pull request. All help is welcome!

## License

This project is licensed under the MIT License.