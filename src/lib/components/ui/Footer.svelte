<script lang="ts">
	import { getTranslation } from '$lib/state/Translation.svelte';

	let { openLegal, openPrivacy, openTerms } = $props<{
		openLegal: () => void;
		openPrivacy: () => void;
		openTerms: () => void;
	}>();

	const ts = getTranslation();

	const handleLegalClick = (e: MouseEvent) => {
		e.preventDefault();
		window.location.hash = 'legal-notice';
		openLegal();
	};

	const handlePrivacyClick = (e: MouseEvent) => {
		e.preventDefault();
		window.location.hash = 'privacy';
		openPrivacy();
	};

	const handleTermsClick = (e: MouseEvent) => {
		e.preventDefault();
		window.location.hash = 'terms';
		openTerms();
	};
</script>

<div
	class="relative z-30 mt-12 flex w-full items-center justify-center gap-8 bg-white p-6 pt-8 font-bold dark:bg-s-dark-2"
>
	<div class="absolute top-0 h-2 w-full bg-gradient-to-r from-s-lightblue to-s-green"></div>
	<a href="#legal-notice" class="cursor-pointer" onclick={handleLegalClick}
		>{ts.get.ui.legal_notice}</a
	>
	<a href="#privacy" class="cursor-pointer" onclick={handlePrivacyClick}
		>{ts.get.ui.privacy_policy}</a
	>
	<a href="#terms" class="cursor-pointer" onclick={handleTermsClick}
		>{ts.get.ui.terms_of_service}</a
	>
</div>
