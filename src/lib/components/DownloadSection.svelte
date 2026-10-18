<script lang="ts">
	import { getTranslation } from '$lib/state/Translation.svelte'
	import { urls } from '$lib/config/urls'
	import { reveal } from '$lib/actions/reveal'

	const ts = getTranslation()

	type LinuxFormat = 'deb' | 'rpm' | 'appimage'
	let linuxFormat = $state<LinuxFormat>('deb')

	const linuxFormats: { id: LinuxFormat; label: string }[] = [
		{ id: 'deb', label: '.deb' },
		{ id: 'rpm', label: '.rpm' },
		{ id: 'appimage', label: '.AppImage' }
	]

	function getLink(key: string): string {
		if (key === 'windows') return urls.downloads.windows
		if (key === 'macos') return urls.downloads.macos
		if (key === 'linux') return urls.downloads.linux[linuxFormat]
		if (key === 'android') return urls.downloads.fdroid
		return ''
	}
</script>

<section class="w-full py-16 md:py-24">
	<div class="mx-auto max-w-6xl px-6">
		<div class="reveal mb-12" use:reveal>
			<h2 class="text-3xl md:text-5xl font-bold text-c-heading-base dark:text-white mb-4">
				{ts.get.downloads.title}
			</h2>
			<p class="text-lg text-c-neutral-5 dark:text-gray-400">
				{ts.get.downloads.subtitle.before}
				<!-- Drawn as a background: Barlow's own strike-through line sits too high -->
				<s
					class="no-underline bg-[linear-gradient(currentColor,currentColor)] bg-[length:100%_2px] bg-[position:0_62%] bg-no-repeat"
					>{ts.get.downloads.subtitle.struck}</s
				>
				{ts.get.downloads.subtitle.after}
			</p>
		</div>

		<div class="reveal grid grid-cols-2 md:grid-cols-5 gap-3" use:reveal={{ delay: 100 }}>
			{#each Object.entries(ts.get.downloads.platforms) as [key, platform]}
				{#if platform.available}
					<a
						href={getLink(key)}
						class="group flex flex-col items-center gap-3 rounded-2xl border border-c-primary/25 bg-c-primary/5 p-6 transition-all hover:border-c-primary hover:bg-c-primary/10"
					>
						<span class="text-xl font-bold text-c-heading-base dark:text-white">{platform.label}</span>

						<span class="text-sm font-semibold text-c-primary">
							{key === 'android' ? ts.get.downloads.download_fdroid : ts.get.downloads.download}
						</span>

						{#if key === 'linux'}
							<div class="flex rounded-lg border border-c-primary/30 overflow-hidden text-xs font-semibold">
								{#each linuxFormats as fmt}
									<button
										type="button"
										onclick={(e) => { e.preventDefault(); linuxFormat = fmt.id }}
										class="px-2 py-1 transition-colors {linuxFormat === fmt.id ? 'bg-c-primary text-white' : 'text-c-primary hover:bg-c-primary/10'}"
									>
										{fmt.label}
									</button>
								{/each}
							</div>
						{/if}
					</a>
				{:else}
					<div class="flex flex-col items-center gap-3 rounded-2xl border border-c-neutral-1 bg-c-neutral p-6 dark:border-s-dark-3 dark:bg-s-dark-2">
						<span class="text-xl font-bold text-c-neutral-3 dark:text-gray-600">{platform.label}</span>
						<span class="text-sm font-medium text-c-neutral-3 dark:text-gray-600">
							{ts.get.downloads.coming_soon}
						</span>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section>
