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
		background-color: var(--color-theme-1);
	}

	ul {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		list-style-type: none;
	}

	button {
		min-width: 12ch;
		background-color: var(--color-theme-3);
		border: none;
		border-radius: 4px;
		padding: 5px;
		scale: 1;
		transition: scale 0.1s ease-in-out;
	}

	button:hover {
		scale: 1.2;
		transition: scale 0.1s ease-in-out;
	}

	button a {
		display: block;
		width: 100%;
		height: 100%;
	}
</style>