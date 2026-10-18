<script lang="ts">
	import { getTranslation } from '$lib/state/Translation.svelte'
	import { reveal } from '$lib/actions/reveal'

	const ts = getTranslation()

	interface Props {
		mobile?: boolean
	}

	let { mobile = false }: Props = $props()

	// Theme colors, so the accents follow the selected theme. The heading color is
	// a dark purple in the default theme, too dark on cards in Default Dark.
	const accentColors: Record<string, string> = {
		todos: 'border-c-action',
		calendar: 'border-c-btn',
		news: 'border-c-heading dark:border-s-purple',
		notebook: 'border-c-primary',
		contacts: 'border-c-action',
		finance: 'border-c-primary',
		clipboard: 'border-c-btn',
		daily_check_in: 'border-c-heading dark:border-s-purple',
		time_tracker: 'border-c-action'
	}
</script>

<section class="w-full py-16 md:py-24">
	<div class="mx-auto max-w-6xl px-6">
		<div class="reveal mb-12" use:reveal>
			<h2 class="text-3xl md:text-5xl font-bold text-c-heading-base dark:text-white">
				{ts.get.showcase.title}
			</h2>
			<p class="mt-4 text-lg text-c-neutral-5 dark:text-gray-400">
				{ts.get.showcase.subtitle}
			</p>
		</div>

		<!-- Desktop bento grid -->
		<div class="hidden md:grid grid-cols-3 gap-4">
			<!-- Libraries: large featured card -->
			<div
				class="reveal col-span-2 bg-c-bg-surface dark:bg-s-dark-2 border-t-4 border-c-primary rounded-2xl p-6 border border-x-c-neutral-1 border-b-c-neutral-1 dark:border-x-s-dark-3 dark:border-b-s-dark-3 flex flex-col gap-3 min-h-52"
				use:reveal
			>
				<h3 class="text-2xl font-bold text-c-heading-base dark:text-white">
					{ts.get.features.libraries.title}
				</h3>
				<p class="text-sm text-c-neutral-5 dark:text-gray-400 leading-relaxed max-w-md">
					{ts.get.features.libraries.description}
				</p>
				<p class="mt-auto pt-2 text-sm text-c-neutral-4 dark:text-gray-500">
					{ts.get.showcase.replaces_label}
					<span class="ml-1 text-c-neutral-6 dark:text-gray-300">{ts.get.features.libraries.replaces}</span>
				</p>
			</div>

			<!-- Todos -->
			<div
				class="reveal bg-c-bg-surface dark:bg-s-dark-2 border-t-4 {accentColors.todos} rounded-2xl p-6 border border-x-c-neutral-1 border-b-c-neutral-1 dark:border-x-s-dark-3 dark:border-b-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 80 }}
			>
				<h3 class="text-xl font-bold text-c-heading-base dark:text-white">
					{ts.get.features.todos.title}
				</h3>
				<p class="text-sm text-c-neutral-5 dark:text-gray-400 leading-relaxed">
					{ts.get.features.todos.description}
				</p>
				{#if ts.get.features.todos.replaces}
					<p class="mt-auto pt-2 text-sm text-c-neutral-4 dark:text-gray-500">
						{ts.get.showcase.replaces_label}
						<span class="ml-1 text-c-neutral-6 dark:text-gray-300">{ts.get.features.todos.replaces}</span>
					</p>
				{/if}
			</div>

			<!-- Calendar -->
			<div
				class="reveal bg-c-bg-surface dark:bg-s-dark-2 border-t-4 {accentColors.calendar} rounded-2xl p-6 border border-x-c-neutral-1 border-b-c-neutral-1 dark:border-x-s-dark-3 dark:border-b-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 120 }}
			>
				<h3 class="text-xl font-bold text-c-heading-base dark:text-white">
					{ts.get.features.calendar.title}
				</h3>
				<p class="text-sm text-c-neutral-5 dark:text-gray-400 leading-relaxed">
					{ts.get.features.calendar.description}
				</p>
				{#if ts.get.features.calendar.replaces}
					<p class="mt-auto pt-2 text-sm text-c-neutral-4 dark:text-gray-500">
						{ts.get.showcase.replaces_label}
						<span class="ml-1 text-c-neutral-6 dark:text-gray-300">{ts.get.features.calendar.replaces}</span>
					</p>
				{/if}
			</div>

			<!-- News -->
			<div
				class="reveal bg-c-bg-surface dark:bg-s-dark-2 border-t-4 {accentColors.news} rounded-2xl p-6 border border-x-c-neutral-1 border-b-c-neutral-1 dark:border-x-s-dark-3 dark:border-b-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 160 }}
			>
				<h3 class="text-xl font-bold text-c-heading-base dark:text-white">
					{ts.get.features.news.title}
				</h3>
				<p class="text-sm text-c-neutral-5 dark:text-gray-400 leading-relaxed">
					{ts.get.features.news.description}
				</p>
				{#if ts.get.features.news.replaces}
					<p class="mt-auto pt-2 text-sm text-c-neutral-4 dark:text-gray-500">
						{ts.get.showcase.replaces_label}
						<span class="ml-1 text-c-neutral-6 dark:text-gray-300">{ts.get.features.news.replaces}</span>
					</p>
				{/if}
			</div>

			<!-- Notebook -->
			<div
				class="reveal bg-c-bg-surface dark:bg-s-dark-2 border-t-4 {accentColors.notebook} rounded-2xl p-6 border border-x-c-neutral-1 border-b-c-neutral-1 dark:border-x-s-dark-3 dark:border-b-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 200 }}
			>
				<h3 class="text-xl font-bold text-c-heading-base dark:text-white">
					{ts.get.features.notebook.title}
				</h3>
				<p class="text-sm text-c-neutral-5 dark:text-gray-400 leading-relaxed">
					{ts.get.features.notebook.description}
				</p>
				{#if ts.get.features.notebook.replaces}
					<p class="mt-auto pt-2 text-sm text-c-neutral-4 dark:text-gray-500">
						{ts.get.showcase.replaces_label}
						<span class="ml-1 text-c-neutral-6 dark:text-gray-300">{ts.get.features.notebook.replaces}</span>
					</p>
				{/if}
			</div>

			<!-- Contacts -->
			<div
				class="reveal bg-c-bg-surface dark:bg-s-dark-2 border-t-4 {accentColors.contacts} rounded-2xl p-6 border border-x-c-neutral-1 border-b-c-neutral-1 dark:border-x-s-dark-3 dark:border-b-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 240 }}
			>
				<h3 class="text-xl font-bold text-c-heading-base dark:text-white">
					{ts.get.features.contacts.title}
				</h3>
				<p class="text-sm text-c-neutral-5 dark:text-gray-400 leading-relaxed">
					{ts.get.features.contacts.description}
				</p>
				{#if ts.get.features.contacts.replaces}
					<p class="mt-auto pt-2 text-sm text-c-neutral-4 dark:text-gray-500">
						{ts.get.showcase.replaces_label}
						<span class="ml-1 text-c-neutral-6 dark:text-gray-300">{ts.get.features.contacts.replaces}</span>
					</p>
				{/if}
			</div>

			<!-- Finance -->
			<div
				class="reveal bg-c-bg-surface dark:bg-s-dark-2 border-t-4 {accentColors.finance} rounded-2xl p-6 border border-x-c-neutral-1 border-b-c-neutral-1 dark:border-x-s-dark-3 dark:border-b-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 280 }}
			>
				<h3 class="text-xl font-bold text-c-heading-base dark:text-white">
					{ts.get.features.finance.title}
				</h3>
				<p class="text-sm text-c-neutral-5 dark:text-gray-400 leading-relaxed">
					{ts.get.features.finance.description}
				</p>
				{#if ts.get.features.finance.replaces}
					<p class="mt-auto pt-2 text-sm text-c-neutral-4 dark:text-gray-500">
						{ts.get.showcase.replaces_label}
						<span class="ml-1 text-c-neutral-6 dark:text-gray-300">{ts.get.features.finance.replaces}</span>
					</p>
				{/if}
			</div>

			<!-- Clipboard -->
			<div
				class="reveal bg-c-bg-surface dark:bg-s-dark-2 border-t-4 {accentColors.clipboard} rounded-2xl p-6 border border-x-c-neutral-1 border-b-c-neutral-1 dark:border-x-s-dark-3 dark:border-b-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 320 }}
			>
				<h3 class="text-xl font-bold text-c-heading-base dark:text-white">
					{ts.get.features.clipboard.title}
				</h3>
				<p class="text-sm text-c-neutral-5 dark:text-gray-400 leading-relaxed">
					{ts.get.features.clipboard.description}
				</p>
				{#if ts.get.features.clipboard.replaces}
					<p class="mt-auto pt-2 text-sm text-c-neutral-4 dark:text-gray-500">
						{ts.get.showcase.replaces_label}
						<span class="ml-1 text-c-neutral-6 dark:text-gray-300">{ts.get.features.clipboard.replaces}</span>
					</p>
				{/if}
			</div>

			<!-- Daily Check-In: span-2 -->
			<div
				class="reveal col-span-2 bg-c-bg-surface dark:bg-s-dark-2 border-t-4 {accentColors.daily_check_in} rounded-2xl p-6 border border-x-c-neutral-1 border-b-c-neutral-1 dark:border-x-s-dark-3 dark:border-b-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 360 }}
			>
				<h3 class="text-xl font-bold text-c-heading-base dark:text-white">
					{ts.get.features.daily_check_in.title}
				</h3>
				<p class="text-sm text-c-neutral-5 dark:text-gray-400 leading-relaxed max-w-lg">
					{ts.get.features.daily_check_in.description}
				</p>
				{#if ts.get.features.daily_check_in.replaces}
					<p class="mt-auto pt-2 text-sm text-c-neutral-4 dark:text-gray-500">
						{ts.get.showcase.replaces_label}
						<span class="ml-1 text-c-neutral-6 dark:text-gray-300">{ts.get.features.daily_check_in.replaces}</span>
					</p>
				{/if}
			</div>

			<!-- Time Tracker -->
			<div
				class="reveal bg-c-bg-surface dark:bg-s-dark-2 border-t-4 {accentColors.time_tracker} rounded-2xl p-6 border border-x-c-neutral-1 border-b-c-neutral-1 dark:border-x-s-dark-3 dark:border-b-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 400 }}
			>
				<h3 class="text-xl font-bold text-c-heading-base dark:text-white">
					{ts.get.features.time_tracker.title}
				</h3>
				<p class="text-sm text-c-neutral-5 dark:text-gray-400 leading-relaxed">
					{ts.get.features.time_tracker.description}
				</p>
				{#if ts.get.features.time_tracker.replaces}
					<p class="mt-auto pt-2 text-sm text-c-neutral-4 dark:text-gray-500">
						{ts.get.showcase.replaces_label}
						<span class="ml-1 text-c-neutral-6 dark:text-gray-300">{ts.get.features.time_tracker.replaces}</span>
					</p>
				{/if}
			</div>

		</div>

		<!-- Mobile: vertical list -->
		<div class="flex md:hidden flex-col gap-4">
			<!-- Libraries featured -->
			<div class="reveal bg-c-bg-surface dark:bg-s-dark-2 border-l-4 border-c-primary rounded-2xl p-5 border border-y-c-neutral-1 border-r-c-neutral-1 dark:border-y-s-dark-3 dark:border-r-s-dark-3 flex flex-col gap-2" use:reveal>
				<h3 class="text-lg font-bold text-c-heading-base dark:text-white">
					{ts.get.features.libraries.title}
				</h3>
				<p class="text-sm text-c-neutral-5 dark:text-gray-400 leading-relaxed">
					{ts.get.features.libraries.description}
				</p>
				<p class="text-sm text-c-neutral-4 dark:text-gray-500">
					{ts.get.showcase.replaces_label}
					<span class="ml-1 text-c-neutral-6 dark:text-gray-300">{ts.get.features.libraries.replaces}</span>
				</p>
			</div>

			{#each ['todos', 'calendar', 'news', 'notebook', 'contacts', 'finance', 'daily_check_in', 'time_tracker', 'clipboard'] as key, i}
				<div
					class="reveal bg-c-bg-surface dark:bg-s-dark-2 border-l-4 {accentColors[key]} rounded-2xl p-5 border border-y-c-neutral-1 border-r-c-neutral-1 dark:border-y-s-dark-3 dark:border-r-s-dark-3 flex flex-col gap-2"
					use:reveal={{ delay: i * 60 }}
				>
					<h3 class="text-lg font-bold text-c-heading-base dark:text-white">
						{ts.get.features[key as keyof typeof ts.get.features].title}
					</h3>
					<p class="text-sm text-c-neutral-5 dark:text-gray-400 leading-relaxed">
						{ts.get.features[key as keyof typeof ts.get.features].description}
					</p>
					{#if ts.get.features[key as keyof typeof ts.get.features].replaces}
						<p class="text-sm text-c-neutral-4 dark:text-gray-500">
							{ts.get.showcase.replaces_label}
							<span class="ml-1 text-c-neutral-6 dark:text-gray-300">{ts.get.features[key as keyof typeof ts.get.features].replaces}</span>
						</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
