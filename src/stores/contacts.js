import {defineStore} from 'pinia';
import { ref } from 'vue'

export const useContacts = defineStore("contacts", () => {
	const inputValue = {
		name: ref(''),
		email: ref(''),
		phone: ref(''),
		message: ref(''),
		subject: ref('')
	}

	const handleUpdateInput = (inputName, newName) => {
		inputValue[inputName].value  = newName;
	}
	const phone = "(1) 22 55412474";
	const email = "info@canvas.com";

	return {phone, email, inputValue, handleUpdateInput};
});