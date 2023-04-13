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

    // By api
    // log in the user...
    const { data } = await api.authLogin(loginInfo);
    console.log(data);

    // todo: fetch the user info from the server
    const authInfo = {
      name: username,
      token: data.accessToken,
      role: data.role,
    }
    // dispatch the user to the store
    dispatch({
      type: "LOGIN",
      payload: authInfo,
    });
    localStorage.setItem("auth", JSON.stringify(authInfo));

    // dispatch user info
    const userInfo = data.role === "admin" 
                     ?
                     //  admin info
                     {
                        name: data.name,
                        email: data.email,
                        gender: data.gender,
                        userID: data.userID,
                        username: username,

                     } :
                      // student info
                      {
                        userID: data.userID, 
                        major: data.major, 
                        name: data.name, 
                        email: data.email,
                        gender: data.gender,
                        yearOfStudy: data.yearOfStudy,
                        emergencyContact: data.emergencyContact,
                        username: username,
                      }

    dispatch({ type: "USER_LOGIN", payload: userInfo});
    localStorage.setItem("user", JSON.stringify(userInfo));



    // By local storage
    // if (!username || !password) {
    //   dispatch({ type: 'ERROR', payload: {} })
    //   localStorage.setItem('auth', JSON.stringify(returnData))
    //   return
    // }

    // // 
    // if (username === 'admin' && password === '123456') {
    //   const auth = {
    //     name: username,
    //     token: '',
    //     role: 'admin',
    //   }
    //   dispatch({ type: 'LOGIN', payload: auth})
    //   localStorage.setItem('auth', JSON.stringify(auth))

    //   return
    // }

    // if (username === 'student' && password === '123456') {
    //   const auth = {
    //     name: username,
    //     token: '',
    //     role: 'student',
    //   }
    //   dispatch({ type: 'LOGIN', payload: auth})
    //   localStorage.setItem('auth', JSON.stringify(auth))
    //   return
    // }

    // dispatch({ type: 'ERROR', payload: returnData })
    // localStorage.setItem('auth', JSON.stringify(returnData))

  } catch (error) {
    if (error.status === 401) {
      dispatch({ type: "ERROR", payload: {} });
      localStorage.setItem("auth", JSON.stringify({}));
    }
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
  }
};

export const userRefreshWithAuth = () => async (dispatch) => {
  try {
  } catch (error) {
  }
};

export const userRegisterWithAuth = (registerInfo) => async (dispatch) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
