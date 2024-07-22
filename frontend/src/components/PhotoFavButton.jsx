import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ photoId, isFavPhotoExist }) {
  const { selected, displayAlert, toggleFavourite } = isFavPhotoExist;

  return (
    <div className="photo-list__fav-icon" onClick={() => toggleFavourite(photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected[photoId]} displayAlert={displayAlert} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
