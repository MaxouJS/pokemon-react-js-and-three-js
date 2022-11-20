// Packages
import { FC } from 'react';
import { Bloom, DepthOfField, EffectComposer, HueSaturation, Noise, Vignette } from '@react-three/postprocessing';

// Types
import PostProcessingType from '../../types/props/3d/postProcessing';

const PostProcessing: FC<PostProcessingType> = (props: PostProcessingType) => {
  // Props
  const {} = props;
  
  return (
    <EffectComposer>
      <DepthOfField focusDistance={0} focalLength={0.1} bokehScale={20} height={256} />
      <Bloom luminanceThreshold={1} luminanceSmoothing={1} height={256} />
      <Noise opacity={0.05} />
      <HueSaturation saturation={0.25} />
      <Vignette eskil={true} offset={0} darkness={1} />
    </EffectComposer>
  );
};

export default PostProcessing;