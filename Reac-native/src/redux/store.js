import { createStore, combineReducers } from 'redux';
// Import các reducer
import userReducer from './reducers/userReducer';
import userLoginReducer from './reducers/userLoginReducer';
import productReducer from './reducers/productReducer';
import RatingReducer from './reducers/RatingReducer';
import navigationReducer from './reducers/navigationReducer';
import { apiGetReducer } from './reducers/apiGetReducer';
import { postReducer } from './reducers/postReducer';
import { connectSocketIOReducer } from './reducers/connectSocketIOReducer';
import middleware from './middleware/middleware';
// Tạo reducer tổng
const rootReducer = combineReducers({
  users: userReducer,
  userLogin: userLoginReducer,
  products: productReducer,
  ratings: RatingReducer,
  navigation: navigationReducer,
  apiGetReducer: apiGetReducer,
  postReducer: postReducer,
  socketIO: connectSocketIOReducer,

  //các reduecer khác nếu có
});
//Tạo store cho redux
const store = createStore(rootReducer, middleware);
export default store;

//Sau đó kết nối với ứng dụng bằng cách thêm store vào App.js
