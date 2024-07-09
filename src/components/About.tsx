import { FaGreaterThan } from 'react-icons/fa6';
import programmerImg from '../assets/programmer.png';
import monitorImg from '../assets/monitor.png';
import resume from '../assets/resume.pdf';
import SectionTitle from './ui/SectionTitle';
import Social from './Social';

interface Props {
  about: {
    sectionTitle: string;
    greeting: string;
    name: string;
    role: string;
    aboutText: string;
  };
}

const About = ({ about }: Props) => {
  return (
    <section data-section id='about' className='scroll-mt-20 mb-16'>
      <article className='mb-6 sm:flex justify-evenly items-center'>
        <div className='text-center sm:text-left py-6'>
          <p className='mb-4 pl-0 sm:pl-1 text-white-color text-opacity-80 text-base'>
            {about.greeting}
          </p>
          <h1 className='text-5xl sm:text-5xl font-medium mb-4'>
            {about.name}
          </h1>
          <h3 className='flex justify-center sm:justify-start items-center gap-2 text-blue-color mb-4'>
            <FaGreaterThan />
            <span className='text-lg sm:text-xl'>{about.role}</span>
          </h3>
          <div className='flex gap-9 items-center w-max mx-auto'>
            <Social twStyles='justify-center sm:justify-start gap-6 pl-0 sm:pl-1' />
            <button className='bg-dark-gray-color py-1 px-4 rounded-full text-base hover:bg-opacity-90 hover:text-yellow-color transition-colors duration-500'>
              <a href={resume} target='_blank'>
                Resume
              </a>
            </button>
          </div>
        </div>
        <div className='max-w-xs mx-auto sm:mx-0'>
          <img src={programmerImg} alt='programmer image' className='' />
        </div>
      </article>
      <article className='bg-marine-blue-color p-8 rounded-2xl'>
        <SectionTitle title={about.sectionTitle} />
        <div className='sm:flex justify-center items-center gap-2 mt-5'>
          <div className='hidden sm:block w-[30%] min-w-[300px]'>
            <img className='' src={monitorImg} alt='monitor image' />
          </div>
          <p className='font-light text-sm leading-7 sm:max-w-md'>
            {about.aboutText}
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
