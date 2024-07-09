import { FaExternalLinkAlt } from 'react-icons/fa';
import Project from './ui/Project';
import SectionTitle from './ui/SectionTitle';

interface ProjectType {
  name: string;
  image: string;
  info: {
    en: {
      type: string;
      description: string;
      tasks: string[];
    };
    es: {
      type: string;
      description: string;
      tasks: string[];
    };
  };
  stack: string[];
  demo: string;
  source: string;
}

interface Props {
  projects: {
    sectionTitle: { en: string; es: string };
    list: ProjectType[];
    moreLabel: { en: string; es: string };
    moreLink: string;
  };
  language: 'es' | 'en';
}

const Projects = ({ projects, language }: Props) => {
  return (
    <section
      data-section
      id='projects'
      className='scroll-mt-20 mb-16 bg-marine-blue-color pt-8 px-2 sm:p-8 rounded-2xl'
    >
      <SectionTitle title={projects.sectionTitle[language]} />
      <div className='mt-8'>
        {projects.list.map((project) => (
          <Project
            key={project.name}
            project={{
              ...project,
              ...project.info[language],
            }}
          />
        ))}
      </div>
      <div className='text-sm text-center py-8'>
        <a
          href={projects.moreLink}
          target='_blank'
          className='p-2 border-b-[3px] border-yellow-color flex gap-2 items-center w-max mx-auto text-gray-color hover:text-white-color transition-colors duration-500'
        >
          {projects.moreLabel[language]}
          <FaExternalLinkAlt />
        </a>
      </div>
    </section>
  );
};

export default Projects;
