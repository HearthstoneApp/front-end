import { combineReducers } from 'redux';
import filter from './filter';
import cards from './cards';

export default combineReducers({ filter, cards });
