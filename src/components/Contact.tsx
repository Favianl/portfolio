import Social from './Social';
import ContactForm from './ui/ContactForm';
import SectionTitle from './ui/SectionTitle';

interface Props {
  contact: {
    sectionTitle: string;
    sectionText: string;
    form: FormType;
  };
}

const Contact = ({ contact }: Props) => {
  return (
    <section
      data-section
      id='contact'
      className='scroll-mt-20 mb-8 bg-marine-blue-color py-8 rounded-2xl'
    >
      <SectionTitle title={contact.sectionTitle} />

      <div className='my-8 px-2 sm:px-8 md:flex gap-8 max-w-[850px] mx-auto'>
        <div className='flex-1 mb-12 md:mb-0'>
          <p className='leading-8 md:mb-16 px-2 sm:px-0'>
            {contact.sectionText}
          </p>
          <Social twStyles='hidden md:flex gap-8' />
        </div>
        <ContactForm form={contact.form} />
      </div>
      <footer className='mt-16 md:hidden'>
        <Social twStyles='justify-center gap-8' />
      </footer>
    </section>
  );
};

export default Contact;
