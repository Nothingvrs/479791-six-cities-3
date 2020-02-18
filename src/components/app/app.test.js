import renderer from 'react-test-renderer';
import React from 'react';
import App from './app';
import {mockCards} from '../../utils/test-mock.js';

it(`App successfully rendered`, () => {

  const tree = renderer.create(<App cards ={mockCards} onCardHover = {() => {}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
