// Packages
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';

// Types
import AnimationType from '../../types/props/3d/animation';
import PropsType from '../../types/props/3d/props';
import Animation from '../3d/Animation';

// Components
import Environment from '../3d/Environment';
import Props from '../3d/Props';

const DesertGenerator: FC = () => {
  // States
  const [cliffYRotation, setCliffYRotation]: [number | null, Dispatch<SetStateAction<number | null>>] = useState<number | null>(null);
  const [rocks, setRocks]: [PropsType[] | null, Dispatch<SetStateAction<PropsType[] | null>>] = useState<PropsType[] | null>(null);
  const [cactus, setCactus]: [AnimationType[] | null, Dispatch<SetStateAction<AnimationType[] | null>>] = useState<AnimationType[] | null>(null);

  useEffect((): void => {
    // Sets cliff Y axis rotation randomly
    setCliffYRotation((Math.PI * Math.random() * 2));

    // Initializes empty array of 3D props
    const newCactus: AnimationType[] = [];
    const newRocks: PropsType[] = [];

    const creatingElements = (
      elements: number,
      elementName: string,
      yRotation: number,
      distance: number,
      minScale: number,
      maxScale: number,
      array: AnimationType[] | PropsType[],
    ): void => {
      // Creates 100 rocks with random position, rotation and scale
      for (let index = 0; index < elements; index++) {
        let randomXPosition = Math.floor(Math.random() * distance - (distance / 2));

        // Checks if a rock can be in the X axis position of a Pokémon, then reassigns the X axis of the rock if it's the case
        while (randomXPosition >= -10 && randomXPosition <= 10) {
          randomXPosition = Math.floor(Math.random() * distance - (distance / 2));
        }

        let randomZPosition = Math.floor(Math.random() * distance - (distance / 2));

        // Checks if a rock can be in the Z axis position of a Pokémon, then reassigns the Z axis of the rock if it's the case
        while (randomZPosition >= -10 && randomZPosition <= 10) {
          randomZPosition = Math.floor(Math.random() * distance - (distance / 2));
        }

        // Creates a random position, rotation and scale
        const randomPosition: number[] = [randomXPosition, 0, randomZPosition];
        const randomRotation: number[] = [0, yRotation, 0];
        const randomScale: number = Math.random() * maxScale + minScale;

        array.push({
          title: elementName,
          position: randomPosition,
          rotation: randomRotation,
          scale: [randomScale, randomScale, randomScale],
        });
      };
    };

    creatingElements(
      // Elements
      20,
      // Element name
      'Cactus',
      // Y axis rotation
      0,
      // Distance
      50,
      // Minimum scale
      0.5,
      // Maximum scale
      2,
      // Targeted array
      newCactus,
    );
    creatingElements(
      // Elements
      100,
      // Element name
      'Rock',
      // Y axis rotation
      (Math.PI * Math.random() * 2),
      // Distance
      200,
      // Minimum scale
      0.25,
      // Maximum scale
      10,
      // Targeted array
      newRocks,
    );

    setCactus(newCactus);
    setRocks(newRocks);
  }, [setCactus, setCliffYRotation, setRocks]);

  return (
    <>
      {/* Creates as many rocks there is in the "rocks" state */}
      {
        (rocks && rocks.length > 0
        ) ? (
          rocks.map((r: PropsType, index: number) => {
            return (
              <Props
                key={index}
                title={r.title}
                position={r.position}
                rotation={r.rotation}
                scale={r.scale}
              />
            );
          })
        ) : (
          null
        )
      }
      {/* Creates as many rocks there is in the "rocks" state */}
      {
        (cactus && cactus.length > 0
        ) ? (
          cactus.map((c: PropsType, index: number) => {
            return (
              <Animation
                key={index}
                title={c.title}
                position={c.position}
                rotation={c.rotation}
                scale={c.scale}
              />
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
