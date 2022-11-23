// Packages
import { FC } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';

// Types
import ScreenType from '../types/props/screens/screen';
import Camera from '../components/3d/Camera';
import Scene from '../components/3d/Scene';

const Title: FC<ScreenType> = (props: ScreenType) => {
  // props
  const { changeBGM, changeScreen }: ScreenType = props;

  return (
    <div className='absolute h-full w-full'>
      <Canvas>
        {/* Initializes UI */}
        <Html as='div' fullscreen className='flex select-none'>
          <button onClick={(): void => { changeScreen('Battle') }} className='flex'>Test</button>
        </Html>
        <Camera>
          <Scene
            enablePostProcessing={false}
            enableShadows={false}
          />
        </Camera>
      </Canvas>
    </div>
  );
};

export default Title;
