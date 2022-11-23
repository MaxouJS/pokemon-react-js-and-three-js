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
  const { enablePostProcessing, enableShadows } = props;
  
  return (
    <>
      {/* Custom components */}
      <Light />
      {
        (enablePostProcessing
        ) ? (
          <PostProcessing />
        ) : (
          null
        )
      }
      {/* Three components */}
      {/* Shadows are not casted over 50 meters for increasing the framerate */}
      {
        (enableShadows
        ) ? (
          <ContactShadows position={[0, 0, 0]} opacity={0.75} scale={50} blur={0.1} far={100} resolution={2048} />
        ) : (
          null
        )
      }
    </>
  );
};

export default Scene;
