import { defineStore } from 'pinia';

export const useClients = defineStore('clients', () => {
  const clients = [
    {
      img: "./src/assets/images/clients/1.png",
      href: "#",
      alt: "Clients"
    },
    {
      img: "./src/assets/images/clients/2.png",
      href: "#",
      alt: "Clients"
    },
    {
      img: "./src/assets/images/clients/3.png",
      href: "#",
      alt: "Clients"
    },
    {
      img: "./src/assets/images/clients/4.png",
      href: "#",
      alt: "Clients"
    },
    {
      img: "./src/assets/images/clients/5.png",
      href: "#",
      alt: "Clients"
    },
    {
      img: "./src/assets/images/clients/6.png",
      href: "#",
      alt: "Clients"
    },
  ];

  const title = "Clients Overview";
  const descr = "We prize our Clients more than everything else. We strive to provide Quality Services to all our Clients on a Priority Basis. You are invited to join our Clients List and enjoy our Services.";
  const seeMore = {
    text: "See more..",
    href: "#"
  }

  return {clients, title, descr, seeMore};
});