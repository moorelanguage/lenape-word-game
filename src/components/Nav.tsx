import React from 'react';
import { motion } from 'framer-motion';

interface NavProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

const Nav: React.FC<NavProps> = ({ isDarkMode, onThemeToggle }) => (
  <nav className="nav" role="navigation" aria-label="Main navigation">
    <div className="nav-left">
      <h1 className="nav-title">Word</h1>
    </div>
    <div className="nav-right">
      <motion.button
        className="nav-button"
        onClick={onThemeToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-pressed={isDarkMode}
        type="button"
      >
        {isDarkMode ? '☀️' : '🌕'}
      </motion.button>
    </div>
  </nav>
);

export default Nav;
