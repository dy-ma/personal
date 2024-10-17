<script>
	import '$lib/styles/page.css';
	import hamster from '$lib/images/hamster.gif'
</script>

<div class="page">
	<div class="image">
		<img src={hamster} alt="Power source of the website" />
	</div>
	<div class="description">
		<div>
			<h1>The Hamster</h1>
			<p>This guy powers the whole site</p>
		</div>
	</div>
</div>

<style>
	.image {
		display: grid;
		place-content: center;
	}

	.description {
		display: grid;
		place-items: center;
	}

	img {
		border-radius: 8px;
	}
</style>
