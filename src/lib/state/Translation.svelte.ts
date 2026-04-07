import { setContext, getContext } from 'svelte';
import { en } from '$lib/i18n/en';
import { de } from '$lib/i18n/de';
import { fr } from '$lib/i18n/fr';
import { es } from '$lib/i18n/es';
import type { Translation as TranslationType } from '$lib/i18n/types';

const translations: Record<string, TranslationType> = { en, de, fr, es };

function getBrowserLanguage(): string {
	if (typeof window === 'undefined') return 'en';
	const browserLang = navigator.language || (navigator as any).userLanguage || 'en';
	const langCode = browserLang.split('-')[0];
	return translations[langCode] ? langCode : 'en';
}

export class Translation {
	locale = $state<string>(getBrowserLanguage());
	get = $state<TranslationType>(translations[getBrowserLanguage()]);

	changeLanguage(locale: string): void {
		if (translations[locale]) {
			this.locale = locale;
			this.get = translations[locale];
		}
	}
}

const TRANSLATION_KEY = Symbol('SOLYTO_TRANSLATION');

export function setTranslation(): Translation {
	return setContext(TRANSLATION_KEY, new Translation());
}

export function getTranslation(): Translation {
	return getContext<Translation>(TRANSLATION_KEY);
}
