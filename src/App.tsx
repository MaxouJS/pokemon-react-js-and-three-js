// Packages
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';

// Screens
import Battle from './screens/Battle';
import Title from './screens/Title';

const App: FC = () => {
  // States
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
    setScreen('Title');
  }, [setScreen]);

  return (
    <>
      {
        (
          screen === 'Battle'
        ) ? (
          <Battle
            changeBGM={changeBGM}
            changeScreen={changeScreen}
          />
        ) : (
          null
        )
      }
      {
        (
          screen === 'Title'
        ) ? (
          <Title
            changeBGM={changeBGM}
            changeScreen={changeScreen}
          />
        ) : (
          null
        )
      }
    </>
  );
};

export default App;
