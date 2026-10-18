<script lang="ts">
	import type { Component } from 'svelte'
	import IconHeart from '@lucide/svelte/icons/heart'
	import IconGift from '@lucide/svelte/icons/gift'
	import IconUsers from '@lucide/svelte/icons/users'
	import IconWrench from '@lucide/svelte/icons/wrench'
	import { getTranslation } from '$lib/state/Translation.svelte'
	import { reveal } from '$lib/actions/reveal'

	const ts = getTranslation()

	// One icon per point, in the order of why.points in the locale files
	const icons: Component[] = [IconWrench, IconHeart, IconUsers, IconGift]
</script>

<section class="w-full py-16 md:py-24">
	<div class="mx-auto max-w-6xl px-6">
		<div class="reveal mb-12 md:mb-16" use:reveal>
			<h2 class="text-3xl md:text-5xl font-bold text-c-heading-base dark:text-white">
				{ts.get.why.intro}
			</h2>
		</div>

		<div class="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
			{#each ts.get.why.points as point, i (point.title)}
				{@const Icon = icons[i]}
				<div class="reveal flex gap-4" use:reveal={{ delay: i * 80 }}>
					{#if Icon}
						<Icon class="mt-1 size-6 shrink-0 text-c-heading dark:text-c-primary" />
					{/if}
					<div class="flex flex-col gap-2">
						<h3 class="text-lg font-bold text-c-heading-base dark:text-white">
							{point.title}
						</h3>
						<p class="leading-relaxed text-c-neutral-5 dark:text-gray-400">
							{point.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
