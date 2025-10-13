import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export const useTheme = () => {
  const toggleTheme = useContext(ThemeContext);
  return toggleTheme;
};
