import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "../pages/Users/Users";
import { baseUrl } from "./base";

export const useGetUsers = () => {
  const [newUsers, setNewUsers] = useState<User[]>()

  useEffect(() => {
    axios.get(`${baseUrl}new_users/`)
    .then((response) => {
      return JSON.parse(JSON.stringify(response.data));
    })
    .then(
      (data) => {
        console.log(data)
        setNewUsers(data as User[])
      }
    );
  }, []);
  return newUsers
};
