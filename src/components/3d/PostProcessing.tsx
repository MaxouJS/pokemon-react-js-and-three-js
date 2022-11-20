// Packages
import { FC } from 'react';
import { Bloom, DepthOfField, EffectComposer, HueSaturation, Noise } from '@react-three/postprocessing';

// Types
import PostProcessingType from '../../types/props/3d/postProcessing';

const PostProcessing: FC<PostProcessingType> = (props: PostProcessingType) => {
  // Props
  const {} = props;
  
  return (
    <EffectComposer>
      <DepthOfField focusDistance={0} focalLength={0.01} bokehScale={5} height={512} />
      <Bloom luminanceThreshold={1} luminanceSmoothing={1} height={512} />
      <Noise opacity={0.05} />
      <HueSaturation saturation={0.125} />
    </EffectComposer>
  );
};

export default PostProcessing;
