import * as renderer from 'react-test-renderer';
import * as React from 'react';
import OffersFilter from "./offers-filter";

it(`OffersFilter successfully rendered`, () => {
  const mockFunc = jest.fn();
  const tree = renderer.create(<OffersFilter onChangeFilter = {mockFunc} filter='popular' isOpen = {false} onFilterClick={mockFunc}/>);
  expect(tree).toMatchSnapshot();
});
