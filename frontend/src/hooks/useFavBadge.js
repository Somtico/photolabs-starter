import { useState } from "react";

const useFavBadge = () => {
  const [selected, setSelected] = useState({});
  const [displayAlert, setDisplayAlert] = useState(false);

  const toggleFavourite = (photoId) => {
    setSelected((prevSelected) => ({
      ...prevSelected,
      [photoId]: !prevSelected[photoId],
    }));
    setDisplayAlert(!displayAlert);
  };

  return { selected, displayAlert, toggleFavourite };
};

export default useFavBadge;
