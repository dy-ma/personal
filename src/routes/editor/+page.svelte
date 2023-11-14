<script>
	import '../page.css'
	import editor from '$lib/images/ai-editor.png'
</script>

<div class="page">
	<div class="image">
		<a class="display-image" href="https://notes-7b514.web.app/" target="_blank">
			<img src={editor} alt="My notes app" class="src">
		</a>
	</div>
	<div class="description">
		<div>
			<h1>AI Powered Image Editor</h1>
			<p>For my Summer 2023 internship, I built an image editor for small e-commerce businesses. Frontend is React + Radix UI, backend is Flask.</p>
			<p>It supports erasing image backgrounds, generating AI backgrounds with DALL&#x2022 E 2, and generating sales text with ChatGPT.</p>
			<p>The editor canvas uses fabric.js to support drag-and-drop, resize, rotate, and text box functionality.</p>
			<p>I used the <a class="link" href="https://github.com/xuebinqin/DIS">DIS5k</a> model for background masking, and the <a class="link" href="https://github.com/openai/openai-python">OpenAI API</a> for ChatGPT and DALL&#x2022 E 2.</p>
			<p>Source not available.</p>
		</div>
	</div>
</div>

<style>
	.image {
		display: grid;
		place-items: center;
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