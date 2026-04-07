<script lang="ts">
	import { getTranslation } from '$lib/state/Translation.svelte'
	import { reveal } from '$lib/actions/reveal'

	const ts = getTranslation()

	const guarantees = $derived([
		{
			title: ts.get.privacy_guarantees.privacy.title,
			description: ts.get.privacy_guarantees.privacy.description
		},
		{
			title: ts.get.privacy_guarantees.servers.title,
			description: ts.get.privacy_guarantees.servers.description
		},
		{
			title: ts.get.privacy_guarantees.no_tracking.title,
			description: ts.get.privacy_guarantees.no_tracking.description
		},
		{
			title: ts.get.privacy_guarantees.your_data.title,
			description: ts.get.privacy_guarantees.your_data.description
		}
	])
</script>

<section class="w-full py-16 md:py-28">
	<div class="mx-auto max-w-6xl px-6">
		<div class="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
			<div class="reveal reveal-left md:flex-1 md:sticky md:top-24" use:reveal>
				<h2
					class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
				>
					{ts.get.privacy_guarantees.title}
				</h2>
				<p class="mt-4 text-2xl font-bold text-s-teal">
					{ts.get.privacy_guarantees.subtitle}
				</p>
			</div>

			<div class="md:flex-1 flex flex-col">
				{#each guarantees as guarantee, i}
					<div
						class="reveal reveal-right border-b border-gray-100 dark:border-s-dark-3 py-8"
						use:reveal={{ delay: i * 100 }}
					>
						<h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
							{guarantee.title}
						</h3>
						<p class="text-gray-500 dark:text-gray-400 leading-relaxed">
							{guarantee.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
