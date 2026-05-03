import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Components', href: '/components' },
    { name: 'Supervisor', href: '/supervisor' },
    { name: 'Team', href: '/team' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex items-center justify-between rounded-2xl transition-all duration-500 ${isScrolled ? 'glass px-6 py-3 glow-primary' : 'bg-transparent px-2 py-2'} ${location.pathname === '/' && !isScrolled ? 'text-white' : 'text-slate-800 dark:text-white'}`}>
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full"></div>
              <Cpu className="text-primary-500 w-8 h-8 relative z-10" />
            </div>
            <span className={`text-xl font-bold tracking-wider ${location.pathname === '/' && !isScrolled ? 'text-white' : 'text-slate-900 dark:text-white'}`}>Team <span className="text-primary-500">Quantum</span></span>
          </Link>
          
          {/* Desktop Nav */}
          <div 
            className="hidden md:flex items-center gap-1 bg-slate-100/50 dark:bg-dark-800/50 p-1 rounded-full border border-slate-200/50 dark:border-white/5 backdrop-blur-md"
            onMouseLeave={() => setHoveredTab(null)}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              const isHovered = hoveredTab === link.name;
              return (
                <Link 
                  key={link.name} 
                  to={link.href}
                  onMouseEnter={() => setHoveredTab(link.name)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${isActive ? 'text-white' : (location.pathname === '/' && !isScrolled ? 'text-slate-200 hover:text-white' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white')}`}
                >
                  {/* Active pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary-500 rounded-full shadow-lg shadow-primary-500/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {/* Hover pill - shows on any hovered non-active link */}
                  {isHovered && !isActive && (
                    <motion.div
                      layoutId="hoverTab"
                      className="absolute inset-0 bg-slate-200/80 dark:bg-white/10 rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-full transition-all duration-300 ${location.pathname === '/' && !isScrolled ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-slate-100 hover:bg-slate-200 dark:bg-dark-800 dark:hover:bg-dark-700 text-slate-600 dark:text-slate-300'} shadow-sm`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-colors ${location.pathname === '/' && !isScrolled ? 'bg-white/10 text-white' : 'bg-slate-100 dark:bg-dark-800 text-slate-600 dark:text-slate-300'}`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button 
              className={`p-2 rounded-lg ${location.pathname === '/' && !isScrolled ? 'bg-white/10 text-white' : 'bg-slate-100 dark:bg-dark-800 text-slate-600 dark:text-slate-300'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 dark:bg-dark-900/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl py-4 px-4 flex flex-col gap-2 shadow-2xl transition-all duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-sm font-medium transition-all duration-300 px-4 py-3 rounded-xl ${location.pathname === link.href ? 'bg-primary-500 text-white shadow-md shadow-primary-500/20' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-dark-800'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
