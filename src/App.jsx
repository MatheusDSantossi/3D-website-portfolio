import { useState, useEffect, useCallback, memo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

import _ from 'lodash';

import { SpeedInsights } from '@vercel/speed-insights/react';
import { useTheme } from './hoc';
import ThemeTransition from './components/ThemeTransition';

function App() {

  const [scrollPosition, setScrollPosition] = useState(0); // Initial scroll position
  // 4000
  const [showEarth, setShowEarth] = useState(false); // Control whether EarthCanvas is displayed or not
  const [showLine, setShowLine] = useState(true); // Control whether LineCanvas is displayed or not

  // const { theme, toggleTheme } = useTheme();
  // const [transkey, setTransKey] = useState(0);
  // const [center, setCenter] = useState({ x: 0, y: 0 })
  // const iconRef = useRef(null);

  // Function to handle scroll events
  const handleScroll = useCallback(_.throttle(() => {
    const position = window.scrollY; // Get vertical scroll position
    setScrollPosition(position); // Update state
    console.log('Current scroll position:', position); // Log the position
    console.log("BEFORE: ", showEarth)

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

  }, 200), [showEarth, showLine]);

  useEffect(() => {

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [handleScroll]); // Run only once when the component mounts

  return (
    <div>
      <BrowserRouter>
        <div className='relative z-0 bg-primary-light dark:bg-primary'>
          <div className='bg-primary-light dark:bg-hero-pattern dark:bg-cover dark:bg-no-repeat dark:bg-center'>
            <Navbar />
            <Hero showLine={showLine} />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <SpeedInsights />
          {/* <Feedbacks /> */}

          <div className='relative z-0'>
            {/* Mount EarthCanvas only once */}
            <Contact />
            {showEarth && <StarsCanvas />}

            {/* <StarsCanvas /> */}

          </div>
        </div>

        
      </BrowserRouter>
        {/* <ThemeTransition 
          triggerKey={transkey}
          center={center}
          oldBg={theme === "dark" ? "#050816" : "#E6E6FA"}
          onComplete={() => setTransKey(0)}
        /> */}
    </div>
  );
}

export default memo(App)
