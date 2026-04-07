const features = {
	libraries: {
		title: 'Bibliotecas',
		description:
			'Rastrea tus libros, música, películas, juegos, recetas, enlaces y citas. Sin recomendaciones algorítmicas, sin spam "también te podría gustar". Solo tus cosas, organizadas.'
	},
	todos: {
		title: 'Tareas',
		description:
			'Tareas, proyectos, fechas límite. Marca las cosas, siéntete bien. Sin gamificación, sin rachas que te hagan sentir culpable.'
	},
	calendar: {
		title: 'Calendario',
		description:
			'Tu horario sin inflamiento. Se sincroniza con CalDAV si lo necesitas. Sin sugerencias "inteligentes", sin spam de reuniones.'
	},
	news: {
		title: 'Noticias',
		description: 'Feeds RSS de fuentes que eliges. Sin algoritmo decidiendo qué debes leer.'
	},
	notebook: {
		title: 'Cuaderno',
		description: 'Notas y pensamientos. Escríbelos, organízalos, encuéntralos más tarde.'
	},
	contacts: {
		title: 'Contactos',
		description:
			'Tu libreta de direcciones, sincronizada entre dispositivos. Compatible con CardDAV, privacidad primero.'
	},
	finance: {
		title: 'Finanzas',
		description:
			'Rastrea tus gastos e ingresos. Presupuestación simple, sin complejidad, sin vender tus datos financieros.'
	},
	daily_check_in: {
		title: 'Check-In Diario',
		description:
			'Reflexiona sobre tu día. Seguimiento del estado de ánimo, diario y construcción de hábitos en un solo lugar.'
	},
	time_tracker: {
		title: 'Rastreador de Tiempo',
		description:
			'Sabe a dónde va tu tiempo. Rastrea proyectos, horas facturables y productividad sin estrés.'
	},
	clipboard: {
		title: 'Portapapeles',
		description:
			'Copia en tu teléfono, pega en tu escritorio. Un portapapeles compartido entre todos tus dispositivos — sin cables, sin rodeos.'
	}
};

const hero = {
	tagline: 's o l y t o',
	headline: 'Tu aplicación para todo.',
	subheadline:
		'Tareas, calendarios, notas, contactos, bibliotecas — un solo lugar, sin tonterías, tus datos te pertenecen.',
	privacy_note: 'Sin seguimiento. Sin anuncios. Sin venta de datos. Nunca.',
	cta: 'Pruébalo'
};

const why = {
	title: '¿Por qué solyto?',
	intro: 'Creado por la frustración con lo que existe.',
	points: [
		{
			title: 'Tus datos, tus servidores',
			description:
				'Tus datos permanecen en nuestros servidores de la UE. No los compartimos, no los vendemos ni los miramos.'
		},
		{
			title: 'Software que te respeta',
			description:
				'Sin notificaciones culpabilizantes, sin urgencia artificial, sin manipulación.'
		},
		{
			title: 'Gratis significa gratis',
			description:
				'Sin tarjeta de crédito, sin período de prueba, sin anuncios, sin niveles ocultos. Si eso cambia, lo discutiremos primero con nuestra comunidad.'
		},
		{
			title: 'Comunidad primero',
			description:
				'Escuchamos los comentarios, desarrollamos funciones basadas en sugerencias y respetamos tu confianza.'
		},
		{
			title: 'Herramientas que hacen su trabajo',
			description:
				'Funciones que hacen lo que deben — sin capas de IA añadidas por moda, sin sugerencias que nadie pidió.'
		}
	]
};

const pricing = {
	title: 'Precios simples',
	free_badge: 'Gratis',
	description:
		'solyto es gratuito de usar. Sin tarjeta de crédito requerida, sin período de prueba, sin limitaciones de funciones.',
	promise_title: 'Nuestra promesa',
	promise: 'Si no tienes capacidades financieras, nunca tendrás que pagar por solyto.',
	note: 'solyto funciona de forma austera — sin inversores, sin ingresos publicitarios, sin ánimo de lucro. Solo servidores y tiempo. Si los costos alguna vez superan lo sostenible, lo hablaremos abiertamente con la comunidad antes de que cambie algo.'
};

const faq = {
	title: 'Preguntas',
	items: [
		{
			question: '¿Realmente es gratis?',
			answer: 'Sí. Si alguna vez necesitamos cambiar eso, lo discutiremos primero con nuestra comunidad. Y si no puedes pagar, no tendrás que hacerlo. Esa es una promesa.'
		},
		{
			question: '¿Habrá anuncios alguna vez?',
			answer: 'No. Nunca introduciremos anuncios para monetizar solyto. Sin banners, sin contenido patrocinado, nunca.'
		},
		{
			question: '¿Dónde se almacenan mis datos?',
			answer: 'En nuestros servidores en la UE. No los compartimos, no los vendemos ni los miramos.'
		},
		{
			question: '¿Puedo exportar mis datos?',
			answer: 'Sí. Tus datos te pertenecen. Exporta en cualquier momento, en formatos estándar.'
		},
		{
			question: '¿Qué pasa si cierran?',
			answer: 'Te daríamos suficiente aviso y te ayudaríamos a exportar todo. Tus datos no serán tomados como rehenes.'
		},
		{
			question: '¿Hay una aplicación móvil?',
			answer: 'solyto es una aplicación web progresiva (PWA). Instálala en cualquier dispositivo directamente desde tu navegador — no se necesita una tienda de aplicaciones.'
		}
	]
};

