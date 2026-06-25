import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Cpu, Moon, Sun, LogOut, User as UserIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const close = (e) => { if (!e.target.closest('#user-menu-wrapper')) setShowUserMenu(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const handleLogout = async () => {
    await logout();
    setShowUserMenu(false);
    setIsMobileMenuOpen(false);
    navigate('/');
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Components', href: '/components' },
    { name: 'Supervisor', href: '/supervisor' },
    { name: 'Team', href: '/team' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHeroPage = location.pathname === '/' && !isScrolled;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex items-center justify-between rounded-2xl transition-all duration-500 ${isScrolled ? 'glass px-6 py-3 glow-primary' : 'bg-transparent px-2 py-2'} ${isHeroPage ? 'text-white' : 'text-slate-800 dark:text-white'}`}>

          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full" />
              <Cpu className="text-primary-500 w-8 h-8 relative z-10" />
            </div>
            <span className={`text-xl font-bold tracking-wider ${isHeroPage ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
              Team <span className="text-primary-500">Quantum</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100/50 dark:bg-dark-800/50 p-1 rounded-full border border-slate-200/50 dark:border-white/5 backdrop-blur-md" onMouseLeave={() => setHoveredTab(null)}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              const isHovered = hoveredTab === link.name;
              return (
                <Link key={link.name} to={link.href} onMouseEnter={() => setHoveredTab(link.name)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${isActive ? 'text-white' : (isHeroPage ? 'text-slate-200 hover:text-white' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white')}`}
                >
                  {isActive && <motion.div layoutId="activeTab" className="absolute inset-0 bg-primary-500 rounded-full shadow-lg shadow-primary-500/30" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
                  {isHovered && !isActive && <motion.div layoutId="hoverTab" className="absolute inset-0 bg-slate-200/80 dark:bg-white/10 rounded-full" transition={{ type: 'spring', stiffness: 500, damping: 35 }} />}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            {currentUser ? (
              <div id="user-menu-wrapper" className="relative">
                <button onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl transition-all bg-primary-50 hover:bg-primary-100 dark:bg-primary-900/20 dark:hover:bg-primary-900/40"
                >
                  <div className="w-7 h-7 rounded-full bg-primary-500 flex items-center justify-center text-white text-xs font-bold">
                    {(currentUser.displayName || currentUser.email)[0].toUpperCase()}
                  </div>
                  <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 max-w-[100px] truncate">
                    {currentUser.displayName || currentUser.email.split('@')[0]}
                  </span>
                </button>
                <AnimatePresence>
                  {showUserMenu && (
                    <motion.div initial={{ opacity: 0, y: 8, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: 0.95 }} transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-52 bg-white dark:bg-dark-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-white/10 overflow-hidden z-50"
                    >
                      <div className="px-4 py-3 border-b border-slate-100 dark:border-white/5">
                        <p className="text-xs text-slate-500 dark:text-slate-400">Signed in as</p>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">{currentUser.email}</p>
                      </div>
                      <Link to={currentUser?.role === 'admin' ? "/admin-dashboard" : "/user-dashboard"} onClick={() => setShowUserMenu(false)} className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-dark-700 transition-colors">
                        <UserIcon className="w-4 h-4" /> My Dashboard
                      </Link>
                      <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors">
                        <LogOut className="w-4 h-4" /> Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <Link to="/login" className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${isHeroPage ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-primary-50 hover:bg-primary-100 dark:bg-primary-900/20 dark:hover:bg-primary-900/40 text-primary-600 dark:text-primary-400'}`}>
                  Sign In
                </Link>
                <Link to="/register" className="px-4 py-2 rounded-xl text-sm font-bold bg-primary-500 hover:bg-primary-600 text-white shadow-sm transition-all duration-300">
                  Sign Up
                </Link>
              </>
            )}
            <button onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-full transition-all duration-300 ${isHeroPage ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-slate-100 hover:bg-slate-200 dark:bg-dark-800 dark:hover:bg-dark-700 text-slate-600 dark:text-slate-300'} shadow-sm`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full transition-colors ${isHeroPage ? 'bg-white/10 text-white' : 'bg-slate-100 dark:bg-dark-800 text-slate-600 dark:text-slate-300'}`}>
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button className={`p-2 rounded-lg ${isHeroPage ? 'bg-white/10 text-white' : 'bg-slate-100 dark:bg-dark-800 text-slate-600 dark:text-slate-300'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 dark:bg-dark-900/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl py-4 px-4 flex flex-col gap-2 shadow-2xl">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} onClick={() => setIsMobileMenuOpen(false)}
              className={`text-sm font-medium transition-all duration-300 px-4 py-3 rounded-xl ${location.pathname === link.href ? 'bg-primary-500 text-white shadow-md shadow-primary-500/20' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-dark-800'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-100 dark:border-white/5">
            {currentUser ? (
              <>
                <Link to={currentUser?.role === 'admin' ? "/admin-dashboard" : "/user-dashboard"} onClick={() => setIsMobileMenuOpen(false)} className="flex-1 text-center px-4 py-2 rounded-xl text-sm font-bold bg-slate-100 dark:bg-dark-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-dark-700 transition-colors">
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="flex-1 text-center px-4 py-2 rounded-xl text-sm font-bold bg-red-500 hover:bg-red-600 text-white shadow-sm transition-colors">
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex-1 text-center px-4 py-2 rounded-xl text-sm font-bold bg-slate-100 dark:bg-dark-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-dark-700 transition-colors">
                  Sign In
                </Link>
                <Link to="/register" onClick={() => setIsMobileMenuOpen(false)} className="flex-1 text-center px-4 py-2 rounded-xl text-sm font-bold bg-primary-500 hover:bg-primary-600 text-white shadow-sm transition-colors">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
