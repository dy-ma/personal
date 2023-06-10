import { readable } from "svelte/store";
import { browser } from "$app/environment";

/* 
 * Svelte store that contains the mouse position 
 * data. Use for when an element needs global access
 * to cursor position, otherwise just use easier
 * on:mousemove binding.
 * @returns {x:number y:number} coordinates of mouse relative to page. (0, 0) represents the top left corner.
 */
export default readable({x:0, y:0}, function start(set) {
    if (!browser) return;

    document.body.addEventListener("mousemove", move);

    function move(event) {
        set({
            x: event.clientX,
            y: event.clientY,
        });
    }
    return function stop() {
        document.body.removeEventListener("mousemove", move)
    }
})