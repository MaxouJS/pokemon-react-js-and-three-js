// Packages
import { FC, useEffect, useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Event, Object3D } from 'three';
import { clone } from 'three/examples/jsm/utils/SkeletonUtils';

// Types
import PropsType from '../../types/props/3d/props';

const Props: FC<PropsType> = (props: PropsType) => {
  const ref = useRef();
  // Props
  const { title, position, rotation, scale } = props;
  
  // Initializes this GTLF scene
  let { scene }: any = useGLTF(`./src/assets/props/${title}.glb`);

  scene = useMemo((): Object3D<Event> => clone(scene), [scene]);
      
  useEffect((): void => {
    // Resolves the clipping bug on some camera angles
    scene.traverse((child: any) => {
      child.frustumCulled = false;
    });
  }, [scene]);
 
  return (
    <primitive ref={ref} position={position} rotation={rotation} scale={scale} object={scene} />
  );
};

export default Props;
