import { defineStore } from 'pinia';

export const useNavigation = defineStore('navigation', () => {
    const menuItems = [
      {href: "/", name: "Home"},
      {href: "/services", name: "What we do", subList: [
          {href: "#", name: "Item 1"},
          {href: "#", name: "Item 2"},
          {href: "#", name: "Item 3"},
          {href: "#", name: "Item 4"},
          {href: "#", name: "Item 5"},
        ]},
      {href: "/about", name: "About Us"},
      {href: "/project", name: "Projects"},
      {href: "/blog", name: "News"},
      {href: "/contact", name: "Contact"}
    ];

    return {menuItems}
});