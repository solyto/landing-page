<script lang="ts">
	import { blur, scale, fade } from 'svelte/transition';
	import ModalCloseButton from '$lib/components/ModalCloseButton.svelte';

	let { onClose, title, children } = $props<{
		onClose: () => void;
		title: string;
		children: any;
	}>();
</script>

<div
	class="fixed bottom-12 left-0 z-20 flex h-full w-full items-center justify-center bg-white/40 backdrop-blur-xs dark:bg-black/40"
	out:fade
	in:blur={{ duration: 300 }}
>
	<div class="relative flex max-w-[80%] flex-col gap-6" in:scale={{ start: 0.75 }}>
		<h1 class="ml-6 text-2xl font-bold text-s-darkpurple dark:text-s-teal">{title}</h1>
		<div
			class="max-h-[80vh] overflow-y-auto rounded-lg border-2 border-white/5 bg-white p-6 text-lg shadow-sm dark:bg-s-dark-2 dark:text-white"
		>
			<ModalCloseButton onClick={onClose} />
			<div in:scale={{ start: 0.75 }}>
				{@render children()}
			</div>
		</div>
	</div>
</div>
