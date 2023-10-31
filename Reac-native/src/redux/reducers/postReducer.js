import * as API from '../../common/APIActionType';
const initState = {
  loadingPost: false,
  userCreate: null,
  errorCreate: null,
  statusPost: null,
  codePost: null,
  type: null,
};

export const postReducer = (state = initState, action) => {
  switch (action.type) {
    case API.FETCH_POST_CREATE_REQUEST:
      return { ...state, loadingPost: true };
    case API.FETCH_POST_CREATE_SUCCESS:
      return {
        ...state,
        loadingPost: false,
        userCreate: action.payload.data,
        errorCreate: null,
        statusPost: action.payload.status,
        codePost: null,
        type: action.type,
      };
    case API.FETCH_POST_CREATE_FAILURE:
      return {
        ...state,
        loadingPost: false,
        userCreate: null,
        errorCreate: action.payload,
        statusPost: null,
        codePost: null,
        type: action.type,
      };
    case API.FETCH_PUT_UPDATE_REQUEST:
      return { ...state, loadingPost: true };
    case API.FETCH_PUT_UPDATE_SUCCESS:
      return {
        ...state,
        loadingPost: false,
        userCreate: action.payload.data,
        errorCreate: null,
        statusPost: action.payload.status,
        codePost: null,
        type: action.type,
      };
    case API.FETCH_PUT_UPDATE_FAILURE:
      return {
        ...state,
        loadingPost: false,
        userCreate: null,
        errorCreate: action.payload,
        statusPost: null,
        codePost: null,
        type: action.type,
      };
    case API.FETCH_PATCH_UPDATE_REQUEST:
      return { ...state, loadingPost: true };
    case API.FETCH_PATCH_UPDATE_SUCCESS:
      return {
        ...state,
        loadingPost: false,
        userCreate: action.payload.data,
        errorCreate: null,
        statusPost: action.payload.status,
        codePost: null,
        type: action.type,
      };
    case API.FETCH_PATCH_UPDATE_FAILURE:
      return {
        ...state,
        loadingPost: false,
        userCreate: null,
        errorCreate: action.payload,
        statusPost: null,
        codePost: null,
        type: action.type,
      };
    case API.FETCH_DELETE_DELETE_REQUEST:
      return { ...state, loadingPost: true };
    case API.FETCH_DELETE_DELETE_SUCCESS:
      return {
        ...state,
        loadingPost: false,
        userCreate: action.payload.data,
        errorCreate: null,
        statusPost: action.payload.status,
        codePost: null,
        type: action.type,
      };
    case API.FETCH_DELETE_DELETE_FAILURE:
      return {
        ...state,
        loadingPost: false,
        userCreate: null,
        errorCreate: action.payload,
        statusPost: null,
        codePost: null,
        type: action.type,
      };
    case API.FETCH_REGISTER_SUCCESSFUL_REQUEST:
      return { ...state, loadingPost: true };
    case API.FETCH_REGISTER_SUCCESSFUL_SUCCESS:
      return {
        ...state,
        loadingPost: false,
        userCreate: action.payload.data,
        errorCreate: null,
        statusPost: action.payload.status,
        codePost: null,
        type: action.type,
      };
    case API.FETCH_REGISTER_SUCCESSFUL_FAILURE:
      return {
        ...state,
        loadingPost: false,
        userCreate: null,
        errorCreate: action.payload,
        statusPost: null,
        codePost: null,
        type: action.type,
      };
    case API.FETCH_REGISTER_UNSUCCESSFUL_REQUEST:
      return { ...state, loadingPost: true };
    case API.FETCH_REGISTER_UNSUCCESSFUL_SUCCESS:
      return {
        ...state,
        loadingPost: false,
        userCreate: action.payload.data,
        errorCreate: null,
        statusPost: action.payload.status,
        codePost: null,
        type: action.type,
      };
    case API.FETCH_REGISTER_UNSUCCESSFUL_FAILURE:
      return {
        ...state,
        loadingPost: false,
        userCreate: null,
        errorCreate: action.payload,
        statusPost: null,
        codePost: null,
        type: action.type,
      };
    case API.FETCH_POST_LOGIN_SUCCESSFUL_REQUEST:
      return { ...state, loadingPost: true };
    case API.FETCH_POST_LOGIN_SUCCESSFUL_SUCCESS:
      return {
        ...state,
        loadingPost: false,
        userCreate: action.payload.data,
        errorCreate: null,
        statusPost: action.payload.status,
        codePost: null,
        type: action.type,
      };
    case API.FETCH_POST_LOGIN_SUCCESSFUL_FAILURE:
      return {
        ...state,
        loadingPost: false,
        userCreate: null,
        errorCreate: action.payload,
        statusPost: null,
        codePost: null,
        type: action.type,
      };
    case API.FETCH_POST_LOGIN_UNSUCCESSFUL_REQUEST:
      return { ...state, loadingPost: true };
    case API.FETCH_POST_LOGIN_UNSUCCESSFUL_SUCCESS:
      return {
        ...state,
        loadingPost: false,
        userCreate: action.payload.data,
        errorCreate: null,
        statusPost: action.payload.status,
        codePost: null,
        type: action.type,
      };
    case API.FETCH_POST_LOGIN_UNSUCCESSFUL_FAILURE:
      return {
        ...state,
        loadingPost: false,
        userCreate: null,
        errorCreate: action.payload,
        statusPost: null,
        codePost: null,
        type: action.type,
      };

    default:
      return state;
  }
};
