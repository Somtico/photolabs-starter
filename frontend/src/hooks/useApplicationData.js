import { useReducer } from "react";
import { reducer, ACTIONS } from "context/reducer";

const initialState = {
  isModalVisible: false,
  selectedPhoto: null,
  photos: [],
  topics: [],
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSelectedPhoto = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, photo });
  };

  const handleCloseModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS_MODAL });
  };

  return {
    state: {
      ...state,
    },
    actions: {
      setSelectedPhoto,
      handleCloseModal,
      dispatch,
    },
  };
};

export default useApplicationData;
