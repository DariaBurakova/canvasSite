import {defineStore} from 'pinia';

export const useTags = defineStore("tags", () => {
	const tags = [
		{
			name: "general",
			href: "#"
		},
		{
			name: "Contract",
			href: "#"
		},
		{
			name: "Construction",
			href: "#"
		},
		{
			name: "Workers",
			href: "#"
		},
		{
			name: "Building",
			href: "#"
		},		{
			name: "Site",
			href: "#"
		},
		{
			name: "Investors",
			href: "#"
		},
		{
			name: "Projects",
			href: "#"
		},
		{
			name: "coupons",
			href: "#"
		},
		{
			name: "modern",
			href: "#"
		},
		{
			name: "videos",
			href: "#"
		},
		{
			name: "music",
			href: "#"
		},
		{
			name: "media",
			href: "#"
		},
		{
			name: "photography",
			href: "#"
		},
		{
			name: "parallax",
			href: "#"
		},
		{
			name: "ecommerce",
			href: "#"
		},
		{
			name: "terms",
			href: "#"
		},

	]
	return {tags};
});