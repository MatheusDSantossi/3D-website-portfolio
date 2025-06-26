import { motion } from 'framer-motion';

import { styles } from '../styles';
import { Line } from './canvas';

const Hero = ({ showLine }) => {
  return (
    <section className='relative w-full h-screen mx-auto bg-primary-light'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff">Matheus</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I’m a versatile software developer <br className='sm:block hidden' /> crafting everything from AI-powered chatbots to scalable web and cross-platform apps. I thrive on turning data into insights and building intuitive user experiences. My toolbox includes Python, React, Java, and modern data frameworks. Let’s build something amazing together!
            <br />
            <br />
          </p>
        </div>
      </div>
      {showLine && <Line />}
      {/* <Line /> */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev 
            animate={{
              y: [0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero