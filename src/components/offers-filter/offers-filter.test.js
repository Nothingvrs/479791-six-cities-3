import renderer from 'react-test-renderer';
import React from 'react';
import OffersFilter from "./offers-filter";

it(`WelcomeScreen successfully rendered`, () => {
  const tree = renderer.create(<OffersFilter onChangeFilter = {() => {}} onFilterReset = {() => {}} city='Amsterdam' filter='popular'/>);
  expect(tree).toMatchSnapshot();
});
