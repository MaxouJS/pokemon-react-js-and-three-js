// Packages
import { Html } from '@react-three/drei';
import { FC } from 'react';

// Types
import CardType from '../../types/props/2d/card';

const Card: FC<CardType> = (props: CardType) => {
  // Props
  const { pokemon, position } = props;
  
  return (
    <Html fullscreen>
      <p>{pokemon.pokemonName} Lv. {pokemon.currentLV}</p>
      <p>{pokemon.currentHP}/{pokemon.maximumHP}</p>
    </Html>
  );
};

export default Card;
