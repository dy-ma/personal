<script>
	import position from './positions';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import pig from '$lib/images/pig.svg';
	import righteye from '$lib/images/right-eye.svg';
	import lefteye from '$lib/images/left-eye.svg';
	import { browser } from '$app/environment';

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
    
    const min = 0;
    const max = 20;

	function updateCSS() {
		if (!browser) return;
		let left = document.getElementById('lefteye');
		let right = document.getElementById('righteye');
		if (left && right) {
            console.log(left, right)
            let osx = (dx / screen.width) * max;
            let osy = (dy / screen.height) * max;
			left.style.setProperty('--offset-x', osx + 'px');
			left.style.setProperty('--offset-y', osy + 'px');
			right.style.setProperty('--offset-x', osx + 'px');
			right.style.setProperty('--offset-y', osy + 'px');
		}
	}

	$: dx && dy && updateCSS();
</script>

<div id="container">
<div id="Pig">
	<img src={pig} alt="pig" />
	<img id="lefteye" src={lefteye} alt="pig eye" />
	<img id="righteye" src={righteye} alt="pig eye" />
</div>
</div>

<style>
    #container {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
	#Pig {
		width: fit-content;
		position: absolute;
        top: 0;
	}

	#lefteye,
	#righteye {
		position: inherit;
		width: 5ch;
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
