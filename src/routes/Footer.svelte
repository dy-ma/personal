<script>
	import { page } from '$app/stores';
	import { afterUpdate } from 'svelte';

	let pages = ['/', '/editor', '/firebase', '/hamster'];

	let current = pages.indexOf($page.url.pathname);
	let next = '/';
	let prev = '/';

	// Update next and prev pages on each reload
	// onMount won't work because the Footer element is only mounted once
	afterUpdate(() => {
		current = pages.indexOf($page.url.pathname);
		next = (current < pages.length - 1) ? pages[current + 1] : pages[0];
		prev = (current > 0) ? pages[current - 1] : pages[pages.length - 1];
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
		/* height: 15vh; */
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
