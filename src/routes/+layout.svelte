<script>
	import Header from './Header.svelte';
	import github from '$lib/images/github.svg';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>
			Built with
			<a href="https://kit.svelte.dev/" target="_blank">SvelteKit.</a>
			Deployed on
			<a href="https://vercel.com/" target="_blank">Vercel.</a>
			View source at
		</p>
		<a href="https://github.com/dy-ma/personal" target="_blank">
			<img id="gh" src={github} alt="Github" />
		</a>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		background-color: var(--color-theme-3);
	}

	footer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 12px;
		background-color: var(--color-theme-3);
	}

	footer a:hover {
		text-decoration: underline;
	}

	#gh {
		width: 3ch;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
