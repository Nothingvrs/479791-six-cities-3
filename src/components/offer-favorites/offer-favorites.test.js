import React from 'react';
import {mockCards, mockCities, userData} from '../../utils/test-mock';
import Enzyme, {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import {createApi} from '../../api';
import OffersFavorites from './offer-favorites.jsx';
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
  user: userData
};

const reducer = (state = initialState) => {
  return state;
};
const api = createApi();
const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(api)));

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
        <BrowserRouter>
          <OffersFavorites history={mockHistory} match={mockMatch} />
        </BrowserRouter>
      </Provider>
  );
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
