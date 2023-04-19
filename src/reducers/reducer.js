import { OPEN_MODAL, CLOSE_MODAL, TOGGLE_THEME } from '../context/actions';

const reducer = (state, action) => {
  if (action.type === TOGGLE_THEME) {
    return {
      ...state,
      theme: state.theme === 'light-theme' ? 'dark-theme' : 'light-theme',
    };
  }

  if (action.type === OPEN_MODAL) {
    const { type, context } = action.payload;

    return {
      ...state,
      modalIsOpen: true,
      modal: action.payload,
    };
  }
  if (action.type === CLOSE_MODAL) {
    return {
      ...state,
      modalIsOpen: false,
      modal: null,
    };
  }

  throw new Error(`No matching "${action.type}" - action type`);
};

export default reducer;
