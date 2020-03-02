import Enzyme, {mount} from 'enzyme';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import OffersMap from "./offers-map";
import {mockCards} from "../../utils/test-mock";
import toJson from 'enzyme-to-json';
Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`OffersMap successfully rendered`, () => {

  const tree = mount(<OffersMap cards={mockCards} hoveredId = {-1}/>);
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
