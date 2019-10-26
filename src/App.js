import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CanvasPreviewContainer from './components/canvas-preview-container/canvas-preview-container.component';

import './app.styles.scss';
import CanvasArea from './components/canvas-area/canvas-area.component';

const App = () => (
  <div className='app'>
    <CanvasArea />
    <CanvasPreviewContainer />
  </div>
);

export default App;
