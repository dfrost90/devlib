import {
  UPDATE_FILTERS,
  CLEAR_FILTERS,
  LOAD_DATA,
  FILTER_DATA,
} from '../context/actions';

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        allData: [...action.payload],
        filteredData: [...action.payload],
        filters: {
          ...state.filters,
        },
      };

    case UPDATE_FILTERS:
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case FILTER_DATA:
      const { allData } = state;
      const { search, tags } = state.filters;

      let tempDataFilter = [...allData];

      if (search) {
        tempDataFilter = tempDataFilter.filter((dataItem) => {
          const tags = dataItem.libCategories
            .split(',')
            .map((item) => item.trim());

          const tagFilter = tags.filter((item) => item.startsWith(search));

          return (
            tagFilter.length ||
            dataItem.libName.toLowerCase().startsWith(search)
          );
        });
      }

      return {
        ...state,
        filteredData: tempDataFilter,
      };

    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          search: '',
          tags: 'all',
        },
      };

    default:
      break;
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
