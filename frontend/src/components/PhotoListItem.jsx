import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <React.Fragment>
      <div>
        <img
          src={props.sampleDataForPhotoListItem.imageSource}
          alt="someone holding a coffee cup and looking into their mobile phone at Starbucks listing on a place finder app"
        />
      </div>
      <div>
        <img src={props.sampleDataForPhotoListItem.profile} alt="profile" />
        <p>{props.sampleDataForPhotoListItem.username}</p>
        <p>
          {props.sampleDataForPhotoListItem.location.city}{" "}
          {props.sampleDataForPhotoListItem.location.country}
        </p>
      </div>
    </React.Fragment>
  );
};

export default PhotoListItem;
