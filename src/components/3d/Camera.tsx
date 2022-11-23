// Packages
import { FC } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

// Types
import CameraType from '../../types/props/3d/camera';

const Camera: FC<CameraType> = (props: CameraType) => {
  // Props
  const {children, position, rotation, enableRotate, minimumDistance, maximumDistance, maximumPolarAngle} = props;
  
  return (
    <>
      <OrbitControls
        enablePan={false}
        enableDamping={true}
        enableRotate={enableRotate}
        minDistance={minimumDistance}
        maxDistance={maximumDistance}
        maxPolarAngle={maximumPolarAngle}
      />
      {/* @ts-ignore */}
      <PerspectiveCamera position={position} rotation={rotation} >
        {children}
      </PerspectiveCamera>
    </>
  );
};

export default Camera;
