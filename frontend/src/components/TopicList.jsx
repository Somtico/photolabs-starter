import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, fetchPhotosByTopic }) => {
  const handleTopicClick = (topicId) => {
    fetchPhotosByTopic(topicId);
  };

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          topicData={topic}
          onClick={() => handleTopicClick(topic.id)}
        />
      ))}
    </div>
  );
};

export default TopicList;
