# about

> spiderspace is web prototypes

This is the "about" page for [Spiderspace](https://github.com/spiderspace/spiderspace),
a collection of web software experiments
with a focus on [Svelte](https://github.com/sveltejs/svelte).

This tiny app will prototype how Spiderspace can embed arbitrary websites with iframes,
and set up two-way privacy-respecting communication. (it's not yet implemented)
The next feature to implement will likely be sending a message to the host window (if one exists)
to request a particular rendered width and height. The host can choose to ignore this request.

discussion: [Welcome to Spiderspace](https://github.com/spiderspace/spiderspace/discussions/1)

| [🕸️](https://www.spiderspace.org)                                        | [🐙🐱](https://github.com/spiderspace)                                | 🧪                                              |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------- | ----------------------------------------------- |
| [www.spiderspace.org](https://www.spiderspace.org)                       | [spiderspace/spiderspace](https://github.com/spiderspace/spiderspace) | Svelte; safe&serializable layout&content blocks |
| [spiderspace.github.io/stylevar](https://spiderspace.github.io/stylevar) | [spiderspace/stylevar](https://github.com/spiderspace/stylevar)       | Svelte; CSS custom properties                   |
| [**spiderspace.github.io/about**](https://spiderspace.github.io/about)   | **spiderspace/about**                                                 | spiderspace is web prototypes                   |

## features

### host window communication

> TODO

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

## credits 🐢<sub>🐢</sub><sub><sub>🐢</sub></sub>

[Svelte](https://github.com/sveltejs/svelte) ∙
[SvelteKit](https://github.com/sveltejs/kit) ∙
[Vite](https://github.com/vitejs/vite) ∙
[Gro](https://github.com/feltcoop/gro) ∙
[Felt](https://github.com/feltcoop/felt) ∙
[Rollup](https://github.com/rollup/rollup) ∙
[TypeScript](https://github.com/microsoft/TypeScript) ∙
[esbuild](https://github.com/evanw/esbuild) ∙
[Prettier](https://github.com/prettier/prettier) ∙
[@lukeed\/\*](https://github.com/lukeed)
& [more](package.json)

## license [🐦](https://wikipedia.org/wiki/Free_and_open-source_software)

public domain ⚘ [The Unlicense](license)
