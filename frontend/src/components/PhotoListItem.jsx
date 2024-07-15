import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photoData }) => {
  return (
    <div className="photo-list__item">
      <div>
        <img
          src={photoData.imageSource}
          alt="user image"
          className="photo-list__image"
        />
      </div>
      <div className="photo-list__user-details">
        <img
          src={photoData.profile}
          alt="profile"
          className="photo-list__user-profile"
        />
        <div>
          <p className="photo-list__user-info">{photoData.username}</p>
          <p className="photo-list__user-location">
            {photoData.location.city}
            {", "}
            {photoData.location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
