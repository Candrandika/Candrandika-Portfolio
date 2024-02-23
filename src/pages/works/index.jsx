import WorksSlider from "../../components/WorksSlider";
import {motion, AnimatePresence} from 'framer-motion'
import {fadeIn} from '../../variants'

const Testimonials = () => {
  return (
    <AnimatePresence>
      <div className="relative h-full min-h-screen py-32 overflow-hidden text-center bg-primary/30">
        <div className="container flex flex-col justify-center h-full mx-auto">
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-16 h2 lg:mb-0"
          >
            My <span className="text-accent">Works.</span>
          </motion.h2>
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <WorksSlider />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Testimonials;
