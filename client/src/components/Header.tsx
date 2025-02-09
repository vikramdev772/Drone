import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Leaf, Search, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "DellerShip", path: "/dellershippage" },
  ];

  return (
    <header className="fixed w-full z-50 px-4 md:px-6 py-4 backdrop-blur-lg bg-white/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="AgroneX Logo"
            className="h-8 w-auto object-contain"
            width={50}
            height={50}
          />
          <span className="text-green-400 font-medium text-xl">Aries</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-2 py-1 text-white/90 hover:text-white transition-colors group ${
                location.pathname === item.path ? "text-green-400" : ""
              }`}
            >
              <span>{item.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Search Button */}
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 hover:bg-green-500/30 text-white backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-green-500/20">
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white/90 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-white/10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-6 py-4 text-white/90 hover:text-white hover:bg-white/5 transition-colors ${
                location.pathname === item.path
                  ? "text-green-400 bg-white/5"
                  : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="p-6">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-green-500/20 hover:bg-green-500/30 text-white backdrop-blur-sm transition-all">
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
