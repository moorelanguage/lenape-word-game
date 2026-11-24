import React from 'react';
// this code displays the current dialect and if you click on it it changes the dialect to the other one. 
// is that intuitive? no and I'm not happy about that 
// what was I thinking pre-class time? 
// 'newikwihela ok need to stay awake' that's what i was thinking
// do I need something in the corner that explains the options 
// or like a pop-up on first open or something 
// that's work i just wannt make it intuitive instead 
// but cons is that someone might think that munsee is the current dialect when its unami. 
// when the current dialect would be unami not munsee. 
// so they would switch to munsee thinking its unami and vice versa. 
// so the way I did it makes sense. but someone might not get what it means. 
// its just a button saying 'unami' or 'munsee' in the corner 
// and it creates a new game on start so someone might end their current game experimenting
// decisions decisions 
// if i make a pop-up on first open that explains the options i feel like that's bad design. 
// design should be intuitive and make sense to the user without explaination, yeah? 
// but the alternative design would be worse 
// so this is the better option I think. i just don't like the idea that i'd have to do a window 
// remove before committing to github no one needs to read my thoughts in the source code. 
// actually no: if you reading this give me your opinions on what design would be better. 
interface DialectSwitchProps {
  dialect: 'unami' | 'munsee';
  onDialectChange: (dialect: 'unami' | 'munsee') => void;
}

const DialectSwitch: React.FC<DialectSwitchProps> = ({
  dialect,
  onDialectChange,
}) => {
  const isMunsee = dialect === 'munsee';

  return (
    <button
      className="nav-button dialect-switch"
      type="button"
      aria-label="Switch Lenape dialect"
      aria-pressed={isMunsee}
      onClick={() => onDialectChange(isMunsee ? 'unami' : 'munsee')} 
    >
      {isMunsee ? 'Munsee' : 'Unami'}
    </button>
  );
};

export default DialectSwitch;

