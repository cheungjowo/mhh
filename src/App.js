import React, { useState, useEffect } from 'react';
import { Swipeable } from 'react-swipeable';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import DATA from './data';

import CanvasPreviewContainer from './components/canvas-preview-container/canvas-preview-container.component';
import CanvasArea from './components/canvas-area/canvas-area.component';
import SearchBar from './components/search-bar/seach-bar.component';

import './app.styles.scss';
import MenuToggler from './components/menu-toggler/menu-toggler.component';

const App = () => {
  const [showPreviews, setShowPreviews] = useState(false);
  const [showMenu, toggleShowMenu] = useState(false);
  const [data, setData] = useState(DATA);
  const [currentCanvas, setCurrentCanvas] = useState(data[0]);

  const swipeHandler = e => {
    if (e.dir !== 'Up') return;
    setShowPreviews(true);
    toggleShowMenu(false);
  };

  return (
    <div className='app'>
      <SearchBar
        showPreviews={showPreviews}
        setShowPreviews={setShowPreviews}
      />
      <MenuToggler
        showMenu={showMenu}
        toggleShowMenu={toggleShowMenu}
        showPreviews={showPreviews}
      />
      <div className={`dimmer ${showPreviews && 'active'}`} />
      <CanvasArea {...currentCanvas} />
      <CanvasPreviewContainer
        showPreviews={showPreviews}
        setShowPreviews={setShowPreviews}
        data={data}
        setCurrentCanvas={setCurrentCanvas}
      />
      <Swipeable onSwiped={swipeHandler}>
        <div className='swipe-area'></div>
      </Swipeable>
    </div>
  );
};

export default App;
