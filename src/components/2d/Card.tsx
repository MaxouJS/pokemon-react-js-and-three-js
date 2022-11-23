// Packages
import { Html } from '@react-three/drei';
import { FC } from 'react';

// Types
import CardType from '../../types/props/2d/card';

const Card: FC<CardType> = (props: CardType) => {
  // Props
  const { pokemon, team } = props;

  return (
    <div className={`flex flex-col ${team === 2 ? 'ml-auto' : 'mr-auto'} bg-gradient-to-b from-cyan-500 to-green-500 shadow-xl shadow-green-500/50 rounded-xl h-24 w-64 p-4`}>
      <p>{pokemon.pokemonName} <span className='ml-auto'>Lv. {pokemon.currentLV}</span></p>
      <p>{pokemon.currentHP}/{pokemon.maximumHP}</p>
    </div>
  );
};

export default Card;
