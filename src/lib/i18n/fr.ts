const features = {
	libraries: {
		title: 'Bibliothèques',
		description:
			'Suis tes livres, musique, films, jeux, recettes, liens et citations. Pas de recommandations algorithmiques, pas de spam "tu aimeras peut-être aussi". Juste tes affaires, organisées.',
		replaces: 'Goodreads / Letterboxd / Last.fm'
	},
	todos: {
		title: 'Tâches',
		description:
			'Tâches, projets, échéances. Coche les choses, fais-toi du bien. Pas de gamification, pas de streaks qui culpabilisent.',
		replaces: 'Google Tasks'
	},
	calendar: {
		title: 'Calendrier',
		description:
			'Ton emploi du temps sans lourdeur. Se synchronise avec CalDAV si tu en as besoin. Pas de suggestions "intelligentes", pas de spam de réunion.',
		replaces: 'Google Agenda'
	},
	news: {
		title: 'Actualités',
		description:
			"Flux RSS de sources que tu choisis. Pas d'algorithme qui décide ce que tu dois lire.",
		replaces: 'Feedly / apps RSS'
	},
	notebook: {
		title: 'Carnet',
		description: 'Notes et pensées. Écris-les, organise-les, retrouve-les plus tard.',
		replaces: 'Google Keep'
	},
	contacts: {
		title: 'Contacts',
		description:
			"Ton carnet d'adresses, synchronisé sur les appareils. Compatible CardDAV, confidentialité d'abord.",
		replaces: 'Google Contacts'
	},
	finance: {
		title: 'Finance',
		description:
			'Suis tes dépenses et revenus. Budgétisation simple, pas de complexité, pas de vente de tes données financières.',
		replaces: 'Apps de budget'
	},
	daily_check_in: {
		title: 'Check-In Quotidien',
		description:
			"Réfléchis à ta journée. Suivi de l'humeur, journaling et construction d'habitudes en un seul endroit.",
		replaces: 'Daylio / Bearable'
	},
	time_tracker: {
		title: 'Suivi du Temps',
		description:
			'Sache où va ton temps. Suis les projets, les heures facturables et la productivité sans stress.',
		replaces: 'Toggl / Clockify'
	},
	clipboard: {
		title: 'Presse-papiers',
		description:
			'Copie sur ton téléphone, colle sur ton bureau. Un presse-papiers partagé entre tous tes appareils — sans câbles, sans détours.'
	}
};

const hero = {
	tagline: 's o l y t o',
	headline: 'Une application pour tout.',
	subheadline:
		'Tâches, calendriers, notes, contacts, bibliothèques — un seul endroit, sans bêtises, tes données restent à toi.',
	privacy_note: 'Pas de suivi. Pas de publicité. Pas de vente de données. Jamais.',
	cta: "Commence — c'est gratuit",
	screenshot_alt: 'Tableau de bord de solyto'
};

const why = {
	title: 'Pourquoi solyto?',
	intro: 'Né de la frustration face à ce qui existe.',
	points: [
		{
			title: 'Tes données, tes serveurs',
			description:
				"Tes données restent sur nos serveurs de l'UE. Nous ne les partageons pas, ne les vendons pas et ne les regardons pas."
		},
		{
			title: 'Un logiciel qui te respecte',
			description:
				"Pas de notifications culpabilisantes, pas d'urgence artificielle, pas de manipulation."
		},
		{
			title: 'Gratuit signifie gratuit',
			description:
				"Pas de carte de crédit, pas d'essai, pas de publicité, pas de niveau caché. Si cela change, nous en discuterons d'abord avec notre communauté."
		},
		{
			title: "Communauté d'abord",
			description:
				'Nous écoutons les commentaires, développons des fonctionnalités basées sur les suggestions et respectons ta confiance.'
		},
		{
			title: 'Des outils qui font leur travail',
			description:
				"Des fonctionnalités qui font ce qu'elles doivent — pas de couches d'IA ajoutées pour la tendance, pas de suggestions que personne n'a demandées."
		}
	]
};

