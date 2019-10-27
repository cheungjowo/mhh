import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

import frozenBrush from '../../sketches/frozenBrush';
import sketch from '../../sketches/sketch';

import './canvas-area.styles.scss';

const CanvasArea = ({ name, image, details }) => {
  const renderSketch = () => {
    switch (name) {
      case 'Frozen Brush':
        return <P5Wrapper sketch={frozenBrush} />;
      case 'Sketch':
        return <P5Wrapper sketch={sketch} />;
      default:
        return null;
    }
  };

  return (
    <div className='custom-canvas' style={{ backgroundImage: `url(${image})` }}>
      {renderSketch()}
    </div>
  );
};

export default CanvasArea;
