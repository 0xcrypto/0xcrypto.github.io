# github-portfolio

A single-page [Zola](https://www.getzola.org) theme for showcasing your open
source work. It renders:

- **Personal Projects** — your non-fork GitHub repositories as sortable cards
  (by stars, forks, recently updated, or name).
- **Contributions** — pull requests you've had merged into *other* people's
  projects, as a clean list.

The header shows your [Gravatar](https://gravatar.com) avatar, a tagline, and
social links. Everything is driven by config — no template editing required.

**Demo:** <https://0xcrypto.github.io>

## Requirements

- [Zola](https://www.getzola.org/documentation/getting-started/installation/)
  `>= 0.19`

## Usage

There are two ways to use this.

### Option A — as a Zola theme

From the root of your existing Zola site:

```bash
git submodule add https://github.com/0xcrypto/github-portfolio themes/github-portfolio
```

Then enable it in your `config.toml`:

```toml
theme = "github-portfolio"
```

Finally, create `content/_index.md` so Zola renders the homepage with the
theme's template:

```md
+++
title = "Home"
template = "index.html"
+++
```

### Option B — use this repository directly

Click **Use this template** on GitHub (or fork/clone it) and edit the config to
make it yours. This is the quickest way to get the bundled GitHub Action that
keeps your data up to date (see [Data](#data)).

## Configuration

Add the following to your `config.toml` `[extra]` section and adjust the values:

```toml
[extra]
github_username = "your-username"
tagline = "This page lists my open source contributions."
# SHA-256 of your (trimmed, lowercased) email — used for the Gravatar avatar.
gravatar_hash = "839e873cfec482041c52272615ef3bfc01cdc8bb5a9be701d907af84e855b4df"

# Social links shown in the header. Omit any you don't want.
[extra.social]
blog = "https://eval.blog"
github = "https://github.com/your-username"
twitter = "https://x.com/your-username"
linkedin = "https://www.linkedin.com/in/your-username"
youtube = "https://www.youtube.com/@your-username"
instagram = "https://www.instagram.com/your-username"
```

To compute your `gravatar_hash`:

```bash
printf '%s' "you@example.com" | shasum -a 256
```

## Data

The theme reads two JSON files from your site's `static/` directory. Both are
optional — the page renders an empty state if a file is missing.

### `static/repos.json`

An array of repositories:

```json
[
  {
    "name": "example-repo",
    "description": "An awesome project",
    "html_url": "https://github.com/you/example-repo",
    "stargazers_count": 42,
    "forks_count": 10,
    "language": "Rust",
    "updated_at": "2025-06-15T12:00:00Z"
  }
]
```

### `static/contributions.json`

An array of merged pull requests. The workflow only includes PRs merged into
repositories with **more than 5 stars**, and the list is paginated (10 per page)
on the page. The optional `stars` field is shown next to each repo.

```json
[
  {
    "title": "Fix panic when parsing empty config",
    "html_url": "https://github.com/some-org/some-project/pull/123",
    "repo": "some-org/some-project",
    "merged_at": "2025-06-10T09:15:00Z",
    "stars": 1240
  }
]
```

### Keeping the data fresh automatically

This repo ships a GitHub Actions workflow
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) that regenerates
both files from the GitHub API (using the built-in `GITHUB_TOKEN`) on every push
and daily, then builds and deploys the site to GitHub Pages. It:

- pulls your non-fork public repos with at least one star into `repos.json`, and
- pulls your merged PRs to repositories you don't own (with more than 5 stars)
  into `contributions.json`.

If you use the theme in your own site, copy that workflow over and enable
**Pages → Build and deployment → GitHub Actions** in your repository settings.

> Note: the default `GITHUB_TOKEN` only surfaces public contributions. Provide a
> personal access token if you want private ones included.

## Local development

```bash
zola serve
```

The repository includes sample `repos.json` and `contributions.json` so you can
preview the layout before wiring up real data.

## License

[MIT](LICENSE)
