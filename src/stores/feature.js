import {defineStore} from 'pinia';

export const useFeature = defineStore("feature", () => {
  const feature = [
    {
      title: "Skilled Professionals.",
      subtitle: "Your Property in Good Hands.",
      descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi rem, facilis nobis voluptatum est voluptatem accusamus molestiae eaque perspiciatis mollitia.",
      img: "./src/assets/images/services/1.jpg"
    },
    {
      title: "Effective Planning.",
      subtitle: "Construction Process Organized.",
      descr: "Porro repellat vero sapiente amet vitae quibusdam necessitatibus consectetur, labore totam. Accusamus perspiciatis asperiores labore esse.",
      img: "./src/assets/images/services/2.jpg"
    },
    {
      title: "Risk Management.",
      subtitle: "We have got you Covered.",
      descr: "Quos, non, esse eligendi ab accusantium voluptatem. Maxime eligendi beatae, atque tempora ullam. Vitae delectus quia, consequuntur rerum quo.",
      img: "./src/assets/images/services/3.jpg"
    },
  ];

  return {feature};
});