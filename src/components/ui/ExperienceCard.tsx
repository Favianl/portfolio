interface Props {
  experience: ExperienceType;
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className='flex gap-x-3'>
      <section className='relative after:absolute after:top-0 after:bottom-0 after:left-[50%] after:-translate-x-[1px] after:w-[2px] after:bg-gray-color'>
        <div className='relative z-10 size-10 flex justify-center items-center'>
          <div className='size-3 rounded-full bg-marine-blue-color border-2 border-gray-color'></div>
        </div>
      </section>
      <section className='p-2 pb-8'>
        <p className='mb-1 text-gray-color text-base'>{experience.period}</p>
        <div className='bg-dark-blue-color p-4 rounded-lg'>
          <h3 className='font-semibold mb-1 text-base'>{experience.role}</h3>
          <h4 className='font-semibold text-gray-color mb-3'>
            {experience.organization}
          </h4>
          <p className='leading-7 text-white-color text-opacity-90'>
            {experience.description}
          </p>
        </div>
      </section>
    </article>
  );
};

export default ExperienceCard;
