import { useReducer } from "react";
import { reducer } from "context/reducer";
import { ACTIONS } from 'context/actions';

const initialState = {
  selected: {},
  displayAlert: false,
};

const useFavBadge = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavourite = (photoId) => {
    const actionType = state.selected[photoId] ? ACTIONS.FAV_PHOTO_REMOVED : ACTIONS.FAV_PHOTO_ADDED;
    dispatch({ type: actionType, photoId });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS }); // If displayAlert is to be managed here
  };

  return {
    selected: state.selected,
    displayAlert: state.displayAlert,
    toggleFavourite,
  };
};

export default useFavBadge;
