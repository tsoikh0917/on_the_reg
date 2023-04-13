import * as api from "../api/api";

export const getUserLoginStatusWithAuth = () => async (dispatch) => {
  try {
    // get the user login status...

    const auth = localStorage.getItem("auth") || null
    // dispatch the user to the store
    dispatch({ type: "GET_AUTH_STATUS", payload: auth });
  } catch (error) {
    console.log(error);
  }
}

export const userLoginWithAuth = (loginInfo) => async (dispatch) => {
  try {
    // log in the user...
    const { accessToken, role } = await api.authLogin(loginInfo).data;

    // todo: fetch the user info from the server

    // dispatch the user to the store
    dispatch({
      type: "LOGIN",
      payload: {
        name: loginInfo.username,
        token: accessToken,
        role: role,
      },
    });
    dispatch({ type: "USER_LOGIN", payload: loginInfo.username });
  } catch (error) {
    console.log(error);
  }
};

export const userLogoutWithAuth = () => async (dispatch) => {
  try {
    // log out the user...
    await api.authLogout();

    // dispatch the user to the store
    dispatch({
      type: "LOGOUT",
      payload: {
        name: null,
        token: null,
        role: null,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const userRefreshWithAuth = () => async (dispatch) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const userRegisterWithAuth = (registerInfo) => async (dispatch) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
