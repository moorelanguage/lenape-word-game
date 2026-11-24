import React from 'react';
import { motion } from 'framer-motion';
import DialectSwitch from './Dialect-switch';
import Counter from './counter';

interface NavProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
  dialect: 'unami' | 'munsee';
  onDialectChange: (dialect: 'unami' | 'munsee') => void;
}

const Nav: React.FC<NavProps> = ({
  isDarkMode,
  onThemeToggle,
  dialect,
  onDialectChange,
}) => (
  <nav className="nav" role="navigation" aria-label="Main navigation">
    <div className="nav-left">
      <h1 className="nav-title">Word Game</h1>
    </div>
    <div className="nav-right">
      <Counter />
      <DialectSwitch dialect={dialect} onDialectChange={onDialectChange} />
      <motion.button
        className="nav-button"
        onClick={onThemeToggle}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-pressed={isDarkMode}
        type="button"
      >
        {isDarkMode ? 'Light' : 'Dark'}
      </motion.button>
    </div>
  </nav>
);

export default Nav;
