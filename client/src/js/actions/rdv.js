import {
  LOAD_RDV,
  GET_RDV,
  EDIT_RDV,
  DELETE_RDV,
  ADD_RDV,
  ADD_RDV_SUCCESS,
} from "../constante/rdv";
import axios from "axios";

export const getallrdv = () => async (dispatch) => {
  try {
    const result = await axios.get("/rdv/");
    dispatch({ type: GET_RDV, payload: result.data.rdvs });
  } catch (error) {
    const { errors } = error.response?.data;
    console.log(errors);
    // dispatch({type:FAIL_USER,payload:error.response.data});
  }
};
export const addrdv = (rdv) => async (dispatch) => {
  dispatch({ type: ADD_RDV });
  try {
    const result = await axios.post(`/rdv/`, rdv);
    dispatch({ type: ADD_RDV_SUCCESS, payload: result.data.result });
  } catch (error) {
    const { errors } = error.response.data;
    console.log(errors);
    // dispatch({type:FAIL_USER,payload:error.response.data});
  }
};

export const editrdv =
  ({ id, status }) =>
  async (dispatch) => {
    dispatch({ type: EDIT_RDV });
    // console.log(rdv);
    try {
      const result = await axios.put(`/rdv/${id}`, { status });
      dispatch({ type: EDIT_RDV, payload: result });
    } catch (error) {
      const { errors } = error.response.data;
      console.log(errors);
      // dispatch({type:FAIL_USER,payload:error.response.data});
    }
  };
