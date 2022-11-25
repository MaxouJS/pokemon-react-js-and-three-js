// Packages
import { FC } from 'react';

// Types
import MoveType from '../../types/props/2d/move';

const Move: FC<MoveType> = (props: MoveType) => {
  // Props
  const { move }: MoveType = props;
  
  return (
    <button className='bg-gradient-to-r from-cyan-400 to-green-400 shadow-xl shadow-green-400/50 rounded-xl ring-2 ring-cyan-400/50 md:w-64 w-48 p-2 text-white text-sm font-bold drop-shadow hover:scale-110 duration-100'>
      <p>{move.moveName}</p>
    </button>
  );
};

export default Move;
