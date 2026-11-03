<script lang="ts">
	import { urls } from '$lib/config/urls';
	import { blur, scale } from 'svelte/transition';
	import IconGlobe from '@lucide/svelte/icons/globe';
	import IconGithub from '@lucide/svelte/icons/github';
	import IconUser from '@lucide/svelte/icons/circle-user';
	import DiscordIcon from '$lib/components/ui/DiscordIcon.svelte';
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
	let userOpen = $state(false);

	function selectLang(code: string): void {
		ts.changeLanguage(code);
		langOpen = false;
	}
</script>

<div class="flex w-full items-center justify-center md:justify-between md:px-4 md:py-4">
	{#if loaded}
		<div class="logo hidden md:block" style="width: 56px; height: 71px;">
			<StaggeredLogo />
		</div>
	{/if}
	<div class="flex w-full items-center gap-1 md:w-auto" in:blur={{ delay: 200 }}>
		<div class="hidden items-center md:flex">
			<a
				href={urls.discord}
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-c-neutral-6 transition-colors hover:text-c-heading-base dark:text-white/60 dark:hover:text-white"
			>
				<DiscordIcon class="size-4" />
				<span class="hidden sm:inline">Discord</span>
			</a>
			<a
				href={urls.github}
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-1.5 rounded-full px-4 py-2 mr-2 text-sm font-semibold text-c-neutral-6 transition-colors hover:text-c-heading-base dark:text-white/60 dark:hover:text-white"
			>
				<IconGithub class="size-4" />
				<span class="hidden sm:inline">GitHub</span>
			</a>
		</div>
		<div
			class="z-20 flex w-full items-center gap-2 px-8 py-2 font-bold transition-all md:w-auto md:px-4 md:gap-4 md:rounded-full md:bg-c-btn md:text-white md:shadow-sm md:dark:bg-s-dark-3"
		>
			<img src="./logo_cut.png" alt="solyto" class="mr-auto h-8 md:hidden" />
			<a
				href={urls.discord}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Discord"
				class="rounded-full p-2 text-c-neutral-7 dark:text-white md:hidden"
			>
				<DiscordIcon class="size-5" />
			</a>
			<a
				href={urls.github}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="GitHub"
				class="rounded-full p-2 text-c-neutral-7 dark:text-white md:hidden"
			>
				<IconGithub class="size-5" />
			</a>
			<div class="relative">
				<button
					onclick={() => (langOpen = !langOpen)}
					class="flex cursor-pointer items-center gap-1.5 rounded-full border-2 border-white/5 px-2 py-2 font-bold text-c-neutral-7 transition-all hover:bg-white/5 dark:text-white md:px-4 md:text-white"
				>
					<IconGlobe class="size-4" />
					{ts.locale.toUpperCase()}
				</button>
				{#if langOpen}
					<div class="fixed inset-0 z-10" onclick={() => (langOpen = false)}></div>
					<div
						class="absolute top-full left-0 z-20 mt-2 overflow-hidden rounded-2xl bg-c-bg-surface shadow-xl dark:bg-s-dark-3"
						transition:scale={{ duration: 150, start: 0.95 }}
					>
						{#each languages as lang}
							<button
								onclick={() => selectLang(lang.code)}
								class="block w-full px-5 py-2.5 text-left text-sm font-semibold text-c-neutral-7 transition-colors hover:bg-c-neutral dark:text-gray-200 dark:hover:bg-s-dark-3
									{ts.locale === lang.code ? 'text-c-btn dark:text-s-teal' : ''}"
							>
								{lang.name}
							</button>
						{/each}
					</div>
				{/if}
			</div>
			<div class="relative md:hidden">
				<button
					onclick={() => (userOpen = !userOpen)}
					class="flex cursor-pointer items-center rounded-full border-2 border-white/5 p-2 text-c-neutral-7 transition-all hover:bg-white/5 dark:text-white"
				>
					<IconUser class="size-5" />
				</button>
				{#if userOpen}
					<div class="fixed inset-0 z-10" onclick={() => (userOpen = false)}></div>
					<div
						class="absolute top-full right-0 z-20 mt-2 overflow-hidden rounded-2xl bg-c-bg-surface shadow-xl dark:bg-s-dark-3"
						transition:scale={{ duration: 150, start: 0.95 }}
					>
						<a
							href={urls.login}
							class="block px-5 py-3 text-base font-semibold whitespace-nowrap text-c-neutral-7 transition-colors hover:bg-c-neutral dark:text-gray-200 dark:hover:bg-s-dark-3"
						>
							{ts.get.ui.login}
						</a>
						<a
							href={urls.register}
							class="block px-5 py-3 text-base font-semibold whitespace-nowrap text-c-neutral-7 transition-colors hover:bg-c-neutral dark:text-gray-200 dark:hover:bg-s-dark-3"
						>
							{ts.get.ui.register}
						</a>
					</div>
				{/if}
			</div>
			<a
				href={urls.login}
				class="hidden md:block rounded-full border-2 border-white/5 px-4 py-2 font-bold text-white shadow-sm transition-all hover:bg-white/5"
			>
				{ts.get.ui.login}
			</a>
			<a
				href={urls.register}
				class="hidden md:block rounded-full border-2 border-white/5 px-4 py-2 font-bold text-white shadow-sm transition-all hover:bg-white/5"
			>
				{ts.get.ui.register}
			</a>
		</div>
	</div>
</div>
