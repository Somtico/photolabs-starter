import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, isFavPhotoExist, setIsModalVisible, setSelectedPhoto }) => {
  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setIsModalVisible(true);
  };

  return (
    <div>
      <ul className="photo-list">
        {photos.map((photo) => (
          <PhotoListItem
            key={photo.id}
            photoData={photo}
            isFavPhotoExist={isFavPhotoExist}
            onPhotoClick={() => handlePhotoClick(photo)}
          />
        ))}
      </ul>
    </div>
  );
};

export default PhotoList;
