"use client";

import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';

const SocialLinks = () => {
  const socialLinks = [
    {
      url: "https://github.com/berkkaya0304",
      icon: <FaGithub />,
      label: "Visit GitHub Profile"
    },
    {
      url: "https://www.linkedin.com/in/berkkaya0304/",
      icon: <FaLinkedin />,
      label: "Visit LinkedIn Profile"
    },
    {
      url: "https://www.youtube.com/@berkkaya0304",
      icon: <FaYoutube />,
      label: "Visit YouTube Channel"
    },
    {
      url: "https://www.instagram.com/ber.kaya_",
      icon: <FaInstagram />,
      label: "Visit Instagram Profile"
    }
  ];

  return (
    <div className="flex gap-3">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 border border-accent rounded-full flex justify-center items-center hover:bg-accent hover:text-white transition-all duration-300"
          aria-label={social.label}
        >
          {social.icon}
          <span className="sr-only">{social.label}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 