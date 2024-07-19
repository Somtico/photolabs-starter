import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  const { selected } = isFavPhotoExist;

  return (
    <div className='fav-badge'>
      <FavIcon selected={Object.values(selected).some(Boolean)} displayAlert={Object.values(selected).some(Boolean)} />
      </div>
  ) 
};

export default FavBadge;
