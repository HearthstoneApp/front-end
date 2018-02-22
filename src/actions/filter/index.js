import * as actionTypes from '../../constants/action_types';

export function filterName(filterNameQuery) {
  return {
    type: actionTypes.FILTER_NAME,
    filterNameQuery
  };
}

export function filterSet(filterSetQuery) {
  return {
    type: actionTypes.FILTER_SET,
    filterSetQuery
  };
}

