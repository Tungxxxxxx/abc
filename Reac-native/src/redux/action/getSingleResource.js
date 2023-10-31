import * as API from '../../common/APIActionType';
import axios from 'axios';

const fetchGetSingleResourceRequest = () => {
  return {
    type: API.FETCH_GET_SINGLE_RESOURCE_REQUEST,
  };
};
const fetchGetSingleResourceSuccess = (data, status) => {
  return {
    type: API.FETCH_GET_SINGLE_RESOURCE_SUCCESS,
    payload: { data: data, status: status },
  };
};
const fetchGetSingleResourceFailure = (error, status, code) => {
  return {
    type: API.FETCH_GET_SINGLE_RESOURCE_FAILURE,
    payload: { error: error, status: status, code: code },
  };
};

export const fetchGetSingleResource = () => {
  return async (dispatch) => {
    dispatch(fetchGetSingleResourceRequest());
    try {
      const res = await axios.get(API.PATH_GET_SINGLE_RESOURCE);
      dispatch(fetchGetSingleResourceSuccess(res.data.data, res.status));
    } catch (error) {
      dispatch(fetchGetSingleResourceFailure(error.message, error.request.status, error.code));
    }
  };
};
