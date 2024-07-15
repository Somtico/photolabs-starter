import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photoData }) => {
  return (
    <div className="photo-list__item">
      <img
        src={photoData.imageSource}
        alt="user's cover image"
        className="photo-list__image"
      />
      <div className="photo-list__user-details">
        <img
          src={photoData.profile}
          alt="user's profile photo"
          className="photo-list__user-profile"
        />
        <div className="photo-list__user-info">
          <p>{photoData.username}</p>
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
