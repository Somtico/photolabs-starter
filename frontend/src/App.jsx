import React, { useEffect, useCallback } from "react";
import HomeRoute from "routes/HomeRoute";
import "./App.scss";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
import useFavBadge from "hooks/useFavBadge";

const App = () => {
  const {
    state: { isModalVisible, selectedPhoto, photoData, topicData, error },
    actions: {
      setSelectedPhoto,
      setIsModalVisible,
      handleCloseModal,
      dispatch,
    },
  } = useApplicationData();

  const { selected, displayAlert, toggleFavourite } = useFavBadge();

  return (
    <div className="App">
      {error && <div className="error-message">{error}</div>}
      <HomeRoute
        topics={topicData}
        photos={photoData}
        setIsModalVisible={setIsModalVisible}
        setSelectedPhoto={setSelectedPhoto}
        favBadge={{ selected, displayAlert, toggleFavourite }}
      />
      {isModalVisible && (
        <PhotoDetailsModal
          onClose={handleCloseModal}
          photo={selectedPhoto}
          favBadge={{ selected, displayAlert, toggleFavourite }}
          photos={photoData}
          setSelectedPhoto={setSelectedPhoto}
          setIsModalVisible={setIsModalVisible}
        />
      )}
    </div>
  );
};

export default App;
