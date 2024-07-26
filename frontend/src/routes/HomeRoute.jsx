import React from "react";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  topics,
  photos,
  setIsModalVisible,
  setSelectedPhoto,
  fetchPhotosByTopic,
  favBadge,
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        isFavPhotoExist={favBadge}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      <PhotoList
        photos={photos}
        isFavPhotoExist={favBadge}
        setIsModalVisible={setIsModalVisible}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  );
};

export default HomeRoute;
