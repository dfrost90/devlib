import { createContext } from 'react';
import {
  UPDATE_FILTERS,
  CLEAR_FILTERS,
  LOAD_DATA,
  FILTER_DATA,
} from '../context/actions';

import { useContext } from 'react';
import { useReducer } from 'react';
import filter_reducer from '../reducers/filter_reducer';
import { useDataContext } from './data_context';
import { useEffect } from 'react';

const initialState = {
  allData: [],
  filteredData: [],
  filters: {
    search: '',
    tags: '',
  },
};

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const { storage: data } = useDataContext();
  const [state, dispatch] = useReducer(filter_reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_DATA, payload: data });
  }, [data]);

  useEffect(() => {
    dispatch({ type: FILTER_DATA });
  }, [data, state.filters]);

  const updateFilters = (e, value = e.target.value, name = e.target.name) => {
    // let value = e.target.value;

    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider value={{ ...state, updateFilters, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