const pricing = {
	title: 'Tarifs simples',
	free_badge: 'Gratuit',
	description:
		"solyto est gratuit à utiliser. Pas de carte de crédit requise, pas de période d'essai, pas de limitations de fonctionnalités.",
	promise_title: 'Notre promesse',
	promise:
		"Si tu n'as pas de capacités financières, tu n'auras jamais à payer pour solyto.",
	note: "solyto fonctionne léger — pas d'investisseurs, pas de revenus publicitaires, pas de motif lucratif. Juste des serveurs et du temps. Si les coûts dépassent ce qui est soutenable, nous en parlerons ouvertement avec la communauté avant que quoi que ce soit ne change.",
	per_period: '/pour toujours',
	no_catch: 'Pas de carte bancaire. Pas de piège.'
};

const faq = {
	title: 'Questions',
	items: [
		{
			question: 'Est-ce vraiment gratuit?',
			answer: "Oui. Si nous devons changer, nous en discuterons d'abord avec notre communauté. Et si tu ne peux pas payer, tu n'auras pas à le faire. C'est une promesse."
		},
		{
			question: 'Y aura-t-il de la publicité?',
			answer: "Non. Nous n'introduirons jamais de publicité pour monétiser solyto. Pas de bannières, pas de contenu sponsorisé, jamais."
		},
		{
			question: 'Où sont stockées mes données?',
			answer: "Sur nos serveurs dans l'UE. Nous ne les partageons pas, ne les vendons pas et ne les regardons pas."
		},
		{
			question: 'Puis-je exporter mes données?',
			answer: "Oui. Tes données t'appartiennent. Exporte à tout moment, dans des formats standards."
		},
		{
			question: 'Que se passe-t-il si vous fermez?',
			answer: "Nous te donnerions un préavis suffisant et t'aiderions à tout exporter. Tes données ne seront pas prises en otage."
		},
		{
			question: 'Y a-t-il une application mobile?',
			answer: "solyto est une application web progressive (PWA). Installe-la sur n'importe quel appareil directement depuis ton navigateur — aucun magasin d'applications requis. Nous proposons également une app de bureau native pour Windows, macOS et Linux."
		}
	]
};

const privacy_guarantees = {
	title: 'Tes données, tes règles',
	subtitle: 'Pas de bullshit. Pas de compromis.',
	privacy: {
		title: 'Confidentialité de bout en bout',
		description: 'Nous ne suivons, ne journalisons ni ne partageons tes données. Point.'
	},
	servers: {
		title: "Serveurs basés dans l'UE",
		description:
			"Tes données restent sur nos serveurs dans l'Union européenne. Conforme au RGPD."
	},
	no_tracking: {
		title: 'Pas de publicité, pas de suivi',
		description:
			"Nous n'afficherons jamais de publicité ni ne vendrons tes données. Gratuit signifie gratuit."
	},
	your_data: {
		title: 'Exporter à tout moment',
		description:
			"Tes données t'appartiennent. Exporte-les à tout moment dans des formats standards."
	}
};

const how_it_works = {
	title: 'Comment cela aide',
	intro: "Cas d'utilisation réels, valeur réelle.",
	use_cases: [
		{
			feature: 'todos',
			title: 'Fais vraiment les choses',
			description:
				'Crée des tâches, définis des échéances et coche-les. Pas de séries, pas de culpabilité, pas de gamification — juste une liste propre de ce que tu dois faire.'
		},
		{
			feature: 'calendar',
			title: 'Planifie ton temps, à ta façon',
			description:
				'Ton emploi du temps, simplifié. Ajoute des événements, définis des rappels, synchronise avec d\'autres calendriers si tu le souhaites. Pas de suggestions "intelligentes", pas de spam de réunion.'
		},
		{
			feature: 'notebook',
			title: 'Capture ce qui compte',
			description:
				'Note des idées, des notes de réunion ou des pensées aléatoires. Organise-les comme tu veux, trouve-les quand tu en as besoin. Simple et fiable.'
		},
		{
			feature: 'libraries',
			title: 'Sache ce que tu possèdes',
			description:
				'Suis tes livres, films, musique et jeux. Vois ce que tu as, ce que tu as lu, ce que tu veux ensuite. Pas de recommandations algorithmiques — juste ta collection.'
		},
		{
			feature: 'news',
			title: 'Lis ce que tu choisis',
			description:
				"Ajoute des flux RSS de sources en lesquelles tu as confiance. Pas d'algorithme de flux qui décide ce que tu vois. Tu choisis ce que tu lis, quand tu le lis."
		}
	],
	bottom_line: {
		title: 'Toutes tes affaires, connectées',
		description:
			"Tout en un seul endroit. Pas de jonglage avec des dizaines d'applications. Tes données, ta confidentialité, ton contrôle."
	}
};

