// Packages
import { Dispatch, FC, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { SetterOrUpdater, useRecoilBridgeAcrossReactRoots_UNSTABLE, useRecoilState, useSetRecoilState } from 'recoil';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';

// Components
// 2d
import Card from '../components/2d/Card';
import Settings from '../components/2d/Settings';
// 3d
import Animation from '../components/3d/Animation';
import Camera from '../components/3d/Camera';
import Scene from '../components/3d/Scene';
import StadiumGenerator from '../components/utils/StadiumGenerator';

// States
import gameState from '../atoms/game';

// Types
import ScreenType from '../types/props/screen';
import BattleType from '../types/battle';
import PokemonType from '../types/pokemon';
import GameType from '../types/game';

// Hooks
import useSetBGM from '../hooks/useSetBgm';

const Battle: FC<ScreenType> = (props: ScreenType) => {
  // Allows wrapped components to access Recoil Root
  const RecoilBridge: FC<{ children: ReactNode; }> = useRecoilBridgeAcrossReactRoots_UNSTABLE();

  // Props
  const { game }: ScreenType = props;

  // States
  const setGame: SetterOrUpdater<GameType> = useSetRecoilState<GameType>(gameState);
  const [battle, setBattle]: [BattleType | null, Dispatch<SetStateAction<BattleType | null>>] = useState<BattleType | null>(null);

  // Sets the current BGM sound to 'Title' in the global state
  const bgm = (): GameType => useSetBGM('Battle');

  bgm();

  useEffect((): void => {
    // Initializes a new team for the player
    const newTeam1: PokemonType[] = [
      {
        pokemonName: 'Squirtle',
        currentLV: 7,
        currentHP: 10,
        maximumHP: 10,
        attack: 1,
        defense: 1,
        speed: 1,
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
        currentLV: 14,
        currentHP: 10,
        maximumHP: 10,
        attack: 1,
        defense: 1,
        speed: 1,
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
    <div className='absolute h-full w-full bg-black'>
      <Canvas>
        {/* Initializes UI */}
        <Html as='div' fullscreen className='select-none'>
          <RecoilBridge>
            <Settings game={game} />
          </RecoilBridge>
          <div className='flex w-full p-4'>
            <Card
              pokemon={battle?.team1[0] as PokemonType}
              team={1}
            />
            <Card
              pokemon={battle?.team2[0] as PokemonType}
              team={2}
            />
          </div>
        </Html>
        {/* Initializes 3d elements */}
        {/* Initializes camera props */}
        <Camera
          position={[0, -1.25, 0]}
          rotation={[0, Math.PI * 1.5, 0]}
          enableRotate={true}
          minimumDistance={10}
          maximumDistance={10}
          maximumPolarAngle={Math.PI * 0.5}
        >
          {/* Initializes scene props */}
          <Scene
            enablePostProcessing={game.enablePostProcessing}
            enableShadows={game.enableShadows}
            blurMinimumDistance={0.1}
            blurMaximumDistance={30}
          />
          <StadiumGenerator />
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
