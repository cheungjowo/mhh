import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

import frozenBrush from '../../sketches/frozenBrush';
import sketch from '../../sketches/sketch';
import particlePlotter from '../../sketches/particlePlotter';
import sketch1 from '../../sketches/sketch1';
import sketch2 from '../../sketches/sketch2';
import sketch3 from '../../sketches/sketch3';
import sketch4 from '../../sketches/sketch4';
import sketch5 from '../../sketches/sketch5';
import sketch6 from '../../sketches/sketch6';

import './canvas-area.styles.scss';

const CanvasArea = ({ name, image, details }) => {
  const renderSketch = () => {
    switch (name) {
      case 'Frozen Brush':
        return <P5Wrapper sketch={frozenBrush} />;
      case 'Sketch':
        return <P5Wrapper sketch={sketch} />;
      case 'Particle Plotter':
        return <P5Wrapper sketch={particlePlotter} />;
      case 'Sketch 1':
        return <P5Wrapper sketch={sketch1} />;
      case 'Sketch 2':
        return <P5Wrapper sketch={sketch2} />;
      case 'Sketch 3':
        return <P5Wrapper sketch={sketch3} />;
      case 'Sketch 4':
        return <P5Wrapper sketch={sketch4} />;
      case 'Sketch 5':
        return <P5Wrapper sketch={sketch5} />;
      case 'Sketch 6':
        return <P5Wrapper sketch={sketch6} />;
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
