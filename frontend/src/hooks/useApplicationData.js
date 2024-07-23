import { useReducer, useCallback } from 'react';
import { reducer } from 'context/reducer';
import { ACTIONS } from 'context/actions';

const initialState = {
  isModalVisible: false,
  selectedPhoto: null,
  photos: [],
  topics: [],
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSelectedPhoto = useCallback((photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  }, []);

  const handleCloseModal = useCallback(() => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS_MODAL });
  }, []);

  const setPhotos = useCallback((photos) => {
    dispatch({ type: ACTIONS.SET_PHOTOS, payload: photos });
  }, []);

  const setTopics = useCallback((topics) => {
    dispatch({ type: ACTIONS.SET_TOPICS, payload: topics });
  }, []);

  return {
    state,
    actions: {
      setSelectedPhoto,
      handleCloseModal,
      setPhotos,
      setTopics,
      dispatch,
    },
  };
};

export default useApplicationData;