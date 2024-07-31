import React, { useState } from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import SearchBar from "./SearchBar";
import "../styles/TopNavigationBar.scss";

const TopNavigationBar = ({
  topics,
  isFavPhotoExist,
  activeTopic,
  fetchPhotosByTopic,
  searchPhotos,
}) => {
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">
        <a href="/">PhotoLabs</a>
      </span>
      <div className="top-nav-bar">
        <TopicList
          topics={topics}
          activeTopic={activeTopic}
          fetchPhotosByTopic={fetchPhotosByTopic}
        />
        <SearchBar searchPhotos={searchPhotos} />
        <FavBadge isFavPhotoExist={isFavPhotoExist} />
      </div>
    </div>
  );
};

export default TopNavigationBar;
