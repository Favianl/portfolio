import { useEffect, useRef, useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import links from '../data/Links.json';
import { MdLanguage } from 'react-icons/md';

interface Props {
  language: 'en' | 'es';
  setLanguage: React.Dispatch<React.SetStateAction<'en' | 'es'>>;
}

const Header = ({ language, setLanguage }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<null | string>(null);

  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const loadEntries = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(loadEntries, {
      rootMargin: '-60% 0px -40% 0px',
    });

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className='fixed top-0 right-4 left-4 z-50 mx-auto max-w-screen-lg bg-marine-blue-color bg-opacity-90 rounded-2xl border border-gray-color backdrop-blur-sm'
    >
      <nav className='flex flex-wrap justify-between items-center p-4'>
        <div>
          <a
            href='#'
            className='text-xl font-medium'
            onClick={() => setIsOpen(false)}
          >
            <span className='text-yellow-color'>L</span>F
          </a>
        </div>

        <button
          onClick={() =>
            setLanguage((prevState) => (prevState === 'en' ? 'es' : 'en'))
          }
          className='text-sm flex items-center gap-1 font-semibold ml-auto md:mr-auto md:ml-12 mr-4 text-gray-color'
        >
          <MdLanguage size={18} className='text-white-color' />
          {language === 'en' ? (
            <p className='text-nowrap flex items-center'>
              <span className='text-white-color mr-1'>en</span>
              <span className='w-[1px] h-[12px] mr-1 bg-gray-color'></span>
              es
            </p>
          ) : (
            <p className='text-nowrap flex items-center'>
              <span className='text-white-color mr-1'>es</span>
              <span className='w-[1px] h-[12px] mr-1 bg-gray-color'></span>
              en
            </p>
          )}
        </button>
        <div
          onClick={() => setIsOpen((prevState) => !prevState)}
          className='md:hidden flex justify-center items-center'
        >
          <button>
            {isOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>
        <div
          className={`w-full md:w-auto grid grid-rows-[0fr] ${
            isOpen ? 'grid-rows-[1fr]' : ''
          } transition-[grid-template-rows, padding] ease-in duration-300 md:block`}
        >
          <ul
            className={`flex flex-col md:flex-row justify-around items-center gap-8 md:gap-6 text-gray-color overflow-hidden md:h-auto ${
              isOpen ? 'py-8' : ''
            } transition-[padding] ease-in duration-300 md:overflow-visible md:py-0`}
          >
            {links.map((link) => (
              <li key={link.sectionId} className='w-full px-8 md:px-0'>
                <a
                  href={`#${link.sectionId}`}
                  className={`text-sm block px-1 linkUnderline ${
                    activeSection === link.sectionId
                      ? 'text-white-color linkUnderlineActive'
                      : ''
                  } hover:text-white-color relative transition-all duration-500`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label[language]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
