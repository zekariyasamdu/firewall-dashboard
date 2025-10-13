import * as React from "react";

type auth = { token: string | null; setToken: (token: string) => void };
export const authContext = React.createContext<auth | undefined>(undefined);
