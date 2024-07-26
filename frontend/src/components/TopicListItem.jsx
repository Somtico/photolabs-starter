import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topicData: { title }, onClick }) => {
  return <div className="topic-list__item" onClick={onClick}><button>{title}</button></div>;
};

export default TopicListItem;
