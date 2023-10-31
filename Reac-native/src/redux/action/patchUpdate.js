import * as API from '../../common/APIActionType';
import axios from 'axios';

const fetchPatchUpdateRequest = () => {
  return {
    type: API.FETCH_PATCH_UPDATE_REQUEST,
  };
};
const fetchPatchUpdateSuccess = (data, status) => {
  return {
    type: API.FETCH_PATCH_UPDATE_SUCCESS,
    payload: { data: data, status: status },
  };
};
const fetchPatchUpdateFailure = (error, status, code) => {
  return {
    type: API.FETCH_PATCH_UPDATE_FAILURE,
    payload: { error: error, status: status, code: code },
  };
};

export const fetchPatchUpdate = (dataInPATCH) => {
  return async (dispatch) => {
    dispatch(fetchPatchUpdateRequest());
    try {
      const res = await axios.patch(API.PATH_PATCH_UPDATE, dataInPATCH);
      console.log('patchUpdate:', res);
      dispatch(fetchPatchUpdateSuccess(res.data, res.status));
    } catch (error) {
      dispatch(fetchPatchUpdateFailure(error.message, error.request.status, error.code));
    }
  };
};
