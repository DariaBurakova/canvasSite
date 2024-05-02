import { defineStore } from 'pinia';

export const useGoodHands = defineStore('good-hands', () => {
  const lists = [
        "Market Leader since 1915",
        "Positive Results within Deadlines",
	    "100% Reliability &amp; Guarantee",
	    "Dedicated Professional Team of 500+",
	    "Unmatched After Project Completion Support",
  ];

  const title = "You're in Good Hands.";
  const descr = "Five Points that define Our Reliability.";
  const img = "#";

  return {lists, title, descr, img};
});