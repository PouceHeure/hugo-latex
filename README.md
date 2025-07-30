# Hugo LaTeX Theme

A minimal, LaTeX-inspired Hugo theme designed for academic portfolios, blogs, or CVs. Includes support for equations, references, figures, and an integrated table of contents.

## Features

- LaTeX-style shortcodes for:
  - Equations
  - Citations
  - References
  - Figures and subfigures
  - Tables
- Clean academic-style design
- Table of contents support
- Custom layouts for:
  - Articles
  - Projects
  - CV
- Styled with minimal custom CSS

## Quick Start

### 1. Install Hugo

Follow instructions at [gohugo.io](https://gohugo.io/getting-started/installing/).

### 2. Create a New Site

```bash
hugo new site my-site
cd my-site
```

### 3. Add the Theme

```bash
git submodule add https://github.com/your-username/hugo-latex.git themes/hugo-latex
```

Or copy the theme folder into `themes/hugo-latex`.

### 4. Update `config.toml`

Example:

```toml
baseURL = "https://example.com/"
languageCode = "en-en"
title = "Title"
theme = "hugo-latex"

[author]
  name = "Your Name"

[markup]
  [markup.goldmark.renderer]
    unsafe = true

  [markup.tableOfContents]
    startLevel = 2
    endLevel = 4
    ordered = false

[params]
  name = "Your Name"
  about = "Short description"
  linkedin = "your-linkedin-link"
  github = "your-github-link"
  youtube_playlist = "your-youtube-link"

[outputs]
  home = ["HTML", "RSS"]
  page = ["HTML"]
  section = ["HTML"]
```

### 5. Add Content

```bash
hugo new articles/my-article.md
```

Use shortcodes like `{{< equation >}}`, `{{< cite >}}`, etc.

### 6. Run Locally

```bash
hugo server
```

## Directory Structure

```
layouts/
  articles/
  projects/
  shortcodes/
  _default/
  partials/
static/css/
  style.css
  toc.css
  color.css
```
