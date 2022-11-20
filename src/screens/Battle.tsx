// Packages
import { FC } from 'react';
import { Canvas } from '@react-three/fiber';

// Components
import Environment from '../components/3d/Environment';
import Props from '../components/3d/Props';
import Camera from '../components/3d/Camera';
import Scene from '../components/3d/Scene';
import DesertGenerator from '../components/utils/DesertGenerator';

const Battle: FC = () => {
  return (
    <div className='absolute h-full w-full'>
      <Canvas>
        <Camera>
          <Scene />
          <DesertGenerator />
        </Camera>
      </Canvas>
    </div>
  );
};

export default Battle;
