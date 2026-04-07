export interface Features {
	libraries: { title: string; description: string };
	todos: { title: string; description: string };
	calendar: { title: string; description: string };
	contacts: { title: string; description: string };
	news: { title: string; description: string };
	notebook: { title: string; description: string };
	finance: { title: string; description: string };
	daily_check_in: { title: string; description: string };
	time_tracker: { title: string; description: string };
	clipboard: { title: string; description: string };
}

export interface Hero {
	tagline: string;
	headline: string;
	subheadline: string;
	privacy_note: string;
	cta: string;
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
}

export interface FAQ {
	title: string;
	items: { question: string; answer: string }[];
}

export interface Showcase {
	title: string;
	subtitle: string;
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
}

export interface Stats {
	features: string;
	ads: string;
	trackers: string;
	servers: string;
	free: string;
}

export interface ReplacesItem {
	from: string;
	to: string;
}

export interface Replaces {
	title: string;
	subtitle: string;
	items: ReplacesItem[];
}

export interface Theming {
	label: string;
	title: string;
	description: string;
	exotic_badge: string;
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
	replaces: Replaces;
	theming: Theming;
	ui: UI;
}
