import {SET_DATA, GET_DATA, } from '../Actions/Types';

const initialState = {
  data: [],
  user:{},
};

const apiReducer = (state = initialState, action) => {
    console.log('in reducer', action.payload)
  switch (action.type) {

    case GET_DATA:
        console.log('in getdata',state)
      return {
        ...state,
        data:[...state.data, action.payload],
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