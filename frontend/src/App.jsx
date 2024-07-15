import React from "react";

// import PhotoListItem from "./components/PhotoListItem";
import HomeRoute from "routes/HomeRoute";
import "./App.scss";

// const photos = new Array(3);

const App = () => {
  return (
    <div className="App">
      {/* {photos.from(Array(3)).map((_, index) => <PhotoListItem key={index} photoData={sampleDataForPhotoListItem} />)} */}
      <HomeRoute />
    </div>
  );
};

export default App;
