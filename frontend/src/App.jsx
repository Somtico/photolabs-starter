import React from "react";

import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos"; // Ensure this is the correct path
import topics from "mocks/topics"; // Import your topics
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} />
    </div>
  );
};

export default App;
