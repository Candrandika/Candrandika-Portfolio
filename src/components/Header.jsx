import {Link} from 'react-router-dom'
import Socials from '../components/Socials'

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-start py-8 lg:items-start gap-y-6">
          {/* logo */}
          <Link to={'/'}><img src={'/logo.svg'} width={48} height={48} loading="lazy"/></Link>
          {/* socials */}
          {/* <Socials/> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
