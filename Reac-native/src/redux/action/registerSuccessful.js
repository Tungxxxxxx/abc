import * as API from '../../common/APIActionType';
import axios from 'axios';

const fetchRegisterSuccessfulRequest = () => {
  return {
    type: API.FETCH_REGISTER_SUCCESSFUL_REQUEST,
  };
};
const fetchRegisterSuccessfulSuccess = (data, status) => {
  return {
    type: API.FETCH_REGISTER_SUCCESSFUL_SUCCESS,
    payload: { data: data, status: status },
  };
};
const fetchRegisterSuccessfulFailure = (error, status, code) => {
  return {
    type: API.FETCH_REGISTER_SUCCESSFUL_FAILURE,
    payload: { error: error, status: status, code: code },
  };
};

export const fetchRegisterSuccessful = (dataInput) => {
  return async (dispatch) => {
    dispatch(fetchRegisterSuccessfulRequest());
    try {
      const res = await axios.post(API.PATH_POST_REGISTER_SUCCESSFUL, dataInput);
      console.log('RegisterSuccessful:', res);
      dispatch(fetchRegisterSuccessfulSuccess(res.data, res.status));
    } catch (error) {
      dispatch(fetchRegisterSuccessfulFailure(error.message, error.request.status, error.code));
    }
  };
};
