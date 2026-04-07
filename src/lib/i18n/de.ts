const features = {
	libraries: {
		title: 'Medien',
		description:
			'Verwalte deine Bücher, Musik, Filme, Spiele, Rezepte, Links und Zitate. Keine algorithmischen Empfehlungen, kein "Vielleicht gefällt dir auch" Spam. Nur deine Sachen, organisiert.'
	},
	todos: {
		title: 'Aufgaben',
		description:
			'Aufgaben, Projekte, Fristen. Hak Dinge ab, fühl dich gut dabei. Keine Gamification, keine Streaks, die dir Schuldgefühle machen.'
	},
	calendar: {
		title: 'Kalender',
		description:
			'Dein Zeitplan ohne Aufblähung. Synchronisiert mit CalDAV, wenn du es brauchst. Keine "schlauen" Vorschläge, kein Meeting-Spam.'
	},
	news: {
		title: 'Nachrichten',
		description:
			'RSS-Feeds aus Quellen deiner Wahl. Kein Algorithmus entscheidet, was du lesen sollst.'
	},
	notebook: {
		title: 'Notizbuch',
		description:
			'Notizen und Gedanken. Schreib Dinge auf, ordne sie, find sie später wieder.'
	},
	contacts: {
		title: 'Kontakte',
		description:
			'Dein Adressbuch, synchronisiert über Geräte. CardDAV-kompatibel, Datenschutz zuerst.'
	},
	finance: {
		title: 'Finanzen',
		description:
			'Verfolge deine Ausgaben und Einnahmen. Einfache Budgetierung, keine Komplexität, kein Verkauf deiner Finanzdaten.'
	},
	daily_check_in: {
		title: 'Täglicher Check-In',
		description:
			'Reflektiere deinen Tag. Stimmungsverfolgung, Journaling und Gewohnheitsaufbau an einem Ort.'
	},
	time_tracker: {
		title: 'Zeiterfassung',
		description:
			'Weiß, wohin deine Zeit geht. Verfolge Projekte, abrechenbare Stunden und Produktivität ohne Stress.'
	},
	clipboard: {
		title: 'Zwischenablage',
		description:
			'Auf dem Handy kopieren, am Desktop einfügen. Eine geteilte Zwischenablage über alle deine Geräte — ohne Kabel, ohne Umwege.'
	}
};

const hero = {
	tagline: 's o l y t o',
	headline: 'Deine App für alles.',
	subheadline:
		'Aufgaben, Kalender, Notizen, Kontakte, Medien — ein Ort, kein Blödsinn, deine Daten bleiben dir gehören.',
	privacy_note: 'Keine Verfolgung. Keine Werbung. Kein Datenverkauf. Niemals.',
	cta: 'Probier es aus'
};

const why = {
	title: 'Warum solyto?',
	intro: 'Aus Frustration über das, was es gibt, entstanden.',
	points: [
		{
			title: 'Deine Daten, deine Server',
			description:
				'Deine Daten verbleiben auf unseren EU-Servern. Wir teilen sie nicht, verkaufen sie nicht und sehen sie uns nicht an.'
		},
		{
			title: 'Software, die dich respektiert',
			description:
				'Keine Schuldgefühle machenden Benachrichtigungen, keine künstliche Dringlichkeit, keine Manipulation.'
		},
		{
			title: 'Kostenlos bedeutet kostenlos',
			description:
				'Keine Kreditkarte, keine Testphase, keine Werbung, keine versteckten Stufen. Wenn sich das jemals ändert, besprechen wir es zuerst mit unserer Gemeinschaft.'
		},
		{
			title: 'Gemeinschaft zuerst',
			description:
				'Wir hören auf Feedback, entwickeln Funktionen basierend auf Vorschlägen und respektieren dein Vertrauen.'
		},
		{
			title: 'Werkzeuge, die ihren Job machen',
			description:
				'Funktionen, die tun, was sie sollen — keine KI-Schichten um des Trends willen, keine Vorschläge, die niemand gefragt hat.'
		}
	]
};

const pricing = {
	title: 'Einfache Preise',
	free_badge: 'Kostenlos',
	description:
		'solyto ist kostenlos zu verwenden. Keine Kreditkarte erforderlich, keine Testphase, keine Funktionsbeschränkungen.',
	promise_title: 'Unser Versprechen',
	promise: 'Wenn du keine finanziellen Möglichkeiten hast, musst du nie für solyto bezahlen.',
	note: 'solyto läuft schlank — keine Investoren, keine Werbeeinnahmen, kein Gewinnmotiv. Nur Server und Zeit. Wenn die Kosten jemals das Tragbare übersteigen, besprechen wir es offen mit der Gemeinschaft, bevor sich etwas ändert.'
};

const faq = {
	title: 'Fragen',
	items: [
		{
			question: 'Ist es wirklich kostenlos?',
			answer: 'Ja. Wenn wir das jemals ändern müssen, besprechen wir es zuerst mit unserer Gemeinschaft. Und wenn du nicht bezahlen kannst, musst du es nicht. Das ist ein Versprechen.'
		},
		{
			question: 'Wird es je Werbung geben?',
			answer: 'Nein. Wir werden nie Werbung einführen, um solyto zu monetarisieren. Keine Banner, kein gesponserter Inhalt, nie.'
		},
		{
			question: 'Wo werden meine Daten gespeichert?',
			answer: 'Auf unseren Servern in der EU. Wir teilen sie nicht, verkaufen sie nicht und sehen sie nicht.'
		},
		{
			question: 'Kann ich meine Daten exportieren?',
			answer: 'Ja. Deine Daten gehören dir. Jederzeit exportieren, in Standardformaten.'
		},
		{
			question: 'Was passiert, wenn ihr schließt?',
			answer: 'Wir würden dir genügend Vorankündigung geben und dir helfen, alles zu exportieren. Deine Daten werden nicht als Geisel genommen.'
		},
		{
			question: 'Gibt es eine mobile App?',
			answer: 'solyto ist eine Progressive Web App (PWA). Installiere sie auf jedem Gerät direkt aus deinem Browser — kein App Store erforderlich.'
		}
	]
};

