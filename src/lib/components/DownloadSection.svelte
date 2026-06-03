<script lang="ts">
	import { getTranslation } from '$lib/state/Translation.svelte'
	import { urls } from '$lib/config/urls'
	import { reveal } from '$lib/actions/reveal'

	const ts = getTranslation()

	const platformLinks: Record<string, string> = {
		windows: urls.releases,
		macos: urls.releases,
		linux: urls.releases
	}
</script>

<section class="w-full py-16 md:py-24">
	<div class="mx-auto max-w-5xl px-6">
		<div class="reveal mb-12 text-center" use:reveal>
			<h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
				{ts.get.downloads.title}
			</h2>
			<p class="text-lg text-gray-500">
				{ts.get.downloads.subtitle}
			</p>
		</div>

		<div class="reveal grid grid-cols-2 md:grid-cols-5 gap-3" use:reveal={{ delay: 100 }}>
			{#each Object.entries(ts.get.downloads.platforms) as [key, platform]}
				{@const link = platformLinks[key]}
				{#if platform.available && link}
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						class="group flex flex-col items-center gap-3 rounded-2xl border border-s-teal/25 bg-s-teal/5 p-6 transition-all hover:border-s-teal hover:bg-s-teal/10"
					>
						<span class="text-xl font-bold text-gray-900">{platform.label}</span>
						<span class="text-xs font-semibold text-s-teal uppercase tracking-widest">
							{ts.get.downloads.download} ↓
						</span>
					</a>
				{:else}
					<div class="flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-6">
						<span class="text-xl font-bold text-gray-300">{platform.label}</span>
						<span class="text-xs font-medium text-gray-300 uppercase tracking-widest">
							{ts.get.downloads.coming_soon}
						</span>
					</div>
				{/if}
			{/each}
		</div>

		<div class="reveal mt-8 text-center" use:reveal={{ delay: 200 }}>
			<a
				href={urls.releases}
				target="_blank"
				rel="noopener noreferrer"
				class="text-sm text-gray-400 hover:text-s-teal transition-colors"
			>
				{ts.get.downloads.all_releases} →
			</a>
		</div>
	</div>
</section>
