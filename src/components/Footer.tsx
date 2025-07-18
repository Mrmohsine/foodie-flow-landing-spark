
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react";
import Button from "./Button";
import { useUrl } from "../context/Url.jsx";
const Footer = () => {
  const { url, setUrl } = useUrl();
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8" id="contact">
      <div className="foodie-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Information */}
          <div>
            <motion.div
              className="font-bold text-2xl flex items-center mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-foodie-orange">Foodie</span>
              <span className="text-white">Flow</span>
            </motion.div>
            <p className="text-gray-400 mb-4">
              Revolutionizing restaurant menus with interactive digital solutions that enhance the dining experience.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={18} />, href: "#" },
                { icon: <Instagram size={18} />, href: "#" },
                { icon: <Twitter size={18} />, href: "#" },
                { icon: <Linkedin size={18} />, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 text-gray-300 hover:text-white p-2 rounded-full transition-colors"
                  whileHover={{ scale: 1.1, backgroundColor: "#FF6B35" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="ms-36 me-20">
            <h3 className="text-lg font-semibold mb-4 ">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Features", "How It Works", "Reviews", "FAQ"].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-foodie-orange transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3 text-foodie-orange" />
                <span>0711404....</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3 text-foodie-orange" />
                <span>mohcin</span>
              </li>
              <li className="mt-4">
                <Button href={url}>
                  Get started
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} FoodieFlow. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foodie-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foodie-orange transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foodie-orange transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
