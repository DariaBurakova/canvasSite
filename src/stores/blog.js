import { defineStore } from 'pinia';

export const useBlog = defineStore('blog', () => {
	const posts = [
		{
			img: "./src/assets/images/services/1.jpg",
			href: "#",
			type: "post",
			title: "This is a Standard post with a Preview Image",
			meta:  {
					date: "10th Feb 2021",
					user: "admin",
					cat: [
						{
							name: "General",
							href: "#"
						},
						{
							name: "Media",
							href: "#"
						}
					],
					comments: 12,
				},
			text: "Completely unleash web-enabled technology for sustainable channels. Authoritatively innovate innovative synergy rather than professional outsourcing. Conveniently myocardinate leading-edge functionalities with cutting-edge imperatives. Enthusiastically synergize prospective convergence without user-centric meta-services. Conveniently leverage other's impactful metrics after value-added \"outside the box\" thinking. Efficiently conceptualize interdependent markets whereas functionalized technology.",
		},
		{
			video: "https://player.vimeo.com/video/87701971",
			href: "#",
			type: "post",
			title: "This is a Standard post with an Embedded Video",
			meta:  {
				date: "10th Feb 2021",
				user: "admin",
				cat: [
					{
						name: "Videos",
						href: "#"
					},
					{
						name: "News",
						href: "#"
					}
				],
				comments: 12,
			},
			text: "Completely unleash web-enabled technology for sustainable channels. Authoritatively innovate innovative synergy rather than professional outsourcing. Conveniently myocardinate leading-edge functionalities with cutting-edge imperatives. Enthusiastically synergize prospective convergence without user-centric meta-services. Conveniently leverage other's impactful metrics after value-added \"outside the box\" thinking. Efficiently conceptualize interdependent markets whereas functionalized technology.",
		},
		{
			gallery: [
				"./src/assets/images/services/1.jpg",
				"./src/assets/images/services/1.jpg",
				"./src/assets/images/services/1.jpg"
			],
			href: "#",
			type: "post",
			title: "This is a Standard post with a Slider Gallery",
			meta:  {
				date: "10th Feb 2021",
				user: "admin",
				cat: [
					{
						name: "Gallery",
						href: "#"
					},
					{
						name: "Media",
						href: "#"
					}
				],
				comments: 12,
			},
			text: "Completely unleash web-enabled technology for sustainable channels. Authoritatively innovate innovative synergy rather than professional outsourcing. Conveniently myocardinate leading-edge functionalities with cutting-edge imperatives. Enthusiastically synergize prospective convergence without user-centric meta-services. Conveniently leverage other's impactful metrics after value-added \"outside the box\" thinking. Efficiently conceptualize interdependent markets whereas functionalized technology.",
		},
		{
			blockquote: {
				text: '"When you are courting a nice girl an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That\'s relativity."',
				footer: "Albert Einstein"
			},
			type: "blockquote",
			meta:  {
				date: "10th Feb 2021",
				user: "admin",
				cat: [
					{
						name: "Quotes",
						href: "#"
					},
					{
						name: "People",
						href: "#"
					}
				],
				comments: 12,
			},
		},
		{
			title: "Themeforest.net",
			link: "https://themeforest.net",
			type: "link",
			meta:  {
				date: "10th Feb 2021",
				user: "admin",
				cat: [
					{
						name: "Links",
						href: "#"
					},
					{
						name: "Suggestions",
						href: "#"
					}
				],
				comments: 12,
			},
		},
		{
			card: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, fuga optio voluptatibus saepe tenetur aliquam debitis eos accusantium! Vitae, hic, atque aliquid repellendus accusantium laudantium minus eaque quibusdam ratione sapiente.\n",
			type: "block",
			meta:  {
				date: "10th Feb 2021",
				user: "admin",
				cat: [
					{
						name: "Status",
						href: "#"
					},
					{
						name: "News",
						href: "#"
					}
				],
				comments: 12,
			},
		}
	]

	return {posts}
});