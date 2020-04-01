import * as Enzyme from 'enzyme';
import {mount} from 'enzyme';
import * as EnzymeReactAdapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import OffersMap from "./offers-map";
import {mockCards, mockCities} from "../../utils/test-mock";
import toJson from 'enzyme-to-json';
Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`OffersMap successfully rendered`, () => {

  const tree = mount(<OffersMap cards={mockCards} hoveredId = {-1} city={mockCities[0]}/>);
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
