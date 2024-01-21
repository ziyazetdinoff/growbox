import axios from "axios";
import { baseUrl } from "./base";

export interface UserData {
  name: string;
  email: string;
  question: string;
}

export const postUser = (data: UserData) => {
  axios
      .post(`${baseUrl}new_users/`, data)
      .then((response) => {
        return JSON.parse(JSON.stringify(response.data));
      })
      .then((data) => {
        console.log(data);
      })
};
