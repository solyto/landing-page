<script lang="ts">
	import { getTranslation } from '$lib/state/Translation.svelte'
	import { reveal } from '$lib/actions/reveal'

	const ts = getTranslation()

	const items = $derived([
		{ value: '10', label: ts.get.stats.features },
		{ value: '0', label: ts.get.stats.ads },
		{ value: '0', label: ts.get.stats.trackers },
		{ value: 'EU', label: ts.get.stats.servers },
		{ value: '∞', label: ts.get.stats.free }
	])
</script>

<div class="w-full bg-s-dark-2 py-10 md:py-14">
	<div class="mx-auto max-w-5xl px-6">
		<div class="flex flex-wrap justify-center gap-10 md:gap-20">
			{#each items as item, i}
				<div
					class="reveal flex flex-col items-center gap-1"
					use:reveal={{ delay: i * 80 }}
				>
					<span class="text-4xl md:text-5xl font-bold text-s-teal tracking-tight tabular-nums">
						{item.value}
					</span>
					<span class="text-xs text-gray-400 uppercase tracking-widest">
						{item.label}
					</span>
				</div>
			{/each}
		</div>
	</div>
</div>
