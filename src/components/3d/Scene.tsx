// Packages
import { FC } from 'react';
import { ContactShadows } from '@react-three/drei';

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
      {/* Shadows are not casted over 50 meters for increasing the framerate */}
      <ContactShadows position={[0, 0, 0]} opacity={0.75} scale={100} blur={0.1} far={100} resolution={1024} />
    </>
  );
};

export default Scene;
