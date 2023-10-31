import * as API from '../../common/APIActionType';
import axios from 'axios';

const fetchPostCreateRequest = () => {
  return {
    type: API.FETCH_POST_CREATE_REQUEST,
  };
};
const fetchPostCreateSuccess = (data, status) => {
  return {
    type: API.FETCH_POST_CREATE_SUCCESS,
    payload: { data: data, status: status },
  };
};
const fetchPostCreateFailure = (error, status, code) => {
  return {
    type: API.FETCH_POST_CREATE_FAILURE,
    payload: { error: error, status: status, code: code },
  };
};

export const fetchPostCreate = (dataInput) => {
  return async (dispatch) => {
    dispatch(fetchPostCreateRequest());
    try {
      const res = await axios.post(API.PATH_POST_CREATE, dataInput);
      dispatch(fetchPostCreateSuccess(res.data, res.status));
    } catch (error) {
      console.log('error', error);
      dispatch(fetchPostCreateFailure(error.message, error.request.status, error.code));
    }
  };
};
