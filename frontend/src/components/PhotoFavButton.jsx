import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ photoId, favBadge }) {
  const { selected, displayAlert, handleClick } = favBadge;

  return (
    <div className="photo-list__fav-icon" onClick={() => handleClick(photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected[photoId]} displayAlert={displayAlert} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
