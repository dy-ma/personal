<script>
	import mousepos from './positions';
	import { onMount } from 'svelte';
	import pig from '$lib/images/pig.svg';
	import righteye from '$lib/images/right-eye.svg';
	import lefteye from '$lib/images/left-eye.svg';
	import { browser } from '$app/environment';

	let pigpos = { x: 0, y: 0 };
	onMount(() => {
		// update the position of the "Pig" div
		// Do on mount since only needs to happen once
		function updatePosition() {
			const pigDiv = document.getElementById('Pig');
			if (pigDiv) {
				// get dimensional data of pig div
				const { left, top, width, height } = pigDiv.getBoundingClientRect();
				// store center of div
				let x = left + width / 2;
				let y = top + height / 2;
				// update state variable
				pigpos = { x, y };
			}
		}

		// Initial position update
		updatePosition();

		// Listen for window resize and scroll events to update position
		window.addEventListener('resize', updatePosition);
		window.addEventListener('scroll', updatePosition);

		// Cleanup event listeners on component destruction
		return () => {
			window.removeEventListener('resize', updatePosition);
			window.removeEventListener('scroll', updatePosition);
		};
	});

	// calculate delta between cursor and pig
	$: dx = $mousepos.x - pigpos.x;
	$: dy = $mousepos.y - pigpos.y;

	// set max amount of eye movement in pixels
	const max = 15;

	// calculate desired offset value, default to 0 on server
	$: osx = browser ? (dx / screen.width) * max : 0;
	$: osy = browser ? (dy / screen.height) * max : 0;
</script>

<div id="container">
	<div id="Pig">
		<img src={pig} alt="pig" />
		<img id="lefteye" src={lefteye} alt="pig eye" style:transform="translate({osx}px, {osy}px)" />
		<img id="righteye" src={righteye} alt="pig eye" 
		style:transform="translate({osx}px, {osy}px)"/>
	</div>
</div>

<style>
	/* Wrap Pig in a container so pig can be absolute styled 
	 * while overall pig element respects other elements
	 */
	#container {
		position: relative;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/* position absolute so eye position can be hardcoded */
	#Pig {
		width: fit-content;
		position: absolute;
		top: 0; /* Move to start of container */
	}

	#lefteye,
	#righteye {
		position: inherit;
		width: 16%;
	}

	/* Set initial positioning to line up with eye socket */
	#lefteye {
		left: 23%;
		top: 29%;
	}

	#righteye {
		left: 54%;
		top: 29%;
	}

	img {
		width: 30ch;
	}
</style>
