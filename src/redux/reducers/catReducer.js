import {INITIAL_STATE} from './initialState';
import {ADD_NEW_CAT, EDIT_CAT, REMOVE_CAT} from '../actions/types';

export const catReducer = (state = INITIAL_STATE.catsList, action) => {
  switch (action.type) {
    case ADD_NEW_CAT:
      return [
        ...state,
        {
          id: `${action.payload.name}-${Math.random()}`,
          name: action.payload.name,
          breed: action.payload.breed,
          about: action.payload.about,
        },
      ];

    case EDIT_CAT:
      return state.map(cat =>
        cat.id === action.payload.id
          ? Object.assign({}, cat, action.payload)
          : cat,
      );

    case REMOVE_CAT:
      return state.filter((list, index) => index !== action.payload);

    default:
      return state;
  }
};
