import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import {mockTestData} from '../../utils/test-mock';

it(`Main successfully rendered `, () => {
  const tree = renderer.create(<Main {...mockTestData} />);
  expect(tree).toMatchSnapshot();
});
