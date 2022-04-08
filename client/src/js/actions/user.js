import {
  LOAD_USER,
  REGISTER_USER,
  LOGIN_USER,
  FAIL_USER,
  LOGOUT_USER,
  CURRENT_USER,
  GET_USERS,
  EDIT_USER,
  DELETE_USER
} from "../constante/user";
import axios from "axios";

export const registerUser = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const result = await axios.post("/user/register", user);
    dispatch({ type: REGISTER_USER, payload: result.data });
    navigate("/dashbord");
  } catch (error) {
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    // console.dir(error);
    //dispatch({type:FAIL_USER,payload:error.response.data});
  }
};

export const loginUser = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const result = await axios.post("/user/login", user);
    dispatch({ type: LOGIN_USER, payload: result.data });
    if (localStorage.getItem("isadmin") == "true") {
      navigate("/dashbord");
    } else {
      navigate("/profile");
    }
  } catch (error) {
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    if (msg) {
      alert(msg);
    }
    // dispatch({type:FAIL_USER,payload:error.response.data});
  }
};

export const current = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  const options = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  try {
    let result = await axios.get("/user/current", options);
    //user
    dispatch({ type: CURRENT_USER, payload: result.data.user });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};
export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const getallUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS });
  try {
    const result = await axios.get("/user/users");
    dispatch({ type: GET_USERS, payload: result.data.users });
  } catch (error) {
    const { errors } = error.response.data;
    console.log(errors);
    // dispatch({type:FAIL_USER,payload:error.response.data});
  }
};
export const edituser =
  ({ id, user }) =>
  async (dispatch) => {
    dispatch({ type: EDIT_USER });
    console.log(user);
    try {
      const result = await axios.put(`/user/${id}`, user);
      dispatch({ type: LOAD_USER, payload: result });
    } catch (error) {
      const { errors } = error.response.data;
      console.log(errors);
      // dispatch({type:FAIL_USER,payload:error.response.data});
    }
  };
   export const deleteuser = ({id}) => async (dispatch) => {
     try {
       let result = await axios.delete(`/user/${id}`);
       dispatch({ type: DELETE_USER })
       dispatch(getallUsers())
    } catch (error) {
      dispatch({ type:FAIL_USER, payload: error.data })
    }
   }
