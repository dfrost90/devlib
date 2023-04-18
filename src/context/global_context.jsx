import { OPEN_MODAL, CLOSE_MODAL, TOGGLE_THEME } from './actions';

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
  modalIsOpen: false,
  modalType: null,
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  const openModal = (type) => {
    dispatch({ type: OPEN_MODAL, payload: type });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
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
        openModal,
        closeModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
