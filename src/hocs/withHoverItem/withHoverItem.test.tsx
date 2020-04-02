import * as React from 'react';
import {shallow} from 'enzyme';
import withFilter from './withHoverItem';
import * as Enzyme from 'enzyme';
import * as EnzymeReactAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new EnzymeReactAdapter()});
const MockedComponent = jest.fn();
const WithHoverComponent = withFilter(MockedComponent);


describe(`withFilter`, () => {
  const app = shallow(<WithHoverComponent />);
  it(`Should hover item`, () => {
    app.props().onHover();
    expect(app.props().hovered).toEqual(true);
  });

  it(`Should mouse leave item`, () => {
    app.props().onUnHover();
    expect(app.props().hovered).toEqual(false);
  });

});
