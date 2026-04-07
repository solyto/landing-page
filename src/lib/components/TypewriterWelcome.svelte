<script lang="ts">
	import { blur } from 'svelte/transition';
	import Typewriter from 'svelte-typewriter';
</script>

<div class="absolute flex h-screen w-screen flex-col items-center justify-center">
	<div class="flex w-72 flex-col gap-4" out:blur>
		<Typewriter>
			<h1 class="text-4xl font-bold dark:text-white">s o l y t o</h1>
		</Typewriter>
		<Typewriter delay={1000}>
			<h2 class="text-2xl font-bold dark:text-white">Your app for everything.</h2>
		</Typewriter>
	</div>
</div>
