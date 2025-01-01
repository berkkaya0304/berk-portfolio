import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

const ContactInfo = () => {
  const { translations } = useLanguage();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="text-2xl" />,
      href: "https://github.com/berkkaya0304",
      color: "hover:text-[#2dba4e]"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-2xl" />,
      href: "https://www.linkedin.com/in/berkkaya",
      color: "hover:text-[#0077b5]"
    },
  ];

  const contactDetails = [
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      text: translations.contact.info.phoneAvailable,
      isPhone: true,
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      text: "berkkaya0304@hotmail.com",
      href: "mailto:berkkaya0304@hotmail.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      text: translations.contact.info.address,
      href: "https://maps.app.goo.gl/NspC6TA6BGzKEg836",
    }
  ];

  return (
    <div className="w-full bg-secondary/5 backdrop-blur-sm rounded-2xl p-8">
      <div className="space-y-8">
        {/* Contact Details */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
            {translations.contact.info.title}
          </h3>
          <div className="space-y-4">
            {contactDetails.map((detail, index) => (
              <motion.div
                key={index}
                className={`flex items-center gap-4 text-muted-foreground ${!detail.isPhone && 'hover:text-blue-400'} transition-colors duration-300`}
                whileHover={{ x: detail.isPhone ? 0 : 10 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <span className="text-blue-400/80">{detail.icon}</span>
                {detail.isPhone ? (
                  <span className="italic">{detail.text}</span>
                ) : (
                  <a 
                    href={detail.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    {detail.text}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
            {translations.contact.info.followMe}
          </h3>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-white/5 rounded-xl ${social.color} transition-colors duration-300`}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 