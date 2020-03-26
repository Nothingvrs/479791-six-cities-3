import renderer from 'react-test-renderer';
import React from 'react';
import {mockComment, userData} from '../../utils/test-mock';
import OfferReview from "./offer-review.jsx";

it(`Card Details successfully rendered`, () => {
  const tree = renderer.create(<OfferReview {...mockComment} user={userData}/>);
  expect(tree).toMatchSnapshot();
});
