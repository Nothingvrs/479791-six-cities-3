import Enzyme, {mount} from 'enzyme';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import {findByTestAtr, mockCards, mockCities, userData} from '../../utils/test-mock';
import OfferCard from './offer-card.jsx';
import {getCities} from '../../utils/utils';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

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

it(`Card header click is working`, () => {
  const headerClickHandler = jest.fn();
  const app = mount(
      <Provider store={store}>
        <OfferCard card={mockCards[0]} onHeaderClick={headerClickHandler} />
      </Provider>
  );

  const cardHeader = findByTestAtr(app, `test-header-click`);
  const event = {
    preventDefault: () => {}
  };

  cardHeader.simulate(`click`, event);
  expect(headerClickHandler).toHaveBeenCalledTimes(1);
});
