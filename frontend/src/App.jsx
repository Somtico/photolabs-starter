import React from "react";

// import PhotoListItem from "./components/PhotoListItem";
import PhotoList from "./components/PhotoList";
import TopNavigationBar from "components/TopNavigationBar";
import "./App.scss";

// const photos = new Array(3);

const App = () => {
  return (
    <div className="App">
      {/* {photos.from(Array(3)).map((_, index) => <PhotoListItem key={index} photoData={sampleDataForPhotoListItem} />)} */}
      <TopNavigationBar />
      <PhotoList />
    </div>
  );
};

export default App;
