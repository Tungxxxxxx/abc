import axios from 'axios';
import {
  FETCH_GET_SINGLE_USER_REQUEST,
  FETCH_GET_SINGLE_USER_SUCCESS,
  FETCH_GET_SINGLE_USER_FAILURE,
  PATH_GET_SINGLE_USER,
} from '../../common/APIActionType';
const fetchGetSingleUserRequest = () => ({
  type: FETCH_GET_SINGLE_USER_REQUEST,
});
const fetchGetSingleUserSuccess = (data, status) => ({
  type: FETCH_GET_SINGLE_USER_SUCCESS,
  payload: { data: data, status: status },
});
const fetchSingleUserFailure = (error, status, code) => ({
  type: FETCH_GET_SINGLE_USER_FAILURE,
  payload: { error: error, status: status, code: code },
});

export const fetchGetSingleUser = () => {
  return async (dispatch) => {
    dispatch(fetchGetSingleUserRequest());
    try {
      const res = await axios.get(PATH_GET_SINGLE_USER);
      dispatch(fetchGetSingleUserSuccess(res.data.data, res.status));
    } catch (error) {
      dispatch(fetchSingleUserFailure(error.message, error.request.status, error.code));
    }
  };
};
