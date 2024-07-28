import React from "react";
import HomeRoute from "routes/HomeRoute";
import "./App.scss";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
import useFavBadge from "hooks/useFavBadge";

const App = () => {
  const {
    state: {
      isModalVisible,
      selectedPhoto,
      photoData,
      topicData,
      activeTopic,
      similarPhotos,
      error,
    },
    actions: {
      setSelectedPhoto,
      setIsModalVisible,
      setSimilarPhotos,
      handleCloseModal,
      fetchPhotosByTopic,
    },
  } = useApplicationData();

  const { selected, displayAlert, toggleFavourite } = useFavBadge();

  return (
    <div className="App">
      {error && <div className="error-message">{error}</div>}
      <HomeRoute
        topics={topicData}
        photos={photoData}
        activeTopic={activeTopic}
        setIsModalVisible={setIsModalVisible}
        setSelectedPhoto={setSelectedPhoto}
        fetchPhotosByTopic={fetchPhotosByTopic}
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
          similarPhotosList={similarPhotos}
          setSimilarPhotos={setSimilarPhotos}
        />
      )}
    </div>
  );
};

export default App;
