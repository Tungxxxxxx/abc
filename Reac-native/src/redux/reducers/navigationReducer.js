import * as Constant from '../../common/Constant';
const initState = {
  navigation: null,
};
const navigationReducer = (state = initState, action) => {
  if (action.type === Constant.SET_NAVIGATION) {
    switch (action.type) {
      case Constant.SET_NAVIGATION:
        return { ...state, navigation: action.payload.navigation };
      default:
        return state;
    }
  } else {
    return state;
  }
};
export default navigationReducer;
