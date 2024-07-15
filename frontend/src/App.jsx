import React from "react";

// import PhotoListItem from "./components/PhotoListItem";
import PhotoList from "./components/PhotoList";
import TopicList from "components/TopicList";
import "./App.scss";

// const photos = new Array(3);

const App = () => {
  return (
    <div className="App">
      {/* {photos.from(Array(3)).map((_, index) => <PhotoListItem key={index} photoData={sampleDataForPhotoListItem} />)} */}
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;
