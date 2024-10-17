<script>
	import '$lib/styles/page.css'
    import link from '$lib/images/arduino-link.png'
</script>

<div class="page">
	<div class="image">
		<a class="display-image" href="https://github.com/dy-ma/ArduinoLink" target="_blank">
			<img src={link} alt="Simple console to enter messages" class="src">
		</a>
	</div>
    <div class="description">
        <div>
            <h1>ArduinoLink</h1>
            <p>I enjoy building small Arduino projects for use around the house, including temperature sensors, motion detectors, and even Halloween decorations.</p>
            <p>To streamline control and reconfiguration of my devices without needing to constantly reflash firmware, I developed ArduinoLink.</p>
            <p>ArduinoLink is a self-hostable web app (built with Go) and an Arduino library (written in C++) that use WebSockets for real-time updates and device reconfiguration.</p>
            <p>Learn more on <a class="link" href="https://github.com/dy-ma/ArduinoLink" target="_blank">GitHub</a>.</p>
        </div>
    </div>
</div>

<style>
	.image {
		display: grid;
		place-items: center;
		padding: 10px 0px;
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

	.link {
		text-decoration: underline;
	}
</style>