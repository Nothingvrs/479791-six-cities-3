import * as Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import * as EnzymeReactAdapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import {findByTestAtr} from '../../utils/test-mock';
import OffersFilter from './offers-filter';

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`Change filter click is working`, () => {
  const mockFunc = jest.fn();
  const onChangeFilter = jest.fn();
  const app = shallow(<OffersFilter onChangeFilter={onChangeFilter} filter='popular' onFilterOpen={mockFunc} isOpen={false} onActiveFilterSet={mockFunc}/>);
  const filters = findByTestAtr(app, `test-filter-click`);

  filters.forEach((filter) => filter.simulate(`click`));

  expect(onChangeFilter).toHaveBeenCalledTimes(4);
});
