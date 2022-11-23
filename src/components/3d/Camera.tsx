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
        enableDamping={true}
        enableRotate={true}
        minDistance={10}
        maxDistance={10}
        maxPolarAngle={Math.PI * 0.5}
      />
      <PerspectiveCamera position={[0, -1.25, 0]} rotation={[0, Math.PI * 1.5, 0]} >
        {children}
      </PerspectiveCamera>
    </>
  );
};

export default Camera;
