<script lang="ts">
	import { getTranslation } from '$lib/state/Translation.svelte'
	import { reveal } from '$lib/actions/reveal'

	const ts = getTranslation()
</script>

<section class="w-full py-16 md:py-28">
	<div class="mx-auto max-w-5xl px-6">
		<div class="reveal mb-12 md:mb-16" use:reveal>
			<h2 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
				{ts.get.replaces.title}
			</h2>
			<p class="text-lg text-gray-500 dark:text-gray-400 max-w-xl">
				{ts.get.replaces.subtitle}
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-0">
			{#each ts.get.replaces.items as item, i}
				<div
					class="reveal flex items-center gap-0 border-b border-gray-100 dark:border-s-dark-3 py-5 md:py-6"
					use:reveal={{ delay: i * 60 }}
				>
					<span class="flex-1 text-sm text-gray-400 dark:text-gray-500 line-through pr-4">
						{item.from}
					</span>
					<span class="text-s-teal font-bold text-lg px-3">→</span>
					<span class="flex-1 text-sm font-semibold text-gray-900 dark:text-white pl-4">
						{item.to}
					</span>
				</div>
			{/each}
		</div>

	</div>
</section>
