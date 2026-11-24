import React from 'react';
import { motion } from 'motion/react';
// literally just copy of normal keyboard.tsx file. just with O'Meara orthography rather than 
// LTD orthography.
interface KeyboardProps {
  guesses: string[];
  currentRow: number;
  targetWord: string;
  gameOver: boolean;
  onKeyClick: (key: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({
  guesses,
  currentRow,
  targetWord,
  gameOver,
  onKeyClick,
}) => {
  const getLetterStatus = (letter: string): string => {
    // Skip special keys
    if (letter === 'ENTER' || letter === 'BACKSPACE') {
      return '';
    }

    const normalizedLetter = letter.toUpperCase();

    // Check all previous guesses (including current row)
    for (let row = 0; row <= currentRow; row++) {
      const guess = guesses[row];
      if (!guess) continue;

      // Check each position in the guess
      for (let i = 0; i < targetWord.length; i++) {
        if (guess[i]?.toUpperCase() === normalizedLetter) {
          // If letter is in correct position
          if (normalizedLetter === targetWord[i]?.toUpperCase()) {
            return 'correct';
          }
          // If letter is in word but wrong position
          if (targetWord.toUpperCase().includes(normalizedLetter)) {
            return 'present';
          }
          // If letter is not in word
          return 'absent';
        }
      }
    }

    return '';
  };
//improve ordering this is shit 
//don't have to do that until I actually implement a toggle between 
//Munsee and Lenape Dialect so it'll stay like this for now 
// update: its implemented so now I have to look at this and make it better.
// the double vowels aa, ee, etc. cause a glitch right now 
// they cause the thing to go gray when you type in the word 
// even though they are correct 
// put results from zh and sh test here later
// dammit they do the same thing gray even though correct dammit 
// i'd wager a guess that if incorrect order they wouldn't be yellow they'd be gray 
// both are bad for the game 
// okay both z and s are seperate letters in the orthography. even though sh and zh are both digraphs. 
// might just have no diagraphs for now and just have the letters be z and s. I can work on diagraphs later 
// the double vowels are also diagraphs with unique vowel sounds 
// ch is a diagraph in unami aswell but it's seperate so fuck it i'll follow the design of unami 
// and have no diagraphs. if i really want to implement diagraphs later I can but fuck it it works 
// if i implement diagraphs that makes I'd have to do nt, nk, etc. for unami and I don't wanna do that
// because idk if its even necessary or wanted 
// i should focus on features needed or wanted rather than nitpicky stuff
// if people complain about it i can implement diagraphs in the keyboard
// but for now I should focus on updating the word list 
// granted no one asked for multiple dialects. it's just something i wanted to do 
// but this is a Lenape Language word game. I don't say Lenape Language Unami Dialect word game. 
// so their. multi-dialect support is necessary on that semantic technicality. 
// besides 'i wanted to do this not that' is a perfectly valid reason for one-person open source projects
// this is one big block of comment hi yes this is me thinking 
// if someone is looking through the source code and reading this on github...hi yes im thinking in comments 
// i do this.  
// update: I updated the keyboard and now its two rows in stead of three, both ahving sets of 11 rows 
// con: its a mess. it ends in x, z, t, w. that's not. any sort of alphabetical order in anything 
// unintuitive. fixed the bug. still shit. 
  const rows = [
    ['a', 'b', 'c', 'ŭ', 'd', 'k', 'g', 'e', 'i', 'o', 'u'],
    ['h', 'j', 'l', 'm', 'n', 'p', 's', 'x', 'z', 't', 'w'],
    ['ENTER', '-', 'SPACE BAR', "'", 'BACKSPACE'],
  ];

  const handleKeyClick = (key: string) => {
    if (!gameOver) {
      onKeyClick(key);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    key: string
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleKeyClick(key);
    }
  };

  return (
    <motion.section
      className="keyboard"
      aria-label="Virtual keyboard"
      role="group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {rows.map((row, rowIndex) => (
        <motion.div
          key={rowIndex}
          className="keyboard-row"
          role="row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: rowIndex * 0.1, duration: 0.3 }}
        >
          {row.map((key, keyIndex) => {
            const status = getLetterStatus(key);
            const isSpecialKey = key === 'ENTER' || key === 'BACKSPACE';
            const keyLabel = key === 'BACKSPACE' ? 'Backspace' : key;
            const displayKey = key === 'BACKSPACE' ? '←' : key;

            return (
              <motion.button
                key={keyIndex}
                className={`key ${isSpecialKey ? 'wide' : ''} ${status}`}
                onClick={() => handleKeyClick(key)}
                onKeyDown={(e) => handleKeyDown(e, key)}
                disabled={gameOver}
                aria-label={keyLabel}
                aria-pressed="false"
                type="button"
                tabIndex={0}
                whileTap={{ scale: 0.9 }}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  backgroundColor:
                    status === 'correct'
                      ? 'var(--correct-color)'
                      : status === 'present'
                      ? 'var(--present-color)'
                      : status === 'absent'
                      ? 'var(--key-absent-color)'
                      : 'var(--key-bg-color)',
                }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 20,
                }}
              >
                {displayKey}
              </motion.button>
            );
          })}
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Keyboard;
