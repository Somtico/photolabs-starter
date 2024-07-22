import { useState } from "react";
import useFavBadge from "hooks/useFavBadge";

const useApplicationData = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const { selected, displayAlert, handleClick, updateToFavPhotoIds } = useFavBadge();

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return {
    state: {
      isModalVisible,
      selectedPhoto,
      selected,
      displayAlert
    },
    actions: {
      handleClick,
      updateToFavPhotoIds,
      setSelectedPhoto,
      handleCloseModal,
      setIsModalVisible
    }
  };
};

export default useApplicationData;
