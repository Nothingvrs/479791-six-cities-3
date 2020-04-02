import OfferCard from './offer-card';
import * as React from 'react';
import {getTestStore, mockCards} from '../../utils/test-mock';
import * as Enzyme from 'enzyme';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import * as EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`OfferCard successfully successfully rendered`, () => {
  const tree = mount(
      <Provider store={getTestStore()}>
        <BrowserRouter>
          <OfferCard card={mockCards[0]}/>
        </BrowserRouter>
      </Provider>
  );
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
