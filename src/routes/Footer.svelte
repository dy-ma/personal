<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let pages = ['/', '/hamster', '/pig'];
	let next = '/';
	let prev = '/';

	onMount(() => {
		const unsubscribe = page.subscribe((value) => {
			const currentIndex = pages.indexOf(value.url.pathname);
			next = currentIndex !== -1 && currentIndex < pages.length - 1 ? pages[currentIndex + 1] : '/';
			prev = currentIndex !== -1 && currentIndex > 0 ? pages[currentIndex - 1] : pages.slice(-1);
		});
		return unsubscribe;
	});
</script>

<footer>
	<button class="prev">
		<a href={prev}> &#x2190 </a>
	</button>
	<button class="next">
		<a href={next}> &#x2192 </a>
	</button>
</footer>

<style>
	footer {
		border: 1px solid black;
		height: 15vh;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
	}

	.prev {
		grid-column: 9 / span 2;
		background-color: var(--orange);
	}
	.next {
		grid-column: 11 / span 2;
		background-color: var(--aqua);
	}
	.prev,
	.next {
		font-size: 5vh;
		font-weight: 800;
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
	}

	a {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
        transition: 0.1s;
	}

    a:hover {
        scale: 0.9;
        transition: 0.1s;
    }
</style>
