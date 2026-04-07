<script lang="ts">
	import IconX from '@lucide/svelte/icons/x';

	let { onClick } = $props<{
		onClick: () => void | Promise<void>;
	}>();
</script>

<button
	class="absolute top-8 right-[-16px] z-40 flex size-[34px] cursor-pointer items-center justify-center rounded-full bg-s-orange p-1 text-white drop-shadow-md transition-all hover:text-s-darkpurple hover:drop-shadow-xl"
	onclick={onClick}
>
	<IconX />
</button>
