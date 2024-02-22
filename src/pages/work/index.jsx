import WorkSlider from '../../components/WorkSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeIn } from '../../variants'

const Work = () => {
  return (
    <AnimatePresence>
      <div className='relative flex items-center h-full min-h-screen overflow-hidden bg-primary/30 py-36'>
        <Circles />
        <div className="container mx-auto">
          <div className='flex flex-col xl:flex-row gap-x-8'>
            {/* text */}
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 xl:mt-12"
              >
                My Work <span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus dolores consectetur libero eos dolor minima excepturi! Itaque, a error!
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='w-full xl:max-w-[65%]'
            >
              {/* slider */}
              <WorkSlider/>
            </motion.div>
          </div>
        </div>
        <Bulb/>
      </div>
    </AnimatePresence>
  );
};

export default Work;