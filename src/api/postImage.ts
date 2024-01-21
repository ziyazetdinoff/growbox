import axios from "axios";
import { baseUrl } from "./base";

export const postImage = (data: File) => {

  let file = new FormData();
  file.append("file", data, data.name);

  return axios.post(`${baseUrl}class_image/`, file, {
    headers: {
      accept: "application/json",
      "Accept-Language": "en-US,en;q=0.8",
      "Content-Type": "multipart/form-data",
    },
  })
  // .then((response) => {
  //   return JSON.parse(JSON.stringify(response.data));
  // })
  // .then((data) => {
  //   console.log(data);
  //   return data
  // });
};
