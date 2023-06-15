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
				I go to school at UC Davis, I'm majoring in Computer Science, and I'm graduating at the end of
				2023.
			</p>
			<p>I like Web Development, Operating Systems, Concurrency, Computer Graphics, and Pigs, if it wasn't obvious.</p>
			<p>Go ahead and hit those arrow buttons to see some projects of mine.</p>
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
