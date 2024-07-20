import React from "react";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topics, photos, setIsModalVisible, setSelectedPhoto, favBadge }) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={favBadge} />
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
