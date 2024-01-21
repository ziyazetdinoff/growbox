import { useEffect, useState } from "react";
import { Roles } from "../pages/Auth/Auth";

export const useRole = () => {
  const [currentRole, setRole] = useState<Roles | undefined>();
  useEffect(() => {
    const role = localStorage.getItem("role") as Roles; 
    role && setRole(role);
  }, [])
  return currentRole;
};