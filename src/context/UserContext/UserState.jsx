import { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";

const tokenStorage = JSON.parse(localStorage.getItem("token"));

const initialState = {
  token: tokenStorage ? tokenStorage : null,
  user: null,
};
