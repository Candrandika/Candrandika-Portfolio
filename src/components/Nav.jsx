import {NavLink} from "react-router-dom"

import navData from "./NavData";

const Nav = () => {
  return (
    <nav className="flex flex-col items-center lg:justify-center gap-y-4 fixed h-max bottom-0 mt-auto lg:right-[2%] z-50 top-0 w-full lg:w-16 lg:max-w-md lg:h-screen">
        <div className="flex w-full lg:flex-col items-center justify-between lg:justify-center gap-y-10 md:px-40 lg:px-0 h-[80px] lg:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl lg:text-xl lg:rounded-full">
        {navData.map((link, index) => {
          return <NavLink key={index} to={link.path} className={({isActive}) => (isActive ? 'text-accent' : '')+' relative flex items-center group hover:text-accent transition-all'}>
            {/* tooltip */}
            <div className="absolute right-0 hidden pr-14 lg:group-hover:flex">
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">{link.name}</div>
                {/* triangle */}
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-1"></div>
              </div>
            </div>
            {/* icon */}
            <div>{link.icon}</div>
          </NavLink>
        })}
        </div>
    </nav>
  );
};

export default Nav;
