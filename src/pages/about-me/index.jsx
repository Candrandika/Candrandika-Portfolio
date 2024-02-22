import { useState } from "react";
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../variants"
import CountUp from 'react-countup'

// icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLaravel
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobexd,
  SiAdobephotoshop,
  SiVuedotjs,
  SiAdobeillustrator
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3Alt />,
          <FaJs />,
          <FaReact />,
          <SiVuedotjs />,
          <SiNextdotjs />,
          <FaLaravel />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<SiAdobexd />, <SiAdobephotoshop />, <SiAdobeillustrator/>],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'National Student Competency Competition - Medallion for Excelence',
        stage: '2023',
      },
      {
        title: 'National Student Competency Competition - Finalist',
        stage: '2023',
      },
      {
        title: 'Provincial Student Competency Competition - Winner',
        stage: '2023',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Frontend Developer - Hummatech',
        stage: '2023 - 2024',
      },
      {
        title: 'Fullstack Developer - Get Aplikasi Indonesia',
        stage: '2023',
      },
      {
        title: 'Intern - Hummasoft',
        stage: '2022',
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'Software Engineering - SMKN 1 Kepanjen',
        stage: '2020-2023',
      },
    ],
  },
];

const counterData = [
  {
    title: 'Years of experience',
    total: 2
  },
  {
    title: 'Finished Projects',
    total: 10
  },
  {
    title: 'Winning Awward',
    total: 3
  },
]

const AboutMe = () => {
  const [index, setIndex] = useState(0)

  return (
    <AnimatePresence>
      <div className="relative h-full min-h-screen py-32 overflow-hidden text-center bg-primary/30 xl:text-left">
        {/* <Circles /> */}
        {/* <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex absolute bottom-0 -left-[375px]"
        >
          <Avatar />
        </motion.div> */}
        <div className="container flex flex-col items-center h-full mx-auto xl:flex-row gap-x-6">
          {/* text */}
          <div className="flex flex-col justify-center flex-1">
            <motion.h2 
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              About <span className="text-accent">Me</span>.
            </motion.h2>
            <motion.p 
              variants={fadeIn('right', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[500px] mx-auto xl:mx-0 mb-6 lg:mb-12 px-2 xl:px-0"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, consequuntur illum nisi vero sunt maxime nesciunt molestiae facere!
            </motion.p>
            {/* counters */}
            <motion.div
              className="hidden mx-auto mb-8 md:flex md-max-w-xl xl:max-w-none xl:mx-0"
              variants={fadeIn('right', 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <div className="flex flex-1 xl:gap-x-6">
                {counterData.map((data, index) => {
                  return (
                    <div key={index} className="relative flex-1 after:w-[2px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                      <div className="mb-2 text-2xl font-extrabold xl:text-4xl text-accent">
                        <CountUp start={0} end={data.total} duration={5} />+
                      </div>
                      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                        {data.title}
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>
          {/* info */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
          >
            <div className="flex mx-auto mb-4 gap-x-4 xl:gap-x-8 xl:mx-0">
              {aboutData.map((item, indexItem) => {
                return (
                  <div 
                    key={indexItem}
                    className={`${
                      index === indexItem &&
                      'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`
                    }
                    onClick={() => setIndex(indexItem)}
                  >
                    {item.title}
                  </div>
                )
              })}
            </div>
            <div className="flex flex-col items-center py-2 xl:py-6 gap-y-2 xl:gap-y-4 xl:items-start">
              {aboutData[index].info.map((item, indexItem) => {
                return (
                  <div key={indexItem} className="flex flex-col items-center flex-1 md:flex-row max-w-max gap-x-2 text-white/60">
                    <div className="mb-2 font-light md:mb-0">{item.title}</div>
                    <div className="hidden md:flex">|</div>
                    <div>{item.stage}</div>
                    <div className="flex gap-x-4">
                      {item.icons?.map((icon, indexItem) => {
                        return (
                          <div key={indexItem} className="text-2xl text-white">{icon}</div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default AboutMe;
