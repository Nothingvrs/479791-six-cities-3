import OfferCard from "./offer-card.jsx";
import React from 'react';
import {mockCards, mockCities, userData} from '../../utils/test-mock';
import Enzyme, {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {getCities} from '../../utils/utils';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

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

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`Card successfully successfully rendered`, () => {
  const tree = mount(
      <Provider store={store}>
        <OfferCard card={mockCards[0]} onHeaderClick = {() => {}}/>
      </Provider>
  );
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
