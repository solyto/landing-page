<script lang="ts">
	import { blur } from 'svelte/transition';
	import type { Component } from 'svelte';

	interface Props {
		title: string;
		description: string;
		icon: Component;
		active?: boolean;
		onclick?: () => void;
	}

	let { title, description, icon: Icon, active = false, onclick }: Props = $props();
</script>

<button
	class="group relative flex cursor-pointer flex-col gap-3 rounded-2xl border-2 p-6 text-left transition-all duration-300
		{active
		? 'border-s-lightblue/30 bg-gradient-to-br from-s-lightblue/10 to-s-green/10 dark:border-s-lightblue/20 dark:from-s-lightblue/5 dark:to-s-green/5'
		: 'border-transparent bg-white/50 hover:border-gray-100 hover:bg-white dark:bg-s-dark-2/50 dark:hover:border-s-dark-3 dark:hover:bg-s-dark-2'}"
	{onclick}
	in:blur
>
	<div class="flex items-center gap-3">
		<div
			class="flex size-10 items-center justify-center rounded-xl transition-all duration-300
			{active
				? 'bg-gradient-to-br from-s-lightblue to-s-green text-white'
				: 'bg-gray-100 text-gray-500 group-hover:bg-s-lightblue/10 group-hover:text-s-lightblue dark:bg-s-dark-3 dark:text-gray-400 dark:group-hover:bg-s-lightblue/10 dark:group-hover:text-s-lightblue'}"
		>
			<Icon class="size-5" />
		</div>
		<h3
			class="text-lg font-bold transition-colors duration-300
			{active ? 'text-s-darkpurple dark:text-s-teal' : 'text-gray-800 dark:text-white'}"
		>
			{title}
		</h3>
	</div>
	<p
		class="text-sm leading-relaxed transition-colors duration-300
		{active ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500 dark:text-gray-400'}"
	>
		{description}
	</p>
	{#if active}
		<div
			class="absolute -bottom-1 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-gradient-to-r from-s-lightblue to-s-green"
		></div>
	{/if}
</button>
