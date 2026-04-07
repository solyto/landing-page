<script lang="ts">
	import { urls } from '$lib/config/urls';
	import { blur, scale } from 'svelte/transition';
	import IconGlobe from '@lucide/svelte/icons/globe';
	import StaggeredLogo from '$lib/components/ui/StaggeredLogo.svelte';
	import { getTranslation } from '$lib/state/Translation.svelte';

	let { loaded } = $props<{ loaded: boolean }>();
	const ts = getTranslation();
	const languages = [
		{ code: 'en', name: 'English' },
		{ code: 'de', name: 'Deutsch' },
		{ code: 'fr', name: 'Français' },
		{ code: 'es', name: 'Español' }
	];

	let langOpen = $state(false);

	function selectLang(code: string): void {
		ts.changeLanguage(code);
		langOpen = false;
	}
</script>

<div class="flex w-full items-center justify-center px-4 py-4 md:justify-between">
	{#if loaded}
		<div class="hidden md:block" style="width: 56px; height: 71px;">
			<StaggeredLogo />
		</div>
	{/if}
	<div
		class="dark:from-s-dark-4 dark:to-s-dark-5 z-20 flex items-center gap-4 rounded-full bg-gradient-to-r from-s-lightblue to-s-green px-4 py-2 font-bold text-white shadow-sm transition-all hover:bg-s-lightblue/50"
		in:blur={{ delay: 200 }}
	>
		<div class="relative">
			<button
				onclick={() => (langOpen = !langOpen)}
				class="flex cursor-pointer items-center gap-1.5 rounded-full border-2 border-white/5 px-4 py-2 font-bold text-white transition-all hover:bg-white/5"
			>
				<IconGlobe class="size-4" />
				{ts.locale.toUpperCase()}
			</button>
			{#if langOpen}
				<div class="fixed inset-0 z-10" onclick={() => (langOpen = false)}></div>
				<div
					class="absolute top-full left-0 z-20 mt-2 overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-s-dark-2"
					transition:scale={{ duration: 150, start: 0.95 }}
				>
					{#each languages as lang}
						<button
							onclick={() => selectLang(lang.code)}
							class="block w-full px-5 py-2.5 text-left text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-s-dark-3
								{ts.locale === lang.code ? 'text-s-lightblue dark:text-s-teal' : ''}"
						>
							{lang.name}
						</button>
					{/each}
				</div>
			{/if}
		</div>
		<a
			href={urls.login}
			class="rounded-full border-2 border-white/5 px-4 py-2 font-bold text-white shadow-sm transition-all hover:bg-white/5"
		>
			{ts.get.ui.login}
		</a>
		<a
			href={urls.register}
			class="rounded-full border-2 border-white/5 px-4 py-2 font-bold text-white shadow-sm transition-all hover:bg-white/5"
		>
			{ts.get.ui.register}
		</a>
	</div>
</div>
