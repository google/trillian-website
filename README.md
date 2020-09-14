# Trillian Website

This website is built as a static site using [Hugo][hugo]. Stylesheets are written in SCSS and use [Tailwind][tailwind], a utilty-first CSS framework.

## Dependencies

You'll need _Hugo 0.60 extended_ or greater installed on your path. For OSX, `brew install hugo` should hook you up. The site was developed against Hugo 0.72.

You'll need a Javascript package manger to install PostCSS and other dependencies. [npm][npm] is recommended (primarily for compatibility with Github Actions).

## Running the site locally

    npm install

will install the JS dependencies. Once you've done that, you can spin up a local server with

    hugo serve

## Managing Content

### Homepage: Get started

`content/_index.html` contains a `<section>` element labelled with the comment `<!-- Get started block -->`. This contains all of the content render under the header **Get Started** on the homepage.

Markdown files are rendered here using the shortcode `{{< read-markdown-file "/content/[filename].md" >}}`.

YouTube videos can be embedded in the page using a custom shortcode: `{{< trillian-youtube w7Ft2ymGmfc >}}`, where `w7Ft2ymGmfc` is the YouTube video ID. 📺

### Case study logos

`data/case_studies.json` contains a JSON array that Hugo then renders on the homepage using the `.Site.Data` object. The design on these cards is managed by the shortcode `layout/shortcodes/case-study-cards.html`

### Applications of Trillian pages

These pages are found in `content/application`. They are all Markdown files.

The pages that use the layout `linked-headers` have some specific params that are required in the frontmatter of the page:

`eyebrow`: The copy that is capitalised above the main headline (e.g. "Trillian lets you")

`title`: The main title of the page

`topImage`: An illustration that will be full width at the head of the page. This file must then be placed in `static/images/application-illustrations`

`headers`: A slice of maps containing `display` and `link` keys. This slice gets rendered out as the menu on the left hand side of the page. The `display` value is the string that is displayed, `link` is the anchor on the page that is linked to. Note: this `link` value should be the h2(`##`) value as kebab case, e.g. `## How to Further Stengthen` -> `how-to-further-strengthen`

### Example Github projects

`data/example_projects.json` contains a JSON array that Hugo then renders on the homepage using the `.Site.Data` object.

## Automatic deployment

We currently deploy to Github Pages.

There's an action setup (in `.github/workflows/gh-pages.yml`) that will build the site and deploy it to Github Pages on every commit to `main`.

It does this using [actions for Github Pages][actions] by `@peaceiris`. It uses the per-repository `ACTIONS_DEPLOY_KEY` to authenticate this.

Every time you push to `main`, the action checks out the code, builds the site, pushes that build to the `gh-pages` branch and then, thanks to configuration, that's available at a Github Pages URL.

The `CNAME` for the site's URL is not stored in the repository; instead, it is set every time via the `gh-pages` action, and configured with the `cname` variable inside the workflow.

Note that the environment variable `HUGO_ENV` should be set to `production` to enable CSS minifcation/fingerprinting and to disable SCSS sourcemaps. This is currently the case on our Pages deployment, where it is made available as a Secret.

The site also automatically deploys whenever a Pull Request is closed.

[hugo]: https://gohugo.io
[npm]: https://www.npmjs.com
[actions]: https://github.com/peaceiris/actions-gh-pages
[tailwind]: https://tailwindcss.com
