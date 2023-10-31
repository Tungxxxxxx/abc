import * as API from '../../common/APIActionType';
import axios from 'axios';

const fetchGetDelayedRequest = () => {
  return {
    type: API.FETCH_GET_DELAYED_RESPONSE_REQUEST,
  };
};
const fetchGetDelayedSuccess = (data, status) => {
  return {
    type: API.FETCH_GET_DELAYED_RESPONSE_SUCCESS,
    payload: { data: data, status: status },
  };
};
const fetchGetDelayedFailure = (error, status, code) => {
  return {
    type: API.FETCH_GET_DELAYED_RESPONSE_FAILURE,
    payload: { error: error, status: status, code: code },
  };
};

export const fetchGetDelayed = () => {
  return async (dispatch) => {
    dispatch(fetchGetDelayedRequest());
    try {
      const res = await axios.get(API.PATH_GET_LIST_RESOURCE);
      dispatch(fetchGetDelayedSuccess(res.data.data, res.status));
    } catch (error) {
      dispatch(fetchGetDelayedFailure(error.message, error.request.status, error.code));
    }
  };
};
