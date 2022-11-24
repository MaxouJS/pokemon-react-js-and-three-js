// Game
import { FC, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import useSound from 'use-sound';
import { ReturnedValue } from 'use-sound/dist/types';

// States
import gameState from '../../atoms/game';

// Types
import SFXType from '../../types/props/sound/sfx';
import GameType from '../../types/game';

const SFX: FC<SFXType> = (props: SFXType) => {
  // Props
  const { sfxName, isPlayed }: SFXType = props;

  // States
  const game: GameType = useRecoilValue<GameType>(gameState);

  // Initializes SFX sound
  const [play, {stop}]: ReturnedValue = useSound(`./src/assets/sfx/${sfxName}.wav`, { volume: 1, interrupt: true });

  useEffect((): void => {
    {
      (
        game.enableSFX && isPlayed
      ) ? (
        play()
      ) : (
        stop()
      )
    }
  }, [isPlayed, game.enableSFX, play, stop]);

  // Doesn't need to return anything
  return null;
}

export default SFX;
