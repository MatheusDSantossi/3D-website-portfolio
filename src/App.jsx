import { useState, useEffect, useCallback, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import _ from "lodash";

import { SpeedInsights } from "@vercel/speed-insights/react";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // const [scrollPosition, setScrollPosition] = useState(0); // Initial scroll position
  // 4000
  const [showEarth, setShowEarth] = useState(false); // Control whether EarthCanvas is displayed or not
  const [showLine, setShowLine] = useState(true); // Control whether LineCanvas is displayed or not

  // const { theme, toggleTheme } = useTheme();
  // const [transkey, setTransKey] = useState(0);
  // const [center, setCenter] = useState({ x: 0, y: 0 })
  // const iconRef = useRef(null);

  // Function to handle scroll events
  const handleScroll = useCallback(
    _.throttle(() => {
      const position = window.scrollY; // Get vertical scroll position
      // setScrollPosition(position); // Update state
      // console.log('Current scroll position:', position); // Log the position
      // console.log("BEFORE: ", showEarth)

      // Show Earth when user scrolls beyond 4000px (only once)
      if (position > 4000 && !showEarth) {
        setShowEarth(true);
      } else if (position <= 4000 && showEarth) {
        setShowEarth(false);
      }

      // hide LineCanvas when user scrolls beyond a certain distance
      if (position > 3500) {
        setShowLine(false);
      } else {
        setShowLine(true);
      }
    }, 200),
    [showEarth, showLine],
  );

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // Run only once when the component mounts

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={<HomePage showLine={showLine} showEarth={showEarth} />}
          />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <SpeedInsights />
      </BrowserRouter>
    </div>
  );
}

export default memo(App);
