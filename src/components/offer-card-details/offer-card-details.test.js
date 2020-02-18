import renderer from 'react-test-renderer';
import React from 'react';
import {mockCards} from '../../utils/test-mock';
import OfferCardDetails from "./offer-card-details";

it(`Card Details successfully rendered`, () => {
  const tree = renderer.create(<OfferCardDetails card={mockCards[0]} onHeaderClick = {() => {}}/>);
  expect(tree).toMatchSnapshot();
});
