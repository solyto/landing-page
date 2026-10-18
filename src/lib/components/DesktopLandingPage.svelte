<script lang="ts">
	import HeroSection from '$lib/components/HeroSection.svelte'
	import StatsBar from '$lib/components/StatsBar.svelte'
	import FeatureShowcase from '$lib/components/FeatureShowcase.svelte'
	import ThemingSection from '$lib/components/ThemingSection.svelte'
	import WhySolyto from '$lib/components/WhySolyto.svelte'
	import PrivacyGuarantees from '$lib/components/PrivacyGuarantees.svelte'
	import OpenSource from '$lib/components/OpenSource.svelte'
	import DownloadSection from '$lib/components/DownloadSection.svelte'
	import TryOutButton from '$lib/components/TryOutButton.svelte'
</script>

<div class="flex w-full flex-col pb-20">
	<div class="mx-auto w-full max-w-7xl 2xl:max-w-[96rem]">
		<HeroSection />
	</div>

	<StatsBar />

	<FeatureShowcase mobile={false} />

	<ThemingSection />

	<WhySolyto />

	<PrivacyGuarantees />

	<DownloadSection />

	<OpenSource />

	<div class="flex flex-col items-center gap-3 pt-16">
		<TryOutButton />
	</div>
</div>
