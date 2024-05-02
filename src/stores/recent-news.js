import { defineStore } from 'pinia';

export const useRecentNews = defineStore('recent-news', () => {
  const recentNews = [
	  {
		  title: "Upcoming Projects in Australia",
		  comment: 13,
		  descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est tenetur in.",
		  date: "10th Feb 2021",
		  cover: "./src/assets/images/blog/1.jpg",
		  href: "#"
	  },
	  {
		  title: "Real Estate just got a little more Expensive",
		  comment: 24,
		  descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est tenetur in.",
		  date: "24th Feb 2021",
		  slider: [
			  "./src/assets/images/blog/1.jpg",
			  "./src/assets/images/blog/1.jpg",
			  "./src/assets/images/blog/1.jpg"
		  ],
		  href: "#"
	  },
	  {
		  title: "Global Excellence Construction Award",
		  comment: 6,
		  descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est tenetur in.",
		  date: "5th May 2021",
		  cover: "./src/assets/images/blog/1.jpg",
		  href: "#"
	  },
  ];

  const title = "Recent News";

  return {recentNews, title}
});