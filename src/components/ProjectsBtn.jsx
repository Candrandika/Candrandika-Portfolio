import { Link } from "react-router-dom";
import {HiArrowRight} from 'react-icons/hi2'

const ProjectsBtn = () => {
  return (
    <div className="mx-auto lg:mx-0 z-10">
      <Link 
        to={'/work'}
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <img
          src={'/rounded-text.png'}
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />
        <HiArrowRight className="absolute text-4xl transition-all duration-300 group-hover:translate-x-2"/>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
