import { useEffect, useMemo, useState } from "react";
import { authContext } from "../../context/AuthContext";
import axios from "axios";

interface IAuth {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: IAuth) => {
  //const [token, _setToken] = useState<string | null>(
  // localStorage.getItem("access_token")
  //);
  const [token, _setToken] = useState<string | null>(null);
  console.log(token);

  function setToken(token: string | null) {
    _setToken(token);
  }

  useEffect(() => {
    function setTokenInLocalStorage() {
      if (token) {
        localStorage.setItem("access_token", token);
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      } else {
        localStorage.removeItem("access_token");
        delete axios.defaults.headers.common["access_token"];
      }
    }
    setTokenInLocalStorage();
  }, [token]);

  const auth = useMemo(() => {
    return {
      token,
      setToken,
    };
  }, [token]);

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
