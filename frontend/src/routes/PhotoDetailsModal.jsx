import React from "react";
import PhotoFavButton from "components/PhotoFavButton";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({
  onClose,
  photo,
  favBadge,
  photos,
  setIsModalVisible,
  setSelectedPhoto,
}) => {
  const similarPhotos = photos.filter((p) => p.id !== photo.id); // Filter out the current photo
    
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton photoId={photo.id} isFavPhotoExist={favBadge} />
        <img
          src={photo.urls.full}
          alt="selected user's cover image"
          className="photo-details-modal__image"
        />
        <div className="photo-details-modal__photographer-details">
          <img
            src={photo.user.profile}
            alt="user's profile photo"
            className="photo-details-modal__photographer-profile"
          />
          <div className="photo-details-modal__photographer-info">
            <p>{photo.user.username}</p>
            <p className="photo-details-modal__photographer-location">
            {photo.location ? `${photo.location.city}, ` : ""}
            {photo.location ? photo.location.country : ""}
            </p>
          </div>
        </div>
        <div>
          <h3 className="photo-details-modal__header">Similar Photos</h3>
          <PhotoList
            photos={similarPhotos}
            isFavPhotoExist={favBadge}
            setIsModalVisible={setIsModalVisible}
            setSelectedPhoto={setSelectedPhoto}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
