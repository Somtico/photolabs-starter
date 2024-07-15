import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [selected, setSelected] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);

  const handleClick = useCallback(() => {
    setSelected(prevSelected => !prevSelected);
    setDisplayAlert(true);
  }, []);

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} displayAlert={displayAlert}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;