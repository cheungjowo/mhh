import React from 'react';
import Slider from 'react-slick';

import CanvasPreview from '../canvas-preview/canvas-preview.component';

import './canvas-preview.styles.scss';

const CanvasPreviewContainer = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true
  };

  return (
    <div className='canvas-preview-container'>
      <Slider {...settings}>
        <CanvasPreview />
        <CanvasPreview />
        <CanvasPreview />
        <CanvasPreview />
        <CanvasPreview />
      </Slider>
    </div>
  );
};

export default CanvasPreviewContainer;
