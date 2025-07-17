// import { createContext, useReducer } from "react";
import { useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";
import { UserContext } from "./UserContext";

const tokenStorage = JSON.parse(localStorage.getItem("token"));
const userStorage = JSON.parse(localStorage.getItem("user"));

const initialState = {
  token: tokenStorage || null,
  user: userStorage || null,
};

const API_URL = "http://localhost:3000";

// export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const login = async (user) => {
    const res = await axios.post(`${API_URL}/users/login`, user);
    dispatch({
      type: "LOGIN",
      payload: res.data,
    });

    if (res.data.token) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
    }
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
