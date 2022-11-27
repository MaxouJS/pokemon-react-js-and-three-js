// Packages
import { FC } from 'react';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';

// States
import battleState from '../../atoms/battle';

// Types
import MovePropsType from '../../types/props/2d/move';
import BattleType from '../../types/battle';
import PokemonType from '../../types/pokemon';
import MoveType from '../../types/move';

const Move: FC<MovePropsType> = (props: MovePropsType) => {
  // Props
  const { move, battle }: MovePropsType = props;

  // States
  const setBattle: SetterOrUpdater<BattleType> = useSetRecoilState<BattleType>(battleState);

  // Functions
  const useMove = (): void => {
    // Copies Pokemon and their teams
    let newTeam1: PokemonType[] = [...battle.team1];
    let newSquirtle: PokemonType = {...battle.team1[0]};
    let newTeam2: PokemonType[] = [...battle.team2];
    let newOnix: PokemonType = {...battle.team2[0]};

    // Selects a random move for Onix
    const onixMove: MoveType = newOnix.moves[Math.floor(Math.random() * 2)];

    // Creates a random damages number based on Squirtle properties
    const squirtleDamages: number = Math.floor(newSquirtle.currentLV * move.damages * 0.5);
    // Creates a random damages number based on Onix properties
    const onixDamages: number = Math.floor(newOnix.currentLV * onixMove.damages * 0.5);

    setTimeout((): void => {
      // Takes Onix damages to Squirtle HP then plays Onix attack animation
      newSquirtle.currentHP -= onixDamages;
      newTeam1[0] = {...newSquirtle, currentAnimation: 'SquirtleStance'};
      newTeam2[0] = {...newOnix, currentAnimation: 'OnixAttack'};

      // Checks Squirtle current HP then fixing it to 0 if its going under 0
      {
        (
          newSquirtle.currentHP < 0
        ) ? (
          newSquirtle.currentHP = 0
        ) : (
          newSquirtle.currentHP
        )
      }

      // Sets both of the teams with the Pokémon with new properties, currentHP and currentAnimation in this case
      setBattle({
        ...battle,
        enableUI: false,
        team1: [...newTeam1],
        team2: [...newTeam2]
      });
    }, 0);

    setTimeout((): void => {
      // Takes Squirtle damages to Onix HP then plays Squirtle attack animation
      newOnix.currentHP -= squirtleDamages;
      newTeam2[0] = {...newOnix, currentAnimation: 'OnixStance'};
      newTeam1[0] = {...newSquirtle, currentAnimation: 'SquirtleAttack'};

      // Checks Onix current HP then fixing it to 0 if its going under 0
      {
        (
          newOnix.currentHP < 0
        ) ? (
          newOnix.currentHP = 0
        ) : (
          newOnix.currentHP
        )
      }

      // Sets both of the teams with the Pokémon with new properties, currentHP and currentAnimation in this case
      setBattle({
        ...battle,
        enableUI: false,
        team1: [...newTeam1],
        team2: [...newTeam2]
      });
    }, 2000);

    // This SetTimeout function will reinitialize the animation of each Pokémon to its stance one
    setTimeout((): void => {
      newTeam1[0] = {...newSquirtle, currentAnimation: 'SquirtleStance'};
      newTeam2[0] = {...newOnix, currentAnimation: 'OnixStance'};

      setBattle({
        ...battle,
        enableUI: true,
        team1: [...newTeam1],
        team2: [...newTeam2]
      });
    }, 4000);
  }
  
  return (
    <button onClick={useMove} className='bg-gradient-to-r from-cyan-400 to-green-400 shadow-xl shadow-green-400/50 rounded-xl ring-2 ring-cyan-400/50 md:w-64 w-48 p-2 text-white text-sm font-bold drop-shadow hover:scale-105 duration-100'>
      <p>{move.moveName}</p>
    </button>
  );
};

export default Move;
