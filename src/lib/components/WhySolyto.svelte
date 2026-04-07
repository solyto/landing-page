<script lang="ts">
	import { getTranslation } from '$lib/state/Translation.svelte'
	import { reveal } from '$lib/actions/reveal'

	const ts = getTranslation()
</script>

<section class="w-full bg-s-dark-2 py-20 md:py-32">
	<div class="mx-auto max-w-5xl px-6">
		<div class="reveal mb-14 md:mb-20" use:reveal>
			<h2
				class="text-4xl md:text-6xl font-bold text-white leading-tight max-w-2xl"
			>
				{ts.get.why.intro}
			</h2>
		</div>

		<div class="flex flex-col">
			{#each ts.get.why.points as point, i}
				<div
					class="reveal flex flex-col md:flex-row md:items-start gap-3 md:gap-16 border-t border-white/10 py-8 md:py-10"
					use:reveal={{ delay: i * 80 }}
				>
					<span
						class="text-xs uppercase tracking-widest text-s-teal font-semibold md:w-44 flex-shrink-0 pt-1"
					>
						{point.title}
					</span>
					<p class="text-white/60 leading-relaxed md:text-lg flex-1">
						{point.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
