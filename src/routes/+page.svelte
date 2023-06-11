<script>
	import Pig from './Pig.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="My Home Page" />
</svelte:head>

<h1 class="center-text">Hiya</h1>
<div class="page">
	<a href="/pig">
		<div class="card">
			<Pig />
		</div>
	</a>
	<a href="/hamster">
		<div class="card">
			<img
				src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6aff1732-42d3-4c71-ad9f-a03b35108ad4/dc6i64y-81219664-5a24-4374-9cce-40540a6c56d3.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZhZmYxNzMyLTQyZDMtNGM3MS1hZDlmLWEwM2IzNTEwOGFkNFwvZGM2aTY0eS04MTIxOTY2NC01YTI0LTQzNzQtOWNjZS00MDU0MGE2YzU2ZDMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ZPm0Xaeds35SlCLpTa7_WwauXHadEaODyeOFXFBFmNs"
				alt="Power source of the website"
			/>
		</div>
	</a>
</div>

<style>
	.page {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}

	.card {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--color-theme-1);
		width: 30ch;
		height: 30ch;
		border: 1px solid black;
		border-radius: 8px;
		overflow: hidden;
		scale: 1;
		transition: scale 0.1s ease-in-out;
	}

	.card:hover {
		scale: 1.05;
		transition: scale 0.1s ease-in-out;
	}

	@media (prefers-reduced-motion) {
		.card:hover {
			scale: 1;
		}
	}
</style>
