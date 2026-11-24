import wordsData from './words.json';
import munseeWordsData from './munsee-dialect/munsee-words.json';

// Convert words from JSON to a usable format
interface WordEntry {
  word: string;
  definition: string;
  length: number;
}

export type Dialect = 'unami' | 'munsee';

// Type assertion to tell TypeScript this is an array of WordEntry
export const WORDS = wordsData as WordEntry[];
export const MUNSEE_WORDS = munseeWordsData as WordEntry[];

// Check if all words are only alphabet characters and spaces
const getDialectWords = (dialect: Dialect = 'unami'): WordEntry[] => {
  const entries = dialect === 'munsee' ? MUNSEE_WORDS : WORDS;
  return entries.filter((entry) => entry.word.match(/^[^\d]*$/));
};

// Function to get a random word from the list
export const getRandomWord = (dialect: Dialect = 'unami'): string => {
  const words = getDialectWords(dialect);
  if (words.length === 0) return '';

  return words[Math.floor(Math.random() * words.length)].word.toUpperCase();
};

// Function to get a word's definition
export const getWordDefinition = (
  word: string,
  dialect: Dialect = 'unami'
): string | undefined => {
  const entry = getDialectWords(dialect).find(
    (entry) => entry.word.toUpperCase() === word.toUpperCase()
  );
  return entry?.definition;
};

// Function to get words by length
export const getWordsByLength = (
  length: number,
  dialect: Dialect = 'unami'
): string[] => {
  return getDialectWords(dialect)
    .filter((entry) => entry.length === length)
    .map((entry) => entry.word.toUpperCase());
};
