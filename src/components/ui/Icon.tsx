import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMui,
  SiNeovim,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
  SiJsonwebtokens,
  SiCssmodules,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiSpring,
  SiReactrouter,
SiPrisma
} from 'react-icons/si';
import { FaGithub, FaNodeJs, FaReact, FaJava } from 'react-icons/fa6';
import { GrMysql } from 'react-icons/gr';
import { RiNextjsLine } from "react-icons/ri";

const Icon = ({ iconName }: { iconName: TechName }) => {
  const skillsList = {
    Javascript: <SiJavascript />,
    Typescript: <SiTypescript />,
    HTML: <SiHtml5 />,
    React: <FaReact />,
    'Next.js': <RiNextjsLine />,
    ReactRouter: <SiReactrouter />,
    CSS: <SiCss3 />,
    CSSModules: <SiCssmodules />,
    TailwindCSS: <SiTailwindcss />,
    MaterialUI: <SiMui />,
    NodeJS: <FaNodeJs />,
    ExpressJS: <SiExpress />,
    MySQL: <GrMysql />,
    'Git/Github': <FaGithub />,
    Docker: <SiDocker />,
    JWT: <SiJsonwebtokens />,
    Linux: <SiLinux />,
    VSCode: <SiVisualstudiocode />,
    Neovim: <SiNeovim />,
    Python: <SiPython />,
    Django: <SiDjango />,
    Postgres: <SiPostgresql />,
    Java: <FaJava />,
    Spring: <SiSpring />,
    Prisma: <SiPrisma />
  };

  const icon = skillsList[iconName];

  return icon;
};

export default Icon;
