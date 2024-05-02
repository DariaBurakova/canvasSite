import {defineStore} from 'pinia';

export const useSlidersSlide = defineStore("slide", () => {
  const slides = [
    {
      title: "Welcome to Canvas",
      descr: "Create just what you need for your Perfect Website. Choose from a wide range of Elements &amp; simply put them on your own Canvas.",
      slideBg: "demos/construction/images/slider/2.jpg"
    },
  ];

  return {slides};
});