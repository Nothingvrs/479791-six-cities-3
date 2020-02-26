import OfferCardDetails from './offer-card-details.jsx';
import React from 'react';
import {mockCards} from '../../utils/test-mock';
import Enzyme, {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {getCities, getOffersByCity} from '../../reducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

Enzyme.configure({adapter: new EnzymeReactAdapter()});

const initialState = {
  city: getCities(mockCards)[0],
  offers: getOffersByCity(mockCards, getCities(mockCards)[0]),
  citiesNames: getCities(mockCards)
};

const reducer = (state = initialState) => {
  return state;
};
const store = createStore(reducer);

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`OfferCardDetails successfully rendered`, () => {
  const mockHistory = {push: jest.fn};
  const mockMatch = {
    params: {
      id: 0
    }
  };
  const tree = mount(
      <Provider store={store}>
        <OfferCardDetails
          card={mockCards[0]}
          onHeaderClick={() => {}}
          history={mockHistory}
          match={mockMatch}
        />
      </Provider>
  );
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
