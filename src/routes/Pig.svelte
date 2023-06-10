<script>
	import position from './positions';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import pig from '$lib/images/pig.svg';
	import righteye from '$lib/images/right-eye.svg';
	import lefteye from '$lib/images/left-eye.svg';

	const pigpos = writable({ x: 0, y: 0 });
	onMount(() => {
		// Function to update the position of the "Pig" div
		function updatePosition() {
			const pigDiv = document.getElementById('Pig');
			if (pigDiv) {
				const { left, top, width, height } = pigDiv.getBoundingClientRect();
				let x = left + width / 2;
				let y = top + height / 2;
				pigpos.set({ x, y });
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

	$: dx = $position.x - $pigpos.x;
	$: dy = $position.y - $pigpos.y;
</script>

<div id="Pig">
	<img src={pig} alt="pig" />
	<img id="lefteye" src={lefteye} alt="pig eye" />
	<img id="righteye" src={righteye} alt="pig eye" />
	<p>{Math.round(dx)} x {Math.round(dy)}</p>
</div>

<style>
	#Pig {
		width: fit-content;
		background-color: var(--color-theme-3);
		position: absolute;
	}

	#lefteye,
	#righteye {
		position: inherit;
		width: 5ch;
		--offset-x: 0px;
		--offset-y: 0px;
		transform: translate(var(--offset-x), var(--offset-y));
	}

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
