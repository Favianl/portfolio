import SectionTitle from './ui/SectionTitle';
import { FaGreaterThan } from 'react-icons/fa6';
import Icon from './ui/Icon';

interface Props {
  skills: {
    sectionTitle: { en: string; es: string };
    list: {
      skillsTitle: { en: string; es: string };
      skills: { name: string; iconColor: string }[];
    }[];
  };
  language: 'en' | 'es';
}

const Skills = ({ skills, language }: Props) => {
  return (
    <section
      data-section
      id='skills'
      className='scroll-mt-20 mb-16 bg-marine-blue-color py-8 rounded-2xl'
    >
      <SectionTitle title={skills.sectionTitle[language]} />
      <div className='mt-8 grid grid-cols-[repeat(auto-fit,minmax(150px,min-content))] gap-8 px-8 justify-center'>
        {skills.list.map((item) => (
          <article key={item.skillsTitle.en} className='pr-3'>
            <h3 className='text-center text-lg flex items-center gap-2 text-blue-color mb-2'>
              <span className='p-3'>
                <FaGreaterThan />
              </span>
              <span>{item.skillsTitle[language]}</span>
            </h3>
            <ul>
              {item.skills.map((s) => (
                <li
                  key={s.name}
                  className={`flex gap-2 items-center mb-3 text-sm cursor-pointer group`}
                  style={{ '--icon-color': s.iconColor } as React.CSSProperties}
                >
                  <span
                    className={`text-gray-color text-lg group-hover:text-[var(--icon-color)] transition-colors duration-700 p-3 relative z-10 before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-dark-blue-color before:rounded-full before:z-[-1] before:scale-0 group-hover:before:scale-100 before:transition-transform before:duration-500`}
                  >
                    <Icon iconName={s.name as TechName} />
                  </span>
                  <span className='select-none'>{s.name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
