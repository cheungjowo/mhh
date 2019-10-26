import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

import sketch from './p5script';

import './canvas-area.styles.scss';

const CanvasArea = ({ name, image, details }) => {
  return (
    <div className='custom-canvas' style={{ backgroundImage: `url(${image})` }}>
      {/* <P5Wrapper sketch={sketch} /> */}
    </div>
  );
};

export default CanvasArea;
