export interface Features {
	libraries: {
		title: string;
		description: string;
		replaces?: string;
	};
	todos: { title: string; description: string; replaces?: string };
	calendar: { title: string; description: string; replaces?: string };
	contacts: { title: string; description: string; replaces?: string };
	news: { title: string; description: string; replaces?: string };
	notebook: { title: string; description: string; replaces?: string };
	finance: { title: string; description: string; replaces?: string };
	daily_check_in: { title: string; description: string; replaces?: string };
	time_tracker: { title: string; description: string; replaces?: string };
	clipboard: { title: string; description: string; replaces?: string };
}

export interface Hero {
	tagline: string;
	headline: string;
	subheadline: string;
	privacy_note: string;
	cta: string;
	screenshot_alt: string;
}

export interface Why {
	title: string;
	intro: string;
	points: { title: string; description: string }[];
}

export interface Pricing {
	title: string;
	free_badge: string;
	description: string;
	promise_title: string;
	promise: string;
	note: string;
	per_period: string;
	no_catch: string;
}

export interface FAQ {
	title: string;
	items: { question: string; answer: string }[];
}

export interface Showcase {
	title: string;
	subtitle: string;
	replaces_label: string;
}

export interface Meta {
	title: string;
	description: string;
	social_description: string;
}

export interface PrivacyGuarantees {
	title: string;
	subtitle: string;
	privacy: { title: string; description: string };
	servers: { title: string; description: string };
	no_tracking: { title: string; description: string };
	your_data: { title: string; description: string };
}

export interface HowItWorks {
	title: string;
	intro: string;
	use_cases: {
		feature: string;
		title: string;
		description: string;
	}[];
	bottom_line: {
		title: string;
		description: string;
	};
}

export interface UI {
	login: string;
	register: string;
	legal_notice: string;
	privacy_policy: string;
	terms_of_service: string;
	select_language: string;
	toggle_theme: string;
}

export interface Stats {
	features: string;
	ads: string;
	trackers: string;
	servers: string;
	free: string;
}

export interface Theming {
	label: string;
	title: string;
}

export interface OpenSource {
	title: string;
	philosophy_title: string;
	philosophy: string;
	selfhost_title: string;
	selfhost_description: string;
	selfhost_command: string;
	links: {
		github: string;
		selfhosted: string;
		contribute: string;
	};
	license: string;
}

export interface Downloads {
	title: string;
	subtitle: string;
	platforms: {
		windows: { label: string; available: boolean };
		macos: { label: string; available: boolean };
		linux: { label: string; available: boolean };
		android: { label: string; available: boolean };
		ios: { label: string; available: boolean };
	};
	coming_soon: string;
	download: string;
	all_releases: string;
}

export interface Translation {
	features: Features;
	hero: Hero;
	how_it_works: HowItWorks;
	privacy_guarantees: PrivacyGuarantees;
	why: Why;
	pricing: Pricing;
	faq: FAQ;
	showcase: Showcase;
	stats: Stats;
	theming: Theming;
	opensource: OpenSource;
	downloads: Downloads;
	ui: UI;
	meta: Meta;
}
