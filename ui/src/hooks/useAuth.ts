import { useContext } from "react";
import { authContext } from "../context/AuthContext";

export function useAuth() {
  const auth = useContext(authContext);
  if (auth === undefined)
    throw new Error("useAuth needs to be in a auth provider");
  return auth;
}
