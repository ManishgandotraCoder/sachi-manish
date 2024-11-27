import { useState, useEffect } from "react";

export const useTheme = () => {
  // Default to system preference or light theme
  const getDefaultTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme;

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "" : "white-version";
  };

  const [theme, setTheme] = useState<string>(getDefaultTheme);

  useEffect(() => {
    // Apply theme to the document root
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Persist theme preference
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "white-version" ? "" : "white-version"));
  };

  return { theme, toggleTheme };
};
