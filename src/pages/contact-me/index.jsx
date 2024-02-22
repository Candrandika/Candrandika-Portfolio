import Cicles from '../../components/Circles'
import {
  FaRegEnvelope,
  FaGithub,
  FaWhatsapp
} from 'react-icons/fa6';
import {RxArrowTopRight} from 'react-icons/rx'
import {AnimatePresence, motion} from 'framer-motion'
import {fadeIn} from '../../variants'
import { Link } from 'react-router-dom';

const contactData = [
  {
    name: 'Email',
    url: 'mailto:candrandika999@gmail.com',
    value: 'candrandika999@gmail.com',
    icon: <FaRegEnvelope />
  },
  {
    name: 'Github',
    url: 'https://github.com/Candrandika',
    value: '@Candrandika',
    icon: <FaGithub />
  },
  {
    name: 'Whatsapp',
    url: 'https://wa.me/6287743328843',
    value: '(+62) 877-4332-8843',
    icon: <FaWhatsapp />
  },
]

const ContactMe = () => {
  return (
    <AnimatePresence>
      <div className="relative h-full min-h-screen overflow-hidden bg-primary/30">
        <div className="container flex items-center justify-center h-full py-32 mx-auto text-center xl:text-left">
          <div className="flex flex-col w-full">
            <motion.h2
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='mb-12 text-center h2'
            >
              Let{"'"}s <span className="text-accent">connect.</span>
            </motion.h2>

            <motion.div
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='flex flex-col flex-1 w-full gap-6 mx-auto lg:flex-row'
            >
              {contactData.map((contact, index) => {
                return (
                  <Link to={contact.url} key={index} target="_blank" className='backdrop-blur-sm bg-[rgba(65,47,123,0.15)] justify-between lg:justify-center items-center flex-1 rounded-lg px-6 py-8 flex flex-row lg:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
                    {/* icon */}
                    <div className="mb-0 text-4xl lg:mb-4 text-accent">{contact.icon}</div>
                    {/* text */}
                    <div className='mb-0 text-center lg:mb-8'>
                      <div className='mb-2 text-lg'>{contact.name}</div>
                      <div className='max-w-[350px] text-[14px] uppercase font-extralight tracking-widest'>{contact.value}</div>
                    </div>
                    {/* arrow */}
                    <div className="text-3xl">
                      <RxArrowTopRight className='transition-all duration-300 group-hover:rotate-45 group-hover:text-accent'/>
                    </div>
                  </Link>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ContactMe;
