// Packages
import { FC } from 'react';

// Types
import SettingsType from '../../types/props/2d/settings';

const Settings: FC<SettingsType> = (props: SettingsType) => {
  // Props
  const { game }: SettingsType = props;
  
  return (
    <div className='absolute'>
      <input />
    </div>
  );
};

export default Settings;
