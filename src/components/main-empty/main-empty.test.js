import renderer from 'react-test-renderer';
import React from 'react';
import MainEmpty from "./main-empty";

it(`MainEmpty successfully rendered`, () => {
  const tree = renderer.create(<MainEmpty/>);
  expect(tree).toMatchSnapshot();
});
