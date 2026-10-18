<script lang="ts">
	import HeroSection from '$lib/components/HeroSection.svelte'
	import StatsBar from '$lib/components/StatsBar.svelte'
	import FeatureShowcase from '$lib/components/FeatureShowcase.svelte'
	import ThemingSection from '$lib/components/ThemingSection.svelte'
	import WhySolyto from '$lib/components/WhySolyto.svelte'
	import PrivacyGuarantees from '$lib/components/PrivacyGuarantees.svelte'
	import OpenSource from '$lib/components/OpenSource.svelte'
	import DownloadSection from '$lib/components/DownloadSection.svelte'
	import Pricing from '$lib/components/Pricing.svelte'
	import TryOutButton from '$lib/components/TryOutButton.svelte'
	import { getTranslation } from '$lib/state/Translation.svelte'

	const ts = getTranslation()

</script>

<div class="flex w-full flex-col pb-20">
	<div class="mx-auto w-full max-w-7xl">
		<HeroSection />
	</div>

	<StatsBar />

	<FeatureShowcase mobile={false} />

	<ThemingSection />

	<WhySolyto />

	<PrivacyGuarantees />

	<DownloadSection />

	<OpenSource />

	<div class="mx-auto w-full max-w-2xl px-8">
		<Pricing />
	</div>

	<div class="flex flex-col items-center gap-3">
		<TryOutButton />
		<p class="text-sm text-gray-400 dark:text-gray-500">{ts.get.pricing.no_catch}</p>
	</div>
</div>
