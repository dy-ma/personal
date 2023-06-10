import { readable } from "svelte/store";

export default readable({x:0, y:0}, function start(set) {
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

