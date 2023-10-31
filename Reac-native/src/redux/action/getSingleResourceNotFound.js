import axios from 'axios';
import * as API from '../../common/APIActionType';

const fetchGetSingleResourceNotFoundRequest = () => ({ type: API.FETCH_GET_SINGLE_RESOURCE_NOTFOUND_REQUEST });
const fetchGetSingleResourceNotFoundSuccess = (data, status) => ({
  type: API.FETCH_GET_SINGLE_RESOURCE_NOTFOUND_SUCCESS,
  payload: { data: data, status: status },
});
const fetchGetSingleResourceNotFoundFailure = (error, status, code) => ({
  type: API.FETCH_GET_SINGLE_RESOURCE_NOTFOUND_FAILURE,
  payload: { error: error, status: status, code: code },
});

export const fetchGetSingleResourceNotFound = () => {
  return async (dispatch) => {
    dispatch(fetchGetSingleResourceNotFoundRequest());
    try {
      const res = await axios.get(API.PATH_GET_SINGLE_RESOURCE_NOT_FOUND);
      dispatch(fetchGetSingleResourceNotFoundSuccess(res.data.data, res.status));
    } catch (error) {
      dispatch(fetchGetSingleResourceNotFoundFailure(error.message, error.request.status, error.code));
    }
  };
};
