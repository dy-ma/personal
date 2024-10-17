<script>
	import { page } from '$app/stores';
	// Load pages from each routes +page.js or fallback
	$: next = $page.data.next || '/'
	$: prev = $page.data.prev || '/'
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

	@media only screen and (max-width: 480px) {
		footer {
			display: flex;
		}
		.prev{
			width: 100%;
		}
		.next {
			width: 100%
		}
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
		color: var(--bg0);
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
