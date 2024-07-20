import React from "react";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";
import useFavBadge from "components/useFavBadge";

const HomeRoute = ({ topics, photos, setIsModalVisible }) => {
  const favBadge = useFavBadge();
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={favBadge} />
      <PhotoList
        photos={photos}
        isFavPhotoExist={favBadge}
        setIsModalVisible={setIsModalVisible}
      />
    </div>
  );
};

export default HomeRoute;
