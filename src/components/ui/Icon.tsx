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
  SiAstro,
  SiWordpress,
  SiElementor,
  SiPrisma,
} from "react-icons/si";
import { FaGithub, FaNodeJs, FaReact, FaJava } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { RiNextjsLine } from "react-icons/ri";

const DaisyUI = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M12 0C7.828.001 4.396 3.433 4.395 7.605c.001 4.172 3.433 7.604 7.605 7.605c4.172-.001 7.604-3.433 7.605-7.605C19.604 3.433 16.172.001 12 0m0 .286c4.016 0 7.32 3.304 7.32 7.32c-.001 4.015-3.305 7.318-7.32 7.318S4.681 11.62 4.68 7.605c0-4.016 3.304-7.32 7.32-7.32zm0 4.04a3.294 3.294 0 0 0-3.279 3.279v.001A3.296 3.296 0 0 0 12 10.884a3.294 3.294 0 0 0 3.279-3.279A3.294 3.294 0 0 0 12 4.326M8.34 16.681h-.008a3.67 3.67 0 0 0-3.652 3.652v.015A3.67 3.67 0 0 0 8.332 24h7.336a3.67 3.67 0 0 0 3.652-3.652v-.016a3.67 3.67 0 0 0-3.652-3.652h-.008Z'
      />
    </svg>
  );
};

const Icon = ({ iconName }: { iconName: TechName }) => {
  const skillsList = {
    Javascript: <SiJavascript />,
    Typescript: <SiTypescript />,
    HTML: <SiHtml5 />,
    React: <FaReact />,
    "Next.js": <RiNextjsLine />,
    Astro: <SiAstro />,
    Wordpress: <SiWordpress />,
    Elementor: <SiElementor />,
    ReactRouter: <SiReactrouter />,
    CSS: <SiCss3 />,
    CSSModules: <SiCssmodules />,
    TailwindCSS: <SiTailwindcss />,
    MaterialUI: <SiMui />,
    DaisyUI: <DaisyUI />,
    NodeJS: <FaNodeJs />,
    ExpressJS: <SiExpress />,
    MySQL: <GrMysql />,
    "Git/Github": <FaGithub />,
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
    Prisma: <SiPrisma />,
  };

  const icon = skillsList[iconName];

  return icon;
};

export default Icon;
