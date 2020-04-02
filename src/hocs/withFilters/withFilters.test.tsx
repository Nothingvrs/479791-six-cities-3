import * as React from 'react';
import {shallow} from 'enzyme';
import withFilter from './withFilters';
import * as Enzyme from 'enzyme';
import * as EnzymeReactAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new EnzymeReactAdapter()});
const MockedComponent = jest.fn();
const WithFilterComponent = withFilter(MockedComponent);

it(`Should filter click`, () => {
  const wrapper = shallow(<WithFilterComponent filter="public" onChangeFilter={jest.fn} />);
  wrapper.props().onFilterClick();
  expect(wrapper.props().isOpen).toEqual(true);
});
