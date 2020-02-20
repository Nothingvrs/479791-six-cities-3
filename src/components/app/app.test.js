import React from 'react';
import App from './app';
import {mockCards} from '../../utils/test-mock';
import Enzyme, {mount} from "enzyme";
import toJson from "enzyme-to-json";
import EnzymeReactAdapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new EnzymeReactAdapter()});
it(`App successfully rendered`, () => {
  const div = global.document.createElement(`div`);
  global.document.body.appendChild(div);
  const tree = mount(<App cards={mockCards} onCardHover={() => {}} />, {attachTo: div});
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
