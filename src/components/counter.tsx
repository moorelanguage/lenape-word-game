import { useState } from 'react';
import wordsData from '../words.json';
import munseeWordsData from '../munsee-dialect/munsee-words.json';

interface WordEntry {
  word: string;
  definition?: string;
  length?: number;
}

const words = wordsData as WordEntry[];
const munseeWords = munseeWordsData as WordEntry[];

const getUniqueWords = (entries: WordEntry[]): Set<string> => {
  return new Set(
    entries
      .map((entry) => entry.word.trim().toLowerCase())
      .filter((word) => word.length > 0)
  );
};

const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);

  const lenapeUnique = getUniqueWords(words);
  const munseeUnique = getUniqueWords(munseeWords);
  {/* const combinedUnique = new Set([...lenapeUnique, ...munseeUnique]); */}

  return (
    <div className="word-count-counter" style={{ position: 'relative' }}>
      <button
        type="button"
        className="nav-button word-count-button"
        onClick={() => setIsVisible((visible) => !visible)}
        aria-expanded={isVisible}
        aria-label={isVisible ? 'Hide word count' : 'Show word count'}
      >
        Words
      </button>

      {isVisible && (
        <div
          aria-live="polite"
          style={{
            position: 'absolute',
            top: '2.25rem',
            right: 0,
            width: '13rem',
            padding: '0.75rem',
            border: '1px solid var(--border-color)',
            borderRadius: '0.5rem',
            background: 'var(--nav-bg)',
            color: 'var(--text-color)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.18)',
            /*fontSize: '0.85rem',*/
          }}
        >
          <div><strong>Unami dialect:</strong> {lenapeUnique.size} unique words</div>
          <div style={{ marginTop: '0.35rem' }}><strong>Munsee dialect:</strong> {munseeUnique.size} unique words</div>
          {/* <div style={{ marginTop: '0.35rem' }}><strong>Combined:</strong> {combinedUnique.size} unique words</div> */} 
          {/* interesting for me but might confuse users as you cannot do two dialects at once. so not showing it. interesting for me. might uncomment in development occasionally. */}
        </div>
      )}
    </div>
  );
};

export default Counter;
