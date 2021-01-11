import {SET_DATA, UPDATE_DATA} from '../Actions/Types';

const initialState = {
  user: [],
  userSingle: {},
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        user:
          state.user.length <= 0
            ? [action.payload]
            : [...state.user, action.payload],
        userSingle: action.payload,
      };
    case UPDATE_DATA:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default apiReducer;

// import {SET_DATA, } from '../Actions/Types';

// const initialState = {
//   user:[],
// };

// const apiReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_DATA:
//       return {
//         ...state,
//         user: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export default apiReducer;
