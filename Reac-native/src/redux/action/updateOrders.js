import { UPDATE_ORDERS } from '../../common/Constant';
export const updateOrders = (order, userId) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_ORDERS, payload: { order: order, userId: userId } });
  };
};
