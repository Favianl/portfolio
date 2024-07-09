import ExperienceCard from './ui/ExperienceCard';
import SectionTitle from './ui/SectionTitle';

interface Props {
  experience: {
    sectionTitle: string;
    list: ExperienceType[];
  };
}

const Experience = ({ experience }: Props) => {
  return (
    <section
      data-section
      id='experience'
      className='scroll-mt-20 mb-16 bg-marine-blue-color py-8 sm:p-8 rounded-2xl'
    >
      <SectionTitle title={experience.sectionTitle} />
      <div className='mt-8 sm:max-w-md mx-auto'>
        {experience.list.map((item) => (
          <ExperienceCard key={item.period} experience={item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
