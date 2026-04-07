<script lang="ts">
	import { getTranslation } from '$lib/state/Translation.svelte'
	import { reveal } from '$lib/actions/reveal'

	const ts = getTranslation()

	interface Props {
		mobile?: boolean
	}

	let { mobile = false }: Props = $props()

	const accentColors: Record<string, string> = {
		todos: 'border-s-teal',
		calendar: 'border-s-lightblue',
		news: 'border-s-green',
		notebook: 'border-s-orange',
		contacts: 'border-s-purple',
		finance: 'border-s-yellow',
		daily_check_in: 'border-s-red',
		time_tracker: 'border-s-blue',
		clipboard: 'border-s-teal'
	}
</script>

<section class="w-full py-16 md:py-24">
	<div class="mx-auto max-w-6xl px-6">
		<div class="reveal mb-12 text-center" use:reveal>
			<h2 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
				{ts.get.showcase.title}
			</h2>
		</div>

		<!-- Desktop bento grid -->
		<div class="hidden md:grid grid-cols-3 gap-4">
			<!-- Libraries: large featured card -->
			<div
				class="reveal col-span-2 bg-s-dark-2 rounded-2xl p-8 flex flex-col gap-4 min-h-52"
				use:reveal
			>
				<span
					class="self-start text-xs uppercase tracking-widest text-s-teal border border-s-teal/40 rounded-full px-3 py-1"
				>
					Unique to solyto
				</span>
				<h3 class="text-3xl font-bold text-white">
					{ts.get.features.libraries.title}
				</h3>
				<p class="text-gray-400 leading-relaxed max-w-sm">
					{ts.get.features.libraries.description}
				</p>
				<p class="text-xs text-gray-600 mt-auto">
					Books · Movies · Music · Games · Recipes · Links · Quotes
				</p>
			</div>

			<!-- Todos -->
			<div
				class="reveal bg-white dark:bg-s-dark-2 border-t-4 {accentColors.todos} rounded-2xl p-6 border border-gray-100 dark:border-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 80 }}
			>
				<h3 class="text-xl font-bold text-gray-900 dark:text-white">
					{ts.get.features.todos.title}
				</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
					{ts.get.features.todos.description}
				</p>
			</div>

			<!-- Calendar -->
			<div
				class="reveal bg-white dark:bg-s-dark-2 border-t-4 {accentColors.calendar} rounded-2xl p-6 border border-gray-100 dark:border-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 120 }}
			>
				<h3 class="text-xl font-bold text-gray-900 dark:text-white">
					{ts.get.features.calendar.title}
				</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
					{ts.get.features.calendar.description}
				</p>
			</div>

			<!-- News -->
			<div
				class="reveal bg-white dark:bg-s-dark-2 border-t-4 {accentColors.news} rounded-2xl p-6 border border-gray-100 dark:border-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 160 }}
			>
				<h3 class="text-xl font-bold text-gray-900 dark:text-white">
					{ts.get.features.news.title}
				</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
					{ts.get.features.news.description}
				</p>
			</div>

			<!-- Notebook -->
			<div
				class="reveal bg-white dark:bg-s-dark-2 border-t-4 {accentColors.notebook} rounded-2xl p-6 border border-gray-100 dark:border-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 200 }}
			>
				<h3 class="text-xl font-bold text-gray-900 dark:text-white">
					{ts.get.features.notebook.title}
				</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
					{ts.get.features.notebook.description}
				</p>
			</div>

			<!-- Contacts -->
			<div
				class="reveal bg-white dark:bg-s-dark-2 border-t-4 {accentColors.contacts} rounded-2xl p-6 border border-gray-100 dark:border-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 240 }}
			>
				<h3 class="text-xl font-bold text-gray-900 dark:text-white">
					{ts.get.features.contacts.title}
				</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
					{ts.get.features.contacts.description}
				</p>
			</div>

			<!-- Finance -->
			<div
				class="reveal bg-white dark:bg-s-dark-2 border-t-4 {accentColors.finance} rounded-2xl p-6 border border-gray-100 dark:border-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 280 }}
			>
				<h3 class="text-xl font-bold text-gray-900 dark:text-white">
					{ts.get.features.finance.title}
				</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
					{ts.get.features.finance.description}
				</p>
			</div>

			<!-- Clipboard -->
			<div
				class="reveal bg-white dark:bg-s-dark-2 border-t-4 {accentColors.clipboard} rounded-2xl p-6 border border-gray-100 dark:border-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 320 }}
			>
				<h3 class="text-xl font-bold text-gray-900 dark:text-white">
					{ts.get.features.clipboard.title}
				</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
					{ts.get.features.clipboard.description}
				</p>
			</div>

			<!-- Daily Check-In: span-2 -->
			<div
				class="reveal col-span-2 bg-white dark:bg-s-dark-2 border-t-4 {accentColors.daily_check_in} rounded-2xl p-6 border border-gray-100 dark:border-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 360 }}
			>
				<h3 class="text-xl font-bold text-gray-900 dark:text-white">
					{ts.get.features.daily_check_in.title}
				</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
					{ts.get.features.daily_check_in.description}
				</p>
			</div>

			<!-- Time Tracker -->
			<div
				class="reveal bg-white dark:bg-s-dark-2 border-t-4 {accentColors.time_tracker} rounded-2xl p-6 border border-gray-100 dark:border-s-dark-3 flex flex-col gap-3"
				use:reveal={{ delay: 400 }}
			>
				<h3 class="text-xl font-bold text-gray-900 dark:text-white">
					{ts.get.features.time_tracker.title}
				</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
					{ts.get.features.time_tracker.description}
				</p>
			</div>
		</div>

		<!-- Mobile: vertical list -->
		<div class="flex md:hidden flex-col gap-4">
			<!-- Libraries featured -->
			<div class="reveal bg-s-dark-2 rounded-2xl p-6 flex flex-col gap-3" use:reveal>
				<span
					class="self-start text-xs uppercase tracking-widest text-s-teal border border-s-teal/40 rounded-full px-3 py-1"
				>
					Unique to solyto
				</span>
				<h3 class="text-2xl font-bold text-white">
					{ts.get.features.libraries.title}
				</h3>
				<p class="text-sm text-gray-400 leading-relaxed">
					{ts.get.features.libraries.description}
				</p>
			</div>

			{#each ['todos', 'calendar', 'news', 'notebook', 'contacts', 'finance', 'daily_check_in', 'time_tracker', 'clipboard'] as key, i}
				<div
					class="reveal bg-white dark:bg-s-dark-2 border-l-4 {accentColors[key]} rounded-2xl p-5 border border-gray-100 dark:border-s-dark-3 flex flex-col gap-2"
					use:reveal={{ delay: i * 60 }}
				>
					<h3 class="text-lg font-bold text-gray-900 dark:text-white">
						{ts.get.features[key as keyof typeof ts.get.features].title}
					</h3>
					<p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
						{ts.get.features[key as keyof typeof ts.get.features].description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
