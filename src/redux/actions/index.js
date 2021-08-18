import {ADD_NEW_CAT, EDIT_CAT, REMOVE_CAT} from './types';

export const setListCats = data => {
  return {type: ADD_NEW_CAT, payload: data};
};

export const setUpdateCats = data => {
  return {type: EDIT_CAT, payload: data};
};

export const removeCatDetails = data => {
  return {type: REMOVE_CAT, payload: data};
};
