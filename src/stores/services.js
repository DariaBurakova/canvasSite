import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useServices = defineStore('services', () => {

	const services = [
		{
			name: "-- Select One --",
			val: ""
		},
		{
			name: "Wordpress",
			val: "Wordpress"
		},
		{
			name: "PHP / MySQL",
			val: "PHP / MySQL"
		},
		{
			name: "HTML5 / CSS3",
			val: "HTML5 / CSS3"
		},
		{
			name: "Graphic Design",
			val: "Graphic Design"
		},
	]

	const valueItem = ref('');

	const handleValueItem = (val) => {
		valueItem.value = val;
	}
	return {services, handleValueItem, valueItem}
});