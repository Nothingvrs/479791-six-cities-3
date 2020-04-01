import {userData} from "../../utils/test-mock";
import {Authorization, userReducer, Action} from "./user-reducer";

it(`Reducer setAuthStatus`, () => {
  expect(userReducer({
    authorizationStatus: Authorization.NO_AUTH
  }, {type: Action.AUTH_USER, payload: {authStatus: Authorization.AUTH, userData}})).toEqual({authorizationStatus: Authorization.AUTH, userData, isResponseReceived: true
  });
});

it(`Reducer setAuthStatus`, () => {
  expect(userReducer({
    authorizationStatus: Authorization.NO_AUTH
  }, {type: Action.SET_ERR_MSG, payload: `error`})).toEqual({authorizationStatus: Authorization.NO_AUTH, errorMsg: `error`});
});
