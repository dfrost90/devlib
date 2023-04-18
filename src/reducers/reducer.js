import { OPEN_MODAL, CLOSE_MODAL, TOGGLE_THEME } from '../context/actions';

const reducer = (state, action) => {
  if (action.type === TOGGLE_THEME) {
    return {
      ...state,
      theme: state.theme === 'light-theme' ? 'dark-theme' : 'light-theme',
    };
  }

  if (action.type === OPEN_MODAL) {
    return {
      ...state,
      modalIsOpen: true,
      modalType: action.payload,
    };
  }
  if (action.type === CLOSE_MODAL) {
    return {
      ...state,
      modalIsOpen: false,
      modalType: null,
    };
  }

  throw new Error(`No matching "${action.type}" - action type`);
};

export default reducer;
