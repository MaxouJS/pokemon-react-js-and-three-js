// Types
import PokemonType from './pokemon';

interface Battle {
  textBox: string;
  enableUI: boolean;
  team1: PokemonType[];
  team2: PokemonType[];
};

export default Battle;
