import * as React from 'react';
import {getTestStore} from '../../utils/test-mock';
import * as Enzyme from 'enzyme';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import * as EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import OffersFavorites from './offer-favorites';

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`OfferCardDetails successfully rendered`, () => {
  const mockHistory = {push: jest.fn};
  const mockMatch = {
    params: {
      id: 0
    }
  };
  const tree = mount(
    <Provider store={getTestStore()}>
      <BrowserRouter>
        <OffersFavorites history={mockHistory} match={mockMatch} />
      </BrowserRouter>
    </Provider>
  );
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});

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
