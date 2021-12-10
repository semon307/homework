import axios from "axios";

export const request = (isChecked: boolean) => {
   return axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`, {success: isChecked})
}