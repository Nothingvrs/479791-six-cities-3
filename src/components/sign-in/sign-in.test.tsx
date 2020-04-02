import * as React from 'react';
import {mockCards, mockCities, userData, logInMockData} from '../../utils/test-mock';
import * as Enzyme from 'enzyme';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import * as EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import SignIn from './sign-in';
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

it(`SignIn successfully rendered`, () => {
  const mockFunc = jest.fn();
  const mockHistory = {push: jest.fn};
  const tree = mount(
      <Provider store={store}>
        <SignIn
          password={logInMockData.password}
          email={logInMockData.email}
          onEmailChange={mockFunc}
          city={mockCities[0]}
          onFormSubmit={mockFunc}
          onPasswordChange={mockFunc}
          history={mockHistory}
        />
      </Provider>
  );
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
