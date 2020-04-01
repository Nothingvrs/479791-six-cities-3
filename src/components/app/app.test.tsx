import * as React from 'react';
import App from './app';
import {getTestStore} from '../../utils/tests-utils';
import * as Enzyme from 'enzyme';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import * as EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';


Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`App successfully rendered`, () => {
  const tree = mount(<Provider store={getTestStore()}><App/></Provider>);
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
