// Packages
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';

// Screens
import Battle from './screens/Battle';
import Title from './screens/Title';

// Types
import GameType from './types/game';

const App: FC = () => {
  // States
  const [game, setGame]: [GameType | null, Dispatch<SetStateAction<GameType | null>>] = useState<GameType | null>(null);
  const [bgm, setBgm]: [string | null, Dispatch<SetStateAction<string | null>>] = useState<string | null>(null);
  const [screen, setScreen]: [string | null, Dispatch<SetStateAction<string | null>>] = useState<string | null>(null);

  // Passes the children screen information to the global state
  const changeBGM = (bgm: string): void => {
    setBgm(bgm);
  }

  // Passes the children screen information to the global state
  const changeScreen = (screen: string): void => {
    setScreen(screen);
  }

  useEffect((): void => {
    setGame({
      enablePostProcessing: false,
      enableShadows: false,
      enableMusic: true,
      enableSounds: true,
    });

    setScreen('Title');
  }, [setGame, setScreen]);

  return (
    <>
      {
        (
          game && screen === 'Battle'
        ) ? (
          <Battle
            changeBGM={changeBGM}
            changeScreen={changeScreen}
            game={game}
          />
        ) : (
          null
        )
      }
      {
        (
          game && screen === 'Title'
        ) ? (
          <Title
            changeBGM={changeBGM}
            changeScreen={changeScreen}
            game={game}
          />
        ) : (
          null
        )
      }
    </>
  );
};

export default App;
