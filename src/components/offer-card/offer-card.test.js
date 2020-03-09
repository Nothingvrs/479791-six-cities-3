import renderer from 'react-test-renderer';
import React from 'react';
import OfferCard from "./offer-card";
import {mockCards} from '../../utils/test-mock';

it(`Card successfully rendered`, () => {
  const tree = renderer.create(<OfferCard card={mockCards[0]} onHover = {() => {}} onUnHover = {() => {}} onHeaderClick = {() => {}}/>);
  expect(tree).toMatchSnapshot();
});
