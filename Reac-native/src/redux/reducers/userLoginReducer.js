import * as Constant from '../../common/Constant';
//user đã login vào ứng dụng
const initStateUserLogin = {
  userLogin: {},
};
const userLoginReducer = (state = initStateUserLogin, action) => {
  if (action.type === Constant.LOGIN_USER) {
    console.log('LOGIN');
    // Dùng switch-case để xử lý các action, khi login component sẽ gửi action có type làSET_USER_LOGIN
    // payload là data gửi lên
    switch (action.type) {
      case Constant.LOGIN_USER:
        return { ...state, userLogin: action.payload };
      default:
        // Nếu ko có gì thì return state ban đầu
        return state;
    }
  } else {
    return state;
  }
};
export default userLoginReducer;
