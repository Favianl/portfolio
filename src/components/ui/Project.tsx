import { useState } from 'react';
import { IoArrowUndo, IoArrowRedo } from 'react-icons/io5';
import { FaExternalLinkAlt, FaGithub, FaCheck } from 'react-icons/fa';
import Icon from './Icon';

interface Project {
  name: string;
  type: string;
  image: string;
  description: string;
  tasks: string[];
  stack: string[];
  demo: string;
  source: string;
}

const Project = ({ project }: { project: Project }) => {
  const [flip, setFlip] = useState(false);
  return (
    <article className='mb-8 [perspective:1000px] max-w-[540px] sm:max-w-[850px] mx-auto'>
      <div
        className={`transition-all duration-500 [transform-style:preserve-3d] ${flip ? '[transform:rotateY(180deg)]' : ''} sm:[transform:rotateY(0deg)] rounded-xl bg-dark-blue-color relative sm:static sm:flex sm:p-4`}
      >
        <div className='[backface-visibility:hidden] flex-1 self-center'>
          <div className='p-4 sm:p-0 flex justify-between items-center sm:hidden h-[60px]'>
            <h3 className='font-bold text-sm'>{project.name}</h3>
            <button onClick={() => setFlip(true)} className=''>
              <IoArrowRedo size={24} />
            </button>
          </div>
          <img
            src={project.image}
            alt={project.name}
            className='rounded-xl p-1 sm:p-0'
          />
        </div>
        <div className='absolute sm:static inset-0 [transform:rotateY(180deg)] sm:[transform:rotateY(0deg)] [backface-visibility:hidden] rounded-xl text-xs border sm:border-none border-gray-color bg-dark-blue-color flex-1 h-full overflow-hidden sm:overflow-visible'>
          <div className='p-4 flex sm:block justify-between items-center sm:mb-2 h-[60px]'>
            <h3 className='font-bold text-base text-center'>{project.name}</h3>
            <button onClick={() => setFlip(false)} className='sm:hidden'>
              <IoArrowUndo size={24} />
            </button>
          </div>
          <div className='px-4 [height:calc(100%-60px)] sm:[height:auto] overflow-y-auto sm:overflow-y-visible'>
            <div className='flex items-center justify-between gap-2 mb-4 mt-4 sm:mt-0'>
              <p className='text-gray-color font-semibold'>{project.type}</p>
              <div className='flex gap-4 justify-between'>
                <a
                  href={project.demo}
                  target='_blank'
                  className='flex gap-1 items-center bg-dark-gray-color px-2 py-1 rounded-lg hover:bg-opacity-90 hover:text-yellow-color transition-colors duration-500'
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>
                <a
                  href={project.source}
                  target='_blank'
                  className='flex gap-1 items-center bg-dark-gray-color px-2 py-1 rounded-lg hover:bg-opacity-90 hover:text-yellow-color transition-colors duration-500'
                >
                  <FaGithub />
                  Source
                </a>
              </div>
            </div>
            <p className='mb-4'>{project.description}</p>
            <ul className='mb-4'>
              {project.tasks.map((t) => (
                <li key={t} className='flex gap-1 mb-2'>
                  <span className='text-light-blue-color pt-[2px]'>
                    <FaCheck />
                  </span>
                  {t}
                </li>
              ))}
            </ul>

            <h4 className='text-blue-color font-bold mb-2 text-sm text-center'>
              Stack
            </h4>
            <ul className='grid grid-cols-2 md:grid-cols-3 w-[80%] sm:w-auto mx-auto sm:mx-0 gap-y-3 gap-x-6 mb-4'>
              {project.stack.map((tech) => (
                <li key={tech} className='flex gap-2 items-center'>
                  <span className='text-sm text-gray-color'>
                    <Icon iconName={tech as TechName} />
                  </span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
