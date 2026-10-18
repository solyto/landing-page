<script lang="ts">
	import { getTranslation } from '$lib/state/Translation.svelte'
	import { reveal } from '$lib/actions/reveal'
	import { getThemeState, landingThemes } from '$lib/state/Theme.svelte'

	const ts = getTranslation()

	const themeState = getThemeState()
</script>

<section class="w-full bg-black/3 dark:bg-black/20 theme-dark:bg-black/20 py-20 md:py-32">
	<div class="mx-auto max-w-6xl px-6">
		<h2
			class="reveal mb-10 text-3xl md:text-5xl font-bold text-c-heading-base dark:text-white leading-tight"
			use:reveal
		>
			{ts.get.theming.title}
		</h2>

		<div class="flex flex-wrap gap-3">
			{#each landingThemes as theme, i (theme.id)}
				<!-- The wrapper's class must stay static: reveal adds .in-view to it at runtime -->
				<div class="reveal" use:reveal={{ delay: i * 50 }}>
					<button
						type="button"
						onclick={() => themeState.setTheme(theme)}
						aria-pressed={themeState.theme.id === theme.id}
						class="flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border text-left select-none transition-transform hover:-translate-y-0.5
							{themeState.theme.id === theme.id
							? 'border-c-primary ring-2 ring-c-primary'
							: 'border-c-neutral-2 dark:border-white/10'}"
						style="background: {theme.previewBg}; min-width: 110px;"
					>
						<div
							class="flex items-center gap-1.5 px-2.5 py-2 border-b"
							style="background: {theme.previewSurface}; border-color: {theme.previewText}12;"
						>
							<div
								class="w-1.5 h-1.5 rounded-full flex-shrink-0"
								style="background: {theme.previewAccent};"
							></div>
							<div
								class="h-1 rounded flex-1"
								style="background: {theme.previewText}; opacity: 0.2;"
							></div>
						</div>

						<div class="flex">
							<div
								class="flex flex-col gap-1.5 px-1.5 py-2 w-8 flex-shrink-0"
								style="background: {theme.previewSurface}; opacity: 0.75;"
							>
								<div class="h-1 rounded" style="background: {theme.previewAccent}; opacity: 0.9;"></div>
								<div class="h-1 rounded" style="background: {theme.previewText}; opacity: 0.2;"></div>
								<div class="h-1 rounded" style="background: {theme.previewText}; opacity: 0.2;"></div>
							</div>

							<div class="flex-1 flex flex-col gap-1.5 p-2">
								<div class="h-1.5 rounded" style="background: {theme.previewText}; opacity: 0.25;"></div>
								<div class="h-1 rounded w-3/4" style="background: {theme.previewText}; opacity: 0.15;"></div>
								<div class="h-1 rounded w-1/2 mt-0.5" style="background: {theme.previewAccent}; opacity: 0.5;"></div>
							</div>
						</div>

						<div
							class="flex items-center justify-between gap-2 px-2.5 py-2 border-t"
							style="background: {theme.previewSurface}; border-color: {theme.previewText}10;"
						>
							<span class="text-[11px] font-medium whitespace-nowrap" style="color: {theme.previewText};">
								{theme.name}
							</span>
						</div>
					</button>
				</div>
			{/each}
		</div>
	</div>
</section>
