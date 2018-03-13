import * as actionTypes from '../../constants/action_types';

export function selectResult(card) {
  return {
    type: actionTypes.SELECT_RESULT,
    card
  };
}
