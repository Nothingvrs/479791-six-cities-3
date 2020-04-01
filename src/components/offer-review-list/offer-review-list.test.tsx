import * as renderer from 'react-test-renderer';
import * as React from 'react';
import {mockComment} from '../../utils/test-mock';
import OfferReviewList from "./offer-review-list";

it(`Card Details successfully rendered`, () => {
  const tree = renderer.create(<OfferReviewList comments = {[mockComment]}/>);
  expect(tree).toMatchSnapshot();
});

