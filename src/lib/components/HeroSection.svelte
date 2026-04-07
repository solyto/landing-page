<script lang="ts">
	import { fly } from 'svelte/transition'
	import TryOutButton from '$lib/components/TryOutButton.svelte'
	import { getTranslation } from '$lib/state/Translation.svelte'

	import HeroDesktop from '$lib/assets/landing-page/desktop/dashboard_desktop.webp'
	import HeroMobile from '$lib/assets/landing-page/mobile/dashboard_mobile.webp'

	const ts = getTranslation()
</script>

<!-- Desktop: asymmetric layout -->
<div class="hidden md:flex min-h-[88vh] items-center gap-12 lg:gap-20 px-8 py-16 mx-auto w-full max-w-7xl">
	<div class="flex flex-col gap-8 flex-1 min-w-0">
		<div class="space-y-6">
			<h1
				class="text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.92] tracking-tight text-gray-900 dark:text-white"
				in:fly={{ y: 20, duration: 600, delay: 100 }}
			>
				{ts.get.hero.headline}
			</h1>
			<p
				class="text-lg lg:text-xl text-gray-500 dark:text-gray-400 max-w-md leading-relaxed"
				in:fly={{ y: 20, duration: 600, delay: 200 }}
			>
				{ts.get.hero.subheadline}
			</p>
		</div>

		<div class="flex flex-col gap-3" in:fly={{ y: 20, duration: 600, delay: 300 }}>
			<div>
				<TryOutButton />
			</div>
			<p class="text-sm text-gray-400 dark:text-gray-500">
				{ts.get.hero.privacy_note}
			</p>
		</div>
	</div>

	<div class="flex-1 min-w-0" in:fly={{ x: 40, duration: 700, delay: 200 }}>
		<div
			class="rounded-2xl overflow-hidden border border-gray-200 dark:border-s-dark-3 shadow-2xl"
		>
			<img src={HeroDesktop} alt="solyto dashboard" class="w-full h-auto block" />
		</div>
	</div>
</div>

<!-- Mobile: stacked layout -->
<div class="flex md:hidden flex-col gap-8 px-4 py-12">
	<div class="space-y-4">
		<h1
			class="text-5xl font-bold leading-[0.95] tracking-tight text-gray-900 dark:text-white"
			in:fly={{ y: 16, duration: 500, delay: 100 }}
		>
			{ts.get.hero.headline}
		</h1>
		<p
			class="text-base text-gray-500 dark:text-gray-400 leading-relaxed"
			in:fly={{ y: 16, duration: 500, delay: 200 }}
		>
			{ts.get.hero.subheadline}
		</p>
	</div>

	<div class="flex flex-col gap-3" in:fly={{ y: 16, duration: 500, delay: 300 }}>
		<div>
			<TryOutButton />
		</div>
		<p class="text-sm text-gray-400 dark:text-gray-500">
			{ts.get.hero.privacy_note}
		</p>
	</div>

	<div
		class="rounded-2xl overflow-hidden border border-gray-200 dark:border-s-dark-3 shadow-xl"
		in:fly={{ y: 20, duration: 600, delay: 400 }}
	>
		<img src={HeroMobile} alt="solyto dashboard" class="w-full h-auto block" />
	</div>
</div>
