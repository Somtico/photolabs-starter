import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ user }) => {
  return (
    <React.Fragment>
      <div>
        <img
          src={user.imageSource}
          alt="user image"
        />
      </div>
      <div>
        <img src={user.profile} alt="profile" />
        <p>{user.username}</p>
        <p>
          {user.location.city}{" "}
          {user.location.country}
        </p>
      </div>
    </React.Fragment>
  );
};

export default PhotoListItem;
