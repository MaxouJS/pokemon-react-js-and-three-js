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
  const [elements, setElements]: [AnimationType[] | PropsType[] | null, Dispatch<SetStateAction<AnimationType[] | PropsType[] | null>>] = useState<AnimationType[] | PropsType[] | null>(null);
  const [cactus, setCactus]: [AnimationType[] | null, Dispatch<SetStateAction<AnimationType[] | null>>] = useState<AnimationType[] | null>(null);
  const [dunes, setDunes]: [PropsType[] | null, Dispatch<SetStateAction<PropsType[] | null>>] = useState<PropsType[] | null>(null);
  const [rocks, setRocks]: [PropsType[] | null, Dispatch<SetStateAction<PropsType[] | null>>] = useState<PropsType[] | null>(null);

  useEffect((): void => {
    // Sets cliff Y axis rotation randomly
    setCliffYRotation((Math.PI * Math.random() * 2));

    // Initializes empty array of 3D props
    const newCactus: AnimationType[] = [];
    const newDunes: PropsType[] = [];
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
      // Creates N elements with random position, rotation and scale
      for (let index = 0; index < elements; index++) {
        let randomXPosition = Math.random() * distance - (distance / 2);

        // Checks if a element can be in the X axis position of a Pokémon, then reassigns the X axis of the element if it's the case
        while (randomXPosition >= -10 && randomXPosition <= 10) {
          randomXPosition = Math.random() * distance - (distance / 2);
        }

        let randomZPosition = Math.random() * distance - (distance / 2);

        // Checks if a element can be in the Z axis position of a Pokémon, then reassigns the Z axis of the element if it's the case
        while (randomZPosition >= -10 && randomZPosition <= 10) {
          randomZPosition = Math.random() * distance - (distance / 2);
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

    // Generating all the cactus
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
    
    // Generating all the dunes
    creatingElements(
      // Elements
      100,
      // Element name
      'Dune',
      // Y axis rotation
      (Math.PI * Math.random() * 2),
      // Distance
      100,
      // Minimum scale
      0.25,
      // Maximum scale
      2,
      // Targeted array
      newRocks,
    );
    

    // Generating all the rocks
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
      2,
      // Targeted array
      newRocks,
    );

    setCactus(newCactus);
    setDunes(newDunes);
    setRocks(newRocks);
  }, [setCactus, setDunes, setCliffYRotation, setRocks]);

  return (
    <>
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
      {/* Creates as many dunes there is in the "dunes" state */}
      {
        (dunes && dunes.length > 0
        ) ? (
          dunes.map((r: PropsType, index: number) => {
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
      <Props title={'Cliff'} position={[0, -10, 0]} rotation={[0, cliffYRotation as number, 0]} scale={[10, 10, 10]} />
      <Environment title={'Sand'} position={[0, -0.01, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]} />
    </>
  );
};

export default DesertGenerator;
