import { readable } from "svelte/store";
import { browser } from "$app/environment";

export default readable(false, (set) => {
	const query = "(prefers-reduced-motion: no-preference)";
	const mediaQueryList = browser ? window.matchMedia(query) : {};

	const onChange = () => set(!mediaQueryList.matches);
	
	if (browser) {
		mediaQueryList.addListener(onChange);
		onChange();
	}
	
	return () => {
		if (typeof window !== "undefined") mediaQueryList.removeListener(onChange);
	}
});