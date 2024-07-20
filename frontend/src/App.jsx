import React, { useState } from "react";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import "./App.scss";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        setIsModalVisible={setIsModalVisible}
      />
      {isModalVisible && <PhotoDetailsModal onClose={handleCloseModal} />}
    </div>
  );
};

export default App;
