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
  const [desertProps, setDesertProps]: [PropsType[] | null, Dispatch<SetStateAction<PropsType[] | null>>] = useState<PropsType[] | null>(null);
  const [desertAnimatedProps, setDesertAnimatedProps]: [AnimationType[] | null, Dispatch<SetStateAction<AnimationType[] | null>>] = useState<AnimationType[] | null>(null);

  useEffect((): void => {
    // Sets cliff Y axis rotation randomly
    setCliffYRotation((Math.PI * Math.random() * 2));

    // Initializes empty array of 3D props
    const newDesertProps: PropsType[] = [];
    const newDesertAnimatedProps: AnimationType[] = [];

    const creatingElements = (
      elements: number,
      elementName: string,
      yPosition: number,
      isYRotationRandom: boolean,
      minDistance: number,
      maxDistance: number,
      minScale: number,
      maxScale: number,
      array: AnimationType[] | PropsType[],
    ): void => {
      // Creates N elements with random position, rotation and scale
      for (let index = 0; index < elements; index++) {
        let randomXPosition = Math.random() * maxDistance - (maxDistance / 2);

        // Checks if a element can be in the X axis position of a Pokémon, then reassigns the X axis of the element if it's the case
        while (randomXPosition >= -minDistance && randomXPosition <= minDistance) {
          randomXPosition = Math.random() * maxDistance - (maxDistance / 2);
        }

        let randomZPosition = Math.random() * maxDistance - (maxDistance / 2);

        // Checks if a element can be in the Z axis position of a Pokémon, then reassigns the Z axis of the element if it's the case
        while (randomZPosition >= -minDistance && randomZPosition <= minDistance) {
          randomZPosition = Math.random() * maxDistance - (maxDistance / 2);
        }

        // Creates a random position, rotation and scale
        const randomPosition: number[] = [randomXPosition, yPosition, randomZPosition];
        const randomRotation: number[] = [0, isYRotationRandom ? (Math.PI * Math.random() * 2) : 0, 0];
        const randomScale: number = Math.random() * maxScale + minScale;

        array.push({
          title: elementName,
          position: randomPosition,
          rotation: randomRotation,
          scale: [randomScale, randomScale, randomScale],
        });
      };
    };
        
    // Generates rocks and cactus
    creatingElements(
      // Elements
      10,
      // Element name
      'DesertProps1',
      // Y axis position
      0.25,
      // Y axis rotation
      true,
      // Minimum distance
      5,
      // Maximum distance
      50,
      // Minimum scale
      10,
      // Maximum scale
      20,
      // Targeted array
      newDesertProps,
    );

    // Generates small cactus
    creatingElements(
      // Elements
      50,
      // Element name
      'DesertProps2',
      // Y axis position
      0,
      // Y axis rotation
      true,
      // Minimum distance
      5,
      // Maximum distance
      100,
      // Minimum scale
      10,
      // Maximum scale
      20,
      // Targeted array
      newDesertProps,
    );

    // Generates huge dunes
    creatingElements(
      // Elements
      50,
      // Element name
      'DesertProps3',
      // Y axis position
      0,
      // Y axis rotation
      true,
      // Minimum distance
      50,
      // Maximum distance
      500,
      // Minimum scale
      10,
      // Maximum scale
      100,
      // Targeted array
      newDesertProps,
    );

    // Generates small dunes
    creatingElements(
      // Elements
      25,
      // Element name
      'DesertProps3',
      // Y axis position
      0,
      // Y axis rotation
      true,
      // Minimum distance
      5,
      // Maximum distance
      100,
      // Minimum scale
      1,
      // Maximum scale
      10,
      // Targeted array
      newDesertProps,
    );

    // Generates animated cactus
    creatingElements(
      // Elements
      20,
      // Element name
      'Cactus',
      // Y axis position
      -0.25,
      // Y axis rotation
      false,
      // Minimum distance
      5,
      // Maximum distance
      100,
      // Minimum scale
      0.5,
      // Maximum scale
      2,
      // Targeted array
      newDesertAnimatedProps,
    );

    setDesertProps(newDesertProps);
    setDesertAnimatedProps(newDesertAnimatedProps);
  }, [setCliffYRotation, setDesertAnimatedProps, setDesertProps]);

  return (
    <>
      {/* Creates as many desert props there is in the "desertProps" state */}
      {
        (desertProps && desertProps.length > 0
        ) ? (
          desertProps.map((d: PropsType, index: number) => {
            return (
              <Props
                key={index}
                title={d.title}
                position={d.position}
                rotation={d.rotation}
                scale={d.scale}
              />
            );
          })
        ) : (
          null
        )
      }
      {/* Creates as many desert animated props there is in the "desertAnimatedProps" state */}
      {
        (desertAnimatedProps && desertAnimatedProps.length > 0
        ) ? (
          desertAnimatedProps.map((d: AnimationType, index: number) => {
            return (
              <Animation
                key={index}
                title={d.title}
                position={d.position}
                rotation={d.rotation}
                scale={d.scale}
              />
            );
          })
        ) : (
          null
        )
      }
      <Props title={'Cliff'} position={[0, -100, 0]} rotation={[0, cliffYRotation as number, 0]} scale={[10, 10, 10]} />
      <Environment title={'Sand'} position={[0, -0.01, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]} />
      <Environment title={'Sky'} position={[0, 0, 0]} rotation={[0, Math.PI * 1.75, 0]} scale={[10, 10, 10]} />
    </>
  );
};

export default DesertGenerator;
