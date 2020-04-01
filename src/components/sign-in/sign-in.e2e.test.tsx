import * as React from 'react';
import {mockCards, mockCities, userData, logInMockData} from '../../utils/test-mock';
import * as Enzyme from 'enzyme';
import {mount} from 'enzyme';
import * as EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import SignIn from './sign-in';
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


it(`emailChange is working`, () => {
  const mockHistory = {push: jest.fn};
  const emailChangeHandler = jest.fn();
  const mockFunc = jest.fn();
  const app = mount(
    <Provider store={store}>
      <SignIn
        password={logInMockData.password}
        email={logInMockData.email}
        onEmailChange={emailChangeHandler}
        city={mockCities[0]}
        onFormSubmit={mockFunc}
        onPasswordChange={mockFunc}
        history={mockHistory}
      />
    </Provider>
  );
  const emailField = findByTestAtr(app, `test-email-sign-in`);

  emailField.simulate(`change`);

  expect(emailChangeHandler).toHaveBeenCalledTimes(1);
});


it(`emailChange is working`, () => {
  const mockFunc = jest.fn();
  const mockHistory = {push: jest.fn};
  const passwordChangeHandler = jest.fn();
  const app = mount(
    <Provider store={store}>
      <SignIn
        password={logInMockData.password}
        email={logInMockData.email}
        onEmailChange={mockFunc}
        city={mockCities[0]}
        onFormSubmit={mockFunc}
        onPasswordChange={passwordChangeHandler}
        history={mockHistory}
      />
    </Provider>
  );
  const passwordField = findByTestAtr(app, `test-password-sign-in`);

  passwordField.simulate(`change`);

  expect(passwordChangeHandler).toHaveBeenCalledTimes(1);
});
