import Enzyme, {shallow} from 'enzyme';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import {findByTestAtr} from '../../utils/test-mock';
import {mockCities, logInMockData} from '../../utils/test-mock';
import SignIn from "./sign-in";

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`City click is working`, () => {
  const onFormSubmit = jest.fn();
  const app = shallow(<SignIn SignIn password={logInMockData.password} email={logInMockData.email} onEmailChange={() => {}} city={mockCities[0]} onFormSubmit={onFormSubmit} onPasswordChange={() => {}} />);
  const singInForm = findByTestAtr(app, `test-onSubmit-sign-in`);

  singInForm.simulate(`submit`);

  expect(onFormSubmit).toHaveBeenCalledTimes(1);
});
