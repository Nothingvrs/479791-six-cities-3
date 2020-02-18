import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import {mockCards} from '../../utils/test-mock.js';

it(`Main successfully rendered `, () => {
  const tree = renderer.create(<Main cards ={mockCards} onCardHover = {() => {}} onHeaderClick = {() => {}}/>);
  expect(tree).toMatchSnapshot();
});
