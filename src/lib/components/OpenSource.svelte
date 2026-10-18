<script lang="ts">
	import IconGitFork from '@lucide/svelte/icons/git-fork'
	import IconServer from '@lucide/svelte/icons/server'
	import IconGithub from '@lucide/svelte/icons/github'
	import IconExternalLink from '@lucide/svelte/icons/external-link'
	import DiscordIcon from '$lib/components/ui/DiscordIcon.svelte'
	import { getTranslation } from '$lib/state/Translation.svelte'
	import { urls } from '$lib/config/urls'
	import { reveal } from '$lib/actions/reveal'

	const ts = getTranslation()

	const secondaryButton =
		'inline-flex items-center gap-2 rounded-full border border-c-neutral-3 px-5 py-2.5 text-sm font-semibold text-c-neutral-7 transition-colors hover:border-c-primary hover:text-c-primary dark:border-gray-600 dark:text-gray-300'
</script>

<section class="w-full bg-black/3 dark:bg-black/20 theme-dark:bg-black/20 py-16 md:py-24">
	<div class="mx-auto max-w-6xl px-6">
		<div class="reveal mb-12 flex flex-col items-start gap-4 md:mb-16" use:reveal>
			<h2 class="text-3xl md:text-5xl font-bold text-c-heading-base dark:text-white">
				{ts.get.opensource.title}
			</h2>
			<span class="rounded-full bg-c-primary/10 px-3 py-1 text-sm font-semibold text-c-primary">
				{ts.get.opensource.license}
			</span>
		</div>

		<div class="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
			<div class="reveal flex gap-4" use:reveal>
				<IconGitFork class="mt-1 size-6 shrink-0 text-c-heading dark:text-c-primary" />
				<div class="flex min-w-0 flex-col gap-4">
					<h3 class="text-lg font-bold text-c-heading-base dark:text-white">
						{ts.get.opensource.philosophy_title}
					</h3>
					<p class="leading-relaxed text-c-neutral-5 dark:text-gray-400">
						{ts.get.opensource.philosophy}
					</p>
					<div class="flex flex-wrap gap-3">
						<a href={urls.github} target="_blank" rel="noopener noreferrer" class={secondaryButton}>
							<IconGithub class="size-4" />
							{ts.get.opensource.links.github}
						</a>
						<a href={urls.discord} target="_blank" rel="noopener noreferrer" class={secondaryButton}>
							<DiscordIcon class="size-4" />
							Discord
						</a>
					</div>
				</div>
			</div>

			<div class="reveal flex gap-4" use:reveal={{ delay: 100 }}>
				<IconServer class="mt-1 size-6 shrink-0 text-c-heading dark:text-c-primary" />
				<div class="flex min-w-0 flex-col gap-4">
					<h3 class="text-lg font-bold text-c-heading-base dark:text-white">
						{ts.get.opensource.selfhost_title}
					</h3>
					<p class="leading-relaxed text-c-neutral-5 dark:text-gray-400">
						{ts.get.opensource.selfhost_description}
					</p>
					<p
						class="rounded-xl bg-gray-900 px-5 py-4 font-mono text-xs leading-relaxed break-all text-c-primary"
					>
						{ts.get.opensource.selfhost_command}
					</p>
					<a
						href={urls.selfhosted}
						target="_blank"
						rel="noopener noreferrer"
						class="{secondaryButton} self-start"
					>
						{ts.get.opensource.links.selfhosted}
						<IconExternalLink class="size-3.5" />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
