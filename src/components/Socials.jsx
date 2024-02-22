import { Link } from 'react-router-dom'
import { RiInstagramFill, RiMailFill, RiGithubFill} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link to={'/'} target="_blank" className='hover:text-accent transition-all duration-300'>
        <RiInstagramFill />
      </Link>
      <Link to={'/'} target="_blank" className='hover:text-accent transition-all duration-300'>
        <RiMailFill />
      </Link>
      <Link to={'/'} target="_blank" className='hover:text-accent transition-all duration-300'>
        <RiGithubFill />
      </Link>
    </div>
  );
};

export default Socials;
