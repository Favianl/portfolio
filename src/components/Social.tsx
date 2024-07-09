import {
  FaLinkedin,
  FaXTwitter,
  FaGithub,
  FaFreeCodeCamp,
} from 'react-icons/fa6';
const Social = ({ twStyles }: { twStyles: string }) => {
  const socialLinks = [
    {
      icon: <FaLinkedin title='Linkedin' />,
      path: 'https://www.linkedin.com/in/lFavian',
    },
    { icon: <FaGithub title='Github' />, path: 'https://github.com/Favianl' },
    { icon: <FaXTwitter title='Twitter' />, path: 'https://x.com/lFavian_' },
    {
      icon: <FaFreeCodeCamp title='FreeCodeCamp' />,
      path: 'https://www.freecodecamp.org/Favianl',
    },
  ];

  return (
    <div className={`text-gray-color flex ${twStyles}`}>
      {socialLinks.map((social) => (
        <a
          className='text-lg p-1 hover:text-yellow-color transition-colors ease-in duration-300'
          key={social.path}
          href={social.path}
          target='_blank'
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
