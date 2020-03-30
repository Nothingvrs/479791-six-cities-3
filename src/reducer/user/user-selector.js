import {Authorization} from "./user-reducer";

export const getUserData = (state) => {
  if (state.user) {
    return state.user.userData;
  }
  return null;
};
export const getAuthStatus = (state) => state.user.authorizationStatus;

export const getIsAuth = (state) => getAuthStatus(state) === Authorization.AUTH;

export const getErrorMsg = (state) => state.user.errorMsg;

export const isAuthResponseReceived = (state) => state.user.isResponseReceived;
