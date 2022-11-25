// Packages
import { Dispatch, FC, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { SetterOrUpdater, useRecoilBridgeAcrossReactRoots_UNSTABLE, useRecoilState, useSetRecoilState } from 'recoil';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';

// Components
// 2d
import Card from '../components/2d/Card';
import Settings from '../components/2d/Settings';
import Text from '../components/2d/TextBox';
// 3d
import Animation from '../components/3d/Animation';
import Camera from '../components/3d/Camera';
import Scene from '../components/3d/Scene';
import StadiumGenerator from '../components/utils/StadiumGenerator';

// States
import battleState from '../atoms/battle';
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
  const [battle, setBattle]: [BattleType, SetterOrUpdater<BattleType>] = useRecoilState<BattleType>(battleState);

  // Hooks
  // Sets the current BGM sound played to 'Battle' to the global game state
  useSetBGM('Battle');

  useEffect((): void => {
    // Initializes a new team for the player
    const newTeam1: PokemonType[] = [
      {
        pokemonName: 'Squirtle',
        currentLV: 7,
        currentHP: 1,
        maximumHP: 1,
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
        currentHP: 1,
        maximumHP: 1,
        attack: 1,
        defense: 1,
        speed: 1,
        position: [0, 0, -7.5],
        rotation: [0, Math.PI * 2, 0],
        scale: [1.5, 1.5, 1.5],
        currentAnimation: 'OnixStance',
      },
    ];

    const newTeam = (array: PokemonType[]): PokemonType[] => {
      // Creates new random characteristics for each Pokémon the team passed as argument
      array.forEach((n: PokemonType): void => {
        n.currentHP = n.currentLV + Math.floor(Math.random() * n.currentLV + 1);
        n.maximumHP = n.currentHP;
        n.attack = n.currentLV + Math.floor(Math.random() * n.currentLV + 1);
        n.defense = n.currentLV + Math.floor(Math.random() * n.currentLV + 1);
        n.speed = n.currentLV + Math.floor(Math.random() * n.currentLV + 1);
      });

      // Returns all the Pokémon with the new characteristics
      return array;
    };
    
    // Initializes the battle
    const newBattle: BattleType = {
      textBox: 'Click and hold to rotate the camera.',
      enableUI: false,
      team1: newTeam(newTeam1),
      team2: newTeam(newTeam2),
    };

    setBattle(newBattle);
  }, [setBattle]);

  return (
    <div className='absolute h-full w-full bg-black'>
      <Canvas>
        {/* Initializes UI */}
        <Html as='div' fullscreen className='select-none'>
          {/* Checks if the game props and the battle state exists then displays the text box with its parameter contained in the battle global state */}
          {
            (
              game && battle?.textBox
            ) ? (
              <RecoilBridge>
                <Text
                  text={battle?.textBox as string}
                  battle={battle}
                  game={game}
                />
              </RecoilBridge>
            ) : (
              null
            )
          }
          {/* Checks if the game props exists then displays the settings box */}
          {
            (
              game
            ) ? (
              <RecoilBridge>
                <Settings game={game} />
              </RecoilBridge>
            ) : (
              null
            )
          }
          {/* Checks if the battle state exists then displays the Pokémon cards with their parameters contained in the battle global state */}
          {
            (
              battle?.team1 && battle?.team2
            ) ? (
              <>
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
              </>
            ) : (
              null
            )
          }
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
          {/* Checks if the game props exists then displays the 3d scene and its parameters */}
          {
            (
              game
            ) ? (  
              <Scene
                enablePostProcessing={game.enablePostProcessing}
                enableShadows={game.enableShadows}
                blurMinimumDistance={0.1}
                blurMaximumDistance={30}
              />
            ) : (
              null
            )
          }
          <StadiumGenerator />
          {/* Checks if the battle state exists then displays the Pokémon 3d animations with their parameters contained in the battle global state */}
          {
            (
              battle?.team1 && battle?.team2
            ) ? (
              <>
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
              </>
            ) : (
              null
            )
          }
        </Camera>
      </Canvas>
    </div>
  );
};

export default Battle;
