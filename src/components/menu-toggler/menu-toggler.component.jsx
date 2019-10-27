import React from 'react';
import './menu-toggler.styles.scss';
import { Swipeable } from 'react-swipeable';

const MenuToggler = ({ showMenu, toggleShowMenu, showPreviews }) => {
  const swipeHandler = e => {
    if (e.dir === 'Left') toggleShowMenu(true);
    if (e.dir === 'Right') toggleShowMenu(false);
  };

  return (
    <Swipeable onSwiped={swipeHandler}>
      <div
        className={`menu-toggler ${showMenu && 'show'} ${showPreviews &&
          'hide'}`}
      >
        <div onClick={() => toggleShowMenu(true)} className='menu-toggler-icon'>
          <img src='./images/menu.png' alt='' />
        </div>
        <div className='menu-toggler-text'>RELAXER</div>
      </div>
    </Swipeable>
  );
};

export default MenuToggler;
