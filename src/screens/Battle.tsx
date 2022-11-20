// Packages
import { FC } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, OrbitControls, PerspectiveCamera, Sky } from '@react-three/drei';

// Components
import Environment from '../components/3d/Environment';
import Light from '../components/3d/Light';
import Props from '../components/3d/Props';
import PostProcessing from '../components/3d/PostProcessing';
import Camera from '../components/3d/Camera';

const Battle: FC = () => {
  return (
    <div className='absolute h-full w-full'>
      <Canvas>
        <Camera>
          <Light />
          <PostProcessing />
          <Props title={'Rock'} position={[0, 1, 0]} rotation={[0, (Math.PI * 2), 0]} scale={[1, 1, 1]} />
          <Props title={'Cliff'} position={[0, 0, 0]} rotation={[0, (Math.PI * 2), 0]} scale={[1, 1, 1]} />
          <Environment title={'Sand'} position={[0, -0.01, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]} />
          <ContactShadows position={[0, 0, 0]} opacity={1} scale={100} blur={0.25} far={100} resolution={1024} />
          <ContactShadows position={[0, 0, 0]} opacity={1} scale={10} blur={0.25} far={10} resolution={1024} />
        </Camera>
      </Canvas>
    </div>
  );
};

export default Battle;
