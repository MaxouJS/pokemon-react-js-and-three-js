// Packages
import { FC } from 'react';
import { Canvas } from '@react-three/fiber';

// Components
import Camera from '../components/3d/Camera';
import Scene from '../components/3d/Scene';
import MapGenerator from '../components/utils/MapGenerator';
import Animation from '../components/3d/Animation';

const Battle: FC = () => {
  return (
    <div className='absolute h-full w-full'>
      <Canvas>
        <Camera>
          <Scene />
          <MapGenerator />
          <Animation
            title={'SquirtleStance'}
            position={[0, 0, 6.66]}
            rotation={[0, 0, 0]}
            scale={[1, 1, 1]}
          />
          <Animation
            title={'OnixStance'}
            position={[0, 0, -6.66]}
            rotation={[0, 0, 0]}
            scale={[1, 1, 1]}
          />
        </Camera>
      </Canvas>
    </div>
  );
};

export default Battle;
