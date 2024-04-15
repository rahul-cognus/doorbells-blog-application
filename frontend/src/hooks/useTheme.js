// useTheme.js
import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const preferredTheme = getPreferredTheme();

    setTheme(storedTheme || preferredTheme);
  }, []);

  const getPreferredTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const setThemeAndStorePreference = (selectedTheme) => {
    localStorage.setItem("theme", selectedTheme);
    setTheme(selectedTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setThemeAndStorePreference(newTheme);
  };

  return { theme, toggleTheme };
};

export default useTheme;
