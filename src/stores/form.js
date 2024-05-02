import {defineStore} from 'pinia';
import { ref } from 'vue'

export const useForm = defineStore("form", () => {
  const inputValue = {
    name: ref(''),
    email: ref(''),
    message: ref(''),
  }

  const handleUpdateInput = (inputName, newName) => {
    inputValue[inputName].value  = newName;
  }

  return {inputValue, handleUpdateInput};
});