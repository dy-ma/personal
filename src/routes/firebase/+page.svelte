<script>
	import '../page.css'
	import firenote from '$lib/images/firebase.png'
</script>

<div class="page">
	<div class="image">
		<a class="display-image" href="https://notes-7b514.web.app/" target="_blank">
			<img src={firenote} alt="My notes app" class="src">
		</a>
	</div>
	<div class="description">
		<div>
			<h1>Live Syncing Notes</h1>
			<p>As an Mac + Android user, I hated not having my notes synced across all of my devices. So I built my own! TinyNote is a web based notes app that syncs your notes across all devices.</p>
			<p>TinyNote supports google authentication through firebase. The backend is using firestore for real-time updates.</p>
			<p>Using a web timer, the app only writes to the database when the user clicks off the page or stops writing for 2 seconds. This prevents unnecessary rewrites and extra write costs.</p>
			<p>View Source on <a class="gh-link" href="https://github.com/dy-ma/firebase-notes" target="_blank">Github</a></p>
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

	.display-image {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img {
		border: 1px solid var(--blue);
		border-radius: var(--img-radius);
		width: 80%;
		transition: 0.1s ease;
	}

	img:hover {
		scale: 0.95;
		transition: 0.1s ease;
	}

	.gh-link {
		text-decoration: underline;
	}
</style>