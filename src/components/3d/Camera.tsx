// Packages
import { FC } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

// Types
import CameraType from '../../types/props/3d/camera';

const Camera: FC<CameraType> = (props: CameraType) => {
  // Props
  const {children} = props;
  
  return (
    <>
      <OrbitControls
        enablePan={false}
        enableDamping={false}
        enableRotate={true}
        minDistance={5}
        maxDistance={5}
        maxPolarAngle={Math.PI * 0.5}
      />
      <PerspectiveCamera position={[0, -1, 0]}>
        {children}
      </PerspectiveCamera>
    </>
  );
};

export default Camera;
