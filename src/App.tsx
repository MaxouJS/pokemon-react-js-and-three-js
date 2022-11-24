// Packages
import { FC, useEffect } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';

// Components
import BGM from './components/sound/BGM';
import SFX from './components/sound/SFX';

// Screens
import Battle from './screens/Battle';
import Title from './screens/Title';

// States
import gameState from './atoms/game';

// Types
import BGMType from './types/props/sound/bgm';
import SFXType from './types/props/sound/sfx';
import GameType from './types/game';

const App: FC = () => {
  // States
  const [game, setGame]: [GameType, SetterOrUpdater<GameType>] = useRecoilState<GameType>(gameState);

  useEffect((): void => {
    setGame({
      currentScreen: 'Title',
      enableBGM: true,
      enableSFX: true,
      enablePostProcessing: false,
      enableShadows: false,
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
        game.sfx && game.sfx.length > 0
          ?
            game.sfx.map((s: SFXType, index: number) => <SFX key={index} {...s} />)
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
