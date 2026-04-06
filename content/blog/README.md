# Blog Content

Store blog posts as one markdown file per article in:

- `content/blog/en/`
- `content/blog/es/`

Required frontmatter fields:

```md
---
title: "Post title"
description: "Short SEO description"
publishDate: "2026-04-05"
author: "Smart Choice Solar"
category: "Solar"
slug: "post-slug"
featuredImage: "/brand/example-image.svg"
---
```

Notes:

- Keep English and Spanish posts as separate files so each locale has crawlable route content.
- The filename does not need to match the slug, but keeping them aligned makes publishing easier.
- The blog index pages, article pages, sitemap entries, and article structured data all read from these files.
