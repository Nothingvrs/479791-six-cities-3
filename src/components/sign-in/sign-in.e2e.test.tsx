import * as React from 'react';
import {mockCards, mockCities, userData, logInMockData} from '../../utils/test-mock';
import * as Enzyme from 'enzyme';
import {mount} from 'enzyme';
import * as EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {SignIn} from './sign-in';
import {findByTestAtr} from '../../utils/test-mock';
import {getCities} from "../../utils/utils";

Enzyme.configure({adapter: new EnzymeReactAdapter()});

const initialState = {
  data: {
    city: mockCities[0],
    offers: mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: -1,
    filterName: `popular`
  },
  user: {
    authorizationStatus: true,
    userData
  }
};

const reducer = (state = initialState) => {
  return state;
};
const store = createStore(reducer);

const mockHistory = {push: jest.fn};
/* eslint-disable  @typescript-eslint/no-explicit-any */
const routeComponentPropsMock = {
  history: mockHistory as any,
  location: {} as any,
  match: {} as any,
};

describe(`SignIn e2e`, () => {
  const passwordChangeHandler = jest.fn();
  const emailChangeHandler = jest.fn();
  const login = jest.fn();
  const app = mount(
      <Provider store={store}>
        <SignIn
          password={logInMockData.password}
          email={logInMockData.email}
          onEmailChange={emailChangeHandler}
          city={mockCities[0]}
          onPasswordChange={passwordChangeHandler}
          login={login}
          isAuth={true}
          error={``}
          {...routeComponentPropsMock}
        />
      </Provider>
  );

  it(`Email change is working correctly`, () => {
    const emailField = findByTestAtr(app, `test-email-sign-in`);
    emailField.simulate(`change`);
    expect(emailChangeHandler).toHaveBeenCalledTimes(1);
  });


  it(`Password change is working correctly`, () => {

    const passwordField = findByTestAtr(app, `test-password-sign-in`);
    passwordField.simulate(`change`);
    expect(passwordChangeHandler).toHaveBeenCalledTimes(1);
  });

  it(`Login is working correctly`, () => {

    const loginForm = findByTestAtr(app, `test-login-sign-in`);

    loginForm.simulate(`submit`);
    expect(login).toHaveBeenCalledTimes(1);
    expect(login).toHaveBeenCalledWith({email: logInMockData.email, password: logInMockData.password});
  });


});
