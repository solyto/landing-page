const features = {
	libraries: {
		title: 'Bibliothèques',
		description:
			'Suivez vos livres, musique, films, jeux, recettes, liens et citations. Pas de recommandations algorithmiques, pas de spam "vous aimerez peut-être aussi". Juste vos affaires, organisées.'
	},
	todos: {
		title: 'Tâches',
		description:
			'Tâches, projets, échéances. Cochez les choses, sentez-vous bien. Pas de gamification, pas de streaks qui culpabilisent.'
	},
	calendar: {
		title: 'Calendrier',
		description:
			'Votre emploi du temps sans lourdeur. Se synchronise avec CalDAV si nécessaire. Pas de suggestions "intelligentes", pas de spam de réunion.'
	},
	news: {
		title: 'Actualités',
		description:
			"Flux RSS de sources que vous choisissez. Pas d'algorithme qui décide ce que vous devez lire."
	},
	notebook: {
		title: 'Carnet',
		description: 'Notes et pensées. Écrivez-les, organisez-les, retrouvez-les plus tard.'
	},
	contacts: {
		title: 'Contacts',
		description:
			"Votre carnet d'adresses, synchronisé sur les appareils. Compatible CardDAV, confidentialité d'abord."
	},
	finance: {
		title: 'Finance',
		description:
			'Suivez vos dépenses et revenus. Budgétisation simple, pas de complexité, pas de vente de vos données financières.'
	},
	daily_check_in: {
		title: 'Check-In Quotidien',
		description:
			"Réfléchissez à votre journée. Suivi de l'humeur, journaling et construction d'habitudes en un seul endroit."
	},
	time_tracker: {
		title: 'Suivi du Temps',
		description:
			'Sachez où va votre temps. Suivez les projets, les heures facturables et la productivité sans stress.'
	},
	clipboard: {
		title: 'Presse-papiers',
		description:
			'Copiez sur votre téléphone, collez sur votre bureau. Un presse-papiers partagé entre tous vos appareils — sans câbles, sans détours.'
	}
};

const hero = {
	tagline: 's o l y t o',
	headline: 'Votre application pour tout.',
	subheadline:
		'Tâches, calendriers, notes, contacts, bibliothèques — un seul endroit, sans bêtises, vos données restent à vous.',
	privacy_note: 'Pas de suivi. Pas de publicité. Pas de vente de données. Jamais.',
	cta: 'Essayez'
};

const why = {
	title: 'Pourquoi solyto ?',
	intro: 'Né de la frustration face à ce qui existe.',
	points: [
		{
			title: 'Vos données, vos serveurs',
			description:
				"Vos données restent sur nos serveurs de l'UE. Nous ne les partageons pas, ne les vendons pas et ne les regardons pas."
		},
		{
			title: 'Un logiciel qui vous respecte',
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
				'Nous écoutons les commentaires, développons des fonctionnalités basées sur les suggestions et respectons votre confiance.'
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
		"Si vous n'avez pas de capacités financières, vous n'aurez jamais à payer pour solyto.",
	note: "solyto fonctionne léger — pas d'investisseurs, pas de revenus publicitaires, pas de motif lucratif. Juste des serveurs et du temps. Si les coûts dépassent ce qui est soutenable, nous en parlerons ouvertement avec la communauté avant que quoi que ce soit ne change."
};

const faq = {
	title: 'Questions',
	items: [
		{
			question: 'Est-ce vraiment gratuit ?',
			answer: "Oui. Si nous devons changer, nous en discuterons d'abord avec notre communauté. Et si vous ne pouvez pas payer, vous n'aurez pas à le faire. C'est une promesse."
		},
		{
			question: 'Y aura-t-il de la publicité ?',
			answer: "Non. Nous n'introduirons jamais de publicité pour monétiser solyto. Pas de bannières, pas de contenu sponsorisé, jamais."
		},
		{
			question: 'Où sont stockées mes données ?',
			answer: "Sur nos serveurs dans l'UE. Nous ne les partageons pas, ne les vendons pas et ne les regardons pas."
		},
		{
			question: 'Puis-je exporter mes données ?',
			answer: 'Oui. Vos données vous appartiennent. Exportez à tout moment, dans des formats standards.'
		},
		{
			question: 'Que se passe-t-il si vous fermez ?',
			answer: 'Nous vous donnerions un préavis suffisant et vous aiderions à tout exporter. Vos données ne seront pas prises en otage.'
		},
		{
			question: 'Y a-t-il une application mobile ?',
			answer: "solyto est une application web progressive (PWA). Installez-la sur n'importe quel appareil directement depuis votre navigateur — aucun magasin d'applications requis."
		}
	]
};

const privacy_guarantees = {
	title: 'Vos données, vos règles',
	subtitle: 'Pas de bullshit. Pas de compromis.',
	privacy: {
		title: 'Confidentialité de bout en bout',
		description: 'Nous ne suivons, ne journalisons ni ne partageons vos données. Point.'
	},
	servers: {
		title: "Serveurs basés dans l'UE",
		description:
			"Vos données restent sur nos serveurs dans l'Union européenne. Conforme au RGPD."
	},
	no_tracking: {
		title: 'Pas de publicité, pas de suivi',
		description:
			"Nous n'afficherons jamais de publicité ni ne vendrons vos données. Gratuit signifie gratuit."
	},
	your_data: {
		title: 'Exporter à tout moment',
		description:
			'Vos données vous appartiennent. Exportez-les à tout moment dans des formats standards.'
	}
};

const how_it_works = {
	title: 'Comment cela aide',
	intro: "Cas d'utilisation réels, valeur réelle.",
	use_cases: [
		{
			feature: 'todos',
			title: 'Faites vraiment les choses',
			description:
				'Créez des tâches, définissez des échéances et cochez-les. Pas de séries, pas de culpabilité, pas de gamification — juste une liste propre de ce que vous devez faire.'
		},
		{
			feature: 'calendar',
			title: 'Planifiez votre temps, à votre façon',
			description:
				'Votre emploi du temps, simplifié. Ajoutez des événements, définissez des rappels, synchronisez avec d\'autres calendriers si vous le souhaitez. Pas de suggestions "intelligentes", pas de spam de réunion.'
		},
		{
			feature: 'notebook',
			title: 'Capturez ce qui compte',
			description:
				'Notez des idées, des notes de réunion ou des pensées aléatoires. Organisez-les comme vous voulez, trouvez-les quand vous en avez besoin. Simple et fiable.'
		},
		{
			feature: 'libraries',
			title: 'Sachez ce que vous possédez',
			description:
				'Suivez vos livres, films, musique et jeux. Voyez ce que vous avez, ce que vous avez lu, ce que vous voulez ensuite. Pas de recommandations algorithmiques — juste votre collection.'
		},
		{
			feature: 'news',
			title: 'Lisez ce que vous choisissez',
			description:
				"Ajoutez des flux RSS de sources en lesquelles vous avez confiance. Pas d'algorithme de flux qui décide ce que vous voyez. Vous choisissez ce que vous lisez, quand vous le lisez."
		}
	],
	bottom_line: {
		title: 'Toutes vos affaires, connectées',
		description:
			"Tout en un seul endroit. Pas de jonglage avec des dizaines d'applications. Vos données, votre confidentialité, votre contrôle."
	}
};

const showcase = {
	title: 'Tout ce dont vous avez besoin',
	subtitle:
		'Une application, toutes vos affaires. Pas de changement entre une douzaine de services.'
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
	title: 'Remplacez toute votre pile personnelle.',
	subtitle:
		'Tout ce que vous gériez normalement dans une douzaine d\'applications différentes — en un seul endroit.',
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
