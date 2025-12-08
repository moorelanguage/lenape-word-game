import React from 'react';
import { motion } from 'motion/react';

const Title: React.FC = () => {
  return (
    <header className="game-header">
      <motion.h1
        className="title"
        aria-label="Lenape Word Guessing Game"
      >
        Lenape Word Game
      </motion.h1>
    </header>
  );
};

export default Title;
