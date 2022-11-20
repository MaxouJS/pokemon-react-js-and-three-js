// Packages
import { FC, useEffect, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { Event, Object3D } from 'three';
import { clone } from 'three/examples/jsm/utils/SkeletonUtils';

// Types
import EnvironmentType from '../../types/props/3d/environment';

const Environment: FC<EnvironmentType> = (props: EnvironmentType) => {
  // Props
  const { title, position, rotation, scale } = props;
  
  // Initializes this GTLF scene
  let { scene }: any = useGLTF(`./src/assets/environments/${title}.glb`);

  scene = useMemo((): Object3D<Event> => clone(scene), [scene]);
      
  useEffect((): void => {
    // Resolves the clipping bug on some camera angles
    scene.traverse((child: any) => {
      child.frustumCulled = false;
    });
  }, [scene]);
 
  return (
    <primitive position={position} rotation={rotation} scale={scale} object={scene} />
  );
};

export default Environment;
