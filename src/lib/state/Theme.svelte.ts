import { setContext, getContext } from 'svelte';
import { browser } from '$app/environment';
import { themes, type Theme } from '$lib/config/themes';

// Mirrors ThemeState in solyto/app (src/lib/state/Theme.svelte.ts), trimmed to
// what the landing page needs. Instead of a separate light/dark switch, the
// app's default theme is offered as two themes. The inline script in app.html
// applies the saved theme before first paint; this class takes over afterwards.
const STORAGE_KEY = 'theme';
const LINK_ID = 'theme-css';

const appDefault = themes[0];

export const defaultLight: Theme = {
	...appDefault,
	id: 'default-light',
	name: 'Default Light',
	supportsDarkMode: false,
	previewBg: '#fcfcfc',
	previewSurface: '#efefef',
	previewText: '#121212'
};

export const defaultDark: Theme = {
	...appDefault,
	id: 'default-dark',
	name: 'Default Dark',
	supportsDarkMode: false
};

export const landingThemes: Theme[] = [defaultLight, defaultDark, ...themes.slice(1)];

function isDefault(theme: Theme): boolean {
	return theme === defaultLight || theme === defaultDark;
}

function readStorage(): string | null {
	try {
		return localStorage.getItem(STORAGE_KEY);
	} catch {
		return null;
	}
}

function writeStorage(value: string): void {
	try {
		localStorage.setItem(STORAGE_KEY, value);
	} catch {
		// Storage unavailable (e.g. private mode): the choice just isn't remembered
	}
}

export class ThemeState {
	theme = $state<Theme>(defaultLight);

	private mediaQuery: MediaQueryList | null = null;
	private chosen = false;

	constructor() {
		if (!browser) return;

		this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		this.mediaQuery.addEventListener('change', () => {
			if (!this.chosen) this.apply(this.systemDefault());
		});

		const saved = landingThemes.find((t) => t.id === readStorage());
		this.chosen = saved !== undefined;
		this.apply(saved ?? this.systemDefault());
	}

	setTheme(theme: Theme): void {
		this.chosen = true;
		writeStorage(theme.id);
		this.apply(theme);
	}

	private systemDefault(): Theme {
		return this.mediaQuery?.matches ? defaultDark : defaultLight;
	}

	private apply(theme: Theme): void {
		this.theme = theme;

		const existing = document.getElementById(LINK_ID) as HTMLLinkElement | null;
		if (isDefault(theme)) {
			existing?.remove();
		} else {
			const href = `/themes/${theme.id}/${theme.id}.css`;
			const link = existing ?? document.createElement('link');
			link.id = LINK_ID;
			link.rel = 'stylesheet';
			if (link.getAttribute('href') !== href) link.href = href;
			if (!existing) document.head.appendChild(link);
		}

		// Lets app.css adjust single themes for the landing page (see the end of app.css)
		document.documentElement.dataset.theme = theme.id;

		const root = document.documentElement.classList;
		root.toggle('dark', theme === defaultDark);
		root.toggle('theme-dark', !isDefault(theme) && isDarkTheme(theme));
	}
}

function isDarkTheme(theme: Theme): boolean {
	const hex = theme.previewBg.replace('#', '');
	const r = parseInt(hex.slice(0, 2), 16);
	const g = parseInt(hex.slice(2, 4), 16);
	const b = parseInt(hex.slice(4, 6), 16);
	return 0.2126 * r + 0.7152 * g + 0.0722 * b < 140;
}

const THEME_CONTEXT_KEY = Symbol('SOLYTO_THEME');

export function setThemeState(): ThemeState {
	return setContext(THEME_CONTEXT_KEY, new ThemeState());
}

export function getThemeState(): ThemeState {
	return getContext<ThemeState>(THEME_CONTEXT_KEY);
}
