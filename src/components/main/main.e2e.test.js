import Enzyme, {shallow} from 'enzyme';
import EzymeReactAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import {mockTestData} from '../../utils/test-mock';
import Main from './main';

Enzyme.configure({adapter: new EzymeReactAdapter()});

it(`Card header click is working`, () => {
  const clickHandler = jest.fn();

  const main = shallow(<Main {...mockTestData} onHeaderClick={clickHandler} />);

  const findByHeader = (component, header) => {
    return component.find(`[data-test='${header}']`);
  };

  const headers = findByHeader(main, `test-header`);

  headers.forEach((header) => header.simulate(`click`));

  expect(clickHandler).toHaveBeenCalledTimes(mockTestData.PLACES.length);
});
