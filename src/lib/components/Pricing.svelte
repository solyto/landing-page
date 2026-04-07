<script lang="ts">
	import { blur } from 'svelte/transition';
	import IconHeart from '@lucide/svelte/icons/heart';
	import { getTranslation } from '$lib/state/Translation.svelte';

	const ts = getTranslation();
</script>

<section class="flex h-full w-full flex-col justify-between py-12" in:blur>
	<div class="mb-10 text-center">
		<h2 class="mb-3 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
			{ts.get.pricing.title}
		</h2>
	</div>

	<div class="mx-auto mt-7 max-w-lg">
		<div
			class="relative rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-8 shadow-xl dark:border-s-dark-3 dark:from-s-dark-2 dark:to-s-dark-3"
		>
			<div class="absolute -top-4 left-1/2 -translate-x-1/2">
				<span
					class="rounded-full bg-gradient-to-r from-s-lightblue to-s-green px-6 py-2 text-sm font-bold text-white shadow-lg"
				>
					{ts.get.pricing.free_badge}
				</span>
			</div>

			<div class="mt-4 mb-8 text-center">
				<div class="mb-4 flex items-center justify-center gap-2">
					<span class="text-5xl font-bold text-gray-900 dark:text-white">$0</span>
					<span class="text-lg text-gray-500 dark:text-gray-400">/forever</span>
				</div>
				<p class="text-gray-600 dark:text-gray-400">
					{ts.get.pricing.description}
				</p>
			</div>

			<div class="dark:border-s-dark-4 border-t border-gray-200 pt-6">
				<div
					class="flex items-start gap-3 rounded-xl bg-s-lightblue/5 p-4 dark:bg-s-lightblue/10"
				>
					<IconHeart class="mt-0.5 size-5 flex-shrink-0 text-s-lightblue" />
					<div>
						<p class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
							{ts.get.pricing.promise_title}
						</p>
						<p class="text-sm text-gray-600 dark:text-gray-400">
							{ts.get.pricing.promise}
						</p>
					</div>
				</div>
			</div>

			<p class="mt-6 text-center text-xs text-gray-500 dark:text-gray-500">
				{ts.get.pricing.note}
			</p>
		</div>
	</div>
</section>
