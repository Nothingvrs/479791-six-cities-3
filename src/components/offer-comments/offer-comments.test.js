import renderer from 'react-test-renderer';
import React from 'react';
import OfferComments from "./offer-comments";
import {mockCards} from '../../utils/test-mock';

it(`OfferComments successfully rendered`, () => {
  const tree = renderer.create(<OfferComments comments={mockCards[0].comments} mark={4} />);
  expect(tree).toMatchSnapshot();
});
