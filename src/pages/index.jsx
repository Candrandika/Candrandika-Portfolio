// import ParticlesContainer from "../components/ParticlesContainer"
import ProjectsBtn from "../components/ProjectsBtn"
import Avatar from "../components/Avatar"
import {motion, AnimatePresence} from 'framer-motion'

import {fadeIn} from '../variants'


const Home = () => {
  return (
    <AnimatePresence mode="wait">
      <div className="box-border relative h-full min-h-screen py-32 overflow-hidden bg-primary/60">
        {/* text */}
        <div className="w-full h-full bg-gradient-to-t from-primary/0 via-black/40 to-primary/0">
          <div className="container flex flex-col justify-center h-full mx-auto text-center lg:pt-10 lg:text-left">
            <motion.div
              variants={fadeIn('down', 1.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-[14px] uppercase font-extralight tracking-widest text-accent">
              Hello, my name is
            </motion.div>
            {/* title */}
            <motion.h1 
              variants={fadeIn('down', 0.8)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1"
            >
              Candra Andika<br/>A Web<span className="text-accent">Developer</span>
            </motion.h1>
            {/* subtitle */}
            <motion.p 
              variants={fadeIn('down', 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-sm mx-auto mb-10 lg:max-w-xl lg:mx-0 lg:mb-16"
            >
              I&apos;m an Indonesian fullstack web developer with 2+ years of experience
            </motion.p>
            {/* btn */}
            {/* <motion.div
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex"
            >
              <ProjectsBtn />
            </motion.div> */}
          </div>
        </div>
        {/* Image */}
        {/* <div className="min-w-[1000px] w-full h-full absolute right-0 bottom-0 hidden xl:block z-0"> */}
          {/* bg-img */}
          {/* <div className="w-full h-full bg-none lg:bg-explosion lg:bg-cover lg:bg-right lg:bg-no-repeat mix-blend-color-dodge translate-z-0">
          </div> */}
          {/* avatar */}
          {/* <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease:"easeInOut" }}
            className="w-full h-full max-w-[500px] max-h-[400px] absolute top-32 lg:right-[8%] bg-secondary rounded-lg overflow-hidden"
          >
            <Avatar />
          </motion.div>
        </div> */}
      </div>
    </AnimatePresence>
  );
};

export default Home;
