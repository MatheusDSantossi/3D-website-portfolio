import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {

  const [scrollPosition, setScrollPosition] = useState(0); // Initial scroll position
  // 4000

  // Function to handle scroll events
  const handleScroll = () => {
    const position = window.scrollY; // Get vertical scroll position
    setScrollPosition(position); // Update state
    console.log('Current scroll position:', position); // Log the position
  };

  useEffect(() => {
    if (scrollPosition <= 4000) {
      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []); // Run only once when the component mounts


  return (
    <div>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          {/* <div ref={heroSectionRef} className='bg-hero-pattern bg-cover bg-no-repeat bg-center'> */}
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            {/* {activeCanvas === 'computers' && <Hero />} */}
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <SpeedInsights />
          {/* <Feedbacks /> */}
          {/* <div ref={contactSectionRef} className='relative z-0'> */}
          <div className='relative z-0'>
            {/* {activeCanvas === 'earth' && <Contact />} */}
            <Contact />
            {scrollPosition > 4000 && <StarsCanvas />}

          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
