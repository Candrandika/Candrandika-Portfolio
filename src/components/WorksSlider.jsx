import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// icons
import {
  FaQuoteLeft,
  FaGithub
} from 'react-icons/fa'
import {MdOutlineSmartDisplay} from 'react-icons/md'
import { Link } from 'react-router-dom'

// testimonial data
const testimonialData = [
  {
    image: '/thumb1.jpg',
    name: 'First Project',
    date: '2024',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    links: [
      {
        icon: <FaGithub/>,
        url: 'https://www.github.com'
      },
      {
        icon: <MdOutlineSmartDisplay/>,
        url: 'https://www.google.com'
      }
    ]
  },
  {
    image: '/thumb2.jpg',
    name: 'Second Project',
    date: '2023',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/thumb3.jpg',
    name: 'Newest Project',
    date: '1999',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    links: [
      {
        icon: <FaGithub/>,
        url: 'https://www.github.com'
      },
      {
        icon: <MdOutlineSmartDisplay/>,
        url: 'https://www.google.com'
      }
    ]
  },
  {
    image: '/thumb4.jpg',
    name: 'Nothing to Do',
    date: '2030',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    links: [
      {
        icon: <FaGithub/>,
        url: 'https://www.github.com'
      },
      {
        icon: <MdOutlineSmartDisplay/>,
        url: 'https://www.google.com'
      }
    ]
  },
];

const WorksSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ 
        clickable: true
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialData.map((project, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center h-full px-16 md:flex-row gap-x-8'>
              {/* project */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mx-auto mb-2 relative overflow-hidden group rounded'>
                    <div className="absolute flex justify-center items-center text-center bg-black/60 w-full bottom-0 opacity-0 group-hover:opacity-100 gap-3 transition-all duration-300">
                      {project.links?.map((link, linkIndex) => {
                        return (
                          <Link key={linkIndex} to={link.url} target="_blank" className='my-2 hover:text-accent text-lg'>{link.icon}</Link>
                        )
                      })}
                      {(!project.links || project.links.length == 0) ? <div className="font-extralight">sorry, it has nothing to show</div> : '' }
                    </div>
                    <img src={project.image} width={1280} height={720} alt="" />
                  </div>
                  <div className='flex justify-center items-center'>
                    {/* name */}
                    <div className='text-lg'>{project.name} |</div>
                    {/* work */}
                    <div className='text-[12px] uppercase font-extralight tracking-widest'>| {project.date}</div>
                  </div>
                </div>
              </div>
              {/* msg */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='mx-auto text-4xl xl:text-6xl text-white/20 md:mx-0'/>
                </div>
                {/* testimonial */}
                <div className='text-center xl:text-lg md:text-left '>{project.message}</div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default WorksSlider;
