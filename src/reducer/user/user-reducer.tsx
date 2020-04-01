import {userAdapter} from '../../utils/utils';

export const Action = {AUTH_USER: `auth-user`, SET_ERR_MSG: `set-error-message`};

const UNAUTHORIZED = 401;
const BAD_REQUEST = 400;
export const Authorization = {
  NO_AUTH: `no-auth`,
  AUTH: `auth`
};

export const UserOperation = {
  authUser() {
    return (dispatch, state, api) => {
      api
        .get(`/login`)
        .then((response) => {
          dispatch(UserActionCreator.setAuthStatus(Authorization.AUTH, userAdapter(response.data)));
        })
        .catch((err) => {
          if (err.response.status === UNAUTHORIZED) {
            dispatch(UserActionCreator.setAuthStatus(Authorization.NO_AUTH, ``));
          }
        });
    };
  },
  loginUser(userData) {
    return (dispatch, state, api) => {
      api
        .post(`/login`, userData)
        .then((response) => {
          dispatch(UserActionCreator.setAuthStatus(Authorization.AUTH, userAdapter(response.data)));
        })
        .catch((err) => {
          if (err.response.status === BAD_REQUEST) {
            dispatch(UserActionCreator.setErrorMessage(`Please Check the data`));
          }
          dispatch(UserActionCreator.setErrorMessage(`Something went wrong...`));
        });
    };
  },

};

export const UserActionCreator = {
  setAuthStatus(authStatus, userData) {
    return {
      type: Action.AUTH_USER,
      payload: {authStatus, userData}
    };
  },
  setErrorMessage(message) {
    return {
      type: Action.SET_ERR_MSG,
      payload: message
    };
  }
};

const initialState = {
  authorizationStatus: Authorization.NO_AUTH
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.AUTH_USER:
      return Object.assign({}, state, {
        authorizationStatus: action.payload.authStatus,
        userData: action.payload.userData,
        isResponseReceived: true
      });
    case Action.SET_ERR_MSG:
      return Object.assign({}, state, {errorMsg: action.payload});

  }
  return state;
};
