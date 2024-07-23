export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_PHOTO_DETAILS_MODAL: 'CLOSE_PHOTO_DETAILS_MODAL'
};

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        selected: {
          ...state.selected,
          [action.photoId]: true
        }
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        selected: {
          ...state.selected,
          [action.photoId]: false
        }
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.photos
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.topics
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        isModalVisible: true
      };
    case ACTIONS.CLOSE_PHOTO_DETAILS_MODAL:
      return {
        ...state,
        isModalVisible: false
      };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}
