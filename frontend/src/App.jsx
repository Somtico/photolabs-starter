import React from "react";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import "./App.scss";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
import { ACTIONS } from "context/reducer"; // Make sure to import ACTIONS

const App = () => {
  const {
    state: { isModalVisible, selectedPhoto, selected, displayAlert },
    actions: { toggleFavourite, setSelectedPhoto, handleCloseModal, dispatch }
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        setIsModalVisible={(visible) => dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, visible })}
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
          setIsModalVisible={(visible) => dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, visible })}
        />
      )}
    </div>
  );
};

export default App;
