import React from "react";

// import PhotoListItem from "./components/PhotoListItem";
import PhotoList from "./components/PhotoList";
import "./App.scss";

// const photos = new Array(3);

const App = () => {
  return (
    <div className="App">
      {/* {photos.from(Array(3)).map((_, index) => <PhotoListItem key={index} photoData={sampleDataForPhotoListItem} />)} */}
      <PhotoList />
    </div>
  );
};

export default App;
