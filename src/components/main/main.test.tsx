import * as React from 'react';
import Main from './main';
import {mockCards, getTestStore} from '../../utils/test-mock';
import * as Enzyme from "enzyme";
import {mount} from "enzyme";
import * as EnzymeReactAdapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";

Enzyme.configure({adapter: new EnzymeReactAdapter()});

const mockLocation = {
  location: {
    search: ``,
    pathname: ``
  }
};

it(`Main successfully rendered`, () => {
  const mockFunc = jest.fn();
  const tree = mount(<Provider store={getTestStore()}><BrowserRouter><Main cards = {mockCards} onHeaderClick = {mockFunc} location = {mockLocation}/></BrowserRouter></Provider>);
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
