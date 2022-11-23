// Packages
import { FC, useEffect, useMemo } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { clone } from 'three/examples/jsm/utils/SkeletonUtils';

// Types
import AnimationType from '../../types/props/3d/animation';

const Animation: FC<AnimationType> = (props: AnimationType) => {
  // Props
  const { title, position, rotation, scale } = props;
  
  // Initializes this GTLF scene and its animations
  let { scene, animations }: any = useGLTF(`./src/assets/animations/${title}.glb`);
  
  // Allows this animation to be used multiple times
  scene = useMemo(() => clone(scene), [scene]);
  
  // Initializes actions
  const { actions }: any = useAnimations(animations, scene);
   
  useEffect((): void => {
    // Resolves the clipping bug on some camera angles
    scene.traverse((child: any) => {
      child.frustumCulled = false;
    });
    
    // Plays the animation in loop
    actions.ArmatureAction.play();
  }, [actions, scene]);
 
  return (
    <primitive position={position} rotation={rotation} scale={scale} object={scene} />
  );
};

// Preloads 3d models at the 3d canvas initializion
useGLTF.preload('./src/assets/animations/OnixStance.glb');
useGLTF.preload('./src/assets/animations/SquirtleStance.glb');

export default Animation;
