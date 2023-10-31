import * as API from '../../common/APIActionType';
import axios from 'axios';

const fetchPutUpdateRequest = () => {
  return {
    type: API.FETCH_PUT_UPDATE_REQUEST,
  };
};
const fetchPutUpdateSuccess = (data, status) => {
  return {
    type: API.FETCH_PUT_UPDATE_SUCCESS,
    payload: { data: data, status: status },
  };
};
const fetchPutUpdateFailure = (error, status, code) => {
  return {
    type: API.FETCH_PUT_UPDATE_FAILURE,
    payload: { error: error, status: status, code: code },
  };
};

export const fetchPutUpdate = (dataInput) => {
  return async (dispatch) => {
    dispatch(fetchPutUpdateRequest());
    try {
      const res = await axios.put(API.PATH_PUT_UPDATE, dataInput);
      console.log('putUpdate:', res);
      dispatch(fetchPutUpdateSuccess(res.data, res.status));
    } catch (error) {
      dispatch(fetchPutUpdateFailure(error.message, error.request.status, error.code));
    }
  };
};
