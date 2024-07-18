import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photoData, favBadge }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton photoId={photoData.id} favBadge={favBadge}/>
      <img
        src={photoData.urls.full}
        alt="user's cover image"
        className="photo-list__image"
      />
      <div className="photo-list__user-details">
        <img
          src={photoData.user.profile}
          alt="user's profile photo"
          className="photo-list__user-profile"
        />
        <div className="photo-list__user-info">
          <p>{photoData.user.username}</p>
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
