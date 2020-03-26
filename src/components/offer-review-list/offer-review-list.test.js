import renderer from 'react-test-renderer';
import React from 'react';
import {mockComment} from '../../utils/test-mock';
import OfferReviewList from "./offer-review-list.jsx";

it(`Card Details successfully rendered`, () => {
  const tree = renderer.create(<OfferReviewList comments = {[mockComment]}/>);
  expect(tree).toMatchSnapshot();
});

