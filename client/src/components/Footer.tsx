import { FC, useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Footer: FC = () => {
  const [emailFocused, setEmailFocused] = useState(false);
  const [email, setEmail] = useState("");

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-500" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-500" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
  ];

  const quickLinks = [
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Handle subscription
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 py-20 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <motion.img 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.7 }}
                src={logo} 
                alt="AgroneX Logo" 
                className="h-12" 
              />
              <span className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 
                             bg-clip-text text-transparent">
                Aires
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-lg">
              Pioneering sustainable agriculture through advanced drone solutions.
              Made in India, innovating for global farming communities.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white relative w-fit">
              Contact Us
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                viewport={{ once: true }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
              />
            </h3>
            <div className="space-y-4">
              {[
                { icon: Mail, text: "contact@agronex.com", href: "mailto:contact@agronex.com" },
                { icon: Phone, text: "+91 123 456 7890", href: "tel:+911234567890" },
                { icon: MapPin, text: "Bangalore, India" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ x: 5 }}
                  className="flex items-center group cursor-pointer hover:text-green-400 transition-colors"
                >
                  <item.icon className="w-5 h-5 mr-3 text-green-400 group-hover:scale-110 transition-transform" />
                  <span className="text-lg">{item.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white relative w-fit">
              Quick Links
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                viewport={{ once: true }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
              />
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <Link
                    to={link.href}
                    className="group flex items-center text-lg hover:text-green-400 transition-colors"
                  >
                    <motion.span 
                      className="w-2 h-2 bg-green-400 rounded-full mr-3 transition-all 
                               group-hover:w-3 group-hover:bg-green-500"
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white relative w-fit">
              Connect With Us
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                viewport={{ once: true }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
              />
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  className={`p-3 bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 
                            hover:border-green-500/30 transition-all group ${social.color}`}
                >
                  <social.icon className="w-5 h-5 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 
                         hover:border-green-500/30 transition-all duration-300"
            >
              <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 backdrop-blur-sm 
                             border border-white/10 text-white placeholder-gray-400 
                             focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 
                             transition-all duration-300"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 
                           transition-colors shadow-lg shadow-green-500/20 flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Copyright Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-white/10 bg-black/40 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Aires. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-400">
              {["Privacy Policy", "Terms of Service"].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ color: "#4ade80", x: 2 }}
                  className="transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;