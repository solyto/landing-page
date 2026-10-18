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
	import { getTranslation } from '$lib/state/Translation.svelte';

	const viewPoint = getViewPoint();
	const ts = getTranslation();

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
		class="page-container flex min-h-screen w-full flex-col items-center justify-start overflow-x-hidden bg-gradient-to-bl from-c-bg-surface to-c-neutral-1 dark:from-s-dark-2 dark:to-s-dark-3"
	>
		<!-- content-container: themes like XP and Aero draw it as a window on their wallpaper,
		     so the header and footer belong inside it. self-stretch keeps it full width. -->
		<div class="content-container flex w-full grow flex-col items-center self-stretch">
			<Header {loaded} />
			{#if content}
				{#if viewPoint.isMobile}
					<MobileLandingPage />
				{:else}
					<DesktopLandingPage />
				{/if}
			{/if}
			<Footer {openLegal} {openPrivacy} {openTerms} />
		</div>
		{#if legal}
			<Modal onClose={closeModals} title={ts.get.ui.legal_notice}>
				<Legal />
			</Modal>
		{/if}
		{#if privacy}
			<Modal onClose={closeModals} title={ts.get.ui.privacy_policy}>
				<Privacy />
			</Modal>
		{/if}
		{#if terms}
			<Modal onClose={closeModals} title={ts.get.ui.terms_of_service}>
				<Terms />
			</Modal>
		{/if}
	</div>
{/if}
