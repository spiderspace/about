# about

> spiderspace is web prototypes

> status: working example integration with
> [`@iconify/json`](https://github.com/iconify/collections-json) and
> [`unplugin-icons`](https://github.com/antfu/unplugin-icons)

| [πΈοΈ](https://www.spiderspace.org)                                      | [ππ±](https://github.com/spiderspace)                                | π§ͺ                                                                          |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [www.spiderspace.org](https://www.spiderspace.org)                     | [spiderspace/spiderspace](https://github.com/spiderspace/spiderspace) | Svelte; safe&serializable layout&content blocks                             |
| [**about.spiderspace.org**](https://about.spiderspace.org)             | **spiderspace/about**                                                 | Svelte+[iconify](https://github.com/iconify); spiderspace is web prototypes |
| [spiderspace.github.io/mutable](https://spiderspace.github.io/mutable) | [spiderspace/mutable](https://github.com/spiderspace/mutable)         | Svelte; mutable store values w/ `immutable` on                              |

## motivation

This is the "about" page for [Spiderspace](https://github.com/spiderspace/spiderspace),
a collection of web prototypes with [Svelte](https://github.com/sveltejs/svelte)
and [SvelteKit](https://github.com/sveltejs/kit).

Looking for discussion?
[Welcome to Spiderspace](https://github.com/spiderspace/spiderspace/discussions/1)

## features

### icons

This project includes SVG icons following the pattern described by the talk
[Dominik G - Sveltable Vector Graphics](https://www.youtube.com/watch?v=6fW613fblwk):

- install dev deps [`@iconify/json`](https://github.com/iconify/collections-json)
  and [`unplugin-icons`](https://github.com/antfu/unplugin-icons)
  (but consider changing the pattern to explicitly import collections from
  `@iconify-json/*` instead of installing all ~120MB)
- add the Vite icons plugin from `unplugin-icons/vite` to [`svelte.config.js`](/svelte.config.js)
- add `/// <reference types="unplugin-icons/types/svelte" />`
  to [`src/global.d.ts`](/src/global.d.ts)
- import icons as Svelte components: `import IconGithub from '~icons/logos/github-icon';`
- discover icons via [icones.js.org](https://icones.js.org/)
- TODO
  - document the number of dependencies this adds

### host window communication

> TODO

This repo will also prototype how Spiderspace can embed arbitrary websites with iframes,
and set up two-way privacy-respecting communication. (it's not yet implemented)
The next feature to implement will likely be sending a message to the host window (if one exists)
to request a particular rendered width and height. The host can choose to ignore this request.

## usage

```bash
# node >= 16.6
npm i
npm run dev
# or
gro dev # npm i -g @feltcoop/gro
```

## build

```bash
npm run build
# or
gro build
```

## deploy

```bash
npm run deploy
# or
gro deploy
```

## credits π’<sub>π’</sub><sub><sub>π’</sub></sub>

[Svelte](https://github.com/sveltejs/svelte) β
[SvelteKit](https://github.com/sveltejs/kit) β
[Vite](https://github.com/vitejs/vite) β
[Gro](https://github.com/feltcoop/gro) β
[Felt](https://github.com/feltcoop/felt) β
[Rollup](https://github.com/rollup/rollup) β
[TypeScript](https://github.com/microsoft/TypeScript) β
[esbuild](https://github.com/evanw/esbuild) β
[Prettier](https://github.com/prettier/prettier) β
[@lukeed\/\*](https://github.com/lukeed)
& [more](package.json)

## license [π¦](https://wikipedia.org/wiki/Free_and_open-source_software)

public domain β [The Unlicense](license)
