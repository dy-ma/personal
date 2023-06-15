<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<button>
				<a href="/">Home</a>
				</button>
			</li>
			<li aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
				<button>
				<a href="/projects">Projects</a>
				</button>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/contacts') ? 'page' : undefined}>
				<button>
				<a href="/contacts">Contacts</a>
				</button>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		background-color: var(--bg0);
		color: var(--bg0-light);
		border-bottom: 1px solid var(--bg0-light);
	}

	ul {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		list-style-type: none;
		padding-inline-start: 0;
	}

	button {
		color: inherit;
		min-width: 12ch;
		background-color: transparent;
		border: none;
		border-radius: 4px;
		padding: 5px;
		scale: 1;
		transition: scale 0.1s ease-in-out;
	}

	button:hover {
		scale: 1.2;
		transition: scale 0.1s ease-in-out;
		filter: brightness(85%);
	}

	button a {
		display: block;
		width: 100%;
		height: 100%;
		color: inherit;
	}
</style>