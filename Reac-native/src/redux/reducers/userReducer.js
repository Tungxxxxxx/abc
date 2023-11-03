import * as Constant from '../../common/Constant';
import { getUserLogin } from '../../utils/function';
//Danh sách user
const initStateUsers = {
  users: [
    {
      id: 1,
      email: 'user1@email.com',
      username: 'user1',
      password: '1',
      userToken: 'token123',
      name: 'Phạm Thanh Tùng',
      nickname: 'Tùng Phạm',
      address: '100 - đường Mỹ Đình - Nam Từ Liêm - Hà Nội',
      money: 100000000,
      avatar: require('../../assets/images/tungpt.png'),
      shoppingBags: [],
      countProductInBag: 0,
      alert: [
        {
          id: 1,
          content: 'Đã thêm sản phẩm vào giỏ',
          image: require('../../assets/images/products/sg-11134201-7rbkr-lm8hkd3uitspe3.jpg'),
        },
        {
          id: 1,
          content: 'Đã thêm sản phẩm vào giỏ',
          image: require('../../assets/images/products/sg-11134201-7rbkr-lm8hkd3uitspe3.jpg'),
        },
        {
          id: 1,
          content: 'Đã thêm sản phẩm vào giỏ',
          image: require('../../assets/images/products/sg-11134201-7rbkr-lm8hkd3uitspe3.jpg'),
        },
      ],
      orders: [],
    },
    {
      id: 2,
      email: 'user1@email.com',
      username: 'user2',
      password: '2',
      userToken: 'token123',
      name: 'Sở Lưu Hương',
      nickname: 'Hương Sở',
      address: '232 - đường Bạch Mai - Minh Khai - Hà Nội',
      money: 20000000,
      avatar: require('../../assets/images/tx2.jpg'),
      shoppingBags: [],
      countProductInBag: 0,
      orders: [],
    },
    {
      id: 3,
      email: 'user1@email.com',
      username: 'user3',
      password: '3',
      userToken: 'token123',
      name: 'Ái Tân Giác La',
      nickname: 'Huyền Diệp',
      address: '111 - Trần Khát Chân - Ba Đình - Hà Nội',
      money: 10000000,
      avatar: require('../../assets/images/tx3.jpg'),
      shoppingBags: [],
      countProductInBag: 0,
      orders: [],
    },
  ],
  shoppingBagsUserLogin: [],
  userLogin: {},
};
function GetUsersAddedProduct(state, action) {
  if (action.type === Constant.ADD_PRODUCT_BAG || action.type === Constant.ADD_QTY_TO_BAG) {
    const userLogin = action.payload.userLogin;
    const qty = action.payload.qty;
    const usersCopy = [...state.users];
    const findIndex = usersCopy.findIndex((item) => item.id === userLogin.id);
    const shoppingBagsCopy = [...usersCopy[findIndex].shoppingBags];
    //Tăng count mỗi lần add product vào giỏ
    usersCopy[findIndex].countProductInBag += qty;
    // Tìm product đã tồn tại chưa
    const findProductIndex = shoppingBagsCopy.findIndex((item) => item.product.id === action.payload.product.id);
    if (findProductIndex !== -1) {
      shoppingBagsCopy[findProductIndex].qty = shoppingBagsCopy[findProductIndex].qty + qty;
    } else {
      shoppingBagsCopy.push({ product: action.payload.product, qty: qty });
    }
    // Set shoppingBags cho usersCopy
    usersCopy[findIndex].shoppingBags = shoppingBagsCopy;
    const shoppingBagsUserLogin = shoppingBagsCopy;
    return {
      usersAddedProduct: usersCopy,
      shoppingBagsUserLogin: shoppingBagsUserLogin,
      countPIB: usersCopy[findIndex].countProductInBag,
    };
  } else {
    return {
      usersAddedProduct: [],
      shoppingBagsUserLogin: [],
      countPIB: 0,
    };
  }
}
function getUserUpdatedOrder(state, action) {
  const order = action.payload.order;
  const userId = action.payload.userId;
  const usersCopy = [...state.users];
  const index = usersCopy.findIndex((user) => user.id === userId);
  usersCopy[index].orders.push(order);
  return usersCopy;
}
function getUsersUpdatedWallet(state, action) {
  const userId = action.payload.userId;
  const change = action.payload.change;
  const usersCopy = [...state.users];
  const index = usersCopy.findIndex((user) => user.id === userId);
  usersCopy[index].money = usersCopy[index].money - change;
  // console.log('>>>>>>>>>>>>>>>>>>>>>>usersCopy[index]', usersCopy[index]);
  return usersCopy;
}

const userReducer = (state = initStateUsers, action) => {
  const { usersAddedProduct, shoppingBagsUserLogin, countPIB } = GetUsersAddedProduct(state, action);
  switch (action.type) {
    case Constant.ADD_PRODUCT_BAG:
      return { ...state, users: usersAddedProduct, shoppingBagsUserLogin: shoppingBagsUserLogin, countPIB: countPIB };
    case Constant.ADD_QTY_TO_BAG:
      return { ...state, users: usersAddedProduct, shoppingBagsUserLogin: shoppingBagsUserLogin, countPIB: countPIB };
    case Constant.UPDATE_ORDERS:
      const users = getUserUpdatedOrder(state, action);
      return { ...state, users: users };
    case Constant.UPDATE_WALLET:
      const usersWallet = getUsersUpdatedWallet(state, action);
      return { ...state, users: usersWallet };
    case Constant.LOGIN_USER:
      console.log('LOGIN_USER', action.payload.money);
      return { ...state, userLogin: action.payload };
    default:
      return state;
  }
};

export default userReducer;
