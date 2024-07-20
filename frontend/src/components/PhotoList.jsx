import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const PhotoList = ({ photos, isFavPhotoExist, isModalVisible, setIsModalVisible }) => {
  const handlePhotoClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <ul className="photo-list">
        {photos.map((photo) => (
          <PhotoListItem
            key={photo.id}
            photoData={photo}
            isFavPhotoExist={isFavPhotoExist}
            onPhotoClick={handlePhotoClick}
          />
        ))}
      </ul>
      <PhotoDetailsModal isVisible={isModalVisible} onClose={handleCloseModal} />
    </div>
  );
};

export default PhotoList;
