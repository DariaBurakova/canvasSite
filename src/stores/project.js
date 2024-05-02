import { defineStore } from 'pinia';

export const useProject = defineStore('project', () => {
  const project = [
    {
      title: "The Atmosphere",
      country: "Chicago, USA",
      img: "demos/construction/images/projects/2.jpg"
    },
    {
      title: "Wavelength Structure",
      country: "Madrid, Spain",
      img: "demos/construction/images/projects/2.jpg"
    },
    {
      title: "Greenhouse Garden<",
      country: "Bali, Indonesia",
      img: "demos/construction/images/projects/2.jpg"
    },
    {
      title: "Industrial Hub",
      country: "Beijing, China",
      img: "demos/construction/images/projects/2.jpg"
    },
    {
      title: "Corporate Headquarters",
      country: "California, USA",
      img: "demos/construction/images/projects/2.jpg"
    },
    {
      title: "Space Station",
      country: "Moscow, Russia",
      img: "demos/construction/images/projects/2.jpg"
    },
    {
      title: "Bent Architecture",
      country: "Melbourne, Australia",
      img: "demos/construction/images/projects/2.jpg"
    },
    {
      title: "Lakeview Center",
      country: "Auckland, New Zealand",
      img: "demos/construction/images/projects/2.jpg"
    },

  ];

  return {project}
});