import { defineStore } from 'pinia';

export const useInfo = defineStore('info', () => {
  const info = [
    {
      title: "Concrete Developments",
      descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minima, facere distinctio placeat.",
      img: "demos/construction/images/icons/building.png"
    },
    {
      title: "Finance Assistance",
      descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minima, facere distinctio placeat.",
      img: "demos/construction/images/icons/building.png"
    },
    {
      title: "Interiorly Designed",
      descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minima, facere distinctio placeat.",
      img: "demos/construction/images/icons/building.png"
    },
    {
      title: "Cost Effective Solutions",
      descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minima, facere distinctio placeat.",
      img: "demos/construction/images/icons/building.png"
    },
    {
      title: "Smart Builders",
      descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minima, facere distinctio placeat.",
      img: "demos/construction/images/icons/building.png"
    },
    {
      title: "Quality Infrastructure",
      descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minima, facere distinctio placeat.",
      img: "demos/construction/images/icons/building.png"
    },
  ];

  return {info}
});