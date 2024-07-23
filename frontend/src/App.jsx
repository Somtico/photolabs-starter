import React, { useEffect, useCallback } from 'react';
import HomeRoute from 'routes/HomeRoute';
import photosMock from 'mocks/photos';
import topicsMock from 'mocks/topics';
import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import useFavBadge from 'hooks/useFavBadge';
import { ACTIONS } from 'context/actions';

const App = () => {
  const {
    state: { isModalVisible, selectedPhoto, photos, topics },
    actions: { setSelectedPhoto, handleCloseModal, dispatch, setPhotos, setTopics },
  } = useApplicationData();
  
  const { selected, displayAlert, toggleFavourite } = useFavBadge();

  const initializeData = useCallback(() => {
    setPhotos(photosMock);
    setTopics(topicsMock);
  }, [setPhotos, setTopics]);

  useEffect(() => {
    initializeData();
  }, [initializeData]);

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        setIsModalVisible={() => dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS })}
        setSelectedPhoto={setSelectedPhoto}
        favBadge={{ selected, displayAlert, toggleFavourite }}
      />
      {isModalVisible && (
        <PhotoDetailsModal
          onClose={handleCloseModal}
          photo={selectedPhoto}
          favBadge={{ selected, displayAlert, toggleFavourite }}
          photos={photos}
          setSelectedPhoto={setSelectedPhoto}
          setIsModalVisible={() => dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS })}
        />
      )}
    </div>
  );
};

export default App;