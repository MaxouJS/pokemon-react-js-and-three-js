// Game
import { FC, useEffect } from 'react';
import useSound from 'use-sound';
import { ReturnedValue } from 'use-sound/dist/types';

// Types
import SFXType from '../../types/props/sound/sfx';

const SFX: FC<SFXType> = (props: SFXType) => {
  // Props
  const { sfxName, isPlayed }: SFXType = props;

  // Initializes SFX sound
  const [play, {stop}]: ReturnedValue = useSound(`./src/assets/sfx/${sfxName}.wav`, { volume: 1, interrupt: true });

  useEffect((): void => {
    {
      (
        isPlayed
      ) ? (
        play()
      ) : (
        stop()
      )
    }
  }, [isPlayed, play, stop]);

  // Doesn't need to return anything
  return null;
}

export default SFX;
