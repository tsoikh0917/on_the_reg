import * as api from '../api'


export const userLoginWithAuth = (loginInfo) => async (dispatch) => {
    try {
        // log in the user...
        const { accessToken, role } = await api.authLogin(loginInfo).data

        // dispatch the user to the store
        dispatch({ 
          type: 'LOGIN', 
          payload: { 
            "name": loginInfo.username,
            "token": accessToken,
            "role": role
          }
        });
    } catch (error) {
        console.log(error);
    }
}

export const userLogoutWithAuth = () => async (dispatch) => {
    try {
        // log out the user...
        await api.authLogout()

        // dispatch the user to the store
        dispatch({ 
          type: 'LOGOUT', 
          payload: { 
            "name": null,
            "token": null,
            "role": null
          }
        });
    } catch (error) {
        console.log(error);
    }
}

export const userRefreshWithAuth = () => async (dispatch) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
}

export const userRegisterWithAuth = (registerInfo) => async (dispatch) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
}