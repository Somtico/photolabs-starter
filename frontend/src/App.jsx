import React, { useState } from "react";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import "./App.scss";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </div>
  );
};

export default App;
