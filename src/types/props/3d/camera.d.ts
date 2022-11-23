// Packages
import { ReactNode } from 'react';

interface Camera {
  children: ReactNode;
  position: number[];
  rotation: number[];
  enableRotate: boolean;
  minimumDistance: number;
  maximumDistance: number;
  maximumPolarAngle: number;
};

export default Camera;
