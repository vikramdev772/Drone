import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Leaf, Search, Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Dealership", path: "/dealershippage" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const headerVariants = {
    initial: { y: -100 },
    animate: { y: 0 },
    exit: { y: -100 }
  };

  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={headerVariants}
      className={`fixed w-full z-50 px-4 md:px-6 py-4 transition-all duration-300
                ${scrolled 
                  ? 'backdrop-blur-xl bg-black/80 shadow-lg shadow-black/10' 
                  : 'backdrop-blur-lg bg-black/20'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={logo}
            alt="AgroneX Logo"
            className="h-8 w-auto object-contain transition-transform"
            width={50}
            height={50}
          />
          <motion.span 
            className="text-green-400 font-medium text-xl"
            whileHover={{ scale: 1.05 }}
          >
            Aries
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative px-2 py-1 text-white/90 hover:text-white transition-colors group"
            >
              <span className={`relative z-10 ${
                location.pathname === item.path ? "text-green-400" : ""
              }`}>
                {item.name}
              </span>
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-green-500"
                initial={{ width: location.pathname === item.path ? "100%" : "0%" }}
                animate={{ width: location.pathname === item.path ? "100%" : "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
        </nav>

        {/* Enhanced Search Button */}
        <div className="hidden md:flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full 
                       ${searchFocused 
                         ? 'bg-green-500/30 shadow-lg shadow-green-500/20' 
                         : 'bg-green-500/20'} 
                       hover:bg-green-500/30 text-white backdrop-blur-sm 
                       transition-all duration-300`}
          >
            <Search className="w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none w-24 focus:w-32 transition-all"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden p-2 text-white/90 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            {navItems.map((item, index) => (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                key={item.path}
              >
                <Link
                  to={item.path}
                  className={`flex items-center justify-between px-6 py-4 text-white/90 
                            hover:text-white hover:bg-white/5 transition-colors ${
                    location.pathname === item.path
                      ? "text-green-400 bg-white/5"
                      : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: navItems.length * 0.1 }}
              className="p-6"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 pl-10 rounded-full bg-white/5 
                           text-white placeholder-white/50 outline-none
                           focus:bg-white/10 transition-all"
                />
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;