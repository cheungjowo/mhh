import React from 'react';
import Slider from 'react-slick';
import { Swipeable } from 'react-swipeable';

import CanvasPreview from '../canvas-preview/canvas-preview.component';

import './canvas-preview.styles.scss';

const CanvasPreviewContainer = ({
  showPreviews,
  setShowPreviews,
  data,
  setCurrentCanvas
}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    swipeToSlide: true
  };

  const swipeHandler = e => {
    if (e.dir !== 'Down') return;
    setShowPreviews(false);
  };

  return (
    <Swipeable onSwiped={swipeHandler}>
      <div className={`canvas-preview-container ${showPreviews && 'show'}`}>
        <Slider {...settings}>
          {data.map((d, i) => (
            <CanvasPreview
              key={i}
              {...d}
              setCurrentCanvas={setCurrentCanvas}
              setShowPreviews={setShowPreviews}
            />
          ))}
        </Slider>
      </div>
    </Swipeable>
  );
};

export default CanvasPreviewContainer;
