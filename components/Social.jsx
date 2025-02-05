import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/berkkaya0304" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/berkkaya0304/" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@berkkaya0304" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/ber.kaya_" },
];

const Social = () => {
  return (
    <div className="h-[50px]">
      <div className="flex space-x-4">
        {socials.map((item, index) => {
          return (
            <a
              key={index}
              href={item.path}
              className="w-10 h-10 flex items-center justify-center"
              aria-label="Social Link"
            >
              {item.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Social;
