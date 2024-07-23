import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import useFavBadge from 'hooks/useFavBadge';

const App = () => {
  const {
    state: { isModalVisible, selectedPhoto },
    actions: { setSelectedPhoto, handleCloseModal, dispatch },
  } = useApplicationData();
  
  const { selected, displayAlert, toggleFavourite } = useFavBadge();

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        setIsModalVisible={(visible) => dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS })}
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
          setIsModalVisible={(visible) => dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS })}
        />
      )}
    </div>
  );
};

export default App;
