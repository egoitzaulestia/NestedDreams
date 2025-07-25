import { useReducer, useCallback } from "react";
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

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const login = async (user) => {
    const res = await axios.post(`${API_URL}/users/login`, user);
    if (!res.data.token) {
      throw new Error(res.data.message || "Login failed");
    }
    dispatch({
      type: "LOGIN",
      payload: res.data,
    });

    if (res.data.token) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
    }

    const profile = await axios.get(`${API_URL}/users/info`, {
      headers: {
        authorization: res.data.token,
      },
    });
    dispatch({
      type: "GET_USER_INFO",
      payload: profile.data,
    });
  };

  const getUserInfo = useCallback(async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) return;

    const res = await axios.get(`${API_URL}/users/info`, {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: "GET_USER_INFO",
      payload: res.data,
    });
    return res;
  }, []);

  const logout = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.delete(`${API_URL}/users/logout`, {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: "LOGOUT",
      payload: res.data,
    });

    if (res.data) {
      localStorage.removeItem("token");
    }
  };

  const register = async (userData) => {
    const res = await axios.post(`${API_URL}/users`, userData);

    return res.data;
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        login,
        register,
        getUserInfo,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
