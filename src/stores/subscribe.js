import {defineStore} from 'pinia';

export const useSubscribe = defineStore("subscribe", () => {

	const subscribe = [
		{
			iconS: "si-facebook",
			icon: "icon-facebook",
			name: "Facebook",
			href: "#"
		},
		{
			iconS: "si-rss",
			icon: "icon-rss",
			name: "RSS Feeds",
			href: "#",
		}
	];

	return {subscribe};
});