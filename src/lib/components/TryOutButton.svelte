<script lang="ts">
	import { urls } from '$lib/config/urls';
	import { getTranslation } from '$lib/state/Translation.svelte';

	const ts = getTranslation();
</script>

<a
	href={urls.register}
	class="hover:from-s-lightblue-dark hover:to-s-green-dark inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-s-lightblue to-s-green px-8 py-4 text-xl font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
>
	{ts.get.hero.cta}
</a>
