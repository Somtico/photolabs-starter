import { useState } from "react";

const useFavBadge = () => {
  const [selected, setSelected] = useState({});
  const [displayAlert, setDisplayAlert] = useState(false);

  const handleClick = (photoId) => {
    setSelected((prevSelected) => ({
      ...prevSelected,
      [photoId]: !prevSelected[photoId]
    }));
    setDisplayAlert(true);
  };

  return { selected, displayAlert, handleClick };
};

export default useFavBadge;
