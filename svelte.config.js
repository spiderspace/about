import {typescript} from 'svelte-preprocess-esbuild';
import static_adapter from '@sveltejs/adapter-static';
import Icons from 'unplugin-icons/vite';

const dev = process.env.NODE_ENV !== 'production';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: typescript(),
	compilerOptions: {
		immutable: true,
	},
	kit: {
		adapter: static_adapter(),
		target: '#root',
		paths: {base: dev ? '' : '/about'},
		files: {assets: 'src/static'},
		vite: {
			ssr: {
				noExternal: ['@feltcoop/felt'],
			},
			optimizeDeps: {
				exclude: ['@feltcoop/felt'],
			},
			plugins: [Icons({compiler: 'svelte'})],
		},
	},
};
