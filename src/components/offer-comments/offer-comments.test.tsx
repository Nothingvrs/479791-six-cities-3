import * as React from 'react';
import {getTestStore} from '../../utils/test-mock';
import * as Enzyme from 'enzyme';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import * as EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import OfferComments from './offer-comments';

import {mockComment} from '../../utils/test-mock';

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`OfferComments successfully rendered`, () => {
  const tree = mount(
    <Provider store={getTestStore()}>
      <OfferComments comments={[mockComment]} id={1} isAuth={true}/>
    </Provider>
  );
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
