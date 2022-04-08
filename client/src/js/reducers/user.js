import {
  LOAD_USER,
  REGISTER_USER,
  LOGIN_USER,
  FAIL_USER,
  CURRENT_USER,
  LOGOUT_USER,
  GET_USERS,
  EDIT_USER,
  DELETE_USER,
} from "../constante/user";

const initialState = {
  user: null,
  users: null,
  loadUser: false,
  errors: null,
  isAuth: false,
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, loadUser: false, user: payload.user, isAuth: true };
    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      localStorage.setItem("isadmin", payload.user.isadmin);

      return { ...state, loadUser: false, user: payload.user, isAuth: true };
    case LOAD_USER:
      return { ...state, loadUser: true };
    case CURRENT_USER:
      return { ...state, loadUser: false, user: payload, isAuth: true };
    case GET_USERS:
      return { ...state, loadUser: false, isAuth: true, users: payload };
    case FAIL_USER:
      return { ...state, loadUser: false, errors: payload };
    case EDIT_USER:
      return { ...state, loadUser: false, errors: payload };
      case DELETE_USER:
        return { ...state, loadUser: false, errors: payload };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      localStorage.removeItem("isadmin");

      return { ...state, isAuth: false, user: null };
    default:
      return state;
  }
};
