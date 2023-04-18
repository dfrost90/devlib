import {
  CLOSE_AUTH_MODAL,
  OPEN_AUTH_MODAL,
  CLOSE_ADD_MODAL,
  OPEN_ADD_MODAL,
  CLOSE_REMOVE_MODAL,
  OPEN_REMOVE_MODAL,
  TOGGLE_THEME,
} from '../context/actions';

const reducer = (state, action) => {
  if (action.type === TOGGLE_THEME) {
    return {
      ...state,
      theme: state.theme === 'light-theme' ? 'dark-theme' : 'light-theme',
    };
  }
  if (action.type === OPEN_AUTH_MODAL) {
    return {
      ...state,
      authModalIsOpen: true,
    };
  }
  if (action.type === CLOSE_AUTH_MODAL) {
    return {
      ...state,
      authModalIsOpen: false,
    };
  }
  if (action.type === OPEN_ADD_MODAL) {
    return {
      ...state,
      addModalIsOpen: true,
    };
  }
  if (action.type === CLOSE_ADD_MODAL) {
    return {
      ...state,
      addModalIsOpen: false,
    };
  }
  if (action.type === OPEN_REMOVE_MODAL) {
    return {
      ...state,
      removeModalIsOpen: true,
    };
  }
  if (action.type === CLOSE_REMOVE_MODAL) {
    return {
      ...state,
      removeModalIsOpen: false,
    };
  }

  throw new Error(`No matching "${action.type}" - action type`);
};

export default reducer;
