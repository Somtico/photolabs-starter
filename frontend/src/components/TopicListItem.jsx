import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topicData: { title }, onClick, isActive }) => {
  return (
    <div
      className={`topic-list__item ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
