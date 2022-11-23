// Packages
import { FC } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';

// Types
import ScreenType from '../types/props/screens/screen';
import Camera from '../components/3d/Camera';
import Scene from '../components/3d/Scene';
import Environment from '../components/3d/Environment';

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
        <Camera
          position={[0, -1.25, 2.5]}
          rotation={[0, Math.PI * 1.5, 0]}
          enableRotate={false}
          minimumDistance={0}
          maximumDistance={0}
          maximumPolarAngle={Math.PI * 0.5}
        >
          <Scene
            enablePostProcessing={true}
            enableShadows={false}
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
