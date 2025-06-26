import { useCallback, useEffect, useState } from "react";

function useTheme() {
  // Figure out the user's OS preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Initialize theme state from localStorage, or OS setting
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || (prefersDark ? "dark" : "light")
  );

  // Watch for OS preferences changes (e.g user flips system toggle)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark");
    const handler = (e) => {
      // Only update if user hasn't explicity chosen yet
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

    //   Apply theme class to <html> and ersist choice
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Expose a toggle function
    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }, []);

    return { theme, toggleTheme };
}

export default useTheme;
