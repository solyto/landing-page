const features = {
	libraries: {
		title: 'Bibliothèques',
		description:
			'Suis tes livres, musique, films, jeux, recettes, liens et citations. Pas de recommandations algorithmiques, pas de spam "tu aimeras peut-être aussi". Juste tes affaires, organisées.'
	},
	todos: {
		title: 'Tâches',
		description:
			'Tâches, projets, échéances. Coche les choses, fais-toi du bien. Pas de gamification, pas de streaks qui culpabilisent.'
	},
	calendar: {
		title: 'Calendrier',
		description:
			'Ton emploi du temps sans lourdeur. Se synchronise avec CalDAV si tu en as besoin. Pas de suggestions "intelligentes", pas de spam de réunion.'
	},
	news: {
		title: 'Actualités',
		description:
			"Flux RSS de sources que tu choisis. Pas d'algorithme qui décide ce que tu dois lire."
	},
	notebook: {
		title: 'Carnet',
		description: 'Notes et pensées. Écris-les, organise-les, retrouve-les plus tard.'
	},
	contacts: {
		title: 'Contacts',
		description:
			"Ton carnet d'adresses, synchronisé sur les appareils. Compatible CardDAV, confidentialité d'abord."
	},
	finance: {
		title: 'Finance',
		description:
			'Suis tes dépenses et revenus. Budgétisation simple, pas de complexité, pas de vente de tes données financières.'
	},
	daily_check_in: {
		title: 'Check-In Quotidien',
		description:
			"Réfléchis à ta journée. Suivi de l'humeur, journaling et construction d'habitudes en un seul endroit."
	},
	time_tracker: {
		title: 'Suivi du Temps',
		description:
			'Sache où va ton temps. Suis les projets, les heures facturables et la productivité sans stress.'
	},
	clipboard: {
		title: 'Presse-papiers',
		description:
			'Copie sur ton téléphone, colle sur ton bureau. Un presse-papiers partagé entre tous tes appareils — sans câbles, sans détours.'
	}
};

const hero = {
	tagline: 's o l y t o',
	headline: 'Ton application pour tout.',
	subheadline:
		'Tâches, calendriers, notes, contacts, bibliothèques — un seul endroit, sans bêtises, tes données restent à toi.',
	privacy_note: 'Pas de suivi. Pas de publicité. Pas de vente de données. Jamais.',
	cta: "Commence — c'est gratuit"
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
	note: "solyto fonctionne léger — pas d'investisseurs, pas de revenus publicitaires, pas de motif lucratif. Juste des serveurs et du temps. Si les coûts dépassent ce qui est soutenable, nous en parlerons ouvertement avec la communauté avant que quoi que ce soit ne change."
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
			answer: "solyto est une application web progressive (PWA). Installe-la sur n'importe quel appareil directement depuis ton navigateur — aucun magasin d'applications requis."
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
		'Une application, toutes tes affaires. Pas de changement entre une douzaine de services.'
};

const ui = {
	login: 'Connexion',
	register: "S'inscrire",
	legal_notice: 'Mentions légales',
	privacy_policy: 'Politique de confidentialité',
	terms_of_service: "Conditions d'utilisation",
	select_language: 'Sélectionner la langue'
};

const stats = {
	features: 'fonctionnalités',
	ads: 'sans pub',
	trackers: 'sans tracking',
	servers: 'serveurs UE',
	free: 'toujours gratuit'
};

const replaces = {
	title: 'Remplace toute ta pile personnelle.',
	subtitle:
		"Tout ce que tu gérais normalement dans une douzaine d'applications différentes — en un seul endroit.",
	items: [
		{ from: 'Google Agenda', to: 'Calendrier' },
		{ from: 'Google Tasks / Keep', to: 'Tâches + Notes' },
		{ from: 'Google Contacts', to: 'Contacts' },
		{ from: 'Feedly / apps RSS', to: 'Actualités' },
		{ from: 'Goodreads / Letterboxd / Last.fm', to: 'Bibliothèques' },
		{ from: 'Apps de budget', to: 'Finance' },
		{ from: 'Toggl / Clockify', to: 'Suivi du Temps' },
		{ from: 'Daylio / Bearable', to: 'Check-In Quotidien' }
	],
};

const theming = {
	label: 'Personnalise-le',
	title: 'Ton espace, ton style.',
	description:
		'Choisis un thème qui te correspond — minimaliste, sombre, chaleureux ou avec du caractère. Fan de Skyrim\u00a0? Il y a un thème pour ça.',
	exotic_badge: 'Culte'
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
	replaces,
	theming,
	ui
};
