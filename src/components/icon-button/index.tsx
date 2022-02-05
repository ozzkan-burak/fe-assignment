
import { FunctionComponent } from 'react';

//interface
import { IIconButtons } from '@/interfaces/icon-buton/iconButton';

//icons
import notification from '../../assets/img/notification/Notification.png';
import settings from '../../assets/img/settings/settings.png';
import bell from '../../assets/img/bell/bell.png';
import add from '../../assets/img/add/36px.png';


const IconButton:FunctionComponent<IIconButtons> = ({icon, text, bgColor}) => {

  return (
     <div className="icon-button-wrapper">
        <div className='icon-button-icon' style={{background:`${bgColor}`}}>
        {
            icon === 'notification' ? <img src={notification} alt="notification" /> :
            icon === 'settings' ? <img src={settings} alt="settings" /> :
            icon === 'bell' ? <img src={bell} alt="bell" /> :
            icon === 'add' ? <img src={add} alt="add" /> : ''
          }
        </div>
        <div className="icon-button-content">
          {text}
        </div>
      </div> 
  );
};

export default IconButton;
