<script lang="ts">
	import IconGithub from '~icons/logos/github-icon';
	import IconFlower from '~icons/mdi/flower-tulip';
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
			title="spiderspace source code on GitHub"
		>
			<IconGithub width={64} height={64} />
		</a>
		<a
			class="icon"
			target="_blank"
			href="https://github.com/spiderspace/about"
			title="spiderspace/about source code on GitHub"
		>
			<!-- TODO should probably be the runtime value of `icon_size_sm` -->
			<IconFlower width={29} height={29} />
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
	.icon {
		--border_width: var(--border_width_4);
		--border_color: transparent;
		border-radius: 50%;
		border: var(--border_width) double var(--border_color);
	}
	.icon:hover:not(:active) {
		--border_color: #000;
	}
</style>
