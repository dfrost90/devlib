import {
  CLOSE_ADD_MODAL,
  OPEN_ADD_MODAL,
  CLOSE_REMOVE_MODAL,
  OPEN_REMOVE_MODAL,
  CLOSE_AUTH_MODAL,
  OPEN_AUTH_MODAL,
  TOGGLE_THEME,
} from './actions';

import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/reducer';

const GlobalContext = createContext();

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

const initialState = {
  theme: getStorageTheme(),
  addModalIsOpen: false,
  authModalIsOpen: false,
  removeModalIsOpen: false,
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  const openAuthModal = () => {
    dispatch({ type: OPEN_AUTH_MODAL });
  };

  const closeAuthModal = () => {
    dispatch({ type: CLOSE_AUTH_MODAL });
  };

  const openAddModal = () => {
    dispatch({ type: OPEN_ADD_MODAL });
  };

  const closeAddModal = () => {
    dispatch({ type: CLOSE_ADD_MODAL });
  };

  const openRemoveModal = () => {
    dispatch({ type: OPEN_REMOVE_MODAL });
  };

  const closeRemoveModal = () => {
    dispatch({ type: CLOSE_REMOVE_MODAL });
  };

  useEffect(() => {
    document.documentElement.className = state.theme;
    localStorage.setItem('theme', state.theme);
  }, [state.theme]);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        toggleTheme,
        openAuthModal,
        closeAuthModal,
        openAddModal,
        closeAddModal,
        openRemoveModal,
        closeRemoveModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
