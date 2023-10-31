import * as Constant from '../../common/Constant';

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
      money: 10000000000000,
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
      money: 99999999999999,
      avatar: require('../../assets/images/tx2.jpg'),
      shoppingBags: [],
      countProductInBag: 0,
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
      money: 898999999,
      avatar: require('../../assets/images/tx3.jpg'),
      shoppingBags: [],
      countProductInBag: 0,
    },
  ],
  shoppingBagsUserLogin: [],
};
function GetUsersAddedProduct(state, action) {
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
}

const userReducer = (state = initStateUsers, action) => {
  if (Constant.USER_ACTION.includes(action.type)) {
    const { usersAddedProduct, shoppingBagsUserLogin, countPIB } = GetUsersAddedProduct(state, action);
    switch (action.type) {
      case Constant.ADD_PRODUCT_BAG:
        return { ...state, users: usersAddedProduct, shoppingBagsUserLogin: shoppingBagsUserLogin, countPIB: countPIB };
      case Constant.ADD_QTY_TO_BAG:
        return { ...state, users: usersAddedProduct, shoppingBagsUserLogin: shoppingBagsUserLogin, countPIB: countPIB };
      default:
        return state;
    }
  } else {
    return state;
  }
};

export default userReducer;
