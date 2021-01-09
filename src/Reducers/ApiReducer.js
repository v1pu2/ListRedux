import {SET_DATA, } from '../Actions/Types';

const initialState = {
  user:[],
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default apiReducer;