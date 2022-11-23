// Packages
import { FC } from 'react';

// Types
import LightType from '../../types/props/3d/light';

const Light: FC<LightType> = (props: LightType) => {
  // Props
  const {} = props;
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 20, 10]} intensity={0.75} />
    </>
  );
};

export default Light;
