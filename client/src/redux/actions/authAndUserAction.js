import * as api from '../api/api'

//get user login status with authenication
export const getUserLoginStatusWithAuth = () => async (dispatch) => {
  try {
    // get the user login status...
    const auth = JSON.parse(localStorage.getItem("auth")) || null
    const user = JSON.parse(localStorage.getItem("user")) || null

    // dispatch the user to the store
    dispatch({ type: "GET_AUTH_STATUS", payload: auth });
    dispatch({ type: "GET_USER_INFO", payload: user})
  } catch (error) {
    console.log(error);
  }
}

// user login with authenication
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

  } catch (error) { // if error
    if (error.status === 401) {
      dispatch({ type: "ERROR", payload: {} });
      localStorage.setItem("auth", JSON.stringify({}));
    }
  }
};

// user logout with authenication
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
    localStorage.setItem("auth", JSON.stringify({}));
    dispatch({ type: "USER_LOGOUT", payload: {} });
    localStorage.setItem("user", JSON.stringify({}));
    
  } catch (error) {
  }
};

// user refresh with authenication
export const userRefreshWithAuth = () => async (dispatch) => {
  try {
  } catch (error) {
  }
};

// user register with authenication
export const userRegisterWithAuth = (registerInfo) => async (dispatch) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const register = (user) => async (dispatch) => {
  try {
    const { data } = await api.authRegister(user);
    console.log(data);
    dispatch({ type: 'REGISTER', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}