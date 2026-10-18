<script lang="ts">
	import { urls } from '$lib/config/urls';
	import { getTranslation } from '$lib/state/Translation.svelte';

	const ts = getTranslation();
</script>

<a
	href={urls.register}
	class="inline-flex items-center gap-2 rounded-full bg-c-btn px-8 py-4 text-xl font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-c-btn-hover hover:shadow-xl"
>
	{ts.get.hero.cta}
</a>
