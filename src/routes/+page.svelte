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
			<p>I'm a computer science graduate looking for junior software engineering roles.</p>
			<p>I'm interested in backend web development and software architecture.</p>
			<p>Hit the arrow buttons below to see some projects of mine.</p>
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
