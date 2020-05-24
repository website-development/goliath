import React, { useState } from 'react';
import Switch from 'react-input-switch';

const SwitchToggle = ({ title }) => {
  const [value, setValue] = useState(0);
  const isActive = value === 0 ? 'radio__title--disable' : '';

  return (
    <div className="radio">
      <Switch
        value={value}
        onChange={setValue}
        styles={{
          track: {
            backgroundColor: '#ffffff33',
            width: '27px',
            height: '3px!important',
            top: '35%!important',
            borderRadius: '20px'
          },
          trackChecked: {
            backgroundColor: '#ffffff33'
          },
          button: {
            backgroundColor: 'white',
            boxShadow: '0px 1px 10px rgba(40, 54, 65, 0.2)'
          },
          buttonChecked: {
            backgroundImage: 'linear-gradient(135deg, #FDD226 0%, #FF5753 100%)'
          }
        }}
      />
      <span className={`radio__title ${isActive}`}>{title}</span>
    </div>
  );
} ;

export default SwitchToggle;