import * as API from '../../common/APIActionType';
import axios from 'axios';

const fetchGetListResourceRequest = () => {
  return {
    type: API.FETCH_GET_LIST_RESOURCE_REQUEST,
  };
};
const fetchGetListResourceSuccess = (data, status) => {
  return {
    type: API.FETCH_GET_LIST_RESOURCE_SUCCESS,
    payload: { data: data, status: status },
  };
};
const fetchGetListResourceFailure = (error, status, code) => {
  return {
    type: API.FETCH_GET_LIST_RESOURCE_FAILURE,
    payload: { error: error, status: status, code: code },
  };
};

export const fetchGetListResource = () => {
  return async (dispatch) => {
    dispatch(fetchGetListResourceRequest());
    try {
      const res = await axios.get(API.PATH_GET_LIST_RESOURCE);
      dispatch(fetchGetListResourceSuccess(res.data.data, res.status));
    } catch (error) {
      dispatch(fetchGetListResourceFailure(error.message, error.request.status, error.code));
    }
  };
};
