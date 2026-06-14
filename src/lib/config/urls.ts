import { env } from '$env/dynamic/public';

const dv = env.PUBLIC_DESKTOP_VERSION ?? '1.0.7';
const mv = env.PUBLIC_MOBILE_VERSION ?? '1.0.7';

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
		windows: `https://github.com/solyto/desktop/releases/download/v${dv}/solyto-${dv}.exe`,
		macos: `https://github.com/solyto/desktop/releases/download/v${dv}/solyto-${dv}.dmg`,
		linux: {
			deb: `https://github.com/solyto/desktop/releases/download/v${dv}/solyto-${dv}.deb`,
			rpm: `https://github.com/solyto/desktop/releases/download/v${dv}/solyto-${dv}.rpm`,
			appimage: `https://github.com/solyto/desktop/releases/download/v${dv}/solyto-${dv}.AppImage`
		},
		android: `https://github.com/solyto/mobile/releases/download/v${mv}/app-release.apk`
	}
};
