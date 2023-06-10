<script>
	import Pig from './Pig.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="My Home Page" />
</svelte:head>

<div class="page">
	<h1>Hiya</h1>
	<Pig/>
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
