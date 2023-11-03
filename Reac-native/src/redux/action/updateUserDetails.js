import { UPDATE_WALLET } from '../../common/Constant';
export const updateWallet = (userId, change) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_WALLET,
      payload: { userId: userId, change: change },
    });
  };
};
