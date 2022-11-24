// Packages
import { FC, useEffect } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';

// Components
import BGM from './components/sound/BGM';

// Screens
import Battle from './screens/Battle';
import Title from './screens/Title';

// States
import gameState from './atoms/game';

// Types
import GameType from './types/game';
import BGMType from './types/props/sound/bgm';

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
      bgm: [],
      sfx: [],
    });
  }, [setGame]);

  return (
    <>
      {
        game.bgm && game.bgm.length > 0
          ?
            game.bgm.map((b: BGMType, index: number) => <BGM key={index} {...b} />)
          :
            null
      }
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
