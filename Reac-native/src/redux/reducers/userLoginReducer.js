import * as Constant from '../../common/Constant';
//user đã login vào ứng dụng
const initStateUserLogin = {
  userLogin: {
    id: 1,
    email: 'user1@email.com',
    username: 'user1',
    password: '1',
    userToken: 'token123',
    name: 'Phạm Thanh Tùng',
    nickname: 'Tùng Phạm',
    money: 1000000,
    avatar: require('../../assets/images/tungpt.png'),
  },
};
const userLoginReducer = (state = initStateUserLogin, action) => {
  if (action.type === Constant.SET_USER_LOGIN) {
    // Dùng switch-case để xử lý các action, khi login component sẽ gửi action có type làSET_USER_LOGIN
    // payload là data gửi lên
    switch (action.type) {
      case Constant.SET_USER_LOGIN:
        return { ...state, userLogin: action.payload.userLogin };
      default:
        // Nếu ko có gì thì return state ban đầu
        return state;
    }
  } else {
    return state;
  }
};
export default userLoginReducer;
