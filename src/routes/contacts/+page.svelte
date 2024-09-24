<svelte:head>
	<title>Contacts</title>
	<meta name="description" content="My Contact Info" />
</svelte:head>

<script>
	let links = [
		{name: "Github", url: "https://github.com/dy-ma"},
		{name: "Resume", url: "https://drive.google.com/file/d/1vSSxwpA29HPdRq2Qdu4pSG2gxL6uoHNi/view?usp=sharing"},
		{name: "LinkedIn", url: "https://www.linkedin.com/in/dylan-mou-ang/"},
		{name: "Email", url: "mailto:dylanmouang@gmail.com"}
]
</script>

<div class="title">
	<h1>Contacts</h1>
</div>

<div class="container">
	{#each links as {name, url} }
		<div class={"card " + name}>
			<a href={url} target="_blank">{name}</a>
		</div>
	{/each}
</div>

<style>
	.title {
		display: flex;
		justify-content: center;
	}
	.container {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		height: 80%;
		padding: 1rem;
	}
	.card {
		border-radius: 6px;
		display: flex;
		padding: 1rem;
		transition: 0.1s;
	}
	.card:hover {
		scale: 0.95;
		transition: 0.1s;
	}
	a {
		width: 100%;
		height: 100%;
	}
	.Github {
		background-color: var(--red);
	}
	.Resume {
		background-color: var(--green);
	}
	.LinkedIn {
		background-color: var(--blue);
	}
	.Email {
		background-color: var(--yellow);
	}
</style>
