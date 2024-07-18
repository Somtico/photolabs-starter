import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, favBadge }) => {
  return (
    <div>
      <ul className="photo-list">
        {photos.map((photo) => (
          <PhotoListItem key={photo.id} photoData={photo} favBadge={favBadge} />
        ))}
      </ul>
    </div>
  );
};

export default PhotoList;
