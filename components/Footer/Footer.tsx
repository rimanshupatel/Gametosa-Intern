import { footerLinks } from "@/constants/data";
import {
  Twitter,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, text: "rahul.a@gametosa.com" },
    { icon: <Phone className="w-5 h-5" />, text: "+91 74395 70027" },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "west bengal, kolkata, india",
    },
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
    { icon: <Github className="w-5 h-5" />, href: "#", name: "GitHub" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" },
  ];

  return (
    <footer className="footer_bg  text-cyan-400 backdrop-blur-lg border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10">
      <div className="">
        <div className="flex flex-wrap justify-between items-center px-16 py-2">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                className="h-12 w-auto bg-black rounded-full mr-3"
                src="https://gametosa.com/img/header.png"
                alt="Gametosa Logo"
              />
            </div>
            <p className="text-cyan-300/80">
              Elevating gaming experiences through innovation and community.
            </p>

            {/* Social links */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-cyan-400 hover:text-white transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-2 gap-8 py-4">
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-cyan-400/90 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="mt-0.5">{info.icon}</span>
                  <span className="text-cyan-400/90">{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full bg-cyan-400/40 border-t border-cyan-400/20 text-center text-white">
          <p>© {new Date().getFullYear()} Gametosa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
