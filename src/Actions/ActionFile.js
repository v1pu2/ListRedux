import {SET_DATA, GET_DATA} from './Types';

export const setData = (data) => (dispatch) => {
  console.log('in action setdata',data)
      dispatch({
        type: SET_DATA,
        payload: data,
      });
   
};

export const getData = () => (dispatch) => {
    dispatch({
      type: GET_DATA,
      payload: data,
    });
 
};