import React from "react";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";
import useFavBadge from "components/useFavBadge";

const HomeRoute = ({ topics, photos }) => {
  const favBadge = useFavBadge();
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favBadge={favBadge} />
      <PhotoList photos={photos} favBadge={favBadge} />
    </div>
  );
};

export default HomeRoute;
