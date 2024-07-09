type TechName =
  | 'Javascript'
  | 'Typescript'
  | 'HTML'
  | 'React'
  | 'ReactRouter'
  | 'CSS'
  | 'CSSModules'
  | 'TailwindCSS'
  | 'MaterialUI'
  | 'NodeJS'
  | 'ExpressJS'
  | 'MySQL'
  | 'Git/Github'
  | 'Docker'
  | 'JWT'
  | 'Linux'
  | 'VSCode'
  | 'Neovim'
  | 'Python'
  | 'Django'
  | 'Postgres'
  | 'Java'
  | 'Spring';

type ExperienceType = {
  period: string;
  role: string;
  organization: string;
  description: string;
};

type FormType = {
  labels: {
    name: string;
    email: string;
    message: string;
    send: string;
  };
  errorMessages: {
    name: {
      empty: string;
      format: string;
      length: string;
    };
    email: {
      empty: string;
      format: string;
    };
    message: {
      empty: string;
      length: string;
    };
  };
  success: string;
  error: string;
};
