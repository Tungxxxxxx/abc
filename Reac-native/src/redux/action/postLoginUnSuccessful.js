import * as API from '../../common/APIActionType';
import axios from 'axios';

const fetchPostLoginUnSuccessfulRequest = () => {
  return {
    type: API.FETCH_POST_LOGIN_UNSUCCESSFUL_REQUEST,
  };
};
const fetchPostLoginUnSuccessfulSuccess = (data, status) => {
  return {
    type: API.FETCH_POST_LOGIN_UNSUCCESSFUL_SUCCESS,
    payload: { data: data, status: status },
  };
};
const fetchPostLoginUnSuccessfulFailure = (error, status, code) => {
  return {
    type: API.FETCH_POST_LOGIN_UNSUCCESSFUL_FAILURE,
    payload: { error: error, status: status, code: code },
  };
};

export const fetchPostLoginUnSuccessful = (dataInput) => {
  return async (dispatch) => {
    dispatch(fetchPostLoginUnSuccessfulRequest());
    try {
      const res = await axios.post(API.PATH_POST_LOGIN_UNSUCCESSFUL, dataInput);

      dispatch(fetchPostLoginUnSuccessfulSuccess(res.data, res.status));
    } catch (error) {
      console.log('PostLoginUnSuccessful:', error);
      dispatch(fetchPostLoginUnSuccessfulFailure(error.message, error.request.status, error.code));
    }
  };
};
