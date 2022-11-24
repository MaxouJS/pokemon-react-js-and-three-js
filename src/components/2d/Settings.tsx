// Packages
import { FC } from 'react';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';

// States
import gameState from '../../atoms/game';

// Types
import SettingsType from '../../types/props/2d/settings';
import GameType from '../../types/game';

const Settings: FC<SettingsType> = (props: SettingsType) => {
  // Props
  const { game }: SettingsType = props;

  // States
  const setGame: SetterOrUpdater<GameType> = useSetRecoilState<GameType>(gameState);
 
  // Functions
  const togglePostProcessing = (): void => {
    const newGame: GameType = {...game, enablePostProcessing: !game.enablePostProcessing};

    // Toggles the post processing of the game global state
    setGame(newGame);
  };

  const toggleShadows = (): void => {
    const newGame: GameType = {...game, enableShadows: !game.enableShadows};

    // Toggles the shadows of the game global state
    setGame(newGame);
  };

  return (
    <div className='absolute h-full w-full'>
      <div className='flex w-full h-full p-8'>
        <div className='mt-auto space-y-2 text-xs text-white drop-shadow'>
          <div className='flex items-center space-x-2'>
            <button onClick={togglePostProcessing} className='bg-black rounded shadow shadow-black/50 h-4 w-4'>
              {
                (
                  game && game.enablePostProcessing
                ) ? (
                  <span>X</span>
                ) : (
                  null
                )
              }
            </button>
            <span>Enable post processing effects</span>
          </div>
          <div className='flex items-center space-x-2'>
            <button onClick={toggleShadows} className='bg-black rounded shadow shadow-black/50 h-4 w-4'>
            {
              (
                game && game.enableShadows
              ) ? (
                <span>X</span>
              ) : (
                null
              )
            }
            </button>
            <span>Enable shadows</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
