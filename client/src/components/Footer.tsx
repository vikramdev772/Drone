import { FC } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer: FC = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <img src={logo} alt="AgroneX Logo" className="h-10" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Aires
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Pioneering sustainable agriculture through advanced drone solutions.
              Made in India, innovating for global farming communities.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white relative w-fit">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-green-500 rounded-full"></span>
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:contact@agronex.com"
                className="flex items-center group hover:text-green-400 transition-colors"
              >
                <Mail className="w-5 h-5 mr-3 text-green-500 group-hover:text-green-400" />
                <span>contact@agronex.com</span>
              </a>
              <a
                href="tel:+911234567890"
                className="flex items-center group hover:text-green-400 transition-colors"
              >
                <Phone className="w-5 h-5 mr-3 text-green-500 group-hover:text-green-400" />
                <span>+91 123 456 7890</span>
              </a>
              <div className="flex items-center group">
                <MapPin className="w-5 h-5 mr-3 text-green-500" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white relative w-fit">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-green-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group flex items-center hover:text-green-400 transition-colors"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 transition-all group-hover:w-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white relative w-fit">
              Connect With Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-green-500 rounded-full"></span>
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 bg-gray-800 rounded-lg hover:bg-green-500 transition-all hover:scale-110 group"
                >
                  <social.icon className="w-5 h-5 group-hover:text-white" />
                </a>
              ))}
            </div>
            <div className="mt-6 bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Aires. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-400">
              <Link to="/privacy" className="hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-green-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
