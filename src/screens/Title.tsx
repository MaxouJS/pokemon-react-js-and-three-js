// Packages
import { FC } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';

// Components
// 2d
import Settings from '../components/2d/Settings';
// 3d
import Camera from '../components/3d/Camera';
import Environment from '../components/3d/Environment';
import Scene from '../components/3d/Scene';

// Types
import ScreenType from '../types/props/screen';

const Title: FC<ScreenType> = (props: ScreenType) => {
  // props
  const { changeBGM, changeScreen, game }: ScreenType = props;

  return (
    <div className='absolute h-full w-full'>
      <Canvas>
        {/* Initializes UI */}
        <Html as='div' fullscreen className='flex justify-center select-none p-8'>
          <Settings
            game={game}
          />
          <div className='flex flex-col space-y-6'>
            <button onClick={(): void => {changeScreen('Battle')}} className='flex mt-auto text-6xl uppercase text-white font-bowlby-one animate-pulse'>Click or tap to play</button>
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
          position={[0, -1.25, 2.5]}
          rotation={[0, Math.PI * 1.5, 0]}
          enableRotate={false}
          minimumDistance={0}
          maximumDistance={0}
          maximumPolarAngle={Math.PI * 0.5}
        >
          {/* Initializes scene props */}
          <Scene
            enablePostProcessing={game.enablePostProcessing}
            enableShadows={game.enableShadows}
            blurMinimumDistance={0.01}
            blurMaximumDistance={50}
          />
          <Environment title='Grassland' position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1]}  />
        </Camera>
      </Canvas>
    </div>
  );
};

export default Title;
