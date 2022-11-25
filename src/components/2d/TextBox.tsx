// Packages
import { FC } from 'react';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';

// States
import battleState from '../../atoms/battle';

// Types
import TextBoxType from '../../types/props/2d/textBox';
import BattleType from '../../types/battle';

const TextBox: FC<TextBoxType> = (props: TextBoxType) => {
  // Props
  const { text, battle, game }: TextBoxType = props;

  // States
  const setBattle: SetterOrUpdater<BattleType> = useSetRecoilState<BattleType>(battleState);

  // Functions
  const toggleTextBox = (): void => {  
    // Initializes a new SFX sound  
    const audio: HTMLAudioElement  = new Audio('./src/assets/sfx/Ok.wav');

    // Checks if the SFX are enabled in the game global state
    if (game.enableSFX) {
      audio.play();
    }

    // Changes the current text and the re-enables the UI of the battle global state
    setBattle({...battle, textBox: '', enableUI: true});
  };

  return (
    <div className='flex flex-col items-center justify-center bg-black/50 h-full w-full space-y-4'>
      <p className='text-lg text-white'>{text}</p>
      <button onClick={toggleTextBox} className='bg-gradient-to-b from-sky-400 to-green-400 shadow-xl shadow-green-400/50 rounded-xl ring-2 ring-cyan-400/50 py-3 px-4 animate-pulse hover:scale-110 hover:animate-none duration-100'>
        <span className='text-xl text-white font-bold'>O.K.!</span>
      </button>
    </div>
  );
};

export default TextBox;
