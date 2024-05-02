import {defineStore} from 'pinia';

export const useFooter = defineStore("footer", () => {
	const footerLogo = {
		src: "./src/assets/images/footer-logo.png",
		alt: "Footer Logo"
	}

	const info = "We believe in <strong>Simple</strong>, <strong>Creative</strong> &amp; <strong>Flexible</strong> Design Standards with a Retina &amp; Responsive Approach. Browse the amazing Features this template offers.";
	const footerLinks = [
		[
			{
				text: "Home",
				href: "/"
			},
			{
				text: "About",
				href: "/about"
			},
			{
				text: "FAQs",
				href: "#"
			},
			{
				text: "Support",
				href: "#"
			},
			{
				text: "Contact",
				href: "/contact"
			}
		],
		[
			{
				text: "Shop",
				href: "#"
			},
			{
				text: "Portfolio",
				href: "/project"
			},
			{
				text: "Blog",
				href: "/blog"
			},
			{
				text: "Events",
				href: "#"
			},
			{
				text: "Forums",
				href: "#"
			},
		],
		[
			{
				text: "Corporate",
				href: "#"
			},
			{
				text: "Agency",
				href: "#"
			},
			{
				text: "eCommerce",
				href: "#"
			},
			{
				text: "Personal",
				href: "#"
			},
			{
				text: "One Page",
				href: "#"
			},
		],
		[
			{
				text: "Restaurant",
				href: "#"
			},
			{
				text: "Wedding",
				href: "#"
			},
			{
				text: "App Showcase",
				href: "#"
			},
			{
				text: "Magazine",
				href: "#"
			},
			{
				text: "Landing Page",
				href: "#"
			},
		],
	];
	const copyrightMenu = [
		{
			name: "Home",
			href: "/"
		},
		{
			name: "About Us",
			href: "/about"
		},
		{
			name: "Team",
			href: "#"
		},
		{
			name: "Clients",
			href: "#"
		},
		{
			name: "FAQs",
			href: "#"
		},
		{
			name: "Contact",
			href: "/contact"
		},
	]
	const copyright = "Copyrights &copy; 2020 All Rights Reserved by Canvas Inc.";

	const terms = {
		name: "Terms of Use",
		href: "#"
	};

	const policy = {
		name: "Privacy Policy",
		href: "#"
	}



	return {footerLogo, info, footerLinks, copyright, policy, terms, copyrightMenu };
});