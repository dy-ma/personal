<header>
	<nav>
		<a href="/">Dylan Ang</a>
		<a href="/contacts">Contacts</a>
	</nav>
</header>

<style>
	header {
		background-color: var(--bg0);
		color: var(--bg0-light);
		border-bottom: 1px solid var(--bg0-light);
		max-height: fit-content;
	}

	nav {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 0px 25px;
	}

	a {
		color: inherit;
		scale: 1;
		transition: scale 0.1s ease-in-out;
	}

	a:hover {
		scale: 0.9;
		transition: scale 0.1s ease-in-out;
		filter: brightness(85%);
	}
</style>
