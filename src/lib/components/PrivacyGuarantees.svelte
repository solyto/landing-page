<script lang="ts">
	import IconLock from '@lucide/svelte/icons/lock'
	import IconMapPin from '@lucide/svelte/icons/map-pin'
	import IconEyeOff from '@lucide/svelte/icons/eye-off'
	import IconDownload from '@lucide/svelte/icons/download'
	import { getTranslation } from '$lib/state/Translation.svelte'
	import { reveal } from '$lib/actions/reveal'

	const ts = getTranslation()

	const guarantees = $derived([
		{ icon: IconLock, ...ts.get.privacy_guarantees.privacy },
		{ icon: IconMapPin, ...ts.get.privacy_guarantees.servers },
		{ icon: IconEyeOff, ...ts.get.privacy_guarantees.no_tracking },
		{ icon: IconDownload, ...ts.get.privacy_guarantees.your_data }
	])
</script>

<section class="w-full bg-black/3 dark:bg-black/20 theme-dark:bg-black/20 py-16 md:py-24">
	<div class="mx-auto max-w-6xl px-6">
		<div class="reveal mb-12 md:mb-16" use:reveal>
			<h2 class="text-3xl md:text-5xl font-bold text-c-heading-base dark:text-white">
				{ts.get.privacy_guarantees.title}
			</h2>
		</div>

		<div class="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
			{#each guarantees as guarantee, i (guarantee.title)}
				<div class="reveal flex gap-4" use:reveal={{ delay: i * 80 }}>
					<guarantee.icon class="mt-1 size-6 shrink-0 text-c-heading dark:text-c-primary" />
					<div class="flex flex-col gap-2">
						<h3 class="text-lg font-bold text-c-heading-base dark:text-white">
							{guarantee.title}
						</h3>
						<p class="leading-relaxed text-c-neutral-5 dark:text-gray-400">
							{guarantee.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
