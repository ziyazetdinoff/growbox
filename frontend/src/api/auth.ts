import axios from "axios";
import { baseUrl } from "./base";

export interface IUser {
  email: string;
  password: string;
  role?: string;
}

export const authUser = (data: IUser) => {
  return axios
    .post(`${baseUrl}auth/`, data)
    // .then((response) => {
    //   return JSON.parse(JSON.stringify(response.data));
    // })
    // .then((data) => {
    //   console.log(data);
    // });
};
