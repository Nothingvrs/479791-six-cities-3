import renderer from 'react-test-renderer';
import React from 'react';
import SignIn from "./sign-in";
import {mockCities, logInMockData} from "../../utils/test-mock";

it(`SignIn successfully rendered`, () => {
  const tree = renderer.create(<SignIn password={logInMockData.password} email={logInMockData.email} onEmailChange={() => {}} city={mockCities[0]} onFormSubmit={() => {}} onPasswordChange={() => {}}/>);
  expect(tree).toMatchSnapshot();
});
