import { ADD_RDV_SUCCESS, EDIT_RDV, GET_RDV,LOAD_RDV } from "../constante/rdv";
import {} from "../constante/user";

const initialState = {
  rdv: null,
  rdvs: null,
  loadrdv: false,
  errors: null,
};
export const rdvReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RDV:
      return { ...state, loadrdv: false, rdvs: payload };

    case ADD_RDV_SUCCESS:
      return { ...state, loadrdv: false, rdv: payload };
      case EDIT_RDV:
      return { ...state, loadrdv: false, rdv: payload };
      case LOAD_RDV:
      return { ...state, loadrdv: true };

    default:
      return state;
  }
};
