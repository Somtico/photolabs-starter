import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photoData }) => {
  return (
    <React.Fragment>
      <div>
        <img
          src={photoData.imageSource}
          alt="user image"
        />
      </div>
      <div>
        <img src={photoData.profile} alt="profile" />
        <p>{photoData.username}</p>
        <p>
          {photoData.location.city}{" "}
          {photoData.location.country}
        </p>
      </div>
    </React.Fragment>
  );
};

export default PhotoListItem;
