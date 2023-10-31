import { LOGIN_USER } from '../../common/Constant';
export const getLoginUser = (user) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER, payload: user });
  };
};
