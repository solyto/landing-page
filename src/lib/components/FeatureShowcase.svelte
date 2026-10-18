<script lang="ts">
	import { getTranslation } from '$lib/state/Translation.svelte'
	import { reveal } from '$lib/actions/reveal'

	const ts = getTranslation()

	interface Props {
		mobile?: boolean
	}

	let { mobile = false }: Props = $props()

	const accentColors: Record<string, string> = {
		todos: 'border-s-orange',
		calendar: 'border-s-purple',
		news: 'border-s-yellow',
		notebook: 'border-s-blue',
		contacts: 'border-s-green',
		finance: 'border-s-red',
		clipboard: 'border-s-teal',
		daily_check_in: 'border-s-lightblue',
		time_tracker: 'border-s-orange'
	}
</script>

<section class="w-full py-16 md:py-24">
	<div class="mx-auto max-w-6xl px-6">
		<div class="reveal mb-12 text-center" use:reveal>
			<h2 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
				{ts.get.showcase.title}
			</h2>
			<p class="mt-4 text-lg text-gray-500 dark:text-gray-400">
				{ts.get.showcase.subtitle}
			</p>
		</div>

		<!-- Desktop bento grid -->
		<div class="hidden md:grid grid-cols-3 gap-4">
			<!-- Libraries: large featured card -->
			<div
				class="reveal col-span-2 bg-white dark:bg-s-dark-2 border-t-4 border-s-teal rounded-2xl p-6 border border-gray-100 dark:border-x-s-dark-3 dark:border-b-s-dark-3 flex flex-col gap-3 min-h-52"
				use:reveal
			>
				<h3 class="text-2xl font-bold text-gray-900 dark:text-white">
					{ts.get.features.libraries.title}
				</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-md">
					{ts.get.features.libraries.description}
				</p>
				<p class="mt-auto pt-2 text-sm text-gray-400 dark:text-gray-500">
					{ts.get.showcase.replaces_label}
					<span class="ml-1 text-gray-600 dark:text-gray-300">{ts.get.features.libraries.replaces}</span>
				</p>
			</div>

			<!-- Todos -->
			<div
				class="reveal bg-white dark:bg-s-dark-2 border-t-4 {accentColors.todos} rounded-2xl p-6 border border-gray-100 dark:border-x-s-dark-3 dark:border-b-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 80 }}
			>
				<h3 class="text-xl font-bold text-gray-900 dark:text-white">
					{ts.get.features.todos.title}
				</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
					{ts.get.features.todos.description}
				</p>
				{#if ts.get.features.todos.replaces}
					<p class="mt-auto pt-2 text-sm text-gray-400 dark:text-gray-500">
						{ts.get.showcase.replaces_label}
						<span class="ml-1 text-gray-600 dark:text-gray-300">{ts.get.features.todos.replaces}</span>
					</p>
				{/if}
			</div>

			<!-- Calendar -->
			<div
				class="reveal bg-white dark:bg-s-dark-2 border-t-4 {accentColors.calendar} rounded-2xl p-6 border border-gray-100 dark:border-x-s-dark-3 dark:border-b-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 120 }}
			>
				<h3 class="text-xl font-bold text-gray-900 dark:text-white">
					{ts.get.features.calendar.title}
				</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
					{ts.get.features.calendar.description}
				</p>
				{#if ts.get.features.calendar.replaces}
					<p class="mt-auto pt-2 text-sm text-gray-400 dark:text-gray-500">
						{ts.get.showcase.replaces_label}
						<span class="ml-1 text-gray-600 dark:text-gray-300">{ts.get.features.calendar.replaces}</span>
					</p>
				{/if}
			</div>

			<!-- News -->
			<div
				class="reveal bg-white dark:bg-s-dark-2 border-t-4 {accentColors.news} rounded-2xl p-6 border border-gray-100 dark:border-x-s-dark-3 dark:border-b-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 160 }}
			>
				<h3 class="text-xl font-bold text-gray-900 dark:text-white">
					{ts.get.features.news.title}
				</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
					{ts.get.features.news.description}
				</p>
				{#if ts.get.features.news.replaces}
					<p class="mt-auto pt-2 text-sm text-gray-400 dark:text-gray-500">
						{ts.get.showcase.replaces_label}
						<span class="ml-1 text-gray-600 dark:text-gray-300">{ts.get.features.news.replaces}</span>
					</p>
				{/if}
			</div>

			<!-- Notebook -->
			<div
				class="reveal bg-white dark:bg-s-dark-2 border-t-4 {accentColors.notebook} rounded-2xl p-6 border border-gray-100 dark:border-x-s-dark-3 dark:border-b-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 200 }}
			>
				<h3 class="text-xl font-bold text-gray-900 dark:text-white">
					{ts.get.features.notebook.title}
				</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
					{ts.get.features.notebook.description}
				</p>
				{#if ts.get.features.notebook.replaces}
					<p class="mt-auto pt-2 text-sm text-gray-400 dark:text-gray-500">
						{ts.get.showcase.replaces_label}
						<span class="ml-1 text-gray-600 dark:text-gray-300">{ts.get.features.notebook.replaces}</span>
					</p>
				{/if}
			</div>

			<!-- Contacts -->
			<div
				class="reveal bg-white dark:bg-s-dark-2 border-t-4 {accentColors.contacts} rounded-2xl p-6 border border-gray-100 dark:border-x-s-dark-3 dark:border-b-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 240 }}
			>
				<h3 class="text-xl font-bold text-gray-900 dark:text-white">
					{ts.get.features.contacts.title}
				</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
					{ts.get.features.contacts.description}
				</p>
				{#if ts.get.features.contacts.replaces}
					<p class="mt-auto pt-2 text-sm text-gray-400 dark:text-gray-500">
						{ts.get.showcase.replaces_label}
						<span class="ml-1 text-gray-600 dark:text-gray-300">{ts.get.features.contacts.replaces}</span>
					</p>
				{/if}
			</div>

			<!-- Finance -->
			<div
				class="reveal bg-white dark:bg-s-dark-2 border-t-4 {accentColors.finance} rounded-2xl p-6 border border-gray-100 dark:border-x-s-dark-3 dark:border-b-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 280 }}
			>
				<h3 class="text-xl font-bold text-gray-900 dark:text-white">
					{ts.get.features.finance.title}
				</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
					{ts.get.features.finance.description}
				</p>
				{#if ts.get.features.finance.replaces}
					<p class="mt-auto pt-2 text-sm text-gray-400 dark:text-gray-500">
						{ts.get.showcase.replaces_label}
						<span class="ml-1 text-gray-600 dark:text-gray-300">{ts.get.features.finance.replaces}</span>
					</p>
				{/if}
			</div>

			<!-- Clipboard -->
			<div
				class="reveal bg-white dark:bg-s-dark-2 border-t-4 {accentColors.clipboard} rounded-2xl p-6 border border-gray-100 dark:border-x-s-dark-3 dark:border-b-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 320 }}
			>
				<h3 class="text-xl font-bold text-gray-900 dark:text-white">
					{ts.get.features.clipboard.title}
				</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
					{ts.get.features.clipboard.description}
				</p>
				{#if ts.get.features.clipboard.replaces}
					<p class="mt-auto pt-2 text-sm text-gray-400 dark:text-gray-500">
						{ts.get.showcase.replaces_label}
						<span class="ml-1 text-gray-600 dark:text-gray-300">{ts.get.features.clipboard.replaces}</span>
					</p>
				{/if}
			</div>

			<!-- Daily Check-In: span-2 -->
			<div
				class="reveal col-span-2 bg-white dark:bg-s-dark-2 border-t-4 {accentColors.daily_check_in} rounded-2xl p-6 border border-gray-100 dark:border-x-s-dark-3 dark:border-b-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 360 }}
			>
				<h3 class="text-xl font-bold text-gray-900 dark:text-white">
					{ts.get.features.daily_check_in.title}
				</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
					{ts.get.features.daily_check_in.description}
				</p>
				{#if ts.get.features.daily_check_in.replaces}
					<p class="mt-auto pt-2 text-sm text-gray-400 dark:text-gray-500">
						{ts.get.showcase.replaces_label}
						<span class="ml-1 text-gray-600 dark:text-gray-300">{ts.get.features.daily_check_in.replaces}</span>
					</p>
				{/if}
			</div>

			<!-- Time Tracker -->
			<div
				class="reveal bg-white dark:bg-s-dark-2 border-t-4 {accentColors.time_tracker} rounded-2xl p-6 border border-gray-100 dark:border-x-s-dark-3 dark:border-b-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 400 }}
			>
				<h3 class="text-xl font-bold text-gray-900 dark:text-white">
					{ts.get.features.time_tracker.title}
				</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
					{ts.get.features.time_tracker.description}
				</p>
				{#if ts.get.features.time_tracker.replaces}
					<p class="mt-auto pt-2 text-sm text-gray-400 dark:text-gray-500">
						{ts.get.showcase.replaces_label}
						<span class="ml-1 text-gray-600 dark:text-gray-300">{ts.get.features.time_tracker.replaces}</span>
					</p>
				{/if}
			</div>

		</div>

		<!-- Mobile: vertical list -->
		<div class="flex md:hidden flex-col gap-4">
			<!-- Libraries featured -->
			<div class="reveal bg-white dark:bg-s-dark-2 border-l-4 border-s-teal rounded-2xl p-5 border border-gray-100 dark:border-y-s-dark-3 dark:border-r-s-dark-3 flex flex-col gap-2" use:reveal>
				<h3 class="text-lg font-bold text-gray-900 dark:text-white">
					{ts.get.features.libraries.title}
				</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
					{ts.get.features.libraries.description}
				</p>
				<p class="text-sm text-gray-400 dark:text-gray-500">
					{ts.get.showcase.replaces_label}
					<span class="ml-1 text-gray-600 dark:text-gray-300">{ts.get.features.libraries.replaces}</span>
				</p>
			</div>

			{#each ['todos', 'calendar', 'news', 'notebook', 'contacts', 'finance', 'daily_check_in', 'time_tracker', 'clipboard'] as key, i}
				<div
					class="reveal bg-white dark:bg-s-dark-2 border-l-4 {accentColors[key]} rounded-2xl p-5 border border-gray-100 dark:border-y-s-dark-3 dark:border-r-s-dark-3 flex flex-col gap-2"
					use:reveal={{ delay: i * 60 }}
				>
					<h3 class="text-lg font-bold text-gray-900 dark:text-white">
						{ts.get.features[key as keyof typeof ts.get.features].title}
					</h3>
					<p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
						{ts.get.features[key as keyof typeof ts.get.features].description}
					</p>
					{#if ts.get.features[key as keyof typeof ts.get.features].replaces}
						<p class="text-sm text-gray-400 dark:text-gray-500">
							{ts.get.showcase.replaces_label}
							<span class="ml-1 text-gray-600 dark:text-gray-300">{ts.get.features[key as keyof typeof ts.get.features].replaces}</span>
						</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
