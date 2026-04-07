<script lang="ts">
	import { blur } from 'svelte/transition';
	import IconBookOpen from '@lucide/svelte/icons/book-open';
	import IconCheckSquare from '@lucide/svelte/icons/check-square';
	import IconCalendar from '@lucide/svelte/icons/calendar';
	import IconRss from '@lucide/svelte/icons/rss';
	import IconNotebook from '@lucide/svelte/icons/notebook-pen';
	import IconUsers from '@lucide/svelte/icons/users';
	import IconDollarSign from '@lucide/svelte/icons/dollar-sign';
	import IconClipboardCheck from '@lucide/svelte/icons/clipboard-check';
	import IconClock from '@lucide/svelte/icons/clock';
	import { getTranslation } from '$lib/state/Translation.svelte';

	const ts = getTranslation();

	const featureIcons = {
		libraries: IconBookOpen,
		todos: IconCheckSquare,
		calendar: IconCalendar,
		news: IconRss,
		notebook: IconNotebook,
		contacts: IconUsers,
		finance: IconDollarSign,
		daily_check_in: IconClipboardCheck,
		time_tracker: IconClock
	};
</script>

<section class="w-full py-16 md:py-24">
	<div class="mx-auto max-w-5xl px-6">
		<div class="mb-12 text-center md:mb-16">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-5xl dark:text-white">
				{ts.get.how_it_works.title}
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-400">
				{ts.get.how_it_works.intro}
			</p>
		</div>

		<div class="space-y-8 md:space-y-12">
			{#each ts.get.how_it_works.use_cases as use_case, index (use_case.feature)}
				{@const Icon = featureIcons[use_case.feature as keyof typeof featureIcons]}
				<div
					class="flex flex-col items-start gap-6 md:flex-row md:gap-8"
					in:blur={{ delay: index * 100 }}
				>
					<div
						class="flex size-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-s-lightblue/10 to-s-green/10"
					>
						<Icon class="size-7 text-s-lightblue" />
					</div>
					<div class="flex-1">
						<h3
							class="mb-2 text-xl font-bold text-gray-900 md:text-2xl dark:text-white"
						>
							{use_case.title}
						</h3>
						<p class="leading-relaxed text-gray-600 dark:text-gray-400">
							{use_case.description}
						</p>
					</div>
				</div>
			{/each}
		</div>

		<div
			class="mt-12 rounded-3xl border border-s-lightblue/10 bg-gradient-to-br from-s-lightblue/5 to-s-green/5 p-6 md:mt-16 md:p-8"
		>
			<div class="text-center">
				<h3 class="mb-3 text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
					{ts.get.how_it_works.bottom_line.title}
				</h3>
				<p class="text-gray-600 dark:text-gray-400">
					{ts.get.how_it_works.bottom_line.description}
				</p>
			</div>
		</div>
	</div>
</section>
