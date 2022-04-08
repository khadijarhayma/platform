import { combineReducers } from "redux";
import { userReducer } from "./user";
import { rdvReducer } from "./rdvReducer";

export const rootReducer = combineReducers({ userReducer, rdvReducer });