const privacy_guarantees = {
	title: 'Deine Daten, deine Regeln',
	subtitle: 'Kein Bullshit. Keine Kompromisse.',
	privacy: {
		title: 'Ende-zu-Ende Privatsphäre',
		description: 'Wir verfolgen, protokollieren oder teilen deine Daten nicht. Punkt.'
	},
	servers: {
		title: 'Server in der EU',
		description:
			'Deine Daten bleiben auf unseren Servern in der Europäischen Union. DSGVO-konform.'
	},
	no_tracking: {
		title: 'Keine Werbung, kein Tracking',
		description:
			'Wir werden niemals Werbung zeigen oder deine Daten verkaufen. Kostenlos bedeutet kostenlos.'
	},
	your_data: {
		title: 'Jederzeit exportieren',
		description: 'Deine Daten gehören dir. Exportiere sie jederzeit in Standardformaten.'
	}
};

const how_it_works = {
	title: 'Wie es hilft',
	intro: 'Echte Anwendungsfälle, echter Nutzen.',
	use_cases: [
		{
			feature: 'todos',
			title: 'Erledige wirklich Aufgaben',
			description:
				'Erstelle Aufgaben, setze Fristen und hak sie ab. Keine Streaks, keine Schuldgefühle, keine Gamification — nur eine saubere Liste dessen, was du tun musst.'
		},
		{
			feature: 'calendar',
			title: 'Plane deine Zeit, deine Art',
			description:
				'Dein Zeitplan, vereinfacht. Füge Ereignisse hinzu, setze Erinnerungen, synchronisiere mit anderen Kalendern, wenn du möchtest. Keine "schlauen" Vorschläge, kein Meeting-Spam.'
		},
		{
			feature: 'notebook',
			title: 'Erfasse, was wichtig ist',
			description:
				'Schreib Ideen, Meeting-Notizen oder zufällige Gedanken auf. Ordne sie, wie du willst, find sie, wenn du sie brauchst. Einfach und zuverlässig.'
		},
		{
			feature: 'libraries',
			title: 'Wisse, was du besitzt',
			description:
				'Verfolge deine Bücher, Filme, Musik und Spiele. Sieh, was du hast, was du gelesen hast, was du als nächstes willst. Keine algorithmischen Empfehlungen — nur deine Sammlung.'
		},
		{
			feature: 'news',
			title: 'Lies, was du wählst',
			description:
				'Füge RSS-Feeds aus Quellen hinzu, denen du vertraust. Kein Feed-Algorithmus, der entscheidet, was du siehst. Du wählst, was du liest, wann du es liest.'
		}
	],
	bottom_line: {
		title: 'Alles deine Sachen, verbunden',
		description:
			'Alles an einem Ort. Kein Jonglieren mit Dutzenden Apps. Deine Daten, deine Privatsphäre, deine Kontrolle.'
	}
};

const showcase = {
	title: 'Alles, was du brauchst',
	subtitle: 'Eine App, all deine Sachen. Kein Wechsel zwischen Dutzenden Diensten.'
};

const ui = {
	login: 'Anmelden',
	register: 'Registrieren',
	legal_notice: 'Impressum',
	privacy_policy: 'Datenschutzerklärung',
	terms_of_service: 'Nutzungsbedingungen',
	select_language: 'Sprache auswählen'
};

const stats = {
	features: 'Funktionen',
	ads: 'keine Werbung',
	trackers: 'kein Tracking',
	servers: 'EU-Server',
	free: 'immer kostenlos'
};

const replaces = {
	title: 'Ersetze deinen gesamten persönlichen Stack.',
	subtitle: 'Alles, wofür du normalerweise ein Dutzend verschiedene Apps brauchst — an einem Ort.',
	items: [
		{ from: 'Google Kalender', to: 'Kalender' },
		{ from: 'Google Tasks / Keep', to: 'Aufgaben + Notizen' },
		{ from: 'Google Kontakte', to: 'Kontakte' },
		{ from: 'Feedly / RSS-Apps', to: 'Nachrichten' },
		{ from: 'Goodreads / Letterboxd / Last.fm', to: 'Medien' },
		{ from: 'Budget-Apps', to: 'Finanzen' },
		{ from: 'Toggl / Clockify', to: 'Zeiterfassung' },
		{ from: 'Daylio / Bearable', to: 'Täglicher Check-In' }
	],
};

const theming = {
	label: 'Mach es deins',
	title: 'Dein Raum, dein Look.',
	description:
		'Wähl ein Theme, das zu dir passt — minimal, dunkel, warm oder mit Charakter. Skyrim-Fan? Gibt\'s ein Theme dafür.',
	exotic_badge: 'Kult'
};

export const de = {
	features,
	hero,
	how_it_works,
	privacy_guarantees,
	why,
	pricing,
	faq,
	showcase,
	stats,
	replaces,
	theming,
	ui
};
