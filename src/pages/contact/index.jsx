import Cicles from '../../components/Circles'
import { BsArrowRight } from 'react-icons/bs';
import {AnimatePresence, motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Contact = () => {
  return (
    <AnimatePresence>
      <div className="relative h-full min-h-screen overflow-hidden bg-primary/30">
        <div className="container flex items-center justify-center h-full py-32 mx-auto text-center xl:text-left">
          <div className="flex flex-col w-full max-w-[700px]">
            <motion.h2
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='mb-12 text-center h2'
            >
              Let{"'"}s <span className="text-accent">connect.</span>
            </motion.h2>

            <motion.form
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='flex flex-col flex-1 w-full gap-6 mx-auto'
            >
              <div className="flex w-full gap-x-6">
                <input type="text" placeholder='Name' className='input' />
                <input type="email" placeholder='Email' className='input' />
              </div>
              <input type="text" placeholder='Subject' className='input' />
              <textarea placeholder='Message' className='textarea'></textarea>
              <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-al duration-500'>Let{"'"}s talk</span>
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Contact;
