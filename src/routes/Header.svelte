<script>
	import { page } from '$app/stores';
</script>

<header>
	<h1 class="center-text">Dylan Ang</h1>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/wordle') ? 'page' : undefined}>
				<a href="/wordle">Wordle</a>
			</li>
		</ul>
	</nav>
</header>

<style>

	header {
		background-color: var(--color-theme-1);
	}
	ul {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
</style>