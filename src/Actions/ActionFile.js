import { SET_DATA, GET_DATA } from "./Types";

export const setData = (data) => (dispatch) => {
  dispatch({
    type: SET_DATA,
    payload: data,
  });
};

