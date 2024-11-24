import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  // const [activeCanvas, setActiveCanvas] = useState('computers');

  // const heroSectionRef = useRef(null);
  // const contactSectionRef = useRef(null);

  // const scrollToSection = (section) => {
  //   if (section === 'hero' && heroSectionRef.current) {
  //     heroSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  //     setActiveCanvas('computers');
  //   } else if (section === 'contact' && contactSectionRef.current) {
  //     contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  //     setActiveCanvas('earth');
  //   }
  // };

  // // Detect scroll position and update the active canvas accordingly
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const heroRect = heroSectionRef.current.getBoundingClientRect();
  //     const contactRect = contactSectionRef.current.getBoundingClientRect();

  //     // Determine which section is currently in view
  //     if (heroRect.top < window.innerHeight && heroRect.bottom > 0) {
  //       setActiveCanvas('computers');
  //     } else if (contactRect.top < window.innerHeight && contactRect.bottom > 0) {
  //       setActiveCanvas('earth');
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

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
            <StarsCanvas />
            
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
