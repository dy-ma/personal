import { readable } from "svelte/store";
import { browser } from "$app/environment";

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

