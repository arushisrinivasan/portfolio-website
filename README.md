# Arushi Srinivasan — Portfolio Website

A single-page, plain HTML/CSS/JS portfolio site. No build step, no dependencies.

## Preview locally

Either:

- Open `index.html` directly in your browser (double-click it), or
- Run a local server from this folder for a closer-to-production preview:

  ```bash
  python3 -m http.server 8000
  ```

  then visit `http://localhost:8000` in your browser.

## Deploy to GitHub Pages

1. Create a new GitHub repository and push this folder's contents to it (commit `index.html`, `css/`, `js/`, `assets/`, `README.md`).
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`.
4. Save — GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

(Optional) If you want a custom domain, add a `CNAME` file at the project root containing your domain, and configure DNS per [GitHub's custom domain docs].

## What to swap out before publishing

Everything placeholder is marked with an HTML comment (`<!-- PLACEHOLDER ... -->`) right above it in `index.html`. Specifically:

| What | Where | File |
|---|---|---|
| Headshot photo | Replace `.headshot-placeholder` div with an `<img>` tag (instructions in the comment above it); add your photo to `assets/images/` | `index.html` (`#about` section) |
| Resume PDF | Overwrite `assets/resume/resume.pdf` with your real resume (keep the same filename, or update the `href` if you rename it) | `assets/resume/resume.pdf` |
| Projects | Each project is a clearly delimited `<!-- PROJECT CARD: START/END -->` block — edit title, description, tags, and the two `href="#"` links | `index.html` (`#projects` section) |
| Education details | Graduation date and coursework | `index.html` (`#resume` section) |
| Skills tags | Technical/CS and Finance skill lists | `index.html` (`#resume` section) |
| Work experience | 3 timeline entries marked `<!-- PLACEHOLDER: replace with real role -->` | `index.html` (`#resume` section) |
| LinkedIn URL | Two occurrences (`REPLACE-ME`) — Contact section and footer | `index.html` |
| GitHub URL | Two occurrences (`REPLACE-ME`) — Contact section and footer | `index.html` |
| Contact email | `asriniva@bu.edu` — update if your email changes | `index.html` (Contact section + footer) |

## Structure

```
index.html          Single page, all sections
css/styles.css       Styling, responsive breakpoints, color variables
js/script.js         Mobile nav, scroll-reveal, active nav highlighting
assets/images/       Put your headshot photo here
assets/resume/        Put your resume PDF here (resume.pdf)
```

Accent color and spacing are controlled by CSS custom properties at the top of `css/styles.css` (`:root { --color-accent: ... }`) — change them in one place to retheme the site.
