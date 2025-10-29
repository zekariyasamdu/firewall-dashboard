import { ThemeContext } from "@/context/ThemeContext";
import { useState, useEffect, useMemo } from "react";

export const ThemeProvider = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const _theme = localStorage.getItem("theme");
    if (_theme && (_theme == "dark" || _theme == "light")) return _theme;
    return "dark";
  });

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  console.log(theme);
  const toggleTheme = useMemo(() => {
    return {
      theme,
      setTheme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={toggleTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
