<script>
	import { page } from '$app/stores';
	import { ArrowLeft, ArrowRight } from 'lucide-svelte';
	// Load pages from each routes +page.js or fallback
	let next = $derived($page.data.next || '/');
	let prev = $derived($page.data.prev || '/');
</script>

<footer>
	<a href={prev} class="prev"> <ArrowLeft size={32}/> </a>
	<a href={next} class="next"> <ArrowRight size={32}/> </a>
  </footer>
  
  <style>
	footer {
	  display: grid;
	  grid-template-columns: repeat(12, 1fr);
	  view-transition-name: footer;
	}
  
	@media only screen and (max-width: 480px) {
	  footer {
		display: flex;
	  }
	  .prev, .next {
		width: 100%;
	  }
	}

	.prev {
	  grid-column: 9 / span 2;
	  background-color: var(--orange);
	}
	.next {
	  grid-column: 11 / span 2;
	  background-color: var(--aqua);
	}
	.prev, .next {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  color: var(--bg0);
	  text-decoration: none; /* Remove underline from links */
	  transition: background-color 0.2s ease; /* Smooth background color transition */
	}

	a:hover, a:focus {
		filter: brightness(0.8);
		transition: 0.2s;
	}
  </style>