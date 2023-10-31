import axios from 'axios';
import * as API from '../../common/APIActionType';
// Khai báo các action, trả về 1 đối tượng
const fetchGetListUsersRequest = () => ({
  type: API.FETCH_GET_LIST_USERS_REQUEST,
});
const fetchGetListUsersSuccess = (data, status) => ({
  type: API.FETCH_GET_LIST_USERS_SUCCESS,
  payload: { data: data, status: status },
});
const fetchGetListUsersFailure = (error, status, code) => ({
  type: API.FETCH_GET_LIST_USERS_FAILURE,
  payload: { error: error, status: status, code: code },
});

// dispatch các action, trả về 1 dispatch
export const fetchGetListUsers = () => {
  return async (dispatch) => {
    //Call request
    dispatch(fetchGetListUsersRequest());

    // bắt exception
    try {
      //Lấy data
      const res = await axios.get(API.PATH_GET_LIST_USERS);
      // dispatch(fetchGetListUsersSuccess(res.data.data));
      dispatch(fetchGetListUsersSuccess(res.data.data, res.status));
    } catch (error) {
      dispatch(fetchGetListUsersFailure(error.message, error.request.status, error.code));
    }
  };
};

// Sau đó khai báo tại reducer
// settimeout: hàm sẽ được gọi sau khi chờ khoảng thời gian timeout
