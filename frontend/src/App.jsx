import React, { useState } from "react";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import "./App.scss";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useFavBadge from "components/useFavBadge";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const favBadge = useFavBadge();

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        setIsModalVisible={setIsModalVisible}
        setSelectedPhoto={setSelectedPhoto}
        favBadge={favBadge}
      />
      {isModalVisible && (
        <PhotoDetailsModal
          onClose={handleCloseModal}
          photo={selectedPhoto}
          favBadge={favBadge}
          photos={photos}
          setSelectedPhoto={setSelectedPhoto}
          setIsModalVisible={setIsModalVisible}
        />
      )}
    </div>
  );
};

export default App;
