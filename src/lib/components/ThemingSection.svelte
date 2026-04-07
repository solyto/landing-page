<script lang="ts">
	import { getTranslation } from '$lib/state/Translation.svelte'
	import { reveal } from '$lib/actions/reveal'

	const ts = getTranslation()

	interface Theme {
		name: string
		previewBg: string
		previewSurface: string
		previewText: string
		previewAccent: string
		exotic?: boolean
	}

	const themes: Theme[] = [
		{ name: 'Default', previewBg: '#fcfcfc', previewSurface: '#efefef', previewText: '#121212', previewAccent: '#14a5cd' },
		{ name: 'Nord', previewBg: '#2e3440', previewSurface: '#3b4252', previewText: '#eceff4', previewAccent: '#88c0d0' },
		{ name: 'Skyrim', previewBg: '#0e0e12', previewSurface: '#16161e', previewText: '#e8e4dc', previewAccent: '#a09880', exotic: true },
		{ name: 'Catppuccin Mocha', previewBg: '#1e1e2e', previewSurface: '#313244', previewText: '#cdd6f4', previewAccent: '#cba6f7' },
		{ name: 'Catppuccin Latte', previewBg: '#eff1f5', previewSurface: '#e6e9ef', previewText: '#4c4f69', previewAccent: '#8839ef' },
		{ name: 'Gruvbox', previewBg: '#282828', previewSurface: '#3c3836', previewText: '#ebdbb2', previewAccent: '#fe8019' },
		{ name: 'Dracula', previewBg: '#282a36', previewSurface: '#44475a', previewText: '#f8f8f2', previewAccent: '#bd93f9' },
		{ name: 'Terminal', previewBg: '#0d0d0d', previewSurface: '#0a1a0a', previewText: '#00ff41', previewAccent: '#00ff41', exotic: true },
		{ name: 'Paper', previewBg: '#faf9f7', previewSurface: '#f3f0eb', previewText: '#1c1917', previewAccent: '#92400e' },
		{ name: 'Atari', previewBg: '#000000', previewSurface: '#0d0020', previewText: '#ffffff', previewAccent: '#ff6600', exotic: true },
	]
</script>

<section class="w-full py-20 md:py-32">
	<div class="mx-auto max-w-5xl px-6">
		<div class="flex flex-col md:flex-row md:gap-20 md:items-center">
			<div class="md:w-64 flex-shrink-0 mb-12 md:mb-0" use:reveal>
				<h2 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
					{ts.get.theming.title}
				</h2>
				<p class="text-gray-600 dark:text-gray-400 leading-relaxed">
					{ts.get.theming.description}
				</p>
			</div>

			<div class="flex-1 flex flex-wrap gap-3">
				{#each themes as theme, i}
					<div
						class="reveal flex flex-col overflow-hidden rounded-lg border border-white/8 select-none"
						style="background: {theme.previewBg}; min-width: 110px;"
						use:reveal={{ delay: i * 50 }}
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
							{#if theme.exotic}
								<span
									class="text-[9px] px-1.5 py-0.5 rounded font-semibold whitespace-nowrap"
									style="background: {theme.previewAccent}22; color: {theme.previewAccent};"
								>
									{ts.get.theming.exotic_badge}
								</span>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
