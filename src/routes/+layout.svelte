<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
	import { page } from '$app/stores';

	let cur = $page;
	console.log(cur);
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
		grid-template-rows: auto 1fr auto;
		background-color: var(--bg0);
		color: var(--bg0-light);
	}

	main {
		border-bottom: 1px solid var(--bg0-light);
	}
</style>
