<script lang="ts">
	import { blur, slide } from 'svelte/transition';
	import IconChevronDown from '@lucide/svelte/icons/chevron-down';
	import { getTranslation } from '$lib/state/Translation.svelte';

	const ts = getTranslation();

	let openIndex = $state<number | null>(null);

	function toggleItem(index: number): void {
		openIndex = openIndex === index ? null : index;
	}
</script>

<section class="w-full py-12" in:blur>
	<div class="mb-10 text-center">
		<h2 class="mb-3 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
			{ts.get.faq.title}
		</h2>
	</div>

	<div class="mx-auto flex max-w-2xl flex-col gap-3">
		{#each ts.get.faq.items as item, index}
			<div
				class="overflow-hidden rounded-2xl border border-gray-100 bg-white transition-shadow duration-300 dark:border-s-dark-3 dark:bg-s-dark-2 {openIndex ===
				index
					? 'shadow-lg'
					: 'shadow-sm hover:shadow-md'}"
			>
				<button
					class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
					onclick={() => toggleItem(index)}
				>
					<span class="font-semibold text-gray-900 dark:text-white">
						{item.question}
					</span>
					<div
						class="flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 dark:bg-s-dark-3 {openIndex ===
						index
							? 'rotate-180 bg-s-lightblue/10 dark:bg-s-lightblue/10'
							: ''}"
					>
						<IconChevronDown
							class="size-4 transition-colors duration-300 {openIndex === index
								? 'text-s-lightblue'
								: 'text-gray-500 dark:text-gray-400'}"
						/>
					</div>
				</button>
				{#if openIndex === index}
					<div class="px-6 pb-5" transition:slide={{ duration: 200 }}>
						<p class="leading-relaxed text-gray-600 dark:text-gray-400">
							{item.answer}
						</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>
