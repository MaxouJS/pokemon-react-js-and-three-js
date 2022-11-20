// Packages
import { FC } from 'react';
import { ContactShadows, Sky } from '@react-three/drei';

// Types
import SceneType from '../../types/props/3d/scene';

// Components
import Light from './Light';
import PostProcessing from './PostProcessing';

const Scene: FC<SceneType> = (props: SceneType) => {
  // Props
  const {} = props;
  
  return (
    <>
      {/* Custom components */}
      <Light />
      <PostProcessing />
      {/* Three components */}
      <ContactShadows position={[0, 0, 0]} opacity={1} scale={10} blur={0.25} far={10} resolution={1024} />
      <Sky distance={450000} sunPosition={[0, 90, 0]} inclination={0} azimuth={0.25} />
    </>
  );
};

export default Scene;
