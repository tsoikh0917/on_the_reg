import * as api from '../api/api'

export const getUserLoginStatusWithAuth = () => async (dispatch) => {
  try {
    // get the user login status...

    const auth = JSON.parse(localStorage.getItem("auth")) || null

    // dispatch the user to the store
    dispatch({ type: "GET_AUTH_STATUS", payload: auth });
  } catch (error) {
    console.log(error);
  }
}

export const userLoginWithAuth = (loginInfo) => async (dispatch) => {
  try {
    // By local storage
    const { username, password } = loginInfo;
    const returnData = {
      username: null,
      accessToken: null,
      role: null,
    }

    if (!username || !password) {
      dispatch({ type: 'ERROR', payload: {} })
      localStorage.setItem('auth', JSON.stringify(returnData))
      return
    }

    // 
    if (username === 'admin' && password === '123456') {
      const auth = {
        name: username,
        token: '',
        role: 'admin',
      }
      dispatch({ type: 'LOGIN', payload: auth})
      localStorage.setItem('auth', JSON.stringify(auth))

      return
    }

    if (username === 'student' && password === '123456') {
      const auth = {
        name: username,
        token: '',
        role: 'student',
      }
      dispatch({ type: 'LOGIN', payload: auth})
      localStorage.setItem('auth', JSON.stringify(auth))
      return
    }

    dispatch({ type: 'ERROR', payload: returnData })
    localStorage.setItem('auth', JSON.stringify(returnData))


    // By api
    // log in the user...
    // const { accessToken, role } = await api.authLogin(loginInfo).data;

    // todo: fetch the user info from the server

    // dispatch the user to the store
    // dispatch({
    //   type: "LOGIN",
    //   payload: {
    //     name: loginInfo.username,
    //     token: accessToken,
    //     role: role,
    //   },
    // });
    // dispatch({ type: "LOGIN", payload: data});
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
