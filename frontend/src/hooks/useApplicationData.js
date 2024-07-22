import { useReducer } from "react";
import { reducer, ACTIONS } from "context/reducer";
import useFavBadge from "hooks/useFavBadge";

const initialState = {
  isModalVisible: false,
  selectedPhoto: null,
  selected: {},
  displayAlert: false,
  photos: [],
  topics: [],
};

const useApplicationData = () => {
  const { selected, displayAlert, toggleFavourite, updateToFavPhotoIds } =
    useFavBadge();
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSelectedPhoto = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, photo });
  };

  const handleCloseModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS_MODAL });
  };

  return {
    state: {
      selected,
      displayAlert,
    },
    actions: {
      toggleFavourite,
      updateToFavPhotoIds,
      setSelectedPhoto,
      handleCloseModal,
      dispatch,
    },
  };
};

export default useApplicationData;