const showcase = {
	title: 'Tout ce dont tu as besoin',
	subtitle:
		"Tout ce que tu gérais normalement dans une douzaine d'applications différentes — en un seul endroit.",
	replaces_label: 'Remplace'
};

const ui = {
	login: 'Connexion',
	register: "S'inscrire",
	legal_notice: 'Mentions légales',
	privacy_policy: 'Politique de confidentialité',
	terms_of_service: "Conditions d'utilisation",
	select_language: 'Sélectionner la langue',
	toggle_theme: 'Basculer le mode sombre'
};

const stats = {
	features: 'fonctionnalités',
	ads: 'sans pub',
	trackers: 'sans tracking',
	servers: 'serveurs UE',
	free: 'toujours gratuit'
};


const theming = {
	label: 'Personnalise-le',
	title: 'Thèmes'
};

const opensource = {
	title: 'Open source. Auto-hébergé.',
	philosophy_title: 'Pourquoi open source ?',
	philosophy:
		"Nous avons créé solyto parce que nous en avions assez des services qui disparaissent, pivotent ou se dégradent progressivement. Open source signifie que tu peux lire le code, vérifier nos engagements en matière de confidentialité, forker si nous nous trompons, et le logiciel nous survivra. AGPL-3.0 — libre d'utilisation, de modification et d'auto-hébergement. Si tu le distribues ou le proposes en tant que service, ton code source doit rester ouvert.",
	selfhost_title: 'Sur ton propre serveur',
	selfhost_description:
		'Stack Docker Compose, images prêtes à l\'emploi, Traefik avec TLS automatique inclus. Fonctionne sur un Raspberry Pi. Une commande pour tout lancer.',
	selfhost_command: 'curl -fsSL "https://raw.githubusercontent.com/solyto/selfhosted/main/setup.sh" | bash',
	links: {
		github: 'Voir sur GitHub',
		selfhosted: 'Guide d\'auto-hébergement',
		contribute: 'Contribuer'
	},
	license: 'Licence AGPL-3.0'
};

const downloads = {
	title: "Télécharger l'app",
	subtitle: 'Applications natives pour chaque plateforme.',
	platforms: {
		windows: { label: 'Windows', available: true },
		macos: { label: 'macOS', available: true },
		linux: { label: 'Linux', available: true },
		android: { label: 'Android', available: true },
		ios: { label: 'iOS', available: false }
	},
	coming_soon: 'Bientôt disponible',
	download: 'Télécharger',
	all_releases: 'Toutes les versions et changelogs'
};

const meta = {
	title: 'solyto — Ton application pour tout',
	description:
		'Tâches, calendriers, notes, contacts, bibliothèques — un seul endroit, sans bêtises, tes données restent à toi. Pas de suivi. Pas de publicité. Jamais.',
	social_description:
		'Tâches, calendriers, notes, contacts, bibliothèques — un seul endroit, sans bêtises, tes données restent à toi.'
};

export const fr = {
	features,
	hero,
	how_it_works,
	privacy_guarantees,
	why,
	pricing,
	faq,
	showcase,
	stats,
	theming,
	opensource,
	downloads,
	ui,
	meta
};
