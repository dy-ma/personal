<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onNavigate } from '$app/navigation';
	import '$lib/styles/styles.css';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();

	// Enable view transitions
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class="app">
	<Header />

	<main>
		{@render children?.()}
	</main>
	<Footer />
</div>

<style>
	.app {
		min-height: 100vh;
		width: 100vw;
		display: grid;
		grid-template-rows: 1fr 10fr 2fr;
		background-color: var(--bg0);
		color: var(--bg0-light);
	}

	@media screen and (max-width: 480px) {
		.app {
			grid-template-rows: 1fr 10fr 1fr;
		}
	}

	main {
		border-bottom: 1px solid var(--bg0-light);
	}
</style>
