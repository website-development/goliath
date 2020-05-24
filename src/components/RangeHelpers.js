import * as React from 'react';

export const Handle = ({
  domain: [min, max],
  handle: { id, value, percent },
  getHandleProps
}) => (
  <div
    role="slider"
    aria-valuemin={min}
    aria-valuemax={max}
    aria-valuenow={value}
    style={{
      left: `${percent}%`,
      position: 'absolute',
      marginLeft: '-11px',
      marginTop: '-6px',
      zIndex: 2,
      width: 17,
      height: 17,
      cursor: 'pointer',
      borderRadius: '50%',
      backgroundImage: 'linear-gradient(135deg, #FDD226 0%, #FF5753 100%)',
      boxShadow: '0px 1px 10px rgba(40, 54, 65, 0.4)'
    }}
    {...getHandleProps(id)}
  >
    <span
      style={{
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        position: 'absolute',
        marginTop: '30px',
        fontSize: 10,
        lineHeight: '18px',
        color: 'white',
        textAlign: 'center',
      }}
    >
      {value}k
    </span>
  </div>
);

export const Track = ({
  source,
  target,
  getTrackProps
}) => (
  <div
    style={{
      position: 'absolute',
      height: 4,
      zIndex: 1,
      backgroundColor: '#FF5753',
      borderRadius: 7,
      cursor: 'pointer',
      left: `${source.percent}%`,
      width: `${target.percent - source.percent}%`
    }}
    {...getTrackProps()}
  />
);