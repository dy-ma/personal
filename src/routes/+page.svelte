<script>
	import Pig from './Pig.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="My Home Page" />
</svelte:head>

<div class="page">
	<div class="image">
		<Pig></Pig>
	</div>
	<div class="description">
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	</div>
</div>

<style>
	.page {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 4fr 3fr;
		max-width: 1920px;
	}

	.image {
		background-color: var(--bg0);
		display: grid;
		place-items: center;
	}

	.description {
		background-color: var(--bg0);
		border-left: 1px solid var(--bg0-light);
		display: grid;
		place-items: center;
		padding: 1rem;
		text-align: justify;
	}

	@media only screen and (max-width: 600px) {
		.page {
			grid-template-columns: 1fr;
		}

		.description {
			border-top: 1px solid var(--bg0-light);
			border-left: none;
		}
	}
</style>
