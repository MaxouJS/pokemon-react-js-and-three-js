// Packages
import { FC, ReactNode } from 'react';
import { SetterOrUpdater, useRecoilBridgeAcrossReactRoots_UNSTABLE, useRecoilState, useSetRecoilState } from 'recoil';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';

// Components
// 2d
import Settings from '../components/2d/Settings';
// 3d
import Camera from '../components/3d/Camera';
import Environment from '../components/3d/Environment';
import Scene from '../components/3d/Scene';

// States
import gameState from '../atoms/game';

// Types
import ScreenType from '../types/props/screen';
import GameType from '../types/game';
import Props from '../components/3d/Props';
import Animation from '../components/3d/Animation';
import GrasslandGenerator from '../components/utils/GrasslandGenerator';

const Title: FC<ScreenType> = (props: ScreenType) => {
  // Allows wrapped components to access Recoil Root
  const RecoilBridge: FC<{ children: ReactNode; }> = useRecoilBridgeAcrossReactRoots_UNSTABLE();

  // Props
  const { game }: ScreenType = props;

  // States
  const setGame: SetterOrUpdater<GameType> = useSetRecoilState<GameType>(gameState);

  // Functions
  const changeScreen = (): void => {
    const newGame: GameType = {...game, currentScreen: 'Battle'};

    // Changes the current screen of the game global state
    setGame(newGame);
  };

  return (
    <div className='absolute h-full w-full'>
      <Canvas>
        {/* Initializes UI */}
        <Html as='div' fullscreen className='flex select-none'>
          <RecoilBridge>
            <Settings game={game} />
          </RecoilBridge>
          <div className='flex flex-col justify-center mt-auto w-full space-y-8 p-8'>
            <button onClick={changeScreen} className='text-2xl uppercase text-white font-bowlby-one animate-pulse lg:text-6xl md:text-4xl'>Click or tap to play</button>
            <div className='flex justify-center space-x-4'>
              <a href='https://www.linkedin.com/in/maxence-gumiero-47a048181/' target='_blank'>
                <img src='./src/assets/icons/Linkedin.png' className='h-12 drop-shadow hover:scale-110 duration-100' />
              </a>
              <a href='https://github.com/MaxouJS/pokemon-react-js-and-three-js' target='_blank'>
                <img src='./src/assets/icons/Github.png' className='h-12 drop-shadow hover:scale-110 duration-100' />
              </a>
            </div>
          </div>
        </Html>
        {/* Initializes 3d elements */}
        {/* Initializes camera props */}
        <Camera
          position={[0, -1, 2.5]}
          rotation={[0, Math.PI * 1.5, 0]}
          enableRotate={false}
          minimumDistance={1}
          maximumDistance={1}
          maximumPolarAngle={Math.PI * 0.5}
        >
          {/* Initializes scene props */}
          <Scene
            enablePostProcessing={game.enablePostProcessing}
            enableShadows={game.enableShadows}
            blurMinimumDistance={0.01}
            blurMaximumDistance={10}
          />
          {/* Places manually some 3d animated elements */}
          <Animation title={'SquirtleHi'} position={[-3, 0, -0.5]} rotation={[0, Math.PI * 0.4, 0]} scale={[1, 1, 1]} />
          <Animation title={'Tree'} position={[-10, 0, -10]} rotation={[0, Math.PI / 1.5, 0]} scale={[1.25, 1.25, 1.25]} />
          <Animation title={'Tree'} position={[-10, 0, -5]} rotation={[0, Math.PI / 1.5, 0]} scale={[1, 1, 1]} />
          <Animation title={'Tree'} position={[-10, 0, 0]} rotation={[0, Math.PI / 1.5, 0]} scale={[1.5, 1.5, 1.5]} />
          <Animation title={'Tree'} position={[-10, 0, 5]} rotation={[0, Math.PI / 1.5, 0]} scale={[1, 1, 1]} />
          <Animation title={'Tree'} position={[-10, 0, 10]} rotation={[0, Math.PI / 1.5, 0]} scale={[1.25, 1.25, 1.25]} />
          <GrasslandGenerator />
        </Camera>
      </Canvas>
    </div>
  );
};

export default Title;
