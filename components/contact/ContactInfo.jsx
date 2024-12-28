import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "If Needed - Provided",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "berkkaya0304@hotmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Yenimahalle/ANKARA",
  },
];

const ContactInfo = () => {
  return (
    <ul className="flex flex-col gap-10">
      {contactInfo.map((item, index) => (
        <li key={index} className="flex items-center gap-6">
          <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
            <div className="text-[28px]">{item.icon}</div>
          </div>
          <div className="flex-1">
            <p className="text-white/60">{item.title}</p>
            <h3 className="text-xl">{item.description}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactInfo; 