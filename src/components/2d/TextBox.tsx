// Packages
import { FC } from 'react';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';

// States
import gameState from '../../atoms/game';

// Types
import TextBoxType from '../../types/props/2d/textBox';
import GameType from '../../types/game';

const TextBox: FC<TextBoxType> = (props: TextBoxType) => {
  // Props
  const { game }: TextBoxType = props;

  // Functions
  const toggleTextBox = (): void => {  
    // Initializes a new SFX sound  
    const audio: HTMLAudioElement  = new Audio('./src/assets/sfx/Ok.wav');

    // Checks if the SFX are enabled in the game global state
    if (game.enableSFX) {
      audio.play();
    }

    // Changes the current text and the re-enables the UI of the game global state
    // setGame({...game, currentTextBox: '', enableUI: true});
  };

  return (
    <div className='flex flex-col items-center justify-center bg-black/50 h-full w-full space-y-4'>
      <p className='text-lg text-white'>{}</p>
      <button onClick={toggleTextBox} className='bg-gradient-to-b from-sky-400 to-green-400 shadow-xl shadow-green-400/50 rounded-xl ring-2 ring-cyan-400/50 py-3 px-4 animate-pulse hover:scale-110 hover:animate-none duration-100'>
        <span className='text-xl text-white font-bold'>O.K.!</span>
      </button>
    </div>
  );
};

export default TextBox;
