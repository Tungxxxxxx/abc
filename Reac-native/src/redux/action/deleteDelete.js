import * as API from '../../common/APIActionType';
import axios from 'axios';

const fetchDeleteDeleteRequest = () => {
  return {
    type: API.FETCH_DELETE_DELETE_REQUEST,
  };
};
const fetchDeleteDeleteSuccess = (data, status) => {
  return {
    type: API.FETCH_DELETE_DELETE_SUCCESS,
    payload: { data: data, status: status },
  };
};
const fetchDeleteDeleteFailure = (error, status, code) => {
  return {
    type: API.FETCH_DELETE_DELETE_FAILURE,
    payload: { error: error, status: status, code: code },
  };
};

export const fetchDeleteDelete = () => {
  return async (dispatch) => {
    dispatch(fetchDeleteDeleteRequest());
    try {
      const res = await axios.delete(API.PATH_DELETE_DELETE);
      console.log('DeleteDelete:', res);
      dispatch(fetchDeleteDeleteSuccess(res.data, res.status));
    } catch (error) {
      dispatch(fetchDeleteDeleteFailure(error.message, error.request.status, error.code));
    }
  };
};
