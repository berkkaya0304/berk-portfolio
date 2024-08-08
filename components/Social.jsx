import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';

const socials = [
     {icon: <FaGithub/>, path:"https://github.com/berkkaya0304"},
     {icon: <FaLinkedinIn/>, path:"https://www.linkedin.com/in/berkkaya0304/"},
     {icon: <FaYoutube/>, path:"https://www.youtube.com/@berkkaya0304"}
]

const Social = ({containderStyles, iconStyles}) => {
  return (
    <div className={containderStyles}>
      {socials.map((item,index) => {
        return (
        <Link key={index} href={item.path} className={iconStyles}>
        {item.icon}
        </Link>
      );
      })}
    </div>
  )
}

export default Social