// Types
import GameType from '../game';

interface Screen {
  changeBGM: (bgm: string) => void;
  changeScreen: (screen: string) => void;
  game: GameType;
};

export default Screen;
