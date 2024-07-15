import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ topicData }) => {
  return (
    <div className="topic-list__item">{topicData.title}</div>
  );
};

export default TopicListItem;
