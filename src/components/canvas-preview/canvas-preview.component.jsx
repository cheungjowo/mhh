import React from 'react';
import './canvas-preview.styles.scss';

const CanvasPreview = ({
  name,
  image,
  details,
  setCurrentCanvas,
  setShowPreviews
}) => {
  const handleClick = () => {
    setCurrentCanvas({ name, image, details });
    setShowPreviews(false);
  };

  return (
    <div onClick={handleClick} className='canvas-preview'>
      <div className='canvas-preview-name'>{name}</div>
      <div
        className='canvas-preview-image'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className='canvas-preview-details'>{details}</div>
    </div>
  );
};

export default CanvasPreview;
