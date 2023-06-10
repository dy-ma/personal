<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
				<a href="/projects">Projects</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/contacts') ? 'page' : undefined}>
				<a href="/contacts">Contacts</a>
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
		list-style-type: none;
	}
</style>