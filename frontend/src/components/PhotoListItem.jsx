import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photoData, isFavPhotoExist, onPhotoClick }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton
        photoId={photoData.id}
        isFavPhotoExist={isFavPhotoExist}
      />
      <img
        src={photoData.urls.regular}
        alt="user's cover image"
        className="photo-list__image"
        onClick={onPhotoClick}
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
            {photoData.location ? `${photoData.location.city}, ` : ""}
            {photoData.location ? photoData.location.country : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
