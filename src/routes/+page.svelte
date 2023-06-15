<script>
	import Pig from './Pig.svelte';
	import './page.css'; // standard page styles
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="My Home Page" />
</svelte:head>

<div class="page">
	<div class="image">
		<Pig />
	</div>
	<div class="description">
		<div>
		<h1>Hey, I'm Dylan</h1>
		<p>
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		</p>
		</div>
	</div>
</div>

<style>
	.image {
		display: grid;
		place-items: center;
	}

	.description {
		display: grid;
		place-items: center;
	}

	h1 {
		width: fit-content;
		height: fit-content;
	}
</style>
