import React from 'react';
import Main from './main';
import {mockCards} from '../../utils/test-mock';
import Enzyme, {mount} from "enzyme";
import EnzymeReactAdapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

Enzyme.configure({adapter: new EnzymeReactAdapter()});
it(`Main successfully rendered`, () => {
  const div = global.document.createElement(`div`);
  global.document.body.appendChild(div);
  const tree = mount(<Main cards ={mockCards} onCardHover = {() => {}} onHeaderClick = {() => {}} />, {attachTo: div});
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
