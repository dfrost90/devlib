import {
  OPEN_MODAL,
  CLOSE_MODAL,
  TOGGLE_THEME,
  OPEN_SEARCH,
  CLOSE_SEARCH,
} from '../context/actions';

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light-theme' ? 'dark-theme' : 'light-theme',
      };

    case OPEN_SEARCH:
      return {
        ...state,
        searchMode: true,
      };

    case CLOSE_SEARCH:
      return {
        ...state,
        searchMode: false,
      };

    case OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: true,
        modal: action.payload,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false,
        modal: null,
      };

    default:
      break;
  }

  throw new Error(`No matching "${action.type}" - action type`);
};

export default reducer;
