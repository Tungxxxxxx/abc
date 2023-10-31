import * as API from '../../common/APIActionType';
import axios from 'axios';

const fetchRegisterUnSuccessfulRequest = () => {
  return {
    type: API.FETCH_REGISTER_UNSUCCESSFUL_REQUEST,
  };
};
const fetchRegisterUnSuccessfulSuccess = (data, status) => {
  return {
    type: API.FETCH_REGISTER_UNSUCCESSFUL_SUCCESS,
    payload: { data: data, status: status },
  };
};
const fetchRegisterUnSuccessfulFailure = (error, status, code) => {
  return {
    type: API.FETCH_REGISTER_UNSUCCESSFUL_FAILURE,
    payload: { error: error, status: status, code: code },
  };
};

export const fetchRegisterUnSuccessful = (dataInput) => {
  return async (dispatch) => {
    dispatch(fetchRegisterUnSuccessfulRequest());
    try {
      const res = await axios.post(API.PATH_POST_REGISTER_UNSUCCESSFUL, dataInput);

      dispatch(fetchRegisterUnSuccessfulSuccess(res.data, res.status));
    } catch (error) {
      console.log('RegisterUnSuccessful:', error);
      dispatch(fetchRegisterUnSuccessfulFailure(error.message, error.request.status, error.code));
    }
  };
};
