<script>
	import mousepos from './positions';
	import { onMount } from 'svelte';
	import pig from '$lib/images/pig.svg';
	import righteye from '$lib/images/right-eye.svg';
	import lefteye from '$lib/images/left-eye.svg';
	import { browser } from '$app/environment';

	let pigpos = {x:0, y:0};
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
    
	// rerun updateCSS whenever mouse position changes
	$: dx && dy && updateCSS();

	// set max amount of eye movement in pixels
    const max = 15;
	function updateCSS() {
		if (!browser) return; // don't run on server
		// get elements from DOM
		let left = document.getElementById('lefteye');
		let right = document.getElementById('righteye');
		if (left && right) { // wait for mount
			// calculate desired eye translation
            let osx = (dx / screen.width) * max;
            let osy = (dy / screen.height) * max;
			// set eye translation amount by setting css variables
			left.style.setProperty('--offset-x', osx + 'px');
			left.style.setProperty('--offset-y', osy + 'px');
			right.style.setProperty('--offset-x', osx + 'px');
			right.style.setProperty('--offset-y', osy + 'px');
		}
	}

</script>

<div id="container">
<div id="Pig">
	<img src={pig} alt="pig" />
	<img id="lefteye" src={lefteye} alt="pig eye" />
	<img id="righteye" src={righteye} alt="pig eye" />
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
		width: 5ch;
		transform: translate(var(--offset-x), var(--offset-y));
	}

	/* Set initial positioning to line up with eye socket */
	#lefteye {
		left: 7ch;
		top: 7ch;
	}

	#righteye {
		left: 16ch;
		top: 7ch;
	}

	img {
		width: 30ch;
	}
</style>
