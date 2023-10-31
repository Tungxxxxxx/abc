import { SET_SOCKET } from '../../common/Constant';
const initState = { socket: null };

export const connectSocketIOReducer = (state = initState, action) => {
  console.log(action.type);
  switch (action.type) {
    case SET_SOCKET:
      return { ...state, socket: action.payload };

    default:
      return state;
  }
};
