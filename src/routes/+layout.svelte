<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import { setViewPoint } from '$lib/state/Viewpoint.svelte.js';
	import { setTranslation } from '$lib/state/Translation.svelte';

	let { children } = $props();

	setViewPoint();
	setTranslation();
</script>

<svelte:head>
	<title>solyto — Your app for everything</title>
	<meta
		name="description"
		content="Todos, calendars, notes, contacts, libraries — one place, no nonsense, your data stays yours. No tracking. No ads. Ever."
	/>
	<link rel="canonical" href="https://solyto.app" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://solyto.app" />
	<meta property="og:title" content="solyto — Your app for everything" />
	<meta
		property="og:description"
		content="Todos, calendars, notes, contacts, libraries — one place, no nonsense, your data stays yours."
	/>
	<meta property="og:image" content="https://solyto.app/og-image.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="solyto — Your app for everything" />
	<meta
		name="twitter:description"
		content="Todos, calendars, notes, contacts, libraries — one place, no nonsense, your data stays yours."
	/>
	<meta name="twitter:image" content="https://solyto.app/og-image.png" />
	<meta name="theme-color" content="#1dbda5" />
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="h-screen w-screen">
	{@render children?.()}
</div>
