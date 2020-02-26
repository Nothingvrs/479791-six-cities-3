import React from 'react';
import Main from './main.jsx';
import {mockCards} from '../../utils/test-mock';
import Enzyme, {mount} from "enzyme";
import EnzymeReactAdapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import {getCities, getOffersByCity} from "../../reducer";
import {Provider} from 'react-redux';
import {createStore} from "redux";


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

it(`Main successfully rendered`, () => {
  const mockHistory = {push: jest.fn};
  const tree = mount(<Provider store={store}><Main cards ={mockCards} onHeaderClick = {() => {}} history={mockHistory}/></Provider>);
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
