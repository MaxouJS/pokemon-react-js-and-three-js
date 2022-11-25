// Packages
import { FC } from 'react';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';

// States
import battleState from '../../atoms/battle';

// Types
import TextBoxType from '../../types/props/2d/textBox';
import BattleType from '../../types/battle';

const TextBox: FC<TextBoxType> = (props: TextBoxType) => {
  // Props
  const { text }: TextBoxType = props;

  return (
    <div className='flex flex-col items-center justify-center bg-black/50 h-full w-full space-y-4'>
      <p className='text-lg text-white'>{text}</p>
    </div>
  );
};

export default TextBox;
