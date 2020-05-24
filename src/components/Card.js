import React from 'react';

const Card = ({ text, bg, icon }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${bg})`}}>
      <div className="card__bottom">
        <img className="card__icon" src={icon} alt={text} />
        <p className="card__text">{text}</p>
      </div>
    </div>
  );
};

export default Card;