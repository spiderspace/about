<script lang="ts">
	import GithubLogo from '$lib/ui/GithubLogo.svelte';

	const githubLinkText = 'www.spiderspace.org source code on GitHub ⚘ public domain';
	const githubSourceText = 'www.spiderspace.org/about source code on GitHub ⚘ public domain';
</script>

<main class="column markup">
	<section class="column-min">
		<h1>about</h1>
		<blockquote>spiderspace is web prototypes</blockquote>
	</section>
	<footer>
		<a
			class="icon"
			target="_blank"
			href="https://github.com/spiderspace/spiderspace"
			title={githubLinkText}
		>
			<GithubLogo label={githubLinkText} />
		</a>
		<a
			class="icon flower"
			target="_blank"
			href="https://github.com/spiderspace/about"
			title={githubSourceText}
		>
			⚘
		</a>
	</footer>
</main>

<style>
	main {
		text-align: center;
		/* TODO should these be on `.column` ? */
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	section {
		margin-bottom: var(--spacing_sm);
	}
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	a {
		display: flex;
		color: #000;
	}
	.flower {
		font-size: var(--font_size_xl);
		display: flex;
		justify-content: center;
		align-items: center;
		width: var(--spacing_xl5);
		height: var(--spacing_xl5);
	}
	.icon {
		--border_width: var(--border_width_4);
		--border_color: transparent;
		text-decoration: none;
		border-radius: 50%;
		border: var(--border_width) double var(--border_color);
	}
	.icon:hover:not(:active) {
		--border_color: #000;
	}
</style>
