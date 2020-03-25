import React from 'react';
import App from './app.jsx';
import {mockCards} from '../../utils/test-mock';
import Enzyme, {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {getCities} from "../../reducer/reducer";
import {createStore} from "redux";
Enzyme.configure({adapter: new EnzymeReactAdapter()});
import {Provider} from 'react-redux';

const initialState = {
  city: getCities(mockCards)[0],
  offers: mockCards,
  citiesNames: getCities(mockCards),
  hoveredId: -1,
  filterName: `popular`
};
const reducer = (state = initialState) => {
  return state;
};

const store = createStore(reducer);

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`App successfully rendered`, () => {
  const tree = mount(<Provider store={store}><App cards={mockCards} /></Provider>);
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
