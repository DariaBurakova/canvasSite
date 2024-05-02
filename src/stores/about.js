import { defineStore } from 'pinia';

export const useAbout = defineStore('about', () => {
	const title = "What We Do";
	const subtitle = "Dramatically orchestrate multimedia based opportunities and client-based e-business. Competently create human capital.";
	const text = "Holisticly incubate enterprise users whereas just in time sources. Rapidiously transition performance based e-business for bricks-and-clicks methodologies. Intrinsicly network quality interfaces rather than customer directed e-services. Rapidiously implement out-of-the-box content with alternative data. Collaboratively simplify seamless initiatives through sustainable infomediaries. Holisticly aggregate bleeding-edge expertise.";
	const link = {
		name: "Learn more",
		href:  "#"
	};
	return {subtitle, title, text, link};
});