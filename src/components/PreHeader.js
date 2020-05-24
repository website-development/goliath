import React from 'react';

const PreHeader = ({ mainImg, secondaryImg }) => {
  const mainImageURL = mainImg ||  '/images/table.jpeg';
  const secondaryImgURL = secondaryImg || '/images/typing.jpeg';

  return (
    <div className="preheader">
      <div className="preheader__block" style={{ backgroundImage: `linear-gradient( rgba(47, 57, 66, 0.8), rgba(25, 36, 49, 0.8) ), url(${mainImageURL})`}}>
        <h2 className="preheader__title">welcome to proyect home</h2>
        <p className="preheader__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam pellentesque rhoncus purus amet amet. Aliquet fringilla morbi elementum fames ullamcorper.
          Commodo proin interdum eros, consectetur vel ut eget. Pellentesque volutpat enim, vel ac lorem volutpat.
        </p>
      </div>
      <div className="preheader__block" style={{ backgroundImage: `linear-gradient( rgba(47, 57, 66, 0.8), rgba(25, 36, 49, 0.8) ), url(${secondaryImgURL})`}}>
        <h2 className="preheader__title">Go to the next step</h2>
        <p className="preheader__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim sem aenean eu nec gravida. Adipiscing volutpat ac a sed interdum mattis.
        </p>
        <button type="button" className="preheader__button">Start Quality</button>
      </div>
    </div>
  );
};

export default PreHeader;