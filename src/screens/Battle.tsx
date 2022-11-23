// Packages
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';

// Components
// 2d
import Card from '../components/2d/Card';
// 3d
import Camera from '../components/3d/Camera';
import Scene from '../components/3d/Scene';
import MapGenerator from '../components/utils/MapGenerator';
import Animation from '../components/3d/Animation';

// Types
import BattleType from '../types/battle';
import PokemonType from '../types/pokemon';
import { Html } from '@react-three/drei';

const Battle: FC = () => {
  // States
  const [battle, setBattle]: [BattleType | null, Dispatch<SetStateAction<BattleType | null>>] = useState<BattleType | null>(null);

  useEffect((): void => {
    // Initializes a new team for the player
    const newTeam1: PokemonType[] = [
      {
        pokemonName: 'Squirtle',
        currentLV: 1,
        currentHP: 1,
        maximumHP: 1,
        position: [0, 0, 7.5],
        rotation: [0, Math.PI * 1, 0],
        scale: [0.75, 0.75, 0.75],
        currentAnimation: 'SquirtleStance',
      },
    ];

    // Initializes a new team for the AI
    const newTeam2: PokemonType[] = [
      {
        pokemonName: 'Onix',
        currentLV: 1,
        currentHP: 1,
        maximumHP: 1,
        position: [0, 0, -7.5],
        rotation: [0, Math.PI * 2, 0],
        scale: [1.5, 1.5, 1.5],
        currentAnimation: 'OnixStance',
      },
    ];

    // Initializes the battle
    const newBattle: BattleType = {
      team1: newTeam1,
      team2: newTeam2,
    };

    setBattle(newBattle);
  }, [setBattle]);

  return (
    <div className='absolute h-full w-full'>
      <Canvas>
        {/* Initializes UI */}
        <Html as='div' fullscreen className='flex select-none p-4'>
          <Card
            pokemon={battle?.team1[0] as PokemonType}
            team={1}
          />
          <Card
            pokemon={battle?.team2[0] as PokemonType}
            team={2}
          />
        </Html>
        {/* Initializes 3d scene */}
        <Camera>
          <Scene
            enablePostProcessing={false}
            enableShadows={false}
          />
          <MapGenerator />
          <Animation
            title={battle?.team1[0].currentAnimation as string}
            position={battle?.team1[0].position as number[]}
            rotation={battle?.team1[0].rotation as number[]}
            scale={battle?.team1[0].scale as number[]}
          />
          <Animation
            title={battle?.team2[0].currentAnimation as string}
            position={battle?.team2[0].position as number[]}
            rotation={battle?.team2[0].rotation as number[]}
            scale={battle?.team2[0].scale as number[]}
          />
        </Camera>
      </Canvas>
    </div>
  );
};

export default Battle;
