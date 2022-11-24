// Packages
import { FC, useEffect } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import gameState from './atoms/game';

// Screens
import Battle from './screens/Battle';
import Title from './screens/Title';

// Types
import GameType from './types/game';

const App: FC = () => {
  // States
  const [game, setGame]: [GameType, SetterOrUpdater<GameType>] = useRecoilState<GameType>(gameState);

  useEffect((): void => {
    setGame({
      currentScreen: 'Title',
      enablePostProcessing: false,
      enableShadows: false,
      enableMusic: true,
      enableSounds: true,
    });
  }, [setGame]);

  return (
    <>
      {
        (
          game && game.currentScreen === 'Battle'
        ) ? (
          <Battle game={game}/>
        ) : (
          null
        )
      }
      {
        (
          game && game.currentScreen === 'Title'
        ) ? (
          <Title game={game} />
        ) : (
          null
        )
      }
    </>
  );
};

export default App;
