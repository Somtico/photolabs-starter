import React from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigationBar = ({ topics, isFavPhotoExist, fetchPhotosByTopic }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo"><a href="/">PhotoLabs</a></span>
      <div className="top-nav-bar">
        <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic} />
        <FavBadge isFavPhotoExist={isFavPhotoExist} />
      </div>
    </div>
  );
};

export default TopNavigationBar;
