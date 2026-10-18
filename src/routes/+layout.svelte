<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import { setViewPoint } from '$lib/state/Viewpoint.svelte.js';
	import { setTranslation } from '$lib/state/Translation.svelte';

	let { children } = $props();

	setViewPoint();
	const ts = setTranslation();
</script>

<svelte:head>
	<title>{ts.get.meta.title}</title>
	<meta name="description" content={ts.get.meta.description} />
	<link rel="canonical" href="https://solyto.app" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://solyto.app" />
	<meta property="og:title" content={ts.get.meta.title} />
	<meta property="og:description" content={ts.get.meta.social_description} />
	<meta property="og:image" content="https://solyto.app/og-image.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={ts.get.meta.title} />
	<meta name="twitter:description" content={ts.get.meta.social_description} />
	<meta name="twitter:image" content="https://solyto.app/og-image.png" />
	<meta name="theme-color" content="#1dbda5" />
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="h-screen w-screen">
	{@render children?.()}
</div>
