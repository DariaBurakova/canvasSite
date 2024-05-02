import { defineStore } from 'pinia';


export const useServicesView = defineStore('services-view', () => {
	const arrOne = [
		{
			img: "./src/assets/images/services/1.jpg",
			title: "Concrete Developments",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minima, facere distinctio placeat."
		},
		{
			img: "./src/assets/images/services/1.jpg",
			title: "Finance Assistance",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minima, facere distinctio placeat."
		},
		{
			img: "./src/assets/images/services/1.jpg",
			title: "Interiorly Designed",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minima, facere distinctio placeat."
		},
		{
			img: "./src/assets/images/services/1.jpg",
			title: "Cost Effective Solutions",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minima, facere distinctio placeat."
		},
		{
			img: "./src/assets/images/services/1.jpg",
			title: "Smart Builders",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minima, facere distinctio placeat."
		},
		{
			img: "./src/assets/images/services/1.jpg",
			title: "Quality Infrastructure",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minima, facere distinctio placeat."
		}
	];

	const arrTwo = [
		{
			img: "./src/assets/images/services/1.jpg",
			title: "Skilled Professionals.",
			subtitle: "Your Property in Good Hands.",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi rem, facilis nobis voluptatum est voluptatem accusamus molestiae eaque perspiciatis mollitia."
		},
		{
			img: "./src/assets/images/services/1.jpg",
			title: "Effective Planning.",
			subtitle: "Construction Process Organized.",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi rem, facilis nobis voluptatum est voluptatem accusamus molestiae eaque perspiciatis mollitia."
		},
		{
			img: "./src/assets/images/services/1.jpg",
			title: "Risk Management.",
			subtitle: "We have got you Covered.",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi rem, facilis nobis voluptatum est voluptatem accusamus molestiae eaque perspiciatis mollitia."
		},
		{
			img: "./src/assets/images/services/1.jpg",
			title: "Design  &  Build Package.",
			subtitle: "Your Property in Good Hands.",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi rem, facilis nobis voluptatum est voluptatem accusamus molestiae eaque perspiciatis mollitia."
		},
		{
			img: "./src/assets/images/services/1.jpg",
			title: "Architecture Planning.",
			subtitle: "Construction Process Organized.",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi rem, facilis nobis voluptatum est voluptatem accusamus molestiae eaque perspiciatis mollitia."
		},
		{
			img: "./src/assets/images/services/1.jpg",
			title: "General Maintenance.",
			subtitle: "We have got you Covered.",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi rem, facilis nobis voluptatum est voluptatem accusamus molestiae eaque perspiciatis mollitia."
		},
	];

	return {arrOne, arrTwo}
});