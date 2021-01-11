import {SET_DATA, GET_DATA, UPDATE_DATA} from './Types';

export const setData = (data) => (dispatch) => {
  dispatch({
    type: SET_DATA,
    payload: data,
  });
};

export const updateData = (data) => (dispatch) => {
  dispatch({
    type: UPDATE_DATA,
    payload: data,
  });
};
