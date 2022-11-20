// Packages
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';

// Types
import PropsType from '../../types/props/3d/props';

// Components
import Environment from '../3d/Environment';
import Props from '../3d/Props';

const DesertGenerator: FC = () => {
  // States
  const [cliffYRotation, setCliffYRotation]: [number | null, Dispatch<SetStateAction<number | null>>] = useState<number | null>(null);
  const [rocks, setRocks]: [PropsType[] | null, Dispatch<SetStateAction<PropsType[] | null>>] = useState<PropsType[] | null>(null);

  useEffect((): void => {
    // Sets cliff Y axis rotation randomly
    setCliffYRotation((Math.PI * Math.random() * 2));

    // Initializes empty array of 3D props
    const newRocks: PropsType[] = [];

    // Creates 100 rocks with random position, rotation and scale
    for (let index = 0; index < 100; index++) {
      let randomXPosition = Math.floor(Math.random() * 200 - 100);

      // Checks if a rock can be in the X axis position of a Pokémon, then reassigns the X axis of the rock if it's the case
      while (randomXPosition >= -10 && randomXPosition <= 10) {
        randomXPosition = Math.floor(Math.random() * 200 - 100);
      }

      let randomZPosition = Math.floor(Math.random() * 200 - 100);

      // Checks if a rock can be in the Z axis position of a Pokémon, then reassigns the Z axis of the rock if it's the case
      while (randomZPosition >= -10 && randomZPosition <= 10) {
        randomZPosition = Math.floor(Math.random() * 200 - 100);
      }

      // Creates a random position, rotation and scale
      const randomPosition: number[] = [randomXPosition, 0, randomZPosition];
      const randomRotation: number[] = [0, (Math.PI * Math.random() * 2), 0];
      const randomScale: number = Math.random() * 10 + 0.5;

      newRocks.push({
        title: 'Rock',
        position: randomPosition,
        rotation: randomRotation,
        scale: [randomScale, randomScale, randomScale]
      });

    }

    setRocks(newRocks);

    console.log(newRocks);
  }, [setCliffYRotation, setRocks]);

  return (
    <>
      {
        (rocks && rocks.length > 0
        ) ? (
          rocks.map((r: PropsType, index: number) => {
            return (
              <Props key={index} title={r.title} position={r.position} rotation={r.rotation} scale={r.scale} />
            );
          })
        ) : (
          null
        )
      }
      <Props title={'Cliff'} position={[0, -10, 0]} rotation={[0, cliffYRotation as number, 0]} scale={[10, 10, 10]} />
      <Environment title={'Sand'} position={[0, -0.01, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]} />
    </>
  );
};

export default DesertGenerator;
