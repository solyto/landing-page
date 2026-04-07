<script lang="ts">
	import HeroSection from '$lib/components/HeroSection.svelte'
	import StatsBar from '$lib/components/StatsBar.svelte'
	import WhatItReplaces from '$lib/components/WhatItReplaces.svelte'
	import FeatureShowcase from '$lib/components/FeatureShowcase.svelte'
	import LibrariesCallout from '$lib/components/LibrariesCallout.svelte'
	import ThemingSection from '$lib/components/ThemingSection.svelte'
	import WhySolyto from '$lib/components/WhySolyto.svelte'
	import PrivacyGuarantees from '$lib/components/PrivacyGuarantees.svelte'
	import Pricing from '$lib/components/Pricing.svelte'
	import TryOutButton from '$lib/components/TryOutButton.svelte'

</script>

<div class="flex w-full flex-col pb-16">
	<div class="px-4">
		<HeroSection />
	</div>

	<StatsBar />

	<div class="px-4">
		<WhatItReplaces />
	</div>

	<FeatureShowcase mobile={true} />

	<LibrariesCallout />

	<ThemingSection />

	<WhySolyto />

	<div class="px-4">
		<PrivacyGuarantees />
	</div>

	<div class="px-4">
		<Pricing />
	</div>

	<div class="flex flex-col items-center gap-3 px-4">
		<TryOutButton />
		<p class="text-sm text-gray-400 dark:text-gray-500">No credit card. No catch.</p>
	</div>
</div>
