// Types
import BGM from './props/sound/bgm';
import SFX from './props/sound/sfx';

interface Game {
  currentScreen: string;
  enableMusic: boolean;
  enableSounds: boolean;
  enablePostProcessing: boolean;
  enableShadows: boolean;
  bgm: BGM[];
  sfx: SFX[];
}

export default Game;
