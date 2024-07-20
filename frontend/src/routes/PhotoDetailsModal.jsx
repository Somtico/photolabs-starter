import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({ onClose, photo }) => {
  console.log(photo.urls.regular);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div>
        <img src={photo.urls.full} alt="selected user's cover image" className="photo-details-modal__image" />
        <div className="photo-details-modal__photographer-details">
          <img
            src={photo.user.profile}
            alt="user's profile photo"
            className="photo-details-modal__photographer-profile"
          />
          <div className="photo-details-modal__photographer-info">
            <p>{photo.user.username}</p>
            <p className="photo-details-modal__photographer-location">
              {photo.location.city}
              {", "}
              {photo.location.country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
