<script>
    import sleep from '$lib/images/sleeping.jpg'
</script>

<div class="error-page">
	<div class="imgbox">
		<img src={sleep} alt="Sleeping Hamster" />
	</div>
	<div class="error-message">
		<div>
			<h1>Oops! - 404</h1>
			<p>He fell asleep.</p>
		</div>
	</div>
</div>

<style>
    .error-page {
        padding: 1em;
        display: grid;
        place-content: center;
    }

	img {
		border-radius: 8px;
	}
</style>