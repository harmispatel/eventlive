import React, { createContext, useReducer } from "react";
import authReducer from "./reducer";
import ACTION from "./actions";
import Service from "./service";

const initialState = {
  loading: false,
  user: null,
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  function setLoading() {
    dispatch({ type: ACTION.SET_LOADING });
  }

  function resetLoading() {
    dispatch({ type: ACTION.RESET_LOADING });
  }

  async function me() {
    return Service.user().then((d) =>
      dispatch({ type: ACTION.USER_LOAD, body: d })
    );
  }

  function logout() {
    window.localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        setLoading,
        resetLoading,
        me,
        logout,
        removeToken: logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
