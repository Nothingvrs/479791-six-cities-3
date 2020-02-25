import renderer from 'react-test-renderer';
import React from 'react';
import {mockCards} from '../../utils/test-mock';
import OfferReview from "./offer-review";

it(`Card Details successfully rendered`, () => {
  const tree = renderer.create(<OfferReview {...mockCards[0].comments[0]}/>);
  expect(tree).toMatchSnapshot();
});
