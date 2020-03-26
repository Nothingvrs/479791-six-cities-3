import React from 'react';
import {mockCards, mockCities, userData, logInMockData} from '../../utils/test-mock';
import Enzyme, {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {getCities} from '../../reducer/data/data-reducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import SignIn from './sign-in';

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
  const mockHistory = {push: jest.fn};
  const tree = mount(
      <Provider store={store}>
        <SignIn
          password={logInMockData.password}
          email={logInMockData.email}
          onEmailChange={() => {}}
          city={mockCities[0]}
          onFormSubmit={() => {}}
          onPasswordChange={() => {}}
          history={mockHistory}
        />
      </Provider>
  );
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});

