import { SET_SOCKET } from '../../common/Constant';
export const connectSocketIO = (socket) => {
  console.log('Con me may');
  return (dispatch) => {
    dispatch({ type: SET_SOCKET, payload: socket });
  };
};
