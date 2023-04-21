import {
  OPEN_MODAL,
  CLOSE_MODAL,
  TOGGLE_THEME,
  OPEN_SEARCH,
  CLOSE_SEARCH,
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
  modalIsOpen: false,
  modal: null,
  searchMode: false,
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  const openModal = (type, context) => {
    dispatch({ type: OPEN_MODAL, payload: { type, context } });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  const openSearch = () => {
    dispatch({ type: OPEN_SEARCH });
  };

  const closeSearch = () => {
    dispatch({ type: CLOSE_SEARCH });
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
        openSearch,
        closeSearch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
