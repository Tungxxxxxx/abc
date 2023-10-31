import * as API from '../../common/APIActionType';
import axios from 'axios';

const fetchPostLoginSuccessfulRequest = () => {
  return {
    type: API.FETCH_POST_LOGIN_SUCCESSFUL_REQUEST,
  };
};
const fetchPostLoginSuccessfulSuccess = (data, status) => {
  return {
    type: API.FETCH_POST_LOGIN_SUCCESSFUL_SUCCESS,
    payload: { data: data, status: status },
  };
};
const fetchPostLoginSuccessfulFailure = (error, status, code) => {
  return {
    type: API.FETCH_POST_LOGIN_SUCCESSFUL_FAILURE,
    payload: { error: error, status: status, code: code },
  };
};

export const fetchPostLoginSuccessful = (dataInput) => {
  return async (dispatch) => {
    dispatch(fetchPostLoginSuccessfulRequest());
    try {
      const res = await axios.post(API.PATH_POST_LOGIN_SUCCESSFUL, dataInput);
      console.log('PostLoginSuccessful:', res);
      dispatch(fetchPostLoginSuccessfulSuccess(res.data, res.status));
    } catch (error) {
      dispatch(fetchPostLoginSuccessfulFailure(error.message, error.request.status, error.code));
    }
  };
};
