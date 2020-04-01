import * as renderer from 'react-test-renderer';
import * as React from 'react';
import MainEmpty from "./main-empty";

it(`MainEmpty successfully rendered`, () => {
  const tree = renderer.create(<MainEmpty/>);
  expect(tree).toMatchSnapshot();
});
