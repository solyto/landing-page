<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Header from '$lib/components/ui/Header.svelte';
	import Footer from '$lib/components/ui/Footer.svelte';
	import Legal from '$lib/components/Legal.svelte';
	import Privacy from '$lib/components/Privacy.svelte';
	import Terms from '$lib/components/Terms.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { getViewPoint } from '$lib/state/Viewpoint.svelte.js';
	import DesktopLandingPage from '$lib/components/DesktopLandingPage.svelte';
	import MobileLandingPage from '$lib/components/MobileLandingPage.svelte';

	const viewPoint = getViewPoint();

	let shouldLoad = $state<boolean>(false);
	let loaded = $state<boolean>(false);
	let content = $state<boolean>(false);
	let legal = $state<boolean>(false);
	let privacy = $state<boolean>(false);
	let terms = $state<boolean>(false);

	const openLegal = () => {
		privacy = false;
		terms = false;
		legal = true;
	};
	const openPrivacy = () => {
		legal = false;
		terms = false;
		privacy = true;
	};
	const openTerms = () => {
		legal = false;
		privacy = false;
		terms = true;
	};
	const closeModals = () => {
		legal = false;
		privacy = false;
		terms = false;
	};

	onMount(async () => {
		shouldLoad = true;
		loaded = true;
		content = true;

		const hash = $page.url.hash;
		if (hash === '#legal-notice') {
			openLegal();
		} else if (hash === '#privacy') {
			openPrivacy();
		} else if (hash === '#terms') {
			openTerms();
		}
	});
</script>

{#if shouldLoad}
	<div
		class="flex min-h-screen w-screen flex-col items-center justify-start overflow-x-hidden bg-gradient-to-bl from-white to-gray-100 dark:from-s-dark-2 dark:to-s-dark-3"
	>
		<Header {loaded} />
		{#if content}
			{#if viewPoint.isMobile}
				<MobileLandingPage />
			{:else}
				<DesktopLandingPage />
			{/if}
		{/if}
		{#if legal}
			<Modal onClose={closeModals} title="Legal Notice">
				<Legal />
			</Modal>
		{/if}
		{#if privacy}
			<Modal onClose={closeModals} title="Privacy Policy">
				<Privacy />
			</Modal>
		{/if}
		{#if terms}
			<Modal onClose={closeModals} title="Terms of Service">
				<Terms />
			</Modal>
		{/if}
		<Footer {openLegal} {openPrivacy} {openTerms} />
	</div>
{/if}
