import Enzyme, {shallow} from 'enzyme';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import {findByTestAtr} from '../../utils/test-mock';
import OffersFilter from './offers-filter';

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`Change filter click is working`, () => {
  const onChangeFilter = jest.fn();
  const app = shallow(<OffersFilter onChangeFilter={onChangeFilter} onFilterReset={() => {}} filter = 'popular'/>);
  const filters = findByTestAtr(app, `test-filter-click`);

  filters.forEach((filter) => filter.simulate(`click`));


  expect(onChangeFilter).toHaveBeenCalledTimes(4);
});
