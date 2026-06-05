export const urls = {
	login: 'https://my.solyto.app/auth/login',
	register: 'https://my.solyto.app/auth/register',
	imprint: '/imprint',
	privacy: '/privacy',
	terms: '/terms',
	github: 'https://github.com/solyto/solyto',
	selfhosted: 'https://github.com/solyto/selfhosted',
	discord: 'https://discord.gg/REyWQKgUcq',
	releases: 'https://github.com/solyto/desktop/releases/latest',
	downloads: {
		windows: 'https://github.com/solyto/desktop/releases/download/v1.0.7/solyto-1.0.7.exe',
		macos: 'https://github.com/solyto/desktop/releases/download/v1.0.7/solyto-1.0.7.dmg',
		linux: {
			deb: 'https://github.com/solyto/desktop/releases/download/v1.0.7/solyto-1.0.7.deb',
			rpm: 'https://github.com/solyto/desktop/releases/download/v1.0.7/solyto-1.0.7.rpm',
			appimage: 'https://github.com/solyto/desktop/releases/download/v1.0.7/solyto-1.0.7.AppImage'
		}
	}
} as const;
