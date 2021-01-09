import {SET_DATA, GET_DATA, } from '../Actions/Types';

const initialState = {
  data: [],
  user:{},
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_DATA:
      return {
        ...state,
        data:action.payload && action.payload.user,
      };
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