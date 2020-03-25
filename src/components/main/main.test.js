import React from 'react';
import Main from './main.jsx';
import {mockCards} from '../../utils/test-mock';
import Enzyme, {mount} from "enzyme";
import EnzymeReactAdapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import {getCities} from "../../reducer/reducer";
import {Provider} from 'react-redux';
import {createStore} from "redux";
import {BrowserRouter} from "react-router-dom";


Enzyme.configure({adapter: new EnzymeReactAdapter()});

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

const mockLocation = {
  location: {
    search: ``,
    pathname: ``
  }
};

it(`Main successfully rendered`, () => {
  const tree = mount(<Provider store={store}><BrowserRouter><Main cards = {mockCards} onHeaderClick = {() => {}} location = {mockLocation}/></BrowserRouter></Provider>);
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});

