import OfferCardDetails from './offer-card-details.jsx';
import React from 'react';
import {mockCards} from '../../utils/test-mock';
import Enzyme, {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`OfferCardDetails successfully rendered`, () => {
  const mockHistory = {push: jest.fn};
  const mockMatch = {
    params: {
      id: 0
    }
  };
  const tree = mount(
      <OfferCardDetails
        cards={mockCards}
        onHeaderClick={() => {}}
        history={mockHistory}
        match={mockMatch}
      />
  );
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
