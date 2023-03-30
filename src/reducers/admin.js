import {
  ADD_PROJECT_FAIL,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
} from '../constants/admin';

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return {};
    case ADMIN_LOGIN_SUCCESS:
      return { userInfo: action.payload };
    case ADMIN_LOGIN_FAIL:
      return { error: action.payload };
    case ADMIN_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const addProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PROJECT_REQUEST:
      return {};
    case ADD_PROJECT_SUCCESS:
      return { projectListInfo: action.payload, status: true };
    case ADD_PROJECT_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
