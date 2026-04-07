import type { Action } from 'svelte/action'

export const reveal: Action<HTMLElement, { delay?: number } | undefined> = (node, params) => {
	node.style.transitionDelay = `${params?.delay ?? 0}ms`

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					node.classList.add('in-view')
					observer.unobserve(node)
				}
			})
		},
		{ threshold: 0.1 }
	)

	observer.observe(node)

	return {
		destroy() {
			observer.disconnect()
		}
	}
}
