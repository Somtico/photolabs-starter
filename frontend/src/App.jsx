import React from "react";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import "./App.scss";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
  const {
    state: { isModalVisible, selectedPhoto, selected, displayAlert },
    actions: {
      handleClick,
      updateToFavPhotoIds,
      setSelectedPhoto,
      handleCloseModal,
      setIsModalVisible,
    },
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        setIsModalVisible={setIsModalVisible}
        setSelectedPhoto={setSelectedPhoto}
        favBadge={{ selected, displayAlert, handleClick, updateToFavPhotoIds }}
      />
      {isModalVisible && (
        <PhotoDetailsModal
          onClose={handleCloseModal}
          photo={selectedPhoto}
          photos={photos}
          setSelectedPhoto={setSelectedPhoto}
          setIsModalVisible={setIsModalVisible}
          favBadge={{ selected, displayAlert, handleClick, updateToFavPhotoIds }}
        />
      )}
    </div>
  );
};

export default App;
