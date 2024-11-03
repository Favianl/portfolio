import '@fontsource/fira-code/300.css';
import '@fontsource/fira-code/400.css';
import '@fontsource/fira-code/500.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { useEffect, useState } from 'react';
import about from './data/About.json';
import skills from './data/Skills.json';
import projects from './data/Projects.json';
import experience from './data/Experience.json';
import contact from './data/Contact.json';

type LanguageType = "en" | "es";

function App() {
  const [language, setLanguage] = useState<LanguageType>(() => {
    const storedLanguage = localStorage.getItem('language') as LanguageType;
    return storedLanguage ? storedLanguage : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <div className='app font-fira py-[0.1px] text-white-color min-w-[320px] text-sm'>
      <div className='max-w-screen-lg mx-4 lg:mx-auto'>
        <Header language={language} setLanguage={setLanguage} />
        <main className='pt-20'>
          <About about={about[language]} />
          <Skills skills={skills} language={language} />
          <Projects projects={projects} language={language} />
          <Experience experience={experience[language]} />
          <Contact contact={contact[language]} />
        </main>
      </div>
    </div>
  );
}

export default App;
