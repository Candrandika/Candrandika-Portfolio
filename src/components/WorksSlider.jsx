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
    image: '/works/GameList.jpg',
    name: 'Web Game',
    date: '2022 - now',
    message: 'List of web game that i made by myself. Mostly using a native javascript for create the game.',
    links: [
      {
        icon: <FaGithub/>,
        url: 'https://www.github.com/Candrandika/candrandika.github.io'
      },
      {
        icon: <MdOutlineSmartDisplay/>,
        url: 'https://candrandika.github.io'
      }
    ]
  },
  {
    image: '/works/AnimeSea.jpg',
    name: 'AnimeSea',
    date: '2023',
    message: 'Website of anime list. It built using nextjs and jikan api.',
    links: [
      {
        icon: <FaGithub/>,
        url: 'https://www.github.com/Candrandika/animesea'
      },
      {
        icon: <MdOutlineSmartDisplay/>,
        url: 'https://anime-sea.vercel.app'
      }
    ]
  },
  {
    image: '/works/Progreso.jpg',
    name: 'Progreso',
    date: '2023',
    message: 'Website to trace your progress of activity, event, etc. It built using Laravel for the api and Vuejs for the frontend',
    links: [
      {
        icon: <FaGithub/>,
        url: 'https://www.github.com/Candrandika/Progreso'
      },
    ]
  },
  {
    image: '/works/Rebook.jpg',
    name: 'Rebook',
    date: '2023',
    message: 'Website to view and give a review of a book. It built using Laravel for the api and Vuejs for the frontend',
    links: [
      {
        icon: <FaGithub/>,
        url: 'https://www.github.com/Candrandika/Review-Buku'
      },
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
            <div className='flex flex-col lg:flex-row items-center h-full px-16 gap-x-8'>
              {/* project */}
              <div className='w-full max-w-[350px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
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
                    <img src={project.image} width={1345} height={600} alt="" />
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
              <div className='flex-1 flex flex-col justify-center before:w-[1px] lg:before:bg-white/20 lg:before:absolute lg:before:left-0 lg:before:h-[200px] relative lg:pl-20'>
                {/* quote icon */}
                {/* <div className='mb-4'>
                  <FaQuoteLeft className='mx-auto text-4xl xl:text-4xl text-white/20 md:mx-0'/>
                </div> */}
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
