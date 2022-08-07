import { CUSTOM_TAGS } from "./utils/types";

export const SITE = {
	title: 'Documentation',
	description: 'Your website description.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	// image: {
	// 	src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
	// 	alt:
	// 		'astro logo on a starry expanse of space,' +
	// 		' with a purple saturn-like planet floating in the right foreground',
	// },
	// twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
export const GITHUB_EDIT_URL = `https://github.com/momentum-design/momentum-design-poc`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;


export const SIDEBAR = {
	en: [
		{ text: '', header: true },
		{ text: 'Momentum Design', header: true },
		{ text: 'Introduction', link: 'en/introduction' },
		{ text: 'Components', header: true },
		// start auto-generated component docs 
		{ text: CUSTOM_TAGS.COMPONENTS_PROVIDER, link: `en/components/${CUSTOM_TAGS.COMPONENTS_PROVIDER}`},
		{ text: CUSTOM_TAGS.TEST, link: `en/components/${CUSTOM_TAGS.TEST}`},
		// end auto-generated component docs
		{ text: 'Assets', header: true },
	],
};
