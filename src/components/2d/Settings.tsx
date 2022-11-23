// Packages
import { FC } from 'react';

// Types
import SettingsType from '../../types/props/2d/settings';

const Settings: FC<SettingsType> = (props: SettingsType) => {
  // Props
  const { game }: SettingsType = props;
  
  return (
    <div className='absolute h-full w-full'>
      <div className='flex w-full h-full p-12'>
        <div className='mt-auto'>
          <input type='checkbox' />
        </div>
      </div>
    </div>
  );
};

export default Settings;
