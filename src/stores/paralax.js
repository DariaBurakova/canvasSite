import { defineStore } from 'pinia';

export const useParalax = defineStore('paralax', () => {
  const paralax = [
    {
      text: "Similique fugit repellendus expedita excepturi iure provident quia eaque. Repellendus, vero numquam?",
      name: "Steve Jobs",
      company: "Apple Inc.",
      img: ".src/assets/images/testimonials/3.jpg"
    },
    {
      text: "Natus voluptatum enim quod necessitatibus quis expedita harum provident eos obcaecati id culpa corporis molestias.",
      name: "Collis Ta'eed",
      company: "Envato Inc.",
      img: ".src/assets/images/testimonials/2.jpg"
    },
    {
      text: "Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum!",
      name: "John Doe",
      company: "XYZ Inc.",
      img: ".src/assets/images/testimonials/1.jpg"
    }
  ];

  return {paralax}
});