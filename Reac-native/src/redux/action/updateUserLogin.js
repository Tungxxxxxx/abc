import { LOGIN_USER } from '../../common/Constant';
export const updateUserLogin = (user) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER, payload: user });
  };
};
