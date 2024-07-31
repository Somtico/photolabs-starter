import React from "react";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  topics,
  photos,
  setSelectedPhoto,
  setIsModalVisible,
  activeTopic,
  fetchPhotosByTopic,
  searchPhotos,
  searchResults,
  favBadge,
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        isFavPhotoExist={favBadge}
        activeTopic={activeTopic}
        fetchPhotosByTopic={fetchPhotosByTopic}
        searchPhotos={searchPhotos}
        searchResults={searchResults}
      />
      <PhotoList
        photos={searchResults.length > 0 ? searchResults : photos}
        isFavPhotoExist={favBadge}
        setIsModalVisible={setIsModalVisible}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  );
};

export default HomeRoute;
