import * as actionTypes from '../../constants/action_types';

const initialState = {
  filters: {
    filterNameQuery: '',
    filterSetQuery: ''
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FILTER_NAME:
      return setNameFilter(state, action.filterNameQuery);
    case actionTypes.FILTER_SET:
      return setSetFilter(state, action.filterSetQuery);
  }
  return state;
}

function setNameFilter(state, filterNameQuery) {
  return { ...state, filterNameQuery };
}

function setSetFilter(state, filterSetQuery) {
  return { ...state, filterSetQuery };
}
