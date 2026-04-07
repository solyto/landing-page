<script lang="ts">
	import { reveal } from '$lib/actions/reveal'
	import { getTranslation } from '$lib/state/Translation.svelte'

	const ts = getTranslation()

	const mediaTypes = ['Books', 'Movies', 'Music', 'Games', 'Recipes', 'Links', 'Quotes']
</script>

<section class="w-full bg-s-teal/8 dark:bg-s-teal/5 py-16 md:py-24 border-y border-s-teal/15 dark:border-s-teal/10">
	<div class="mx-auto max-w-5xl px-6">
		<div class="flex flex-col md:flex-row md:items-center gap-10 md:gap-20">
			<div class="reveal reveal-left flex-1" use:reveal>
				<h2 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
					{ts.get.features.libraries.title}.
					<span class="text-s-teal">The only organizer that tracks your whole media life.</span>
				</h2>
			</div>

			<div class="reveal reveal-right flex-1" use:reveal={{ delay: 150 }}>
				<p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
					{ts.get.features.libraries.description}
				</p>
				<div class="flex flex-wrap gap-2">
					{#each mediaTypes as type, i}
						<span
							class="reveal text-sm font-medium px-3 py-1.5 rounded-full border border-s-teal/30 text-s-teal bg-s-teal/5"
							use:reveal={{ delay: 200 + i * 50 }}
						>
							{type}
						</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
