// Game
import { FC, useEffect } from 'react';
import useSound from 'use-sound';
import { ReturnedValue } from 'use-sound/dist/types';

// Types
import BGMType from '../../types/props/sound/bgm';

const BGM: FC<BGMType> = (props: BGMType) => {
  // Props
  const { bgmName, isPlayed }: BGMType = props;

  // Initializes BGM sound
  const [play, {stop}]: ReturnedValue = useSound(`./src/assets/bgm/${bgmName}.wav`, { volume: 0.5, interrupt: true });

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

export default BGM;
