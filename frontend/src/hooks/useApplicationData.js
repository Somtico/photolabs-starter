import { useReducer, useCallback, useEffect } from "react";
import { reducer } from "context/reducer";
import { ACTIONS } from "context/actions";

const initialState = {
  isModalVisible: false,
  selectedPhoto: null,
  photoData: [],
  topicData: [],
  activeTopic: null,
  similarPhotos: [],
  error: null,
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSelectedPhoto = useCallback((photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  }, []);

  const setIsModalVisible = useCallback(() => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  }, []);

  const handleCloseModal = useCallback(() => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS_MODAL });
  }, []);

  const setSimilarPhotos = useCallback((topicId) => {    
    if (!topicId) {
      console.error("Invalid topicId for similar photos");
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: "Invalid topicId",
      });
      return;
    }
    
    fetch(`/api/topics/photos/${topicId}`)
      .then((res) => res.json())
      .then((similarPhotos) => {
        dispatch({
          type: ACTIONS.SET_SIMILAR_PHOTOS,
          payload: similarPhotos,
        });
      })
      .catch((error) => {
        console.error("Error fetching similar photos:", error);
        dispatch({
          type: ACTIONS.SET_ERROR,
          payload: "Failed to fetch similar photos",
        });
      });
  }, []);

  const fetchPhotosByTopic = useCallback((topicId) => {
    if (!topicId) {
      console.error("No topicId provided");
      return;
    }
  
    fetch(`/api/topics/photos/${topicId}`)
      .then((res) => res.json())
      .then((photoData) => {
        const photosWithTopic = photoData.map(photo => ({...photo, topicId}));
        dispatch({ type: ACTIONS.SET_PHOTOS_BY_TOPIC, payload: photosWithTopic });
        dispatch({ type: ACTIONS.SET_ACTIVE_TOPIC, payload: topicId });
      })
      .catch((error) => {
        console.error("Error fetching photos by topic:", error);
        dispatch({
          type: ACTIONS.SET_ERROR,
          payload: "Failed to fetch photos by topic",
        });
      });
  }, []);  

  useEffect(() => {
    // Fetch photo data
    fetch("/api/photos")
      .then((res) => res.json())
      .then((photoData) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData })
      )
      .catch((error) => {
        console.error("Error fetching photo data:", error);
        dispatch({
          type: ACTIONS.SET_ERROR,
          payload: "Failed to fetch photo data",
        });
      });

    // Fetch topic data
    fetch("/api/topics")
      .then((res) => res.json())
      .then((topicData) =>
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData })
      )
      .catch((error) => {
        console.error("Error fetching topic data:", error);
        dispatch({
          type: ACTIONS.SET_ERROR,
          payload: "Failed to fetch topic data",
        });
      });
  }, []);

  return {
    state,
    actions: {
      setSelectedPhoto,
      setIsModalVisible,
      setSimilarPhotos,
      handleCloseModal,
      fetchPhotosByTopic,
    },
  };
};

export default useApplicationData;
