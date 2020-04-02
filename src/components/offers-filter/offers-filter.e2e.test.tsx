import * as Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import * as EnzymeReactAdapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import {findByTestAtr} from '../../utils/test-mock';
import OffersFilter from './offers-filter';

Enzyme.configure({adapter: new EnzymeReactAdapter()});

describe(`OfferFilter e2e`, () => {
  const onFilterClick = jest.fn();
  const onChangeFilter = jest.fn();
  const app = shallow(
    <OffersFilter
      onChangeFilter={onChangeFilter}
      filter="popular"
      onFilterClick={onFilterClick}
      isOpen={false}
    />
  );
  const filters = findByTestAtr(app, `test-filter-click`);

  it(`Change filter is working`, () => {
    filters.forEach((filter, index) => {
      if (index === 1) {
        filter.simulate(`click`);
      }
    });
    expect(onChangeFilter).toHaveBeenCalledTimes(1);
    expect(onChangeFilter).toHaveBeenCalledWith(`lowToHigh`);
  });

  it(`Filter click is working`, () => {
    filters.forEach((filter) => filter.simulate(`click`));
    expect(onFilterClick).toHaveBeenCalledTimes(5);
  });
});
