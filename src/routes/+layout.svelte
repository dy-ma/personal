<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
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