const privacy_guarantees = {
	title: 'Tus datos, tus reglas',
	subtitle: 'Sin tonterías. Sin compromisos.',
	privacy: {
		title: 'Privacidad de extremo a extremo',
		description: 'No rastreamos, registramos ni compartimos tus datos. Punto.'
	},
	servers: {
		title: 'Servidores en la UE',
		description:
			'Tus datos permanecen en nuestros servidores en la Unión Europea. Compatible con GDPR.'
	},
	no_tracking: {
		title: 'Sin anuncios, sin rastreo',
		description: 'Nunca mostraremos anuncios ni venderemos tus datos. Gratis significa gratis.'
	},
	your_data: {
		title: 'Exportar en cualquier momento',
		description:
			'Tus datos te pertenecen. Expórtalos en cualquier momento en formatos estándar.'
	}
};

const how_it_works = {
	title: 'Cómo ayuda',
	intro: 'Casos de uso reales, valor real.',
	use_cases: [
		{
			feature: 'todos',
			title: 'Realmente haz las cosas',
			description:
				'Crea tareas, establece fechas límite y márcalas. Sin rachas, sin culpa, sin gamificación — solo una lista limpia de lo que necesitas hacer.'
		},
		{
			feature: 'calendar',
			title: 'Planifica tu tiempo, a tu manera',
			description:
				'Tu horario, simplificado. Añade eventos, establece recordatorios, sincroniza con otros calendarios si lo deseas. Sin sugerencias "inteligentes", sin spam de reuniones.'
		},
		{
			feature: 'notebook',
			title: 'Captura lo que importa',
			description:
				'Escribe ideas, notas de reunión o pensamientos aleatorios. Organízalos como quieras, encuéntralos cuando los necesites. Simple y confiable.'
		},
		{
			feature: 'libraries',
			title: 'Sabe lo que tienes',
			description:
				'Rastrea tus libros, películas, música y juegos. Ve lo que tienes, lo que has leído, lo que quieres después. Sin recomendaciones algorítmicas — solo tu colección.'
		},
		{
			feature: 'news',
			title: 'Lee lo que eliges',
			description:
				'Añade feeds RSS de fuentes en las que confías. Sin algoritmo de feed que decida lo que ves. Tú eliges qué leer, cuándo leerlo.'
		}
	],
	bottom_line: {
		title: 'Todas tus cosas, conectadas',
		description:
			'Todo en un solo lugar. Sin malabarismos con docenas de aplicaciones. Tus datos, tu privacidad, tu control.'
	}
};

const showcase = {
	title: 'Todo lo que necesitas',
	subtitle: 'Una aplicación, todas tus cosas. Sin cambiar entre una docena de servicios.'
};

const ui = {
	login: 'Iniciar sesión',
	register: 'Registrarse',
	legal_notice: 'Aviso legal',
	privacy_policy: 'Política de privacidad',
	terms_of_service: 'Términos de servicio',
	select_language: 'Seleccionar idioma'
};

const stats = {
	features: 'funciones',
	ads: 'sin anuncios',
	trackers: 'sin rastreo',
	servers: 'servidores UE',
	free: 'siempre gratis'
};

const replaces = {
	title: 'Reemplaza toda tu pila personal.',
	subtitle:
		'Todo lo que normalmente manejas en una docena de aplicaciones diferentes — en un solo lugar.',
	items: [
		{ from: 'Google Calendar', to: 'Calendario' },
		{ from: 'Google Tasks / Keep', to: 'Tareas + Notas' },
		{ from: 'Google Contacts', to: 'Contactos' },
		{ from: 'Feedly / apps RSS', to: 'Noticias' },
		{ from: 'Goodreads / Letterboxd / Last.fm', to: 'Bibliotecas' },
		{ from: 'Apps de presupuesto', to: 'Finanzas' },
		{ from: 'Toggl / Clockify', to: 'Rastreador de Tiempo' },
		{ from: 'Daylio / Bearable', to: 'Check-In Diario' }
	],
};

const theming = {
	label: 'Hazlo tuyo',
	title: 'Tu espacio, tu estilo.',
	description:
		'Elige un tema que encaje contigo — minimal, oscuro, cálido o con personalidad. ¿Fan de Skyrim? Hay un tema para eso.',
	exotic_badge: 'Culto'
};

export const es = {
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
