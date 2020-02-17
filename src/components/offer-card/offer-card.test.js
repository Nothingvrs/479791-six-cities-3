import renderer from 'react-test-renderer';
import React from 'react';
import OfferCard from "./offer-card";
import {mockCards} from '../../utils/test-mock.js';

it(`Card successfully rendered`, () => {
  const tree = renderer.create(<OfferCard card={mockCards[0]} onCardHover = {() => {}}/>);
  expect(tree).toMatchSnapshot();
});
