import * as API from '../../common/APIActionType';
//Tạo sate ban đầu
const initState = {
  data: [],
  singleUser: {},
  loading: false,
  error: null,
  type: null,
  status: null,
  code: null,
};
export const apiGetReducer = (state = initState, action) => {
  switch (action.type) {
    case API.FETCH_GET_LIST_USERS_REQUEST:
      return { ...state, loading: true };
    case API.FETCH_GET_LIST_USERS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        singleUser: {},
        error: null,
        type: action.type,
        status: action.payload.status,
        code: null,
      };
    case API.FETCH_GET_LIST_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        singleUser: {},
        data: [],
        type: action.type,
        status: action.payload.status,
        code: action.payload.code,
      };
    case API.FETCH_GET_SINGLE_USER_REQUEST:
      return { ...state, loading: true };
    case API.FETCH_GET_SINGLE_USER_SUCCESS:
      return {
        ...state,
        data: [],
        singleUser: action.payload.data,
        loading: false,
        error: null,
        type: action.type,
        status: action.payload.status,
        code: null,
      };
    case API.FETCH_GET_SINGLE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        singleUser: {},
        data: [],
        type: action.type,
        status: action.payload.status,
        code: action.payload.code,
      };
    case API.FETCH_GET_SINGLE_USER_NOT_FOUND_REQUEST:
      return { ...state, loading: true };
    case API.FETCH_GET_SINGLE_USER_NOT_FOUND_SUCCESS:
      return {
        ...state,
        data: [],
        singleUser: action.payload.data,
        loading: false,
        error: null,
        type: action.type,
        status: action.payload.status,
        code: null,
      };
    case API.FETCH_GET_SINGLE_USER_NOT_FOUND_FAILURE:
      return {
        ...state,
        data: [],
        singleUser: {},
        loading: false,
        error: action.payload,
        type: action.type,
        status: null,
        code: null,
      };
    case API.FETCH_GET_LIST_RESOURCE_REQUEST:
      return { ...state, loading: true };
    case API.FETCH_GET_LIST_RESOURCE_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        singleUser: {},
        loading: false,
        error: null,
        type: action.type,
        status: action.payload.status,
        code: null,
      };
    case API.FETCH_GET_LIST_RESOURCE_FAILURE:
      return {
        ...state,
        data: [],
        singleUser: {},
        loading: false,
        error: action.payload,
        type: action.type,
        status: null,
        code: null,
      };
    case API.FETCH_GET_SINGLE_RESOURCE_REQUEST:
      return { ...state, loading: true };
    case API.FETCH_GET_SINGLE_RESOURCE_SUCCESS:
      return {
        ...state,
        data: [],
        singleUser: action.payload.data,
        loading: false,
        error: null,
        type: action.type,
        status: action.payload.status,
        code: null,
      };
    case API.FETCH_GET_SINGLE_RESOURCE_FAILURE:
      return {
        ...state,
        data: [],
        singleUser: {},
        loading: false,
        error: action.payload,
        type: action.type,
        status: null,
        code: null,
      };
    case API.FETCH_GET_SINGLE_RESOURCE_NOTFOUND_REQUEST:
      return { ...state, loading: true };
    case API.FETCH_GET_SINGLE_RESOURCE_NOTFOUND_SUCCESS:
      return {
        ...state,
        data: [],
        singleUser: action.payload.data,
        loading: false,
        error: null,
        type: action.type,
        status: action.payload.status,
        code: null,
      };
    case API.FETCH_GET_SINGLE_RESOURCE_NOTFOUND_FAILURE:
      return {
        ...state,
        data: [],
        singleUser: {},
        loading: false,
        error: action.payload,
        type: action.type,
        status: null,
        code: null,
      };
    case API.FETCH_GET_DELAYED_RESPONSE_REQUEST:
      return { ...state, loading: true };
    case API.FETCH_GET_DELAYED_RESPONSE_SUCCESS:
      return {
        ...state,
        data: [],
        singleUser: action.payload.data,
        loading: false,
        error: null,
        type: action.type,
        status: action.payload.status,
        code: null,
      };
    case API.FETCH_GET_DELAYED_RESPONSE_FAILURE:
      return {
        ...state,
        data: [],
        singleUser: {},
        loading: false,
        error: action.payload,
        type: action.type,
        status: null,
        code: null,
      };
    default:
      return state;
  }
};
//Sau đó tạo middleware sử dụng redux thunk
