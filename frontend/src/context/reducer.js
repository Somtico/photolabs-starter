import { ACTIONS } from "./actions";

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        selected: {
          ...state.selected,
          [action.photoId]: true,
        },
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        selected: {
          ...state.selected,
          [action.photoId]: false,
        },
      };
    case ACTIONS.SET_PHOTOS_BY_TOPIC:
      return {
        ...state,
        photoData: action.payload,
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };
      case ACTIONS.SET_ACTIVE_TOPIC:
      return {
        ...state,
        activeTopic: action.payload,
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload,
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        isModalVisible: true,
      };
    case ACTIONS.CLOSE_PHOTO_DETAILS_MODAL:
      return {
        ...state,
        isModalVisible: false,
      };
    case ACTIONS.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
