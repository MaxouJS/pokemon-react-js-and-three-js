// Packages
import { FC } from 'react';

// Types
import LightType from '../../types/props/3d/light';

const Light: FC<LightType> = (props: LightType) => {
  // Props
  const {} = props;
  
  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[50, 50, 50]} intensity={0.5} />
    </>
  );
};

export default Light;
