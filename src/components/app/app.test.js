import renderer from 'react-test-renderer';
import React from 'react';
import App from "./app";
import {mockTestData} from "../../utils/test-mock";

it(`App successfully rendered`, () => {
  const tree = renderer.
  create(<App {...mockTestData}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
